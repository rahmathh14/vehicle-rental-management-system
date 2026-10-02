import { Link } from "react-router-dom";

function Navbar() {
  return (
  <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
      <div className="container">

        <Link className="navbar-brand fw-bold" to="/">
          Vehicle Rental System
        </Link>

        <div className="navbar-nav ms-auto">

          <Link className="nav-link text-white" to="/">
            Home
          </Link>

          <Link className="nav-link text-white" to="/vehicles">
            Vehicles
          </Link>

          <Link className="nav-link text-white" to="/addvehicle">
            Add Vehicle
          </Link>

          <Link className="nav-link text-white" to="/booking">
            Booking
          </Link>

          <Link className="nav-link text-white" to="/returnvehicle">
            Return Vehicle
          </Link>

          <Link className="nav-link text-white" to="/about">
            About
          </Link>
          <Link className="nav-link text-white" to="/login">
  Login
</Link>

        </div>

      </div>
    </nav>
    
  );
}

export default Navbar;