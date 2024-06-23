import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useState, useEffect } from 'react'
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import BeenhereIcon from '@mui/icons-material/Beenhere';
import style from './mycourse.module.scss'
import imgMyCourse from "../../../assets/background-course.png"
const MyCourse = () => {

    var [record, setRecords] = useState();

    useEffect(() => {
        fetch("").then(response => response.json())
            .then(data => setRecords(data))
            .catch(e => console.log(e))
    }, [])

    const items = [{
        id: 0,
        name: 'Chương trình dịch-AT16D5C18',
        teacher: 'Nguyễn Văn Phát',
    }, {
        id: 1,
        name: 'Hệ thống viễn thông-AT16D5C18',
        teacher: 'Lê Tiểu Cường',
    }, {
        id: 2,
        name: 'Công nghệ phần mềm -AT16D5C18',
        teacher: 'Bội Tố Tố',
    }, {
        id: 3,
        name: 'Kiến trúc máy tính -AT16D5C18',
        teacher: 'Lê Hồng Phong',
    }, {
        id: 4,
        name: 'Cấu trúc cơ sở dữ liệu -AT16D5C18',
        teacher: 'Cao Thanh Vi',
    }];

    const listItems = items.map(item =>
        <div className={style.wrapper_content_inf}  >

            <div className={style.wrapper_content_inf_img} >
                <img width="100%" height="100%" src={imgMyCourse} alt="" />
            </div>
            <div className={style.wrapper_content_inf_inner}>
                <p style={{ paddingLeft: "16px", marginTop: "-4px", paddingRight: "16px" }}>{item.name}</p>
                <div style={{ display: "flex", flexDirection: "row-reverse", marginRight: "10px" }} >
                    <button className={style.wrapper_content_inf_inner_button}><a href="/tabcourse">Chi tiết</a></button>
                </div>
            </div>
        </div>
    );

    return (
        <div style={{ marginTop: "20px" }} className={style.wrapper}>
            <div className={style.wrapper_maintitle} >
                <h1 style={{ textAlign: "center", fontSize: "30px", fontWeight: "bold" }}>Khoá Học Của Tôi</h1>
                <p style={{ textAlign: "center", marginBottom: "20px", color: "rgb(142, 119, 119)" }}>Các khoá học đầy đủ bài giảng bài tập bài thi, tài liệu, hỗ trợ học tập thuận tiện hơn.</p>
            </div>
            <div className={style.wrapper_content} >
                {listItems}
            </div>
        </div>)
}

export default MyCourse
