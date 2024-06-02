
import logo from '../logo.svg'
import Header from '../view/layout/header';
import React from 'react'
import Schedule from '../view/home/schedule/Calendar';
import { ThemeProvider, createTheme } from '@mui/material'
import FogotPass from '../view/login/fogotPass/FogotPass';
import Login from '../view/login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Calendar from '../view/home/schedule/Calendar';
import PublicKma from '../view/home/publicKma/PublicKma';
import MyCourse from '../view/home/mycourse/MyCourse';
const label = { inputProps: { 'aria-label': 'Switch demo' } }



function Routers() {
    // const label = { inputProps: { 'aria-label': 'Switch demo' } };

    return (
        <Routes>
            <Route path="/" element={<MyCourse />} />
            <Route path="/ForgotPass" element={<FogotPass />} />
            <Route path="/Login" element={<Login />} />
        </Routes>




    );
}

export default Routers
