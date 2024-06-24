
import "./timetable.module.scss"


const Timetable = () => {

    const subject = [
        {
            id: 1,
            name: 'Chương trình dich',
            learntype: 'Offline',
            lmsclas: '-',
            timeinfo: 'Chiều T3, Tiết 10-12, 103_TA2TA2,Tuần: 06/05/2024-09/06/2024Chiều T3, Tiết 10-12, 103_TA2TA2, Tuần: 10/06/2024-07/07/2024Chiều T5, Tiết 10-12, 103_TA2TA2, Tuần: 10/06/2024-07/07/2024',
            vang: '0',
            teacher: 'Nguyên Văn Phát',
            price: 'Uploading',
        },
        {
            id: 1,
            name: 'Chương trình dich',
            learntype: 'Offline',
            lmsclas: '-',
            timeinfo: 'Chiều T3, Tiết 10-12, 103_TA2TA2,Tuần: 06/05/2024-09/06/2024Chiều T3, Tiết 10-12, 103_TA2TA2, Tuần: 10/06/2024-07/07/2024Chiều T5, Tiết 10-12, 103_TA2TA2, Tuần: 10/06/2024-07/07/2024',
            vang: '0',
            teacher: 'Nguyên Văn Phát',
            price: 'Uploading',
        },
        {
            id: 1,
            name: 'Chương trình dich',
            learntype: 'Offline',
            lmsclas: '-',
            timeinfo: 'Chiều T3, Tiết 10-12, 103_TA2TA2,Tuần: 06/05/2024-09/06/2024Chiều T3, Tiết 10-12, 103_TA2TA2, Tuần: 10/06/2024-07/07/2024Chiều T5, Tiết 10-12, 103_TA2TA2, Tuần: 10/06/2024-07/07/2024',
            vang: '0',
            teacher: 'Nguyên Văn Phát',
            price: 'Uploading',
        },
        {
            id: 1,
            name: 'Chương trình dich',
            learntype: 'Offline',
            lmsclas: '-',
            timeinfo: 'Chiều T3, Tiết 10-12, 103_TA2TA2,Tuần: 06/05/2024-09/06/2024Chiều T3, Tiết 10-12, 103_TA2TA2, Tuần: 10/06/2024-07/07/2024Chiều T5, Tiết 10-12, 103_TA2TA2, Tuần: 10/06/2024-07/07/2024',
            vang: '0',
            teacher: 'Nguyên Văn Phát',
            price: 'Uploading',
        },
        {
            id: 1,
            name: 'Chương trình dich',
            learntype: 'Offline',
            lmsclas: '-',
            timeinfo: 'Chiều T3, Tiết 10-12, 103_TA2TA2,Tuần: 06/05/2024-09/06/2024Chiều T3, Tiết 10-12, 103_TA2TA2, Tuần: 10/06/2024-07/07/2024Chiều T5, Tiết 10-12, 103_TA2TA2, Tuần: 10/06/2024-07/07/2024',
            vang: '0',
            teacher: 'Nguyên Văn Phát',
            price: 'Uploading',
        },





    ]

    const rendsubject = subject.map((item, index) =>
        < tr className="childtable" >
            <td>{index + 1}</td>
            <td>{item.name}</td>
            <td>{item.learntype}</td>
            <td>{item.lmsclas}</td>
            <td >{item.timeinfo}</td>
            <td >{item.vang}</td>
            <td>{item.teacher}</td>
            <td>{item.price}</td>
        </tr >
    )
    return (
        <div style={{ marginTop: "20px" }} >

            <div style={{ display: "flex", justifyContent: "center" }} >
                <div style={{ width: "1200px", marginBottom: "60px", marginTop: "60" }}>
                    <div>
                        <h1 style={{ fontWeight: "bolder", fontSize: "30px" }}>Thời khóa biểu</h1>
                        <table style={{ border: "1px solid #dddddd" }}>
                            <tr className="bg-stone-900  text-white" >
                                <th>STT</th>
                                <th>Tên môn học</th>
                                <th>Hình thức GD</th>
                                <th>Lớp LMS</th>
                                <th style={{ width: "200px" }}>Lịch học</th>
                                <th>Vắng</th>
                                <th>Giảng viên</th>
                                <th>Học phí</th>
                            </tr>
                            {rendsubject}
                        </table>
                    </div>
                </div>

            </div>
        </div>


    )
}
export default Timetable