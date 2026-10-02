
import React from "react";

function About() {

    return (
        <div className="about-page">

            <div className="about-card">

                <div className="about-icon">
                    🚗
                </div>

                <h1>Vehicle Rental System</h1>

                <p className="about-intro">
                    A simple and efficient system for managing
                    vehicles, bookings and returns.
                </p>

                <div className="about-section">

                    <h3>About the System</h3>

                    <p>
                        The Vehicle Rental Management System helps
                        manage rental vehicles in an easy and
                        organized way. Admins can add, view, edit
                        and delete vehicles and manage customer
                        bookings.
                    </p>

                </div>

                <div className="about-features">

                    <div className="about-feature">
                        <span>🚘</span>
                        <h4>Vehicle Management</h4>
                        <p>
                            Add and manage rental vehicles easily.
                        </p>
                    </div>

                    <div className="about-feature">
                        <span>📅</span>
                        <h4>Easy Booking</h4>
                        <p>
                            Manage vehicle booking information.
                        </p>
                    </div>

                    <div className="about-feature">
                        <span>🔄</span>
                        <h4>Quick Returns</h4>
                        <p>
                            Record vehicle returns efficiently.
                        </p>
                    </div>

                </div>

            </div>

        </div>
    );
}

export default About;
