import { useState } from "react";

function AddCustomer() {

  const [customer, setCustomer] = useState({
    name: "",
    phone: "",
    email: "",
    license: "",
  });

  const handleChange = (e) => {
    setCustomer({
      ...customer,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Customer Added Successfully!");
  };

  return (
    <div className="container mt-5">

      <div className="card shadow p-4">

        <h2 className="mb-4">Add Customer</h2>

        <form onSubmit={handleSubmit}>

          <div className="mb-3">
            <label>Name</label>
            <input
              className="form-control"
              name="name"
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label>Phone</label>
            <input
              className="form-control"
              name="phone"
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label>Driving License</label>
            <input
              className="form-control"
              name="license"
              onChange={handleChange}
            />
          </div>

          <button className="btn btn-dark w-100">
            Add Customer
          </button>

        </form>

      </div>

    </div>
  );
}

export default AddCustomer;