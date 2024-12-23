import React from "react";

import { useSelector } from "react-redux";

const AllContacts = () => {
  const contact = useSelector((state) => state.contact.value);

  return (
    <div className="container mt-4" style={{ minHeight: "80vh" }}>
      <h2 className="text-center mb-4">All Contacts</h2>
      <div className="card p-4 shadow-sm">
        <table className="table table-bordered table-hover">
          <thead className="table-light">
            <tr>
              <th scope="col">Sr. No.</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
            </tr>
          </thead>
          <tbody>
            {contact && contact.length > 0 ? (
              contact.map((contact) => (
                <tr key={contact.id}>
                  <td>{contact.id}</td>
                  <td>{contact.name}</td>
                  <td>{contact.email}</td>
                  <td>{contact.phone}</td>
                </tr>
              ))
            ) : (
              <tr className="text-center">
                <td colSpan={4} className="fs-3">
                  Data not available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllContacts;
