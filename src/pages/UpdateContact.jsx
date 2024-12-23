import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editContact } from "../features/contact/contactSlice";
import { toast } from "react-toastify";
const UpdateContact = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const contact = useSelector((state) => {
    const newData = state.contact.value;
    return newData.find((data) => data.id === Number(id));
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    if (contact) {
      setFormData(contact);
    }
  }, [contact]);

  const onFormSubmit = (e) => {
    e.preventDefault();

    if (formData.name && formData.email && formData.phone) {
      dispatch(editContact(formData));
      setFormData({ name: "", email: "", phone: "" });
      toast.success("Contact updated successfully!", {
        position: "top-right",
        autoClose: 3000,
      });
      navigate("/");
    } else {
      toast.warning("Fill the all fields!", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  return (
    <div className="container mt-4" style={{ minHeight: "80vh" }}>
      <h2 className="text-center mb-4">Update Contact</h2>
      <form onSubmit={onFormSubmit} className="card p-4 shadow-sm">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            value={formData.name || ""}
            onChange={(e) =>
              setFormData((prev) => {
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
            value={formData.email || ""}
            onChange={(e) =>
              setFormData((prev) => {
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
            value={formData.phone || ""}
            onChange={(e) =>
              setFormData((prev) => {
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
            Update Contact
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateContact;
