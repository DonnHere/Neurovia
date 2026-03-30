import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch("http://localhost:8000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    console.log("Login response:", data); 

    if (response.ok) {
      const role = data.user?.role;

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      if (role === "admin") {
        navigate("/adminlanding");
      } else if (role === "pasien") {
        navigate("/dashboard");
      } else {
        console.warn("Peran tidak dikenal:", role);
        alert("Peran pengguna tidak dikenali");
      }
    } else {
      alert(data.message || "Login gagal");
    }
  } catch (error) {
    console.error("Login error:", error);
    alert("Terjadi kesalahan saat login");
  }
};

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F9FA]">
      <div className="flex-grow flex items-center justify-center px-4">
        <div className="bg-white rounded-xl shadow-lg px-8 py-10 w-full max-w-sm">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login</h2>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label htmlFor="email" className="sr-only">Email</label>
              <input
                id="email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>
            <div className="mb-4 relative">
              <label htmlFor="password" className="sr-only">Password</label>
              <input
                id="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 pr-10"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-semibold transition duration-200"
            >
              Login
            </button>
          </form>

          <div className="mt-2 text-center text-sm text-gray-600">
            Belum punya akun?{" "}
            <a href="/register" className="text-blue-700 font-semibold hover:underline">
              Daftar disini
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
