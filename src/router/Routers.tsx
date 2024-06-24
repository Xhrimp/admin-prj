import logo from '../logo.svg'
import Header from '../view/layout/header'
import React from 'react'
import Schedule from '../view/home/schedule/Calendar'
import { ThemeProvider, createTheme } from '@mui/material'
import FogotPass from '../view/login/fogotPass/FogotPass'
import Login from '../view/login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Calendar from '../view/home/schedule/Calendar'
import PublicKma from '../view/home/publicKma/PublicKma'

import CourseInfo from '../view/home/courseinfo/CourseInfo'
import CourseInfomation from '../view/myCourseInfo/courseInformation/CourseInformation'
import Timetable from '../view/timeTable/timetable/TimeTable'
import Hometab from '../view/home'
import MyCourse from '../view/home/mycourse/MyCourse'
import TabCourse from '../view/myCourseInfo/tabCourse'
import Example1 from '../view/home/testcalendar/TestCalendar'
import Calendar1 from '../view/home/testcalendar/TestCalendar'

const label = { inputProps: { 'aria-label': 'Switch demo' } }

function Routers() {
  // const label = { inputProps: { 'aria-label': 'Switch demo' } };

  return (
    <Routes>
      <Route path="/" element={<Hometab />} />
      <Route path="/subjects" element={<TabCourse />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/ti1" element={<Calendar1 />} />
    </Routes>
  )
}

export default Routers
