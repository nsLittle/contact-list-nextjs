"use client";
import React from "react";
import Link from "next/link";
import { contacts, sortedContacts } from "../Data/page";
import AllContactsList from "../../components/AllContactsList";
import SearchBar from "../../components/SearchBar";
import AddContactsButton from "../../components/AddContactsButton";

export default function AllContacts() {
  return (
    <>
      <h2>All Contacts</h2>

      <Link className="routes" href="/new">
        <AddContactsButton />
      </Link>

      <SearchBar contacts={contacts} />

      <AllContactsList contacts={contacts} />
    </>
  );
}
