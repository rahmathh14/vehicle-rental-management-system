import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow p-4 login-card">

        <h2 className="text-center mb-2">Vehicle Rental System</h2>

        <p className="text-center text-muted mb-4">
          Welcome Back! Please Login
        </p>

        <form>

          <div className="mb-3">
            <label className="form-label">Email Address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter your password"
            />
          </div>

          <div className="d-flex justify-content-between mb-3">
            <div>
              <input type="checkbox" /> Remember Me
            </div>

            <a href="#" className="text-decoration-none">
              Forgot Password?
            </a>
          </div>

         <Link to="/dashboard" className="btn btn-dark w-100">
  Login
</Link>

          <p className="text-center mt-3">
            Don't have an account?{" "}
            <Link to="/register" className="text-decoration-none">
              Register
            </Link>
          </p>

        </form>

      </div>
    </div>
  );
}

export default Login;