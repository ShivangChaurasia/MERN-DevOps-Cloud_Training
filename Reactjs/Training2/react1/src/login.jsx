import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./css/login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const navigate = useNavigate();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePass = (e) => {
    setPass(e.target.value);
  };

  const authenticate = () => {
    if (pass.length >= 8 && /[A-Za-z]/.test(pass) && /[0-9]/.test(pass)) {
      return true;
    }
    return false;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (authenticate()) {
      navigate('/dashboard');
    } else {
      alert('Credentials Wrong!! Password must be at least 8 characters and contain both letters and numbers.');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <form onSubmit={handleSubmit}>
          <fieldset className="auth-fieldset">
            <h1 className="auth-title">Welcome Back</h1>
            <p className="auth-subtitle">Please enter your details to sign in</p>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                className="form-input"
                type="email"
                placeholder="Enter your E-Mail"
                value={email}
                onChange={handleEmail}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                className="form-input"
                type="password"
                placeholder="Password"
                value={pass}
                onChange={handlePass}
                required
              />
            </div>

            <button type="submit" className="auth-button">
              Sign In
            </button>
          </fieldset>
        </form>
        
        <p className="auth-footer">
          Don't have an account? <Link to="/signup" className="auth-link">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}