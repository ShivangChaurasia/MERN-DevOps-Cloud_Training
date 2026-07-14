import { NavLink, Link } from 'react-router-dom';
import './css/navigation.css';

export function Navigation() {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link to="/" className="nav-brand">
          Practice
        </Link>
        <nav className="nav-links">
          <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} end>
            Home
          </NavLink>
          <NavLink to="/dashboard" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Dashboard
          </NavLink>
          <NavLink to="/login" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Login
          </NavLink>
          <NavLink to="/signup" className="nav-cta">
            Sign Up
          </NavLink>
        </nav>
      </div>
    </header>
  );
}