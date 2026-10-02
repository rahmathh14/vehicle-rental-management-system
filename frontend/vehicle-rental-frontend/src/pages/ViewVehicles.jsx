
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    getVehicles,
    deleteVehicle
} from "../services/vehicleService";

function ViewVehicles() {

    const [vehicles, setVehicles] = useState([]);
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();

    const loadVehicles = () => {

        setLoading(true);

        getVehicles()
            .then(response => {
                setVehicles(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.log("Error fetching vehicles:", error);
                setLoading(false);
            });

    };

    useEffect(() => {
        loadVehicles();
    }, []);

    const handleDelete = (id) => {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this vehicle?"
        );

        if (!confirmDelete) {
            return;
        }

        deleteVehicle(id)
            .then(() => {
                alert("Vehicle deleted successfully!");
                loadVehicles();
            })
            .catch(error => {
                console.log("Error deleting vehicle:", error);
                alert("Failed to delete vehicle");
            });

    };

    return (
        <div className="vehicle-list-page">

            {/* Page Header */}
            <div className="vehicle-list-header">

                <div>
                    <h2>Available Vehicles</h2>
                    <p>
                        Manage all vehicles in your rental system
                    </p>
                </div>

                <button
                    className="vehicle-primary-btn vehicle-add-btn"
                    onClick={() => navigate("/addvehicle")}
                >
                    + Add Vehicle
                </button>

            </div>

            {/* Loading */}
            {loading && (
                <div className="message-box">
                    <h3>Loading Vehicles...</h3>
                    <p>Please wait while we fetch the vehicle details.</p>
                </div>
            )}

            {/* No Vehicles */}
            {!loading && vehicles.length === 0 && (
                <div className="message-box">
                    <h3>No Vehicles Found</h3>
                    <p>
                        There are no vehicles available.
                        Add a new vehicle to get started.
                    </p>
                </div>
            )}

            {/* Vehicle Cards */}
            {!loading && vehicles.length > 0 && (
                <div className="vehicle-grid">

                    {vehicles.map(vehicle => (

                        <div
                            className="vehicle-card"
                            key={vehicle.id}
                        >

                            <div className="vehicle-card-icon">
                                {vehicle.type === "Bike" ? "🏍️" : "🚗"}
                            </div>

                            <h3>{vehicle.name}</h3>

                            <p className="vehicle-card-type">
                                {vehicle.type}
                            </p>

                            <div className="vehicle-card-price">
                                ₹{vehicle.price}
                                <small> / day</small>
                            </div>

                            <div className="vehicle-card-actions">

                                <button
                                    className="vehicle-edit-btn"
                                    onClick={() =>
                                        navigate(
                                            `/editvehicle/${vehicle.id}`
                                        )
                                    }
                                >
                                    Edit
                                </button>

                                <button
                                    className="vehicle-delete-btn"
                                    onClick={() =>
                                        handleDelete(vehicle.id)
                                    }
                                >
                                    Delete
                                </button>

                            </div>

                        </div>

                    ))}

                </div>
            )}

        </div>
    );
}

export default ViewVehicles;
