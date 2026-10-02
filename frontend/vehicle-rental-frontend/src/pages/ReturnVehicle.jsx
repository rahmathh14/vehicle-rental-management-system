
import React, { useState } from "react";

function ReturnVehicle() {

    const [vehicleName, setVehicleName] = useState("");
    const [customerName, setCustomerName] = useState("");
    const [returnDate, setReturnDate] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        alert("Vehicle returned successfully!");

        setVehicleName("");
        setCustomerName("");
        setReturnDate("");
    };

    return (
        <div className="vehicle-page">

            <div className="vehicle-form-card">

                <div className="vehicle-form-header">

                    <div className="vehicle-form-icon">
                        🔄
                    </div>

                    <div>
                        <h2>Return Vehicle</h2>
                        <p>Enter the vehicle return details</p>
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
                        <label>Return Date</label>

                        <input
                            type="date"
                            value={returnDate}
                            onChange={(e) => setReturnDate(e.target.value)}
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="vehicle-primary-btn"
                    >
                        Return Vehicle
                    </button>

                </form>

            </div>

        </div>
    );
}

export default ReturnVehicle;
