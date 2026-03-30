import React from "react";
import logo from "../assets/logoa.png"; 

const Footer = () => {
  return (
    <footer className="bg-blue-50 text-gray-700 font-poppins overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center space-x-3">
          <img src={logo} alt="CareBot Logo" className="h-10 w-auto" />
          <p className="text-sm">
            © 2025 <span className="font-semibold text-blue-700">Neurovia</span>. Karena Ingatan Itu Berharga.
          </p>
        </div>
        <div className="flex space-x-6 mt-4 md:mt-0 text-sm text-blue-700 font-medium">
          <a href="#" className="hover:underline">Tentang Kami</a>
          <a href="#" className="hover:underline">Kontak</a>
          <a href="#" className="hover:underline">Kebijakan Privasi</a>
          <a href="#" className="hover:underline">Syarat dan Ketentuan</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
