import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Demo from "./pages/Demo";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Price from "./pages/Price";
import Signup from "./pages/Signup";
import Footer from "./components/Footer";
import Asana from "./pages/Integration/Asana";
import Clickup from "./pages/Integration/Clickup";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/price" element={<Price />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/asana" element={<Asana />} />
        <Route path="/clickup" element={<Clickup />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
