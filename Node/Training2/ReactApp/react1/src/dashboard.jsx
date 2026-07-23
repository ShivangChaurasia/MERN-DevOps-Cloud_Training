import { useState, useEffect } from "react";
import "./css/dashboard.css";

export default function Dashboard() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api/courses")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch courses");
        }
        return res.json();
      })
      .then((data) => {
        setCourses(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching courses:", err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Available Courses</h1>
        <p className="dashboard-subtitle">Pick a course below to upgrade your skills and build awesome projects</p>
      </div>

      {loading && <p style={{ textAlign: "center", color: "#fff" }}>Loading courses...</p>}
      {error && <p style={{ textAlign: "center", color: "#ff6b6b" }}>Error: {error}</p>}

      {!loading && !error && (
        <ul className="courses-grid">
          {courses.map((course) => (
            <li key={course.id} className="course-card">
              <div className="course-image-wrapper">
                <img src={course.image} alt={course.title} className="course-image" />
                <span className={`level-badge ${course.level.toLowerCase()}`}>
                  {course.level}
                </span>
              </div>

              <div className="course-content">
                <h3 className="course-title">{course.title}</h3>
                
                <div className="course-details">
                  <p><span className="course-instructor">Instructor:</span> {course.instructor}</p>
                  <p>Duration: {course.duration}</p>
                </div>

                <div className="course-footer">
                  <span className="course-price">${course.price}</span>
                  <button className="enroll-btn">Enroll Now</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}