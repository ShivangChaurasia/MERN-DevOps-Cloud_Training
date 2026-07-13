import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Form from "./form.jsx";
// import HooksDemo from "./hooks.jsx";
import Home from "./home.jsx";
import Login from "./login.jsx";
import SignUp from "./signup.jsx";
import { Navigation } from "./Navigation.jsx";

function App() {
  return (
    <div>
      {/* <Form />
      <HooksDemo /> */}

      <BrowserRouter>
        <Navigation></Navigation>
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/signup" element={<SignUp></SignUp>}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App
