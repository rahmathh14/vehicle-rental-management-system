
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
    getVehicles,
    updateVehicle
} from "../services/vehicleService";

function EditVehicle() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [price, setPrice] = useState("");

    useEffect(() => {

        getVehicles()
            .then(response => {

                const vehicle = response.data.find(
                    v => v.id === Number(id)
                );

                if (vehicle) {
                    setName(vehicle.name);
                    setType(vehicle.type);
                    setPrice(vehicle.price);
                }

            })
            .catch(error => {
                console.log("Error loading vehicle:", error);
            });

    }, [id]);

    const handleSubmit = (e) => {

        e.preventDefault();

        const vehicle = {
            name: name,
            type: type,
            price: Number(price)
        };

        updateVehicle(id, vehicle)
            .then(response => {

                console.log("Vehicle updated:", response.data);

                alert("Vehicle updated successfully!");

                navigate("/vehicles");

            })
            .catch(error => {

                console.log("Error updating vehicle:", error);

                alert("Failed to update vehicle");

            });
    };

    return (
        <div className="vehicle-page">

            <div className="vehicle-form-card">

                <div className="vehicle-form-header">

                    <div className="vehicle-form-icon">
                        ✏️
                    </div>

                    <div>
                        <h2>Edit Vehicle</h2>
                        <p>Update the details of your vehicle</p>
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

                            <option value="">
                                Select vehicle type
                            </option>

                            <option value="Car">
                                Car
                            </option>

                            <option value="Bike">
                                Bike
                            </option>

                            <option value="Van">
                                Van
                            </option>

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

                    <div className="vehicle-form-actions">

                        <button
                            type="button"
                            className="vehicle-cancel-btn"
                            onClick={() => navigate("/vehicles")}
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="vehicle-primary-btn"
                        >
                            Update Vehicle
                        </button>

                    </div>

                </form>

            </div>

        </div>
    );
}

export default EditVehicle;
