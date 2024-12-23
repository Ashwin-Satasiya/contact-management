import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const contacts = useSelector((state) => state.contact.value);
  const navigate = useNavigate();

  return (
    <div className="container mt-4" style={{ minHeight: "80vh" }}>
      <h2 className="text-center mb-4">Contact Information</h2>
      <div className="row">
        {contacts && contacts.length > 0 ? (
          contacts.map((contact) => (
            <div key={contact.id} className="col-md-4 mb-4">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{contact.name}</h5>
                  <p className="card-text">
                    <strong>Email:</strong> {contact.email}
                  </p>
                  <p className="card-text">
                    <strong>Phone:</strong> {contact.phone}
                  </p>
                  <div className="d-flex justify-content-between">
                    <button className="btn btn-warning btn-sm">Edit</button>
                    <button className="btn btn-danger btn-sm">Delete</button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col">
            <div className="text-center">
              <div className="text-center fs-3">Data not available</div>
              <button
                onClick={() => navigate("/add-contact")}
                className="btn btn-info mt-3"
              >
                Go to Add Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
