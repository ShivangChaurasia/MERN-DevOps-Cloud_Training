import { Link } from 'react-router-dom';
import './css/home.css';

export default function Home() {
  return (
    <div className="home-hero">
      <span className="home-badge">Welcome to LearnCraft</span>
      <h1 className="home-title">
        Master Modern Web Development
      </h1>
      <p className="home-subtitle">
        Explore interactive courses, master full-stack concepts, and build applications step by step.
      </p>

      <div className="home-actions">
        <Link to="/dashboard" className="btn-primary">
          Explore Courses
        </Link>
        <Link to="/login" className="btn-secondary">
          Log In
        </Link>
      </div>

      <div className="features-grid">
        <div className="feature-card">
          <h3 className="feature-title">Fast Learning</h3>
          <p className="feature-desc">Hands-on tutorials designed to get you building interactive React apps fast.</p>
        </div>
        <div className="feature-card">
          <h3 className="feature-title">Curated Content</h3>
          <p className="feature-desc">In-depth modules covering React, Node.js, Express, MongoDB, and modern tools.</p>
        </div>
        <div className="feature-card">
          <h3 className="feature-title">Real Projects</h3>
          <p className="feature-desc">Gain practical experience by completing exercises and state management challenges.</p>
        </div>
      </div>
    </div>
  );
}
