import "./css/dashboard.css";

export default function Dashboard() {
  const courses = [
    { id: 1, title: "Complete MERN Stack Development", instructor: "Om Jaiswal", price: 499, duration: "45 Hours", level: "Beginner", image: "https://picsum.photos/400/220?random=1" },
    { id: 2, title: "React.js From Scratch", instructor: "Rahul Sharma", price: 599, duration: "30 Hours", level: "Beginner", image: "https://picsum.photos/400/220?random=2" },
    { id: 3, title: "Node.js & Express.js", instructor: "John Doe", price: 699, duration: "28 Hours", level: "Intermediate", image: "https://picsum.photos/400/220?random=3" },
    { id: 4, title: "MongoDB Masterclass", instructor: "Ankit Verma", price: 549, duration: "22 Hours", level: "Intermediate", image: "https://picsum.photos/400/220?random=4" },
    { id: 5, title: "JavaScript Interview Preparation", instructor: "Priya Singh", price: 799, duration: "35 Hours", level: "Advanced", image: "https://picsum.photos/400/220?random=5" },
    { id: 6, title: "Data Structures & Algorithms", instructor: "Aman Gupta", price: 999, duration: "60 Hours", level: "Intermediate", image: "https://picsum.photos/400/220?random=6" },
    { id: 7, title: "Python Programming Bootcamp", instructor: "Neha Kapoor", price: 649, duration: "40 Hours", level: "Beginner", image: "https://picsum.photos/400/220?random=7" },
    { id: 8, title: "Java Programming Masterclass", instructor: "Rohit Sharma", price: 749, duration: "42 Hours", level: "Intermediate", image: "https://picsum.photos/400/220?random=8" },
    { id: 9, title: "HTML & CSS Complete Guide", instructor: "Simran Kaur", price: 399, duration: "18 Hours", level: "Beginner", image: "https://picsum.photos/400/220?random=9" },
    { id: 10, title: "TypeScript for React Developers", instructor: "Aditya Mehta", price: 699, duration: "26 Hours", level: "Intermediate", image: "https://picsum.photos/400/220?random=10" },
    { id: 11, title: "Next.js Full Course", instructor: "Karan Malhotra", price: 899, duration: "36 Hours", level: "Advanced", image: "https://picsum.photos/400/220?random=11" },
    { id: 12, title: "Git & GitHub Essentials", instructor: "Sneha Patil", price: 299, duration: "12 Hours", level: "Beginner", image: "https://picsum.photos/400/220?random=12" }
  ];

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Available Courses</h1>
        <p className="dashboard-subtitle">Pick a course below to upgrade your skills and build awesome projects</p>
      </div>

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
    </div>
  );
}