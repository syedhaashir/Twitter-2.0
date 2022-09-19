import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

export default function Navbar() {
  return (
    <div className="page">
      <div className="page-header">
        <h1 className="brandName">Twitter</h1>
        <div className="logo">
          <FaTwitter />
        </div>
        <div className="searchbar">
          <div className="icon">
            <FiSearch />
          </div>
          <input
            className="search"
            type="text"
            name="search"
            placeholder="        Search Twitter"
          ></input>
        </div>
      </div>
    </div>
  );
}
