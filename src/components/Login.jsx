import React, { useState } from "react";
import "../styles/Login.css";
import pic from "../Assests/amazon.png";
import tree from "../Assests/tree.png";
import google from "../Assests/google.png";
import facebook from "../Assests/facebook.png";
import stop from "../Assests/Group 2.svg";
import TextField from "@mui/material/TextField";
import { Box, Button, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const submitHandler = async (e) => {
    e.preventDefault();
    let email = e.target[0].value;

    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!email.match(pattern)) {
      setError(true);
    } else {
      setError(false);
    }
  };
  return (
    <div className="login">
      <div className="background_image"></div>
      <div className="login_box">
        <div className="login_header">
          <div className="header_image">
            <img src={pic} alt="amazon" />
          </div>
        </div>
        <div className="login_body">
          <div className="login_body_header">
            <div className="login_body_header_text">
              <p> Login</p>
            </div>
          </div>
          <div className="login_body_content">
            <div className="login_body_header_image">
              <img src={tree} alt="tree" />
            </div>
            <div className="login_body_form">
              <form onSubmit={submitHandler}>
                <TextField
                  InputLabelProps={{
                    style: { color: "#20b716" },
                  }}
                  label="Email"
                  name="email"
                  variant="standard"
                  fullWidth
                  color="success"
                />
                {error ? (
                  <div className="show_error">
                    <img src={stop} alt="error" />
                    <span>The email field is required</span>
                  </div>
                ) : null}
                <TextField
                  InputLabelProps={{
                    style: { color: "#20b716" },
                  }}
                  sx={{ marginTop: { lg: "20px", md: "10px" } }}
                  label="Password"
                  type="password"
                  name="password"
                  variant="standard"
                  color="success"
                  fullWidth
                />
                <div className="sign_in_button">
                  <Button
                    variant="contained"
                    color="success"
                    fullWidth
                    type="submit"
                  >
                    Sign In
                  </Button>
                </div>
              </form>
              <div className="forgot_password_row">
                <Link underline="none" color={"000000"}>
                  Forgot Password?
                </Link>

                <Link className="new_user" underline="none" color={"#d9185f"}>
                  New User? Sign Up
                </Link>
              </div>
              <Box
                paddingY={"16px"}
                paddingBottom={"24px"}
                textAlign={"center"}
              >
                or
              </Box>
              <div className="social_links">
                <div className="google_link">
                  <Button
                    color="primary"
                    fullWidth
                    variant="contained"
                    startIcon={<img src={google} alt="google" />}
                  >
                    <p>CONTINUE WITH GOOGLE</p>
                  </Button>
                </div>
                <div className="facebook_link">
                  <Button
                    color="primary"
                    fullWidth
                    variant="contained"
                    startIcon={<img src={facebook} alt="facebook" />}
                    sx={{
                      marginTop: "16px",
                    }}
                  >
                    <p>CONTINUE WITH FACEBOOK</p>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="link_different_page">
        <Button
          variant="contained"
          onClick={() => {
            navigate("/video");
          }}
        >
          To Video
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            navigate("/date");
          }}
        >
          To Date
        </Button>
      </div>
    </div>
  );
};

export default Login;
