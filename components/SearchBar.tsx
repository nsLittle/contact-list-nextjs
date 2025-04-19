"use client";
import React from "react";
import Image from "next/image";

type Contact = {
  name: string;
  url: string;
  email: string;
  phone: string;
};

type Props = {
  contacts: Contact[];
};

export default function SearchBar({ contacts }: Props) {
  const [input, setInput] = React.useState("");
  const [filteredData, setFilteredData] = React.useState<Contact[]>([]);

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSearchClick = () => {
    const foundContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(input.toLowerCase())
    );

    if (input.trim() === "") {
      alert("Please enter a name.");
    } else if (foundContacts.length === 0) {
      alert("No matching contact.");
    } else {
      setFilteredData(foundContacts);
    }
  };

  return (
    <div className="w-full px-[100px] mt-6">
      <div className="flex gap-4 items-center mb-8">
        <input
          type="text"
          className="border border-gray-300 px-4 py-2 rounded w-[250px] text-sm text-[#5a5a5a]"
          placeholder="Search by name"
          onChange={handleSearchInput}
        />
        <button
          className="px-4 py-2 text-sm bg-gray-200 rounded hover:bg-gray-300"
          onClick={handleSearchClick}>
          Search
        </button>
      </div>

      <div className="flex flex-wrap gap-6">
        {filteredData.map((contact) => (
          <div
            key={contact.name}
            className="bg-white p-4 rounded-lg shadow-md w-full max-w-sm flex flex-col gap-2 text-[#5a5a5a]">
            <div className="flex items-center gap-4">
              <div className="w-[60px] h-[60px] rounded-full overflow-hidden">
                <Image
                  src={contact.url}
                  alt={contact.name}
                  width={60}
                  height={60}
                  className="object-cover w-[60px] h-[60px]"
                />
              </div>
              <p className="text-lg font-semibold">{contact.name}</p>
            </div>
            <p className="text-sm">{contact.email}</p>
            <p className="text-sm">{contact.phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
