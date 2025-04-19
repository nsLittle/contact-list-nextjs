"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

type Contact = {
  name: string;
  url: string;
  email: string;
  phone: string;
};

type Props = {
  contacts: Contact[];
};

export default function AddContactsBar({ contacts = [] }: Props) {
  const [inputName, setInputName] = useState("");
  const [inputUrl, setInputUrl] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputPhone, setInputPhone] = useState("");
  const router = useRouter();

  const handleClickAdd = (e: React.MouseEvent<HTMLButtonElement>) => {
    const newContact: Contact = {
      name: inputName,
      url: inputUrl,
      email: inputEmail,
      phone: inputPhone,
    };

    if (!newContact.name) {
      alert("Please enter a name.");
    } else if (!newContact.url) {
      alert("Please enter a picture URL.");
    } else if (!newContact.email) {
      alert("Please enter an email address.");
    } else if (!newContact.phone) {
      alert("Please enter a phone number.");
    } else {
      contacts.push(newContact);
      router.push("/contacts");
    }
  };

  return (
    <div className="w-full px-[100px] pt-10 text-[#5a5a5a]">
      <h2 className="text-4xl font-bold mb-6">Add New Contact</h2>

      <div className="flex flex-col gap-4 max-w-md">
        <label className="font-medium">Name</label>
        <input
          className="border border-gray-300 rounded px-4 py-2"
          placeholder="Contact name"
          onChange={(e) => setInputName(e.target.value)}
        />

        <label className="font-medium">Picture URL</label>
        <input
          className="border border-gray-300 rounded px-4 py-2"
          placeholder="Contact image URL"
          onChange={(e) => setInputUrl(e.target.value)}
        />

        <label className="font-medium">Email</label>
        <input
          className="border border-gray-300 rounded px-4 py-2"
          placeholder="Contact email"
          onChange={(e) => setInputEmail(e.target.value)}
        />

        <label className="font-medium">Phone</label>
        <input
          className="border border-gray-300 rounded px-4 py-2"
          placeholder="Contact phone"
          onChange={(e) => setInputPhone(e.target.value)}
        />
      </div>

      <div className="mt-8">
        <button
          className="px-5 py-2 bg-green-200 text-[#5a5a5a] rounded hover:bg-green-300 text-sm font-medium shadow-sm transition"
          onClick={handleClickAdd}>
          Submit
        </button>
      </div>
    </div>
  );
}
