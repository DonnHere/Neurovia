import React from "react";
import { FaQuestionCircle, FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Navbar from "../components/navbar"; 
import Footer from "../components/footer";  

const Skrining = () => {
  const handleMulai = () => {
    window.location.href = "/skrining/soal1";
  };

  const handleKembali = () => {
    window.history.back();
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-[#f8fbff] to-[#e8f0ff] flex items-center justify-center px-4 py-10">
        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl w-full transition duration-300">
          <div className="flex items-start mb-6">
            <FaQuestionCircle className="text-blue-500 text-3xl mt-1 mr-4" />
            <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 leading-relaxed">
              Apakah Anda curiga keluarga atau orang-orang terdekat Anda yang
              sudah lanjut usia sedang mengalami kesulitan dalam mengingat
              sesuatu? Apakah Anda ingin tahu kemungkinan ia terkena Alzheimer?
            </h1>
          </div>
          <div className="border border-blue-100 bg-blue-50 text-blue-900 rounded-lg p-5 text-md md:text-lg mb-8">
            Nilai seberapa besar risiko ia terkena Alzheimer dengan menjawab
            beberapa pertanyaan singkat berikut ini. Jawaban Anda sangat membantu
            untuk evaluasi awal.
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <button
              onClick={handleKembali}
              className="flex items-center justify-center w-full md:w-1/2 gap-2 px-6 py-4 border border-gray-300 bg-white hover:bg-gray-100 text-gray-700 font-semibold rounded-lg transition duration-200"
            >
              <FaArrowLeft />
              Kembali
            </button>

            <a
              href="/skriningsoal"
              className="flex items-center justify-center w-full md:w-1/2 gap-2 px-6 py-4 bg-[#4A85F6] hover:bg-[#3974e0] text-white font-semibold text-lg rounded-lg transition duration-200"
            >
              Ayo Mulai
              <FaArrowRight />
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Skrining;
