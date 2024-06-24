
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Outlet, Link } from "react-router-dom";
import React, { useState } from "react";
import { Button, Container, TextField } from "@mui/material";
import TabCourse from './courseinfoTab/TabCourse';
import TabTeacher from './courseinfoTab/TabTeacher';
interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    const [emailForgot, editForgot] = useState()


    const handleChange = (e: any) => {
        editForgot(e.target.value)

    }
    const handleSendEmail = () => {
        console.log(emailForgot);
    }


    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}
export default function CourseInfo() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <div style={{ display: "flex", width: "1100px", margin: "0 auto" }}>
            <div style={{ width: "800px" }}>
                <Box sx={{ width: '100%' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            <Tab label="Nội Dung" {...a11yProps(0)} />
                            <Tab label="Giáo Viên" {...a11yProps(1)} />
                        </Tabs>
                    </Box>
                    <CustomTabPanel value={value} index={0}>
                        {/* đây là phần tab tự tạo bên courseinfoTab */}
                        <TabCourse />
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={1}>
                        {/* đây là phần tab tự tạo bên courseinfoTab */}
                        <TabTeacher />
                    </CustomTabPanel>
                </Box>
            </div>
            <div style={{ width: "300px", height: "500px", border: "1px solid gray" }}></div>
        </div>
    );
}

