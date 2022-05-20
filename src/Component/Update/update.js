import React, { useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";

const Update = (props) => {
  const location = useLocation();

  console.log(props);
  const { name, email, id } = location.state.contact;

  const [contact, setContact] = useState({ name: name, email: email, id: id });
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
    props.UpdateCo(contact);
    setContact({
      name: "",
      email: "",
    });
    navigate("/");
  };

  return (
    <>
      <div className="container">
        <div className="form_wrapper">
          <h2>Update Contact</h2>
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

            <button style={{ marginRight: "2rem" }}>Update</button>
            <Link to="/">
              <button>back</button>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default Update;
