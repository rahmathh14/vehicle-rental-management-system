function DashboardCard({ title, value, color, icon }) {
  return (
    <div className="col-md-3">
      <div
        className="dashboard-card"
        style={{ borderTop: `5px solid ${color}` }}
      >
        <h5>{icon} {title}</h5>
        <h2>{value}</h2>
      </div>
    </div>
  );
}

export default DashboardCard;