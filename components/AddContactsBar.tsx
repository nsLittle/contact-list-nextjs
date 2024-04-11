import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddContactsBar({ contacts }) {
  interface Contacts {
    name: string;
    url: string;
    email: string;
    phone: string;
  }

  const [inputName, setInputName] = useState("");
  const [inputUrl, setInputUrl] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputPhone, setInputPhone] = useState("");
  const router = useRouter();

  const handleInputName = (e) => {
    setInputName(e.target.value);
    console.log(e.target.value);
  };

  const handleInputUrl = (e) => {
    setInputUrl(e.target.value);
    console.log(e.target.value);
  };

  const handleInputEmail = (e) => {
    setInputEmail(e.target.value);
    console.log(e.target.value);
  };

  const handleInputPhone = (e) => {
    setInputPhone(e.target.value);
    console.log(e.target.value);
  };

  const handleClickAdd = (event) => {
    let newContact: Contacts = {
      name: inputName,
      url: inputUrl,
      email: inputEmail,
      phone: inputPhone,
    };
    if (newContact.name === "") {
      alert("Please enter a name.");
    } else if (newContact.url === "") {
      alert("Please enter picture url.");
    } else if (newContact.email === "") {
      alert("Please enter an email address.");
    } else if (newContact.phone === "") {
      alert("Pleasae enter a phone number.");
      event.preventDefault();
    } else {
      contacts.push(newContact);
      router.push("/contacts");
    }
  };

  return (
    <>
      <div className="add-contact-container">
        <h3>Name</h3>
        <input
          className="input input-add"
          placeholder="Contact name"
          onChange={handleInputName}
        ></input>
        <h3>Picture</h3>
        <input
          className="input input-add"
          placeholder="Contact url"
          onChange={handleInputUrl}
        ></input>
        <h3>Email</h3>
        <input
          className="input input-add"
          placeholder="Contact email"
          onChange={handleInputEmail}
        ></input>
        <h3>Phone</h3>
        <input
          className="input input-add"
          placeholder="Contact phone"
          onChange={handleInputPhone}
        ></input>
      </div>

      <br />
      <br />

      <div className="button-submit-add-bar">
        <button className="button button-sumit-add" onClick={handleClickAdd}>
          Submit
        </button>
      </div>
    </>
  );
}
