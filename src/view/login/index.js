import { Button, Container, Grid, Stack, TextField } from '@mui/material'
import imgLogin from '../../assets/login.jpg'
import style from './login.module.scss'
import FogotPass from './fogotPass/FogotPass';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";
import { useState } from 'react';
import { render } from '@testing-library/react';


const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [err, setErr] = useState({})


  let getEmail = (e) => {
    setEmail(e.target.value);

  }
  let getPass = (e) => {
    setPassword(e.target.value);

  }

  let handleLogin = async (e) => {

    setErr(validation(email, password))
    console.log(email, password)

  }
  const validation = (email, password) => {
    const errmes = {};
    if (email === "") {
      errmes.email = "Email is required"
    }
    if (password === "") {
      errmes.password = "Pass is required"
    }


    return errmes

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

              onChange={getEmail}
            />
            <p style={{ margin: "0", fontSize: "12px", color: "red" }}>{err.email}</p>

            <TextField
              id="outlined-basic"
              label="Mật khẩu"
              variant="outlined"

              type='password'
              onChange={getPass}
            />
            <p style={{ margin: "0", fontSize: "12px", color: "red" }}>{err.password}</p>
            <Button onClick={handleLogin} variant="contained">Đăng nhập</Button>

            <Link style={{ display: "flex", flexDirection: "row-reverse", textDecoration: "none", color: "grey", marginRight: "2px" }} to="/ForgotPass">Forgot Pass</Link>
          </Stack>
        </Grid>
      </Grid>

    </div>
  )

}





export default Login
