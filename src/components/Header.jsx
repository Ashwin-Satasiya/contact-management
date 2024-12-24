import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import { searchContact, resetContact } from "../features/contact/contactSlice";

const Header = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const onSearchFormSubmit = (e) => {
    e.preventDefault();
    if (search.trim()) {
      dispatch(searchContact(search));
    } else {
      alert("Write something on search");
    }
    setSearch("");
  };

  const onResetContact = () => {
    dispatch(resetContact());
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Contact Manager
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/add-contact">
                Add Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contacts">
                All Contacts
              </NavLink>
            </li>
          </ul>
          <form
            onSubmit={onSearchFormSubmit}
            className="d-flex ms-lg-3 mt-2 mt-lg-0"
          >
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-success" type="submit">
              Search
            </button>
          </form>
          <button
            onClick={() => onResetContact()}
            className="btn btn-warning  m-2"
          >
            Reset
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
