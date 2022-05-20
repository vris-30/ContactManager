import React from "react";
import { FaTrash, FaRegEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../../../CSS/ContactCard/contactCard.css";

function ContactCard(props) {
  const { id, name, email } = props.contact;

  // function handleDelete() {
  //   return props.findId(id);
  // }
  return (
    <>
      <div className="form_wrapper">
        <div style={{ marginBottom: "1rem" }}>
          <Link to={`/contact/${id}`} state={{ contact: props.contact }}>
            <div>{name}</div>
            <div>{email}</div>
          </Link>
        </div>
        <Link to="/delete" state={{ contact: props.contact }}>
          <FaTrash style={{ marginRight: "2rem" }} />
        </Link>
        <Link to="/edit" state={{ contact: props.contact }}>
          <FaRegEdit />
        </Link>
      </div>
    </>
  );
}
export default ContactCard;
