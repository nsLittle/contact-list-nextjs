"use client";
import React from "react";
import Link from "next/link";

export default function AllContactsList({
  contacts = [],
  // sortedContacts = [],
}) {
  const handleEdit = () => {
    alert("Edit button forthcoming.");
  };

  const handleDelete = () => {
    alert("Delete button forthcomiing.");
  };

  const sortedContacts = contacts
    .slice()
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <>
      <div className="contact-data-header">
        <p>Pic</p>
        <p className="contact-header-name">Name</p>
        <p>Email</p>
        <p>Phone</p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
      </div>

      <div className="contact-data-container">
        {sortedContacts.map((contact, index) => (
          <div className="contact-data" key={index}>
            <Link href={`/contacts${contact.name}`}>
              <img
                className="contact-data-url"
                src={contact.url}
                alt={contact.name}
              />
            </Link>
            <p className="contact-data-info">
              <Link href={`/contacts/${contact.name}`}>{contact.name}</Link>
            </p>
            <p className="contact-data-info">
              <Link href={`/contacts/${contact.name}`}>{contact.email}</Link>
            </p>
            <p className="contact-data-info">
              <Link href={`/contacts/${contact.name}`}>{contact.phone}</Link>
            </p>
            <button
              className="button button-edit contact-data-edit"
              onClick={handleEdit}
            >
              Edit
            </button>
            <button
              className="button button-delete contact-data-delete"
              onClick={handleDelete}
            >
              Delete
            </button>
            <br />
          </div>
        ))}
      </div>
    </>
  );
}
