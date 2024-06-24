import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import BeenhereIcon from '@mui/icons-material/Beenhere';
import style from './publickma.module.scss'
const PublicKma = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.wrapper_maintitle} >
                <h1 style={{ textAlign: "center", fontSize: "30px", fontWeight: "bold" }}>Dịch Vụ Công</h1>
                <p style={{ textAlign: "center", color: "rgb(142, 119, 119)" }}>Tạo nhanh các biểu mẫu, đơn xin phép , các loại giấy tờ v.v..</p>
            </div>
            <div className={style.wrapper_content} >
                <div className={style.wrapper_content_inf}  >
                    <div >
                        <BeenhereIcon style={{ paddingTop: "6px" }} />
                    </div>
                    <div className={style.wrapper_content_inf_inner}>Giấy Giới Thiệu</div>
                </div>

                <div className={style.wrapper_content_inf}  >
                    <div >
                        <BeenhereIcon style={{ paddingTop: "6px" }} />
                    </div>
                    <div className={style.wrapper_content_inf_inner}> Giấy Chứng Nhận</div>
                </div>

                <div className={style.wrapper_content_inf}  >
                    <div >
                        <BeenhereIcon style={{ paddingTop: "6px" }} />
                    </div>
                    <div className={style.wrapper_content_inf_inner}>Cấp Bảng Điểm</div>
                </div>
                <div className={style.wrapper_content_inf}  >
                    <div>
                        <BeenhereIcon style={{ paddingTop: "6px" }} />
                    </div>
                    <div className={style.wrapper_content_inf_inner}> Chứng Nhân, Chứng chỉ</div>
                </div>
                <div className={style.wrapper_content_inf}  >
                    <div>
                        <BeenhereIcon style={{ paddingTop: "6px" }} />
                    </div>
                    <div className={style.wrapper_content_inf_inner}>Ủy Quyền Nhận Bằng</div>
                </div>
                <div className={style.wrapper_content_inf}  >
                    <div>
                        <BeenhereIcon style={{ paddingTop: "6px" }} />
                    </div>
                    <div className={style.wrapper_content_inf_inner}>Đơn Xin Rút Hồ Sơ</div>
                </div>

            </div>





        </div>)
}

export default PublicKma
