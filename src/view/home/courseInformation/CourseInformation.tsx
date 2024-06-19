import user from '../../../assets/user.png'
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
const
    CourseInfomation = () => {

        const [value, setValue] = React.useState<number | null>(5);

        return (
            <>

                <div className={style.header} >
                    <div className={style.headerInner} >
                        <div >
                            <div >
                                <h1>React - The Complete Guide 2024 (incl. Next.js, Redux)</h1>
                                <h3>Dive in and learn React.js from scratch! Learn React, Hooks, Redux, React Router, Next.js, Best Practices and way more!</h3>
                            </div>
                            <div style={{ display: "flex" }}>
                                <div style={{ display: "flex", fontSize: "12px", alignItems: "center" }}>
                                    <p style={{ backgroundColor: "#ECEB98", color: "black", padding: "3px 4px", marginRight: "4px" }}>Chất lượng cao</p>
                                    <p style={{ backgroundColor: "#ECEB98", color: "black", padding: "3px 4px", marginRight: "4px" }}>Cam kết đầu ra</p>
                                </div>
                                <p>Số học viên : 80 học sinh</p>
                            </div>
                            <div>
                                Được tạo bởi giáo viên: <a style={{ color: "white" }} href="">Nguyễn Văn Quang</a>
                            </div>
                            <div style={{ display: "flex", marginTop: "10px", alignItems: "center" }}>
                                <div style={{ display: "flex", alignItems: "center" }}>
                                    <ManageHistoryIcon style={{ fontSize: "18px", marginTop: "3.5px" }} />
                                    <div style={{ marginLeft: "3px" }}>Last Update: 12/6/2024</div>
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
                    </div>
                </div>
                <div className={style.body} >


                    <div className={style.bodyLeft} >
                        <div style={{ width: "100%" }} className="courseContent">


                            <div className={style.bodyLeftItem}   >
                                <h2>What will you learn </h2>
                                <div >
                                    <ul className={style.itemList} >
                                        <li style={{ maxWidth: "48%" }} >

                                            <div style={{ display: "flex", justifyContent: "center" }}>
                                                <CheckIcon style={{ transform: "translateY(14px)" }} />
                                                <p style={{ marginLeft: "10px", marginBottom: "8px" }}> Learn React from the ground up and
                                                    finish the course as an advanced React developer</p>
                                            </div>
                                        </li>
                                        <li style={{ maxWidth: "48%" }} >

                                            <div style={{ display: "flex", justifyContent: "center" }}>
                                                <CheckIcon style={{ transform: "translateY(14px)" }} />
                                                <p style={{ marginLeft: "10px", marginBottom: "8px" }}> Learn React from the ground up and
                                                    finish the course as an advanced React developer</p>
                                            </div>
                                        </li>
                                        <li style={{ maxWidth: "48%" }} >

                                            <div style={{ display: "flex", justifyContent: "center" }}>
                                                <CheckIcon style={{ transform: "translateY(14px)" }} />
                                                <p style={{ marginLeft: "10px", marginBottom: "8px" }}> Learn React from the ground up and
                                                    finish the course as an advanced React developer</p>
                                            </div>
                                        </li>
                                        <li style={{ maxWidth: "48%" }} >

                                            <div style={{ display: "flex", justifyContent: "center" }}>
                                                <CheckIcon style={{ transform: "translateY(14px)" }} />
                                                <p style={{ marginLeft: "10px", marginBottom: "8px" }}> Learn React from the ground up and
                                                    finish the course as an advanced React developer</p>
                                            </div>
                                        </li>
                                        <li style={{ maxWidth: "48%" }} >

                                            <div style={{ display: "flex", justifyContent: "center" }}>
                                                <CheckIcon style={{ transform: "translateY(14px)" }} />
                                                <p style={{ marginLeft: "10px", marginBottom: "8px" }}> Learn React from the ground up and
                                                    finish the course as an advanced React developer</p>
                                            </div>
                                        </li>
                                        <li style={{ maxWidth: "48%" }} >

                                            <div style={{ display: "flex", justifyContent: "center" }}>
                                                <CheckIcon style={{ transform: "translateY(14px)" }} />
                                                <p style={{ marginLeft: "10px", marginBottom: "8px" }}> Learn React from the ground up and
                                                    finish the course as an advanced React developer</p>
                                            </div>
                                        </li>
                                        <li style={{ maxWidth: "48%" }} >

                                            <div style={{ display: "flex", justifyContent: "center" }}>
                                                <CheckIcon style={{ transform: "translateY(14px)" }} />
                                                <p style={{ marginLeft: "10px", marginBottom: "8px" }}> Learn React from the ground up and
                                                    finish the course as an advanced React developer</p>
                                            </div>
                                        </li>
                                        <li style={{ maxWidth: "48%" }} >

                                            <div style={{ display: "flex", justifyContent: "center" }}>
                                                <CheckIcon style={{ transform: "translateY(14px)" }} />
                                                <p style={{ marginLeft: "10px", marginBottom: "8px" }}> Learn React from the ground up and
                                                    finish the course as an advanced React developer</p>
                                            </div>
                                        </li>
                                        <li style={{ maxWidth: "48%" }} >

                                            <div style={{ display: "flex", justifyContent: "center" }}>
                                                <CheckIcon style={{ transform: "translateY(14px)" }} />
                                                <p style={{ marginLeft: "10px", marginBottom: "8px" }}> Learn React from the ground up and
                                                    finish the course as an advanced React developer</p>
                                            </div>
                                        </li>
                                        <li style={{ maxWidth: "48%" }} >

                                            <div style={{ display: "flex", justifyContent: "center" }}>
                                                <CheckIcon style={{ transform: "translateY(14px)" }} />
                                                <p style={{ marginLeft: "10px", marginBottom: "8px" }}> Learn React from the ground up and
                                                    finish the course as an advanced React developer</p>
                                            </div>
                                        </li>
                                        <li style={{ maxWidth: "48%" }} >

                                            <div style={{ display: "flex", justifyContent: "center" }}>
                                                <CheckIcon style={{ transform: "translateY(14px)" }} />
                                                <p style={{ marginLeft: "10px", marginBottom: "8px" }}> Learn React from the ground up and
                                                    finish the course as an advanced React developer</p>
                                            </div>
                                        </li>
                                        <li style={{ maxWidth: "48%" }} >

                                            <div style={{ display: "flex", justifyContent: "center" }}>
                                                <CheckIcon style={{ transform: "translateY(14px)" }} />
                                                <p style={{ marginLeft: "10px", marginBottom: "8px" }}> Learn React from the ground up and
                                                    finish the course as an advanced React developer</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div style={{ marginBottom: "20px" }} className="courseContent_requiment" >
                                <h2>Requirement</h2>
                                <ul style={{ padding: "0px", listStyleType: "none" }}>
                                    <li>
                                        <div style={{ display: "flex" }}>
                                            <FiberManualRecordIcon style={{ fontSize: "16px", transform: "translateY(20px)" }} />
                                            <p style={{ marginLeft: "10px", marginBottom: "8px" }}>
                                                JavaScript + HTML + CSS fundamentals are absolutely required
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div style={{ display: "flex" }}>
                                            <FiberManualRecordIcon style={{ fontSize: "16px", transform: "translateY(20px)" }} />
                                            <p style={{ marginLeft: "10px", marginBottom: "8px" }}>
                                                You DON'T need to be a JavaScript expert to succeed in this course!
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div style={{ display: "flex" }}>
                                            <FiberManualRecordIcon style={{ fontSize: "16px", transform: "translateY(20px)" }} />
                                            <p style={{ marginLeft: "10px", marginBottom: "8px" }}>
                                                ES6+ JavaScript knowledge is beneficial but not a must-have
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div style={{ height: "400px", marginBottom: "20px" }} className="courseContent_requiment" >
                                <h2>Description</h2>
                                <p>This bestselling course has turned more than 800,000 students into ReactJS developers (more than any other React course on Udemy)!</p>
                            </div>
                        </div>
                    </div>
                    <div className={style.bodyRight}>
                        <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
                            <h2>Thông tin học viên</h2>
                            <img src={user} alt="user" style={{ width: "70%" }} />
                        </div>
                        <div style={{ display: 'flex', width: '270px', margin: "0 auto" }}>
                            <div style={{ width: "100%" }}>
                                <div style={{ textAlign: "center", fontSize: "24", fontWeight: "600" }}>
                                    Thân Nhân Chính
                                </div>

                                <div style={{ textDecoration: "underline", marginTop: "30px", padding: "2px 4px", fontSize: "18px" }}>Thông tin học tập</div>

                                <div style={{ marginTop: "12px", padding: "2px 4px", fontSize: "12px" }}>
                                    <div style={{ display: "flex", alignContent: "center" }}>
                                        <EventBusyIcon style={{ fontSize: "16px" }} />
                                        <div style={{ marginLeft: "6px" }}>   Số buổi vắng không phép :0</div>
                                    </div>
                                    <div style={{ display: "flex", marginTop: "12px", alignContent: "center" }}>
                                        <EventNoteIcon style={{ fontSize: "16px" }} />
                                        <div style={{ marginLeft: "6px" }}>  Số buổi vắng có phép :1</div>
                                    </div>
                                    <div style={{ display: "flex", marginTop: "12px", alignContent: "center" }}>
                                        <FactCheckIcon style={{ fontSize: "16px" }} />
                                        <div style={{ marginLeft: "6px" }}> Tiến độ: 15/30</div>
                                    </div>




                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
export default CourseInfomation
