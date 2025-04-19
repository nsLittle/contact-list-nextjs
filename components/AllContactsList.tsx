"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function AllContactsList({ contacts = [] }) {
  const handleEdit = () => alert("Edit button forthcoming.");
  const handleDelete = () => alert("Delete button forthcoming.");

  const sortedContacts = contacts
    .slice()
    .sort((a, b) => a.name.localeCompare(b.name));

  console.log(sortedContacts);

  return (
    <div className="flex flex-col items-center gap-8">
      <h2 className="text-[4rem] font-bold text-[#5a5a5a] mb-10">
        All Contacts
      </h2>

      <div className="flex flex-wrap justify-center gap-8 w-full">
        {sortedContacts.map((contact, index) => (
          <div
            key={index}
            className="bg-[#fdfdfc] text-[#5a5a5a] rounded-lg shadow-md p-6 flex flex-col gap-3 hover:shadow-xl transition w-full max-w-sm w-full">
            <div className="flex items-center gap-4">
              <div className="w-[100px] h-[100px] rounded-full overflow-hidden flex items-center justify-center">
                <Image
                  src={contact.url}
                  alt={contact.name}
                  width={100}
                  height={100}
                  className="object-cover object-top w-[100px] h-[100px] rounded-full"
                />
              </div>
              <Link href={`/contacts/${contact.name}`}>
                <div className="w-[200px] overflow-hidden">
                  <p className="text-2xl font-semibold hover:underline truncate">
                    {contact.name}
                  </p>
                </div>
              </Link>
            </div>
            <div className="pl-[115px] -mt-[50px]">
              <p className="text-base">{contact.email}</p>
              <p className="text-base">{contact.phone}</p>
            </div>

            <div className="mt-4 flex gap-4 justify-center">
              <button
                onClick={handleEdit}
                className="px-3 py-1 text-sm bg-gray-200 rounded hover:bg-gray-300">
                Edit
              </button>
              <button
                onClick={handleDelete}
                className="px-3 py-1 text-sm bg-red-100 text-red-700 rounded hover:bg-red-200">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
