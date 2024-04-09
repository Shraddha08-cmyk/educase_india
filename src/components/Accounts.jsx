import {
  TextField,
  Typography,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
} from "@material-ui/core";
import React from "react";
import "../../src/Styles.css";
import { Link } from "react-router-dom";

const Accounts = () => {
  return (
    <div className="account">
      <div className="account-div">
        <Typography
          variant="h5"
          style={{
            fontWeight: "bold",
            width: "200px",
            textAlign: "left",
            marginTop: "20px",
            marginLeft: "85px",
          }}
        >
          Create Your PopX Account
        </Typography>
        <TextField
          required
          id="outlined-basic"
          label="Full Name"
          variant="outlined"
          // defaultValue="Marry Doe"
          style={{ width: "300px", position: "relative", left: "20px" }}
        />
        <TextField
          required
          id="outlined-basic"
          label="Phone Number"
          variant="outlined"
          // defaultValue="Marry Doe"
          style={{ width: "300px", position: "relative", left: "20px" }}
        />
        <TextField
          required
          id="outlined-basic"
          label="Email Address"
          variant="outlined"
          // defaultValue="Marry Doe"
          style={{ width: "300px", position: "relative", left: "20px" }}
        />
        <TextField
          required
          id="outlined-basic"
          label="Password"
          variant="outlined"
          // defaultValue="Marry Doe"
          style={{ width: "300px", position: "relative", left: "20px" }}
        />
        <TextField
          id="outlined-basic"
          label="Company Name"
          variant="outlined"
          // defaultValue="Marry Doe"
          style={{ width: "300px", position: "relative", left: "20px" }}
        />
        <FormControl style={{ position: "relative", left: "30px" }}>
          <FormLabel
            required
            id="demo-row-radio-buttons-group-label"
            style={{ textAlign: "left", fontSize: "14px", fontWeight: "bold" }}
          >
            Are you an Agency?
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="female" control={<Radio />} label="Yes" />
            <FormControlLabel value="male" control={<Radio />} label="No" />
          </RadioGroup>
        </FormControl>
        <Link to="/signin" style={{ alignSelf: "center" }}>
          <Button
            variant="contained"
            style={{
              backgroundColor: "#642AF5",
              color: "white",
              width: "290px",
            }}
          >
            Create Account
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Accounts;
