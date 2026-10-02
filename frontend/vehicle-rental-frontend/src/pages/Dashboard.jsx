import AdminLayout from "../layouts/AdminLayout";
import DashboardCard from "../components/DashboardCard";
import BookingTable from "../components/BookingTable";

function Dashboard() {
  return (
    <AdminLayout>

      <h2 className="mb-4">
        Welcome Back, Admin 👋
      </h2>

      <p className="text-muted mb-4">
        Manage vehicles, bookings and customers from one place.
      </p>

      <div className="row g-4">

        <DashboardCard
          title="Vehicles"
          value="150"
          color="#0d6efd"
          icon="🚗"
        />

        <DashboardCard
          title="Available"
          value="98"
          color="#198754"
          icon="✅"
        />

        <DashboardCard
          title="Booked"
          value="52"
          color="#fd7e14"
          icon="📅"
        />

        <DashboardCard
          title="Revenue"
          value="₹4,50,000"
          color="#6f42c1"
          icon="💰"
        />

      </div>

      <div className="mt-5">

        <h4 className="mb-3">
          Quick Actions
        </h4>

        <button className="btn btn-dark me-3">
          Add Vehicle
        </button>

        <button className="btn btn-secondary me-3">
          New Booking
        </button>

        <button className="btn btn-success">
          View Vehicles
        </button>

      </div>

      <BookingTable />

    </AdminLayout>
  );
}

export default Dashboard;