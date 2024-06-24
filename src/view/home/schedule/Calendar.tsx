import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import style from './Calendar.module.scss'
import { useState } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { PickersDay, PickersDayProps } from '@mui/x-date-pickers/PickersDay';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { DayCalendarSkeleton } from '@mui/x-date-pickers/DayCalendarSkeleton';

/**
 * Mimic fetch with abort controller https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort
 * ⚠️ No IE11 support
 */


export default function Calendar() {

    const meetings = [
        {
            id: 1,
            name: 'Leslie Alexander',
            imageUrl:
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            startDatetime: '2024-05-11T13:00',
            endDatetime: '2024-05-11T14:30',
        },
        {
            id: 2,
            name: 'Michael Foster',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            startDatetime: '2024-05-20T09:00',
            endDatetime: '2024-05-20T11:30',
        },
        {
            id: 3,
            name: 'Dries Vincent',
            imageUrl:
                'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            startDatetime: '2024-05-20T17:00',
            endDatetime: '2024-05-20T18:30',
        },
        {
            id: 4,
            name: 'Leslie Alexander',
            imageUrl:
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            startDatetime: '2024-06-09T13:00',
            endDatetime: '2024-06-09T14:30',
        },
        {
            id: 5,
            name: 'Michael Foster',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            startDatetime: '2024-05-13T12:00',
            endDatetime: '2024-05-13T14:30',
        }
    ]



    const tday = dayjs().format("YYYY-MMM-DD")
    console.log(tday)

    const [tdate, setdate] = useState("")
    const handleDayChange = (picked: any) => {


        // const day = picked.picked.format('DD')
        // const month = picked.picked.format('MM')
        // const year = picked.picked.format('YYYY')

        const daypicked = picked.format("YYYY-MMM-DD")
        setdate(daypicked)




    }









    return (
        <div style={{ display: "flex", width: "900px", justifyContent: "center", margin: "0 auto", marginTop: '30px' }} >

            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar
                    onChange={handleDayChange}


                />
            </LocalizationProvider>




            <div className={style.classSchedule} >
                <h2 style={{ textAlign: "center", marginBottom: "20px" }} >
                    Thông Tin Chi Tiết

                </h2>
                < div style={{ fontSize: "22px", marginLeft: "20px" }}>{tdate == "" ? tday : tdate}</div>

                <div style={{ display: "flex", width: "500px", backgroundColor: "#F2F6FC", margin: " 16px", borderRadius: "5px" }} >


                    <div style={{ padding: "12px 24px" }}><div>16:00</div> <div style={{ marginLeft: "20px" }}>|</div><div>18:00</div></div>
                    <div style={{ padding: "12px 24px" }}>
                        <div style={{ padding: " 4px 0" }} >Cong nghe mang may tinh</div>
                        <div style={{ padding: " 4px 0", color: "#848484" }}>Toi thu 5 tiet 3 ngay 24-6</div>

                    </div>
                </div>
                <div style={{ display: "flex", width: "500px", backgroundColor: "#F2F6FC", margin: " 16px", borderRadius: "5px" }} >


                    <div style={{ padding: "12px 24px" }}><div>16:00</div> <div style={{ marginLeft: "20px" }}>|</div><div>18:00</div></div>
                    <div style={{ padding: "12px 24px" }}>
                        <div style={{ padding: " 4px 0" }} >Cong nghe mang may tinh</div>
                        <div style={{ padding: " 4px 0", color: "#848484" }}>Toi thu 5 tiet 3 ngay 24-6</div>

                    </div>
                </div>


            </div>


        </div>

    );

}
