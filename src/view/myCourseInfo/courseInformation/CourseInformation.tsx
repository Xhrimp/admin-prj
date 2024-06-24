import userimg from '../../../assets/user.png'
import ManageHistoryIcon from '@mui/icons-material/ManageHistory';
import React from 'react';
import LanguageIcon from '@mui/icons-material/Language';
import Rating from '@mui/material/Rating';
import CheckIcon from '@mui/icons-material/Check';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import EventBusyIcon from '@mui/icons-material/EventBusy';
import EventNoteIcon from '@mui/icons-material/EventNote';
import style from './courseInfomation.module.scss';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import { Description } from '@headlessui/react';
const
    CourseInfomation = () => {

        const [value, setValue] = React.useState<number | null>(5);
        const CourseInfo = [{
            id: 0,
            name: 'Chương trình dịch-AT16D5C18',
            subname: 'Dive in and learn React.js from scratch! Learn React, Hooks, Redux, React Router, Next.js,',
            teacher: 'Nguyễn Văn Phát',
            total: '80',
            updateTime: '12/6/2024'

        },];

        const WhatWilllearn = [
            {
                id: 0,
                info: 'Learn React from the ground up and finish the course as an advanced React developer'
            },
            {
                id: 1,
                info: 'Learn React from the ground up and finish the course as an advanced React developer'
            },
            {
                id: 2,
                info: 'Learn React from the ground up and finish the course as an advanced React developer'
            },
            {
                id: 3,
                info: 'Learn React from the ground up and finish the course as an advanced React developer'
            },
            {
                id: 4,
                info: 'Learn React from the ground up and finish the course as an advanced React developer'
            },
            {
                id: 5,
                info: 'Learn React from the ground up and finish the course as an advanced React developer'
            },

        ]
        const requiredment = [
            {
                id: 0,
                info: " You DON'T need to be a JavaScript expert to succeed in this course!"
            },
            {
                id: 1,
                info: 'Learn React from the ground up and finish the course as an advanced React developer'
            },
            {
                id: 2,
                info: 'Learn React from the ground up and finish the course as an advanced React developer'
            },
            {
                id: 3,
                info: 'Learn React from the ground up and finish the course as an advanced React developer'
            },
            {
                id: 4,
                info: 'Learn React from the ground up and finish the course as an advanced React developer'
            },
            {
                id: 5,
                info: 'Learn React from the ground up and finish the course as an advanced React developer'
            },

        ]
        const descript = [
            {
                id: 0,
                info: "This bestselling course has turned more than 800,000 students into ReactJS developers (more than any other React course on Udemy)!"
            },
        ]
        const user = [{
            id: 0,
            name: 'Thân Nhân Chính',
            vangp: '1',
            vangkp: '0',
            dahoc: '5',
            tongkhoa: '20'
        },];
        const wwl = WhatWilllearn.map(item =>
            <li style={{ maxWidth: "48%" }} >

                <div style={{ display: "flex", marginBottom: "4px", justifyContent: "center" }}>
                    <CheckIcon style={{ transform: "translateY(14px)" }} />
                    <p style={{ marginLeft: "10px", marginBottom: "8px" }}> {item.info}</p>
                </div>
            </li>
        );
        const rqm = requiredment.map(item =>
            <li>
                <div style={{ display: "flex" }}>
                    <FiberManualRecordIcon style={{ fontSize: "16px", transform: "translateY(5px)" }} />
                    <p style={{ marginLeft: "10px", marginBottom: "8px" }}>
                        {item.info}
                    </p>
                </div>
            </li>
        );
        const des = descript.map(item =>
            <p>{item.info}</p>
        );
        const header = CourseInfo.map(course =>
            <div >
                <div style={{ marginBottom: "20px" }} >
                    <h1 style={{ fontSize: "38px" }}>{course.name}</h1>
                    <h3 style={{ fontSize: "26px" }}>{course.subname}</h3>
                </div>
                <div style={{ display: "flex", marginBottom: "16px" }}>
                    <div style={{ display: "flex", fontSize: "12px", alignItems: "center" }}>
                        <p style={{ backgroundColor: "#ECEB98", color: "black", padding: "3px 4px", marginRight: "4px" }}>Chất lượng cao</p>
                        <p style={{ backgroundColor: "#ECEB98", color: "black", padding: "3px 4px", marginRight: "4px" }}>Cam kết đầu ra</p>
                    </div>
                    <p>Số học viên : {course.total}</p>
                </div>
                <div>
                    Được tạo bởi giáo viên: <a style={{ color: "white" }} href="">{course.teacher}</a>
                </div>
                <div style={{ display: "flex", marginTop: "10px", alignItems: "center" }}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <ManageHistoryIcon style={{ fontSize: "18px", marginTop: "3.5px" }} />
                        <div style={{ marginLeft: "3px" }}>Last Update: {course.updateTime}</div>
                    </div>
                    <div>
                        <div style={{ display: "flex", marginLeft: "26px", alignItems: "center" }}>
                            <LanguageIcon style={{ fontSize: "18px", marginTop: "3.5px" }} />
                            <div style={{ marginLeft: "3px" }}>Tiếng Việt</div>
                        </div>
                    </div>
                    <div>
                        <div style={{ display: "flex", marginLeft: "26px", alignItems: "center" }}>
                            <div style={{ marginLeft: "3px", display: "flex", justifyContent: "center" }}>
                                <div>Đánh giá:</div>
                                <Rating style={{ fontSize: "16px", marginTop: "4px", marginRight: "3px" }} name="read-only" readOnly value={value} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
        const userinfo = user.map(item =>
            <div style={{ width: "100%" }}>
                <div style={{ textAlign: "center", fontSize: "24", fontWeight: "600" }}>
                    {item.name}
                </div>
                <div style={{ textDecoration: "underline", marginTop: "30px", padding: "2px 4px", fontSize: "18px" }}>Thông tin học tập</div>
                <div style={{ marginTop: "12px", padding: "2px 4px", fontSize: "12px" }}>
                    <div style={{ display: "flex", alignContent: "center" }}>
                        <EventBusyIcon style={{ fontSize: "16px" }} />
                        <div style={{ marginLeft: "6px" }}>   Số buổi vắng không phép :{item.vangkp}</div>
                    </div>
                    <div style={{ display: "flex", marginTop: "12px", alignContent: "center" }}>
                        <EventNoteIcon style={{ fontSize: "16px" }} />
                        <div style={{ marginLeft: "6px" }}>  Số buổi vắng có phép :{item.vangp}</div>
                    </div>
                    <div style={{ display: "flex", marginTop: "12px", alignContent: "center" }}>
                        <FactCheckIcon style={{ fontSize: "16px" }} />
                        <div style={{ marginLeft: "6px" }}> Tiến độ: {item.dahoc}/{item.tongkhoa}</div>
                    </div>
                </div>
            </div>
        );








        return (
            <>

                <div className={style.header} >
                    <div className={style.headerInner} >
                        {header}
                    </div>
                </div>
                <div className={style.body} >
                    <div className={style.bodyLeft} >
                        <div style={{ width: "100%" }} className="courseContent">
                            <div className={style.bodyLeftItem}   >
                                <h2 style={{ fontSize: "26px", fontWeight: "bold", marginBottom: "30px" }}>What will you learn </h2>
                                <div >
                                    <ul className={style.itemList} >
                                        {wwl}
                                    </ul>
                                </div>
                            </div>
                            <div style={{ marginBottom: "20px" }} className="courseContent_requiment" >
                                <h2 style={{ fontSize: "26px", fontWeight: "bold", marginBottom: "30px" }}>Requirement</h2>
                                <ul style={{ padding: "0px", listStyleType: "none" }}>
                                    {rqm}
                                </ul>
                            </div>
                            <div style={{ marginBottom: "20px" }} className="courseContent_requiment" >
                                <h2 style={{ fontSize: "26px", fontWeight: "bold", marginBottom: "30px" }}>Description</h2>
                                {des}
                            </div>
                        </div>
                    </div>
                    <div className={style.bodyRight}>
                        <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
                            <h2>Thông tin học viên</h2>
                            <img src={userimg} alt="user" style={{ width: "70%" }} />
                        </div>
                        <div style={{ display: 'flex', width: '270px', margin: "0 auto" }}>
                            {userinfo}
                        </div>
                    </div>
                </div>
            </>
        )
    }
export default CourseInfomation
