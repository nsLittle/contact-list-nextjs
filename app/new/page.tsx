"use client";
import React from "react";
import AddContactsBar from "../../components/AddContactsBar";
import { contacts } from "../Data/page";
import sortedContacts from "../../components/AllContactsList";

export default function AddContacts() {
  type AppProps = {
    sortedContacts: { strings };
  };

  return (
    <>
      <h2>Add Contacts</h2>
      <AddContactsBar sortedContacts={sortedContacts} contacts={contacts} />
    </>
  );
}
