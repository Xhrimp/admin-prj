
import "./timetable.module.scss"


const Timetable = () => {


    return (
        <div >

            <div style={{ display: "flex", justifyContent: "center" }} >


                <div style={{ width: "1200px", marginBottom: "60px", marginTop: "60" }}>
                    <div>
                        <h1>Thời khóa biểu</h1>
                        <table style={{ border: "1px solid #dddddd" }}>
                            <tr >
                                <th>STT</th>
                                <th>Tên môn học</th>
                                <th>Hình thức GD</th>
                                <th>Lớp LMS</th>
                                <th style={{ width: "200px" }}>Lịch học</th>
                                <th>Vắng</th>
                                <th>Giảng viên</th>

                                <th>Học phí</th>
                            </tr>
                            <tr className="childtable">
                                <td>1</td>
                                <td>Chương trình dịch</td>
                                <td>Offline</td>
                                <td>-</td>
                                <td>Chiều T3, Tiết 10-12, 103_TA2TA2,Tuần: 06/05/2024-09/06/2024
                                    Chiều T3, Tiết 10-12, 103_TA2TA2, Tuần: 10/06/2024-07/07/2024
                                    Chiều T5, Tiết 10-12, 103_TA2TA2, Tuần: 10/06/2024-07/07/2024</td>
                                <td>0</td>
                                <td>Nguyễn Văn Phác</td>

                                <td>Uploading</td>
                            </tr>
                            <tr className="childtable">
                                <td>1</td>
                                <td>Chương trình dịch</td>
                                <td>Offline</td>
                                <td>-</td>
                                <td>Chiều T3, Tiết 10-12, 103_TA2TA2,Tuần: 06/05/2024-09/06/2024
                                    Chiều T3, Tiết 10-12, 103_TA2TA2, Tuần: 10/06/2024-07/07/2024
                                    Chiều T5, Tiết 10-12, 103_TA2TA2, Tuần: 10/06/2024-07/07/2024</td>
                                <td>0</td>
                                <td>Nguyễn Văn Phác</td>

                                <td>Uploading</td>
                            </tr>
                            <tr className="childtable">
                                <td>1</td>
                                <td>Chương trình dịch</td>
                                <td>Offline</td>
                                <td>-</td>
                                <td>Chiều T3, Tiết 10-12, 103_TA2TA2,Tuần: 06/05/2024-09/06/2024
                                    Chiều T3, Tiết 10-12, 103_TA2TA2, Tuần: 10/06/2024-07/07/2024
                                    Chiều T5, Tiết 10-12, 103_TA2TA2, Tuần: 10/06/2024-07/07/2024</td>
                                <td>0</td>
                                <td>Nguyễn Văn Phác</td>

                                <td>Uploading</td>
                            </tr>
                            <tr className="childtable">
                                <td>1</td>
                                <td>Chương trình dịch</td>
                                <td>Offline</td>
                                <td>-</td>
                                <td >Chiều T3, Tiết 10-12, 103_TA2TA2,Tuần: 06/05/2024-09/06/2024
                                    <br />   Chiều T3, Tiết 10-12, 103_TA2TA2, Tuần: 10/06/2024-07/07/2024
                                    Chiều T5, Tiết 10-12, 103_TA2TA2, Tuần: 10/06/2024-07/07/2024</td>
                                <td>0</td>
                                <td>Nguyễn Văn Phác</td>

                                <td>Uploading</td>
                            </tr>

                        </table>



                    </div>
                </div>

            </div>
        </div>


    )





}
export default Timetable