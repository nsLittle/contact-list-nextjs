"use client";
import React from "react";
import AddContactsBar from "../../components/AddContactsBar";
import { contacts } from "../Data/page";
import sortedContacts from "../../components/AllContactsList";

export default function AddNewContacts() {
  return (
    <>
      <h2>Add Contacts</h2>
      <AddContactsBar contacts={contacts} />
    </>
  );
}
