import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home.jsx";
import Login from "./login.jsx";
import SignUp from "./signup.jsx";
import { Navigation } from "./Navigation.jsx";
import Dashboard from "./dashboard.jsx";
import { ThemeProvider } from "./Context/themeContext.jsx";
import "./css/global.css";

function App() {
  return (
    <ThemeProvider>
      <div className="app-container">
        <BrowserRouter>
          <Navigation />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </main>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
