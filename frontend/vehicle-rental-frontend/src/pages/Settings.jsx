function Settings() {
  return (
    <div className="container mt-4">
      <h2>System Settings</h2>

      <div className="card shadow p-4 mt-4">

        <div className="mb-3">
          <label>Company Name</label>
          <input
            type="text"
            className="form-control"
            defaultValue="Vehicle Rental Management System"
          />
        </div>

        <div className="mb-3">
          <label>Contact Email</label>
          <input
            type="email"
            className="form-control"
            defaultValue="admin@gmail.com"
          />
        </div>

        <button className="btn btn-dark">
          Save Settings
        </button>

      </div>
    </div>
  );
}

export default Settings;