"use client";
import React from "react";
import Link from "next/link";
import Image from 'next/image';

export default function AllContactsList({
  contacts = [],
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
      </div>

      <div className="contact-data-container">
        {sortedContacts.map((contact, index) => (
          <div className="contact-data" key={index}>
            <Link href={`/contacts${contact.name}`}>
              <Image
                className="contact-data-url"
                src={contact.url}
                alt={contact.name}
                width={30}
                height={30}
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
