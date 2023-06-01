import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./components/login/Login";
import Profile from "./pages/Profile";
import Account from "./components/account/Account";
import Loader from "./components/loader/Loader";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/account" element={<Account />} />
        <Route path="/loader" element={<Loader />} />
        <Route path="/Admin" element={<Home />} />
      </Routes>
    </Router>
  );
}
export default App;
