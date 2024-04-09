import React from "react";
import "../../src/Styles.css";
import { Button, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import Accounts from "./Accounts";

const Welcome = () => {
  return (
    <div className="welcome">
      <div className="welcome-div">
        <Typography
          variant="h5"
          style={{
            fontWeight: "bold",
            textAlign: "left",
            marginLeft: "30px",
          }}
        >
          Welcome to PopX{" "}
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
        <Link to="/account" style={{ alignSelf: "center" }}>
          <Button
            variant="contained"
            style={{
              backgroundColor: "#642AF5",
              color: "white",
              width: "280px",
              textTransform: "capitalize",
            }}
          >
            Create Account
          </Button>
        </Link>
        <Link to="/signin" style={{ alignSelf: "center" }}>
          <Button
            variant="contained"
            style={{
              color: "black",
              width: "280px",
              fontSize: "12px",
              fontWeight: "bold",
              textTransform: "capitalize",
            }}
          >
            Already Registered? Login
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Welcome;
