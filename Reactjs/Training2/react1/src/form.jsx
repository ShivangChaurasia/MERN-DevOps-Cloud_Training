
import { useState } from "react";

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
    <>
      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input name="name" type="text" value={formData.name} onChange={handleChange} placeholder="Enter Your Name..." />
        <label>Age: </label>
        <input name="age" type="number" value={formData.age} onChange={handleChange} placeholder="Enter Your Age" />
        <label>City: </label>
        <input name="city" type="text" value={formData.city} onChange={handleChange} placeholder="Enter Your City" />

        <button type="submit">Submit</button>
        <div>
          <h1>This is Display Box</h1>
          <div id="display">
            {submittedData ? (
              <div>
                <p>Name: {submittedData.name}</p>
                <p>Age: {submittedData.age}</p>
                <p>City: {submittedData.city}</p>
              </div>
            ) : (
              <p>No data submitted yet.</p>
            )}
          </div>
        </div>
      </form>
      <br></br>
    </>
  );
}


export default Form