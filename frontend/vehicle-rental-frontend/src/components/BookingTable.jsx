function BookingTable() {
  return (
    <div className="table-card mt-4">
      <h4 className="mb-3">Recent Bookings</h4>

      <table className="table table-hover">
        <thead className="table-dark">
          <tr>
            <th>Booking ID</th>
            <th>Customer</th>
            <th>Vehicle</th>
            <th>Rent Date</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>101</td>
            <td>Rahul</td>
            <td>Honda City</td>
            <td>20-07-2026</td>
            <td>
              <span className="badge bg-success">Active</span>
            </td>
          </tr>

          <tr>
            <td>102</td>
            <td>Priya</td>
            <td>Yamaha R15</td>
            <td>18-07-2026</td>
            <td>
              <span className="badge bg-warning text-dark">
                Pending
              </span>
            </td>
          </tr>

          <tr>
            <td>103</td>
            <td>Arun</td>
            <td>Maruti Swift</td>
            <td>15-07-2026</td>
            <td>
              <span className="badge bg-danger">
                Returned
              </span>
            </td>
          </tr>

          <tr>
            <td>104</td>
            <td>Keerthi</td>
            <td>Royal Enfield</td>
            <td>14-07-2026</td>
            <td>
              <span className="badge bg-success">
                Active
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default BookingTable;