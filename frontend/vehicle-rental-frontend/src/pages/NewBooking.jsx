import { useState } from "react";

function NewBooking() {

  const [booking, setBooking] = useState({
    customer: "",
    vehicle: "",
    pickup: "",
    returnDate: "",
  });

  const handleChange = (e) => {
    setBooking({
      ...booking,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Booking Created Successfully!");
  };

  return (
    <div className="container mt-5">

      <div className="card shadow p-4">

        <h2 className="mb-4">
          New Booking
        </h2>

        <form onSubmit={handleSubmit}>

          <div className="mb-3">
            <label>Customer Name</label>

            <input
              type="text"
              className="form-control"
              name="customer"
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">

            <label>Vehicle</label>

            <select
              className="form-control"
              name="vehicle"
              onChange={handleChange}
            >

              <option>Select Vehicle</option>

              <option>Honda City</option>

              <option>Yamaha R15</option>

              <option>Toyota Innova</option>

            </select>

          </div>

          <div className="mb-3">

            <label>Pickup Date</label>

            <input
              type="date"
              className="form-control"
              name="pickup"
              onChange={handleChange}
            />

          </div>

          <div className="mb-3">

            <label>Return Date</label>

            <input
              type="date"
              className="form-control"
              name="returnDate"
              onChange={handleChange}
            />

          </div>

          <button className="btn btn-dark w-100">
            Create Booking
          </button>

        </form>

      </div>

    </div>
  );
}

export default NewBooking;