import React, { useState } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:8000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();
      console.log("Register response:", data);

      if (response.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));

        alert(data.message || "Akun berhasil dibuat");
      } else {
        alert(data.message || "Registrasi gagal");
      }
    } catch (error) {
      console.error("Register error:", error);
      alert("Terjadi kesalahan saat registrasi");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F9FA]">
      <div className="flex-grow flex items-center justify-center px-4">
        <div className="bg-white rounded-xl shadow-lg px-8 py-8 w-full max-w-sm">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Daftar
          </h2>
          <form onSubmit={handleRegister}>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Nama"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>

            <div className="mb-4">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>

            <div className="mb-6">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-semibold transition duration-200"
            >
              Daftar
            </button>
          </form>

          <div className="mt-4 text-center text-sm text-gray-600">
            Sudah punya akun?{" "}
            <a href="/" className="text-blue-700 font-semibold hover:underline">
              Login disini
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
