import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar';
import Footer from './components/footer';
import Dashboard from "./pages/dashboard";
import Login from "./pages/login";
import Register from "./pages/register";
import Skrining from "./pages/skrining";
import Skriningsoal from "./pages/skriningsoal";
import AdminLanding from "./pages/adminlanding";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/skrining" element={<Skrining />} />
        <Route path="/skriningsoal" element={<Skriningsoal />} />
        <Route path="/adminlanding" element={<AdminLanding />} />
      </Routes>
    </Router>
  );
}

export default App;
