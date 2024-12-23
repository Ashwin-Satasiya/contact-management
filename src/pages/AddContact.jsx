import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../features/contact/contactSlice";
import { useNavigate } from "react-router-dom";

const AddContact = () => {
  const [formContact, setFormContact] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onFromSubmit = (e) => {
    e.preventDefault();

    if (formContact.name && formContact.email && formContact.phone) {
      const newData = {
        id: Math.floor(Math.random() * 100 + 1),
        name: formContact.name,
        email: formContact.email,
        phone: formContact.phone,
      };
      dispatch(addContact(newData));
      setFormContact({ id: "", name: "", email: "", phone: "" });
      navigate("/");
    } else {
      alert("Fill the all fields");
    }
  };

  return (
    <div className="container mt-4" style={{ minHeight: "80vh" }}>
      <h2 className="text-center mb-4">Add New Contact</h2>
      <form onSubmit={onFromSubmit} className="card p-4 shadow-sm">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            value={formContact.name || ""}
            onChange={(e) =>
              setFormContact((prev) => {
                const name = e.target.value;
                return { ...prev, name };
              })
            }
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter full name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            value={formContact.email || ""}
            onChange={(e) =>
              setFormContact((prev) => {
                const email = e.target.value;
                return { ...prev, email };
              })
            }
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter email address"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Phone
          </label>
          <input
            value={formContact.phone || ""}
            onChange={(e) =>
              setFormContact((prev) => {
                const phone = e.target.value;
                return { ...prev, phone };
              })
            }
            type="tel"
            className="form-control"
            id="phone"
            placeholder="Enter phone number"
          />
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-primary w-25">
            Add Contact
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddContact;
