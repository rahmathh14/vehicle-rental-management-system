
import React, { useState } from "react";
import { addVehicle } from "../services/vehicleService";

function AddVehicle() {

    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [price, setPrice] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const vehicle = {
            name: name,
            type: type,
            price: Number(price)
        };

        addVehicle(vehicle)
            .then(response => {
                console.log("Vehicle added:", response.data);
                alert("Vehicle added successfully!");

                setName("");
                setType("");
                setPrice("");
            })
            .catch(error => {
                console.log("Error adding vehicle:", error);
                alert("Failed to add vehicle");
            });
    };

    return (
        <div className="vehicle-page">

            <div className="vehicle-form-card">

                <div className="vehicle-form-header">
                    <div className="vehicle-form-icon">🚗</div>

                    <div>
                        <h2>Add Vehicle</h2>
                        <p>Add a new vehicle to your rental system</p>
                    </div>
                </div>

                <form onSubmit={handleSubmit}>

                    <div className="vehicle-form-group">
                        <label>Vehicle Name</label>

                        <input
                            type="text"
                            placeholder="Enter vehicle name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>

                    <div className="vehicle-form-group">
                        <label>Vehicle Type</label>

                        <select
                            value={type}
                            onChange={(e) => setType(e.target.value)}
                            required
                        >
                            <option value="">Select vehicle type</option>
                            <option value="Car">Car</option>
                            <option value="Bike">Bike</option>
                            <option value="Van">Van</option>
                        </select>
                    </div>

                    <div className="vehicle-form-group">
                        <label>Price Per Day</label>

                        <div className="price-input">
                            <span>₹</span>

                            <input
                                type="number"
                                placeholder="Enter daily rental price"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <button type="submit" className="vehicle-primary-btn">
                        Add Vehicle
                    </button>

                </form>

            </div>

        </div>
    );
}

export default AddVehicle;
