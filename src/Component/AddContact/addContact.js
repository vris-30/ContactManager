import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../CSS/AddContact/addContact.css";

const AddContact = (props) => {
  const [contact, setContact] = useState({ name: "", email: "" });
  const navigate = useNavigate();

  function handleOnChange(e) {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (contact.name === "" || contact.email === "") {
      alert("all field mandatory");
      return;
    }
    props.AddContacts(contact);
    setContact({
      name: "",
      email: "",
    });
    navigate("/");
  };

  return (
    <div className="container">
      <div className="form_wrapper">
        <h2>Add Contact</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>name</label>
            <input
              onChange={handleOnChange}
              type="text"
              name="name"
              placeholder="name"
              value={contact.name}
            ></input>
          </div>
          <div>
            <label>Email</label>
            <input
              onChange={handleOnChange}
              type="text"
              name="email"
              placeholder="email"
              value={contact.email}
            ></input>
          </div>

          <button style={{ marginRight: "10px" }}>Add</button>
          <Link to="/">
            <button>back</button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default AddContact;
