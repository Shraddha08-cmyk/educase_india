import React from "react";
import "../../src/Styles.css";
import { Button, TextField, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="signin">
      <div className="signin-div">
        <Typography
          variant="h5"
          style={{
            fontWeight: "bold",
            width: "200px",
            textAlign: "left",
            marginTop: "20px",
            marginLeft: "85px",
            position: "relative",
            right: "55px",
          }}
        >
          Signin to Your PopX Account
        </Typography>
        <Typography
          variant="p"
          style={{
            textAlign: "left",
            fontSize: "15px",
            width: "200px",
            fontWeight: "bold",
            position: "relative",
            left: "30px",
            color: "gray",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </Typography>
        <TextField
          id="outlined-basic"
          label="Email Address"
          variant="outlined"
          placeholder="Enter email address"
          style={{ width: "300px", position: "relative", left: "20px" }}
        />
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          placeholder="Password"
          style={{ width: "300px", position: "relative", left: "20px" }}
        />
        <Link to="/profile" style={{ alignSelf: "center" }}>
          <Button
            variant="contained"
            style={{
              color: "white",
              width: "300px",
            }}
          >
            Login
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
