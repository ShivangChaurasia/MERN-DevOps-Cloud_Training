# 🎓 LearnCraft — Full-Stack Web Application

LearnCraft is a modern, responsive full-stack web application designed for online learning and course management. It features a decoupled client-server architecture with an **Express.js RESTful API** backend and a **React 19 + Vite** frontend utilizing Context API for authentication state and dynamic theme management.

---

## ✨ Features

- 🔐 **User Authentication System**: Complete Signup and Login flow with client-side context state (`AuthContext`) and JSON file persistence on the server.
- 📚 **Interactive Course Catalog**: Dynamic fetching and display of course modules, difficulty levels, pricing, instructors, and duration.
- 🌓 **Dynamic Theme Switcher**: Toggle seamlessly between Light and Dark mode using custom CSS variables and Context API (`ThemeContext`).
- ⚡ **Lightning Fast Frontend**: Powered by **Vite** and **React 19** with hot module replacement (HMR).
- 🎨 **Modern Glassmorphic UI**: Beautiful, fully responsive UI built with pure Vanilla CSS, custom design tokens, and smooth transitions.
- 🔌 **RESTful Backend API**: Built with **Node.js** and **Express**, featuring CORS support and modular JSON data management.

---

## 🛠️ Tech Stack

### Frontend (`/react1`)
- **Library/Framework**: React 19, React Router DOM v7
- **Build Tool**: Vite 8
- **Styling**: Vanilla CSS (Custom Design System & CSS Variables)
- **State Management**: React Context API (`AuthContext`, `ThemeContext`)

### Backend (`/node1`)
- **Runtime**: Node.js
- **Framework**: Express.js 5
- **Middleware**: `cors`, `dotenv`, `express.json()`
- **Development Tool**: `nodemon`
- **Database / Storage**: File-based JSON Database (`users.json`, `courses.json`)

---

## 📁 Project Structure

```text
ReactApp/
├── README.md               # Main Project Documentation
├── node1/                  # Node.js & Express REST API Backend
│   ├── .env                # Environment Variables
│   ├── data/               # JSON Data Store
│   │   ├── courses.json    # Course catalog data
│   │   └── users.json      # Registered users store
│   ├── package.json        # Backend dependencies & scripts
│   └── server.js           # Express server & API endpoints
└── react1/                 # React + Vite Frontend Application
    ├── public/             # Static Assets
    ├── src/
    │   ├── Components/     # Reusable UI components (ThemeToggle, etc.)
    │   ├── Context/        # React Context Providers (Auth, Theme)
    │   ├── css/            # Global & modular CSS stylesheets
    │   ├── App.jsx         # Main App entry with Route definitions
    │   ├── Navigation.jsx  # Top Navigation Bar with theme & auth state
    │   ├── dashboard.jsx   # Course Listing / Dashboard page
    │   ├── home.jsx        # Landing page
    │   ├── login.jsx       # User login page
    │   ├── signup.jsx      # User registration page
    │   └── main.jsx       # React application root mount point
    ├── package.json        # Frontend dependencies & scripts
    └── vite.config.js      # Vite configuration & server proxy setup
```

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- `npm` (comes with Node.js)

---

### 1. Setup & Run Backend API (`/node1`)

Navigate to the `node1` directory, install dependencies, and start the development server:

```bash
cd node1
npm install
npm run dev
```

The Express server will start running at:
`http://localhost:5000`

---

### 2. Setup & Run Frontend Application (`/react1`)

In a new terminal window, navigate to the `react1` directory, install dependencies, and start the Vite dev server:

```bash
cd react1
npm install
npm run dev
```

The application will be accessible at:
`http://localhost:5173` (or the URL provided by Vite in terminal output).

---

## 📡 API Endpoints Summary

| Method | Endpoint | Description | Request Body Example |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/courses` | Retrieves the list of all available courses | N/A |
| `POST` | `/api/signup` | Registers a new user account | `{ "fullName": "Jane Doe", "email": "jane@example.com", "password": "secretpassword" }` |
| `POST` | `/api/login` | Authenticates an existing user | `{ "email": "jane@example.com", "password": "secretpassword" }` |

---

## 📜 License

This project is open-source and created for full-stack MERN & DevOps cloud training.
