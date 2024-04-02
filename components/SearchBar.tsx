"use client";
import React from "react";
import PropTypes from "prop-types";

SearchBar.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
};

export default function SearchBar({ contacts }) {
  const [input, setInput] = React.useState<string>("");
  const [filteredData, setFilteredData] = React.useState<object>([]);

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchInput: string = e.target.value;
    setInput(e.target.value);
  };

  const handleSearchClick = () => {
    const foundContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(input.toLowerCase())
    );
    if (input === "") {
      alert("Please enter search contact name.");
    } else if (foundContacts.length === 0) {
      alert("Contact not found.");
    } else {
      setFilteredData(foundContacts);
    }
  };

  return (
    <>
      <div className="search-bar">
        <input
          className="input search-input"
          placeholder="Search by name"
          onChange={handleSearchInput}
        />
        <button className="button search-button" onClick={handleSearchClick}>
          Search
        </button>
      </div>
      <div>
        <ul>
          {filteredData &&
            Array.isArray(filteredData) &&
            filteredData.map((contact) => (
              <div className="search-result" key={contact.name}>
                <img
                  className="search-result-url"
                  src={contact.url}
                  alt={contact.name}
                />
                <div>
                  <li className="search-result-info">{contact.name}</li>
                  <li className="search-result-info">{contact.email}</li>
                  <li className="search-result-info">{contact.phone}</li>
                </div>
              </div>
            ))}
        </ul>
      </div>
    </>
  );
}
