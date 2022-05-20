import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import user from "../../Image/user.png";
import "../../CSS/ContactDetails/contactDetails.css";

function ContactDetails(props) {
  const location = useLocation();
  const { name, email } = location.state.contact;

  return (
    <>
      <div className="wrapper">
        <div
          style={{
            marginTop: "2rem",
            border: "1px solid black",
            borderRadius: "10px",
            padding: "1rem",
          }}
        >
          <div style={{ marginBottom: "1rem", borderRadius: "25px" }}>
            <img src={user} alt="user" />
          </div>
          <div>{name}</div>
          <div style={{ margin: "1rem 0 1rem 0" }}>{email}</div>
          <Link to="/">
            <button>back to home</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default ContactDetails;
