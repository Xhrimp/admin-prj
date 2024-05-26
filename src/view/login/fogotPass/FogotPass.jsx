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

                    <TextField align="center" style={{ display: "flex", width: "400px", marginTop: "20px", margin: "0 auto" }} id="outlined-basic" label="Type your Email Address" variant="outlined" >



                    </TextField>
                    <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", padding: "5px 76px", marginTop: "10px" }}>

                        <Button align="center" style={{ width: "100%", padding: "10px 0", display: "flex" }} variant="contained">Send Request</Button>
                        <Button style={{ width: "100%", padding: "10px 0" }} variant="text">Return to sign-in</Button>
                    </div>


                </Container >


            </div >
        </>

    )



}
export default FogotPass;