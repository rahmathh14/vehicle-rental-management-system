import { Link } from "react-router-dom";

function Customers() {
  const customers = [
    {
      id: 1,
      name: "Rahul",
      phone: "9876543210",
      email: "rahul@gmail.com",
      license: "TN12345678",
    },
    {
      id: 2,
      name: "Priya",
      phone: "9123456789",
      email: "priya@gmail.com",
      license: "TN87654321",
    },
    {
      id: 3,
      name: "Arun",
      phone: "9988776655",
      email: "arun@gmail.com",
      license: "KL55667788",
    },
  ];

  return (
    <div className="container mt-5">

      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Customer Management</h2>

        <Link to="/addcustomer" className="btn btn-dark">
          + Add Customer
        </Link>
      </div>

      <input
        type="text"
        className="form-control mb-3"
        placeholder="Search Customer..."
      />

      <table className="table table-bordered table-hover shadow">

        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Driving License</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>

          {customers.map((customer) => (

            <tr key={customer.id}>

              <td>{customer.id}</td>

              <td>{customer.name}</td>

              <td>{customer.phone}</td>

              <td>{customer.email}</td>

              <td>{customer.license}</td>

              <td>

                <Link
                  to="/editcustomer"
                  className="btn btn-primary btn-sm me-2"
                >
                  Edit
                </Link>

                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => alert("Customer Deleted")}
                >
                  Delete
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default Customers;