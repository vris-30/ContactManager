import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const DeleteContact = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { name, email, id } = location.state.contact;

  const DeleteContact = () => {
    props.deleteContact(id);
    navigate("/");
  };
  return (
    <div className="wrapper wrapper_delete">
      <h2>Do you want to delete ?</h2>
      <div>
        <button style={{ marginRight: "2rem" }} onClick={DeleteContact}>
          Yes
        </button>
        <Link to="/">
          <button>NO</button>
        </Link>
      </div>
    </div>
  );
};
export default DeleteContact;
