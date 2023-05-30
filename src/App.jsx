import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./components/login/Login";
import Profile from "./pages/Profile";
import Account from "./components/account/Account";
function App() {
  // const user = {
  //   name: "user",
  //   email: "user@example.com",
  //   pass: "qwe123",
  // };
  return (
    <Router>
      {/* {user ? (
        <Auth />
      ) : ( */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/account" element={<Account />} />
      </Routes>
      {/* )} */}
    </Router>
  );
}

export default App;
