import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2 className="logo">RentalSys</h2>

      <ul>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/vehicles">Vehicles</Link></li>
        <li><Link to="/addvehicle">Add Vehicle</Link></li>
        <li><Link to="/booking">Bookings</Link></li>
        <li><Link to="/customers">Customers</Link></li>
        <li><Link to="/addcustomer">Add Customer</Link></li>
        <li><Link to="/returnvehicle">Returns</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/reports">Reports</Link></li>
<li><Link to="/settings">Settings</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;