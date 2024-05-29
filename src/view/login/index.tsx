import { Button, Container, Grid, Stack, TextField } from '@mui/material'
import imgLogin from '../../assets/login.jpg'
import style from './login.module.scss'
import { useState } from 'react'
import { Link } from 'react-router-dom'
const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({ username: '', password: '' })

  const handleUsernameChange = (event: any) => {
    setUsername(event.target.value)
  }

  const handlePasswordChange = (event: any) => {
    setPassword(event.target.value)
  }

  const validate = () => {
    let valid = true
    let errors = { username: '', password: '' }

    if (!username) {
      errors.username = 'Tên người dùng là bắt buộc'
      valid = false
    }

    if (!password) {
      errors.password = 'Mật khẩu là bắt buộc'
      valid = false
    }

    setErrors(errors)
    return valid
  }

  const handleSubmit = (event: any) => {
    event.preventDefault()
    if (validate()) {
      // Handle successful login
      console.log('Form is valid')
    } else {
      console.log('Form is invalid')
    }
  }

  return (
    <div className={style.container}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <h1>Chào mừng bạn đến với học viện</h1>
            <img src={imgLogin} width="70%" alt="Login" />
          </Stack>
        </Grid>
        <Grid item xs={4} style={{ display: 'flex', alignItems: 'center' }}>
          <Stack style={{ margin: '0 50px', width: '100%' }} gap={2}>
            <h2>Đăng nhập</h2>
            <TextField
              required
              id="username"
              label="Tên người dùng"
              variant="outlined"
              value={username}
              onChange={handleUsernameChange}
              error={Boolean(errors.username)}
              helperText={errors.username}
            />
            <TextField
              required
              id="password"
              label="Mật khẩu"
              variant="outlined"
              type="password"
              value={password}
              onChange={handlePasswordChange}
              error={Boolean(errors.password)}
              helperText={errors.password}
            />
            <Link to='/ForgotPass' style={{ margin: '0', textAlign: 'right', cursor: 'pointer', textDecoration: "none" }}>
              Quên mật khẩu
            </Link>
            <Button variant="contained" onClick={handleSubmit}>
              Đăng nhập
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </div>
  )
}
export default Login
