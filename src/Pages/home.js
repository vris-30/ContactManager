import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import AddContact from "../Component/AddContact/addContact";
import Header from "../Component/Header/header";
import api from "../api/contacts";
import Update from "../Component/Update/update";
import ContactList from "../Component/ContactList/contactList";
import ContactDetails from "../Component/ContactDetails/contactDetails";
import { FaUserInjured } from "react-icons/fa";
import DeleteContact from "../Component/DeleteContact/deleteContact";

function Home() {
  const [contacts, setContacts] = useState([]);
  const [searchContacts, setsearchContacts] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  //retrive contacts from api
  const retriveContacts = async () => {
    const responce = await api.get("/contacts");
    return responce.data;
  };

  const AddContacts = async (contact) => {
    const request = { id: new Date().getTime().toString(), ...contact };

    const responce = await api.post("/contacts", request);

    setContacts([...contacts, responce.data]);
  };
  //
  const UpdateContact = async (contact) => {
    const responce = await api.put(`/contacts/${contact.id}`, contact);
    const { name, email, id } = responce.data;

    setContacts(
      contacts.map((contact) => {
        return contact.id === id ? { ...responce.data } : contact;
      })
    );
  };

  // useEffect(() => {
  //   localStorage.setItem("contacts", JSON.stringify(contacts));
  // }, [contacts]);

  // useEffect(() => {
  //   const retrived = JSON.parse(localStorage.getItem("contacts"));
  //   console.log(retrived);
  //   if (retrived) {
  //     setContacts(retrived);
  //   }
  // }, []);
  //render contact data initial
  useEffect(() => {
    const getAllContacts = async () => {
      const allContact = await retriveContacts();

      if (allContact) setContacts(allContact);
    };
    getAllContacts();
  }, []);

  //delete contact from api
  const deleteContacts = async (id) => {
    await api.delete(`/contacts/${id}`);
    setContacts(
      contacts.filter((contact) => {
        return contact.id != id;
      })
    );
  };
  function NoMatch() {
    return (
      <div>
        <h2>not avilable</h2>
      </div>
    );
  }
  //searching function
  const searchFilter = (searchText) => {
    setsearchContacts(searchText);
    if (searchText != "") {
      const newContact = contacts.filter((contact) => {
        return Object.values(contact)
          .join(" ")
          .toLowerCase()
          .includes(searchText.toLowerCase());
      });
      setSearchResult(newContact);
    } else {
      setSearchResult(contacts);
    }
  };

  return (
    <>
      <Router>
        <Header />

        <Routes>
          <Route
            path="/"
            end
            element={
              <ContactList
                contacts={searchContacts.length < 1 ? contacts : searchResult}
                searchText={searchContacts}
                searchClick={searchFilter}
              />
            }
          />
          <Route
            path="/add"
            element={<AddContact AddContacts={AddContacts} />}
          />

          <Route path="/contact/:id" element={<ContactDetails />} />

          <Route path="/edit" element={<Update UpdateCo={UpdateContact} />} />
          <Route
            path="/delete"
            element={<DeleteContact deleteContact={deleteContacts} />}
          />
        </Routes>
      </Router>
    </>
  );
}
export default Home;
