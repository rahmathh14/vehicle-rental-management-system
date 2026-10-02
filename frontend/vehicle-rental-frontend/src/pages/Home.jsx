function Home() {
  return (
    <>
      {/* Hero Section */}
     <div className="hero-section text-center py-5">
        <div className="container">
          <h1 className="display-4 fw-bold">
            Vehicle Rental Management System
          </h1>

          <p className="lead mt-3">
            Rent Cars, Bikes and Vans Anytime at Affordable Prices.
          </p>

         <button className="btn btn-dark btn-lg me-3">
            Book Now
          </button>

          <button className="btn btn-outline-dark btn-lg">
            View Vehicles
          </button>
        </div>
      </div>

      {/* Featured Vehicles */}
      <div className="container mt-5">

        <h2 className="text-center fw-bold mb-5">
          Featured Vehicles
        </h2>

        <div className="row">

          <div className="col-md-4">
            <div className="card shadow text-center p-4">
              <h3>🚗 Car</h3>
              <h5 className="text-primary">₹1200 / Day</h5>
             <p>Comfortable cars for city rides, family trips and business travel.</p>
              <button className="btn btn-dark">
    Book Now
</button>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow text-center p-4">
              <h3>🏍 Bike</h3>
              <h5 className="text-primary">₹500 / Day</h5>
              <p>Affordable bike for daily commuting.</p>
              <button className="btn btn-dark">
    Book Now
</button>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow text-center p-4">
              <h3>🚐 Van</h3>
              <h5 className="text-primary">₹1800 / Day</h5>
              <p>Spacious van for family trips and group travel.</p>
              <button className="btn btn-dark">
    Book Now
</button>
            </div>
          </div>

        </div>

      </div>

      {/* Why Choose Us */}
      <div className="container mt-5">

        <h2 className="text-center mb-4">
          Why Choose Us?
        </h2>

        <div className="row text-center">

          <div className="col-md-3">
            <h4>💰</h4>
            <h5>Affordable Pricing</h5>
          </div>

          <div className="col-md-3">
            <h4>🚗</h4>
            <h5>Well Maintained Vehicles</h5>
          </div>

          <div className="col-md-3">
            <h4>📅</h4>
            <h5>Easy Booking</h5>
          </div>

          <div className="col-md-3">
            <h4>📞</h4>
            <h5>24/7 Support</h5>
          </div>

        </div>

      </div>

      {/* Statistics */}
      <div className="container mt-5 mb-5">

        <div className="row text-center">

          <div className="col-md-4">
            <h1 className="text-primary">150+</h1>
            <h5>Vehicles</h5>
          </div>

          <div className="col-md-4">
            <h1 className="text-success">500+</h1>
            <h5>Customers</h5>
          </div>

          <div className="col-md-4">
            <h1 className="text-danger">1200+</h1>
            <h5>Bookings</h5>
          </div>

        </div>

      </div>
    </>
  );
}

export default Home;