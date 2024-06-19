
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
import CourseInfo from '../view/home/courseinfo/CourseInfo';
import CourseInfomation from '../view/home/courseInformation/CourseInformation';
import Timetable from '../view/home/timetable/TimeTable';
import Testtail from '../view/home/Testtail';



const label = { inputProps: { 'aria-label': 'Switch demo' } }



function Routers() {
    // const label = { inputProps: { 'aria-label': 'Switch demo' } };

    return (
        <Routes>
            <Route path="/" element={<Calendar />} />
            <Route path="/ForgotPass" element={<FogotPass />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Publickma" element={<PublicKma />} />
            <Route path="/Mycourse" element={<MyCourse />} />
        </Routes>




    );
}

export default Routers
