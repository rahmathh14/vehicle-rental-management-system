import { useState } from "react";

function EditCustomer() {

  const [customer, setCustomer] = useState({
    name: "Rahul",
    phone: "9876543210",
    email: "rahul@gmail.com",
    license: "TN12345678",
  });

  const handleChange = (e) => {
    setCustomer({
      ...customer,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Customer Updated Successfully!");
  };

  return (
    <div className="container mt-5">

      <div className="card shadow p-4">

        <h2 className="mb-4">Edit Customer</h2>

        <form onSubmit={handleSubmit}>

          <input
            className="form-control mb-3"
            name="name"
            value={customer.name}
            onChange={handleChange}
          />

          <input
            className="form-control mb-3"
            name="phone"
            value={customer.phone}
            onChange={handleChange}
          />

          <input
            className="form-control mb-3"
            name="email"
            value={customer.email}
            onChange={handleChange}
          />

          <input
            className="form-control mb-3"
            name="license"
            value={customer.license}
            onChange={handleChange}
          />

          <button className="btn btn-success w-100">
            Update Customer
          </button>

        </form>

      </div>

    </div>
  );
}

export default EditCustomer;