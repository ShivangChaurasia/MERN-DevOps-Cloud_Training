import { useState } from "react";
import "./css/form.css";

function Form() {
  const [formData, setFormData] = useState({ name: "", age: "", city: "" });
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedData({
      name: formData.name,
      age: formData.age,
      city: formData.city,
    });
  };

  return (
    <div className="form-container">
      <h2 className="form-title">User Info Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="form-name">Name</label>
          <input
            id="form-name"
            className="form-input"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter Your Name..."
          />
        </div>

        <div className="form-group">
          <label htmlFor="form-age">Age</label>
          <input
            id="form-age"
            className="form-input"
            name="age"
            type="number"
            value={formData.age}
            onChange={handleChange}
            placeholder="Enter Your Age"
          />
        </div>

        <div className="form-group">
          <label htmlFor="form-city">City</label>
          <input
            id="form-city"
            className="form-input"
            name="city"
            type="text"
            value={formData.city}
            onChange={handleChange}
            placeholder="Enter Your City"
          />
        </div>

        <button type="submit" className="auth-button">
          Submit
        </button>

        <div className="form-display-box">
          <h3 className="display-title">Submitted Data</h3>
          <div id="display" className="display-content">
            {submittedData ? (
              <div>
                <p><strong>Name:</strong> {submittedData.name}</p>
                <p><strong>Age:</strong> {submittedData.age}</p>
                <p><strong>City:</strong> {submittedData.city}</p>
              </div>
            ) : (
              <p style={{ color: "var(--text-muted)", italic: "true" }}>No data submitted yet.</p>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;