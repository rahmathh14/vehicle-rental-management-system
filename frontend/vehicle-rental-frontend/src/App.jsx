import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import ViewVehicles from "./pages/ViewVehicles";
import AddVehicle from "./pages/AddVehicle";
import EditVehicle from "./pages/EditVehicle";
import Booking from "./pages/Booking";
import ReturnVehicle from "./pages/ReturnVehicle";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import NewBooking from "./pages/NewBooking";
import Customers from "./pages/Customers";
import AddCustomer from "./pages/AddCustomer";
import EditCustomer from "./pages/EditCustomer";


function App() {
  const location = useLocation();

  const adminPages = [
    "/dashboard",
    "/vehicles",
    "/addvehicle",
    "/editvehicle",
    "/booking",
    "/returnvehicle",
  ];

  const isAdminPage = adminPages.includes(location.pathname);

  return (
    <>
      {!isAdminPage && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/vehicles" element={<ViewVehicles />} />
        <Route path="/addvehicle" element={<AddVehicle />} />
       <Route path="/editvehicle/:id" element={<EditVehicle />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/returnvehicle" element={<ReturnVehicle />} />
        <Route path="/newbooking" element={<NewBooking />} />
        <Route path="/reports" element={<Reports />} />
<Route path="/settings" element={<Settings />} />
<Route path="/customers" element={<Customers />} />
<Route path="/addcustomer" element={<AddCustomer />} />
<Route path="/editcustomer" element={<EditCustomer />} />


      </Routes>

      {!isAdminPage && <Footer />}
    </>
  );
}

export default App;