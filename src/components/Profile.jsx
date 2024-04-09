import React from "react";
import "../../src/Styles.css";
import { Typography } from "@material-ui/core";
import image from "../images/Ellipse 114@2x.png";
import camera from "../images/Group 1585.svg";

const Profile = () => {
  return (
    <div className="profile">
      <div className="profile-div">
        <Typography
          variant="h5"
          style={{
            backgroundColor: "white",
            textAlign: "left",
            position: "relative",
            left: "20px",
          }}
        >
          Account Settings
        </Typography>
        <div className="image">
          <img src={image} alt="img" />
          <img
            src={camera}
            alt="camera"
            style={{ position: "relative", bottom: "50px", left: "125px" }}
          />
          <Typography
            variant="h6"
            style={{
              position: "relative",
              left: "171px",
              bottom: "150px",
              width: "95px",
              fontWeight: "bold",
              fontSize: "15px",
              color: "#1D2226",
            }}
          >
            Marry Doe
          </Typography>
          <Typography
            variant="h6"
            style={{
              position: "relative",
              left: "180px",
              bottom: "150px",
              width: "95px",
              fontWeight: "medium",
              fontSize: "12px",
              color: "#1D2226",
            }}
          >
            Marry@Gmail.Com
          </Typography>
          <Typography
            variant="h6"
            style={{
              width: "300px",
              fontSize: "15px",
              textAlign: "left",
              color: "#1D2226",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            facilisi. Mauris convallis, tortor sed ultricies aliquet, nibh purus
            posuere nibh, at dictum diam justo eget dui.{" "}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Profile;
