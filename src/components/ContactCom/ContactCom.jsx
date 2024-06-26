import React, { useState } from "react";
import "./ContactCom.css";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { send } from "emailjs-com";
import ReCAPTCHA from "react-google-recaptcha";

const ContactUs = () => {
    const onChange = (value) => {
        console.log('Captcha value:', value);
        setIsCaptchaVerified(true);
    };

    const initialFormState = {
        from_name: "",
        number: "",
        message: "",
        reply_to: "",
    };

    const [toSend, setToSend] = useState(initialFormState);
    const [loading, setLoading] = useState(false);
    const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);
    const onSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        send("service_8gts3kf", "template_lgog1fu", toSend, "n7Qw70c534yIuNKHy")
            .then((response) => {
                console.log("SUCCESS!", response.status, response.text);
                setToSend(initialFormState);
                setLoading(false);
            })
            .catch((err) => {
                console.log("FAILED...", err);
                setLoading(false);
            });
    };

    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };

    return (
        <div>
            {/* <CssBaseline /> */}

            <div className="mainhead">
                <Container maxWidth="sm">
                    <Box className="contactus-container">
                        <Typography
                            variant="h4"
                            style={{
                                color: "#FFFFFF",
                                marginBottom: "30px",
                                textAlign: "center",
                                fontFamily: "Cormorant Upright",
                            }}
                        >
                            Connect with Us
                        </Typography>
                        <form onSubmit={onSubmit}>
                            <TextField
                                label="Your Name"
                                variant="outlined"
                                margin="normal"
                                name="from_name"
                                value={toSend.from_name}
                                onChange={handleChange}
                                fullWidth
                                style={{
                                    backgroundColor: "#28162b",
                                    marginBottom: "10px",
                                    width: "70%",
                                    borderRadius: "20px",
                                    marginLeft: "auto",
                                    marginRight: "auto",
                                    display: "block",
                                }}
                                InputLabelProps={{ style: { color: "#FF3EA5" } }}
                                inputProps={{ style: { color: "white" } }}
                            />
                            <TextField
                                label="Email"
                                variant="outlined"
                                margin="normal"
                                name="reply_to"
                                value={toSend.reply_to}
                                onChange={handleChange}
                                fullWidth
                                style={{
                                    backgroundColor: "#28162b",
                                    marginBottom: "10px",
                                    width: "70%",
                                    borderRadius: "20px",
                                    marginLeft: "auto",
                                    marginRight: "auto",
                                    display: "block",
                                }}
                                InputLabelProps={{ style: { color: "#FF3EA5" } }}
                                inputProps={{ style: { color: "white" } }}
                            />
                            <TextField
                                label="Phone Number"
                                variant="outlined"
                                margin="normal"
                                name="number"
                                value={toSend.number}
                                onChange={handleChange}
                                fullWidth
                                style={{
                                    backgroundColor: "#28162b",
                                    marginBottom: "10px",
                                    width: "70%",
                                    borderRadius: "20px",
                                    marginLeft: "auto",
                                    marginRight: "auto",
                                    display: "block",
                                }}
                                InputLabelProps={{ style: { color: "#FF3EA5" } }}
                                inputProps={{ style: { color: "white" } }}
                            />
                            <TextField
                                label="Message"
                                variant="outlined"
                                multiline
                                rows={4}
                                margin="normal"
                                name="message"
                                value={toSend.message}
                                onChange={handleChange}
                                fullWidth
                                style={{
                                    backgroundColor: "#28162b",
                                    marginBottom: "20px",
                                    width: "70%",
                                    borderRadius: "20px",
                                    marginLeft: "auto",
                                    marginRight: "auto",
                                    display: "block",
                                }}
                                InputLabelProps={{ style: { color: "#FF3EA5" } }}
                                inputProps={{ style: { color: "white" } }}
                            />
                            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                                <ReCAPTCHA
                                    sitekey="6Ld73J8pAAAAAGQgqrN9gt2FJ5khCIfiZPU1MKsS"
                                    onChange={onChange}
                                    style={{ display: 'inline-block' }}
                                />
                            </div>
                            <Button
                                variant="contained"
                                color="secondary"
                                type="submit"
                                size="small"
                                style={{ display: "block", margin: "0 auto" }}
                                className={isCaptchaVerified ? "" : "disabled-button"} // Apply a class based on ReCAPTCHA verification status
                                onClick={onSubmit}
                            >
                                {loading ? "Sending..." : "Submit"}
                            </Button>

                        </form>
                    </Box>
                </Container>
            </div>
        </div>
    );
};

export default ContactUs