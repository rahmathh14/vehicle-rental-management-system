
import React, { useState } from "react";

function Booking() {

    const [customerName, setCustomerName] = useState("");
    const [vehicleName, setVehicleName] = useState("");
    const [bookingDate, setBookingDate] = useState("");
    const [days, setDays] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        alert("Vehicle booked successfully!");

        setCustomerName("");
        setVehicleName("");
        setBookingDate("");
        setDays("");
    };

    return (
        <div className="vehicle-page">

            <div className="vehicle-form-card">

                <div className="vehicle-form-header">
                    <div className="vehicle-form-icon">
                        📅
                    </div>

                    <div>
                        <h2>Book Vehicle</h2>
                        <p>Enter the booking details below</p>
                    </div>
                </div>

                <form onSubmit={handleSubmit}>

                    <div className="vehicle-form-group">
                        <label>Customer Name</label>

                        <input
                            type="text"
                            placeholder="Enter customer name"
                            value={customerName}
                            onChange={(e) => setCustomerName(e.target.value)}
                            required
                        />
                    </div>

                    <div className="vehicle-form-group">
                        <label>Vehicle Name</label>

                        <input
                            type="text"
                            placeholder="Enter vehicle name"
                            value={vehicleName}
                            onChange={(e) => setVehicleName(e.target.value)}
                            required
                        />
                    </div>

                    <div className="vehicle-form-group">
                        <label>Booking Date</label>

                        <input
                            type="date"
                            value={bookingDate}
                            onChange={(e) => setBookingDate(e.target.value)}
                            required
                        />
                    </div>

                    <div className="vehicle-form-group">
                        <label>Number of Days</label>

                        <input
                            type="number"
                            min="1"
                            placeholder="Enter number of days"
                            value={days}
                            onChange={(e) => setDays(e.target.value)}
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="vehicle-primary-btn"
                    >
                        Confirm Booking
                    </button>

                </form>

            </div>

        </div>
    );
}

export default Booking;
