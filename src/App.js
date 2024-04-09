import logo from "./logo.svg";
import "./App.css";
import Accounts from "./components/Accounts";
import SignIn from "./components/SignIn";
import Welcome from "./components/Welcome";
import Profile from "./components/Profile";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
  BrowserRouter,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/account" element={<Accounts />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
