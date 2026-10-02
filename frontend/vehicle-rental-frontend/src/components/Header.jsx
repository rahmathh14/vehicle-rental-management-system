import { FaBell, FaUserCircle } from "react-icons/fa";

function Header() {
  return (

    <div className="header">

      <h3>Vehicle Rental Management System</h3>

      <div className="header-right">

        <FaBell className="icon"/>

        <FaUserCircle className="icon"/>

        <span>Admin</span>

      </div>

    </div>

  );
}

export default Header;