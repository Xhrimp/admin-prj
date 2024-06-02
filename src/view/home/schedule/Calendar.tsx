import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';

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



    return (
        <div style={{ display: "flex", width: "900px", justifyContent: "center", margin: "0 auto", marginTop: '30px' }} >

            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar

                />
            </LocalizationProvider>




            <div className='displayContent' style={{ width: "540px", border: "1px solid black", marginLeft: "20px" }} >
                <h2 style={{ textAlign: "center", marginBottom: "2px" }} >
                    Thông Tin Chi Tiết

                </h2>
                < div style={{ fontSize: "22px" }}> Ngày 20-7</div>

                <div style={{ display: "flex", width: "500px", margin: " 16px", border: "1px solid black", borderRadius: "5px" }} >


                    <div style={{ padding: "12px 24px" }}><div>16:00</div> <div style={{ marginLeft: "20px" }}>|</div><div>18:00</div></div>
                    <div style={{ padding: "12px 24px" }}>
                        <div style={{ padding: " 4px 0" }} >Cong nghe mang may tinh</div>
                        <div style={{ padding: " 4px 0" }}>Toi thu 5 tiet 3 ngay 24-6</div>

                    </div>
                </div>
                <div style={{ display: "flex", width: "500px", margin: " 16px", border: "1px solid black", borderRadius: "5px" }} >


                    <div style={{ padding: "12px 24px" }}><div>16:00</div> <div style={{ marginLeft: "20px" }}>|</div><div>18:00</div></div>
                    <div style={{ padding: "12px 24px" }}>
                        <div style={{ padding: " 4px 0" }} >Cong nghe mang may tinh</div>
                        <div style={{ padding: " 4px 0" }}>Toi thu 5 tiet 3 ngay 24-6</div>

                    </div>
                </div>


            </div>


        </div>

    );

}
