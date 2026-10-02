function Reports() {
  return (
    <div className="container mt-4">
      <h2>Reports</h2>

      <div className="row mt-4">

        <div className="col-md-3">
          <div className="card shadow text-center p-4">
            <h5>Total Revenue</h5>
            <h3>₹2,50,000</h3>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card shadow text-center p-4">
            <h5>Total Bookings</h5>
            <h3>350</h3>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card shadow text-center p-4">
            <h5>Available Vehicles</h5>
            <h3>98</h3>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card shadow text-center p-4">
            <h5>Customers</h5>
            <h3>150</h3>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Reports;