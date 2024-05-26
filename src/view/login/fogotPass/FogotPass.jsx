import { Button, Container, TextField, Typography } from "@mui/material";
import React from "react";

function FogotPass() {

    return (
        <>
            <div style={{ display: "flex", marginTop: "20vh" }}>
                <Container maxWidth='sm'>
                    <Typography variant="h4" align="center" >
                        Forgot password?
                        <Typography variant="h6" align="center" style={{ color: "gray" }} >
                            Please enter the email address associated with your account and We will email you a link to reset your password.
                        </Typography>

                    </Typography>

                    <TextField style={{ width: "400px", marginTop: "20px" }} id="outlined-basic" label="Type your Email Address" variant="outlined" ></TextField>
                    <div style={{ padding: "5px 0", marginTop: "10px" }}>
                        <Button style={{ width: "400px", padding: "10px 0" }} variant="contained">Send Request</Button>
                    </div>
                    <Button style={{ width: "400px", padding: "10px 0" }} variant="text">Return to sign-in</Button>
                </Container>


            </div>
        </>

    )



}
export default FogotPass;