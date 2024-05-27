import { Button, Container, Grid, Stack, TextField } from '@mui/material'
import imgLogin from '../../assets/login.jpg'
import style from './login.module.scss'
import FogotPass from './fogotPass/FogotPass';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";
const Login = () => {
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
            <img src={imgLogin} width="70%" />
          </Stack>
        </Grid>
        <Grid item xs={4} style={{ display: 'flex', alignItems: 'center' }}>
          <Stack style={{ margin: '0 50px', width: '100%' }} gap={2}>
            <h2>Đăng nhập</h2>
            <TextField
              id="outlined-basic"
              label="Tên người dùng"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              label="Mật khẩu"
              variant="outlined"
            />
            <Button variant="contained">Đăng nhập</Button>
            <Link style={{ display: "flex", flexDirection: "row-reverse", textDecoration: "none", color: "grey", marginRight: "2px" }} to="/ForgotPass">Forgot Pass</Link>
          </Stack>
        </Grid>
      </Grid>
    </div>
  )
}

export default Login
