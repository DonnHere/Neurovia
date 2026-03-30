import React, { useState } from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import Navbar from "../components/navbar";  
import Footer from "../components/footer";  

const pertanyaan = [
  "Apakah keluarga atau orang terdekat Anda tersebut mengalami kepikunan?",
  "Apakah ingatan ia semakin memburuk dalam beberapa tahun terakhir?",
  "Apakah ia sering mengulang pertanyaan, perkataan, atau cerita di hari yang sama?",
  "Apakah ia sering lupa mengerjakan suatu rencana? Misalnya janji bertemu dengan seseorang?",
  "Apakah ia sering salah meletakkan suatu benda sehingga tidak bisa menemukannya?",
  "Apakah ia sering menuduh orang lain memindahkan, menghilangkan, atau mencuri benda yang tidak berhasil ia temukan?",
  "Apakah ia sangat sering mengalami kesulitan mengetahui ini hari apa, tanggal berapa, bulan, atau tahun berapa?",
  "Apakah ia tidak mengenali suatu tempat yang familier?",
  "Apakah ia sering kebingungan saat berada di luar rumah atau ketika bepergian?",
  "Apakah ia kesulitan memegang uang? Misalnya saat menghitung uang kembalian.",
  "Apakah ia kesulitan saat berbelanja atau melakukan pembayaran lainnya?",
  "Apakah ia sering lupa minum obat atau sulit mengingat apakah sudah minum obat atau belum?",
  "Apakah ia kesulitan menyetir kendaraan?",
  "Apakah ia kesulitan menggunakan peralatan rumah tangga seperti kompor, remote control, telepon, dan jam beker?",
  "Apakah ia mengalami kesulitan dalam menyelesaikan tugas-tugas rumah tangga seperti membersihkan atau memperbaiki sesuatu?",
  "Apakah ia berhenti atau mengurangi secara drastis aktivitas seperti berolahraga, menari, atau kerajinan tangan yang sebelumnya ia gemari?",
  "Apakah ia sering tersesat di lingkungan yang familiar misalnya di lingkungan sekitar rumah?",
  "Apakah ia mengalami kesulitan dalam mengetahui arah?",
  "Apakah ia kesulitan menemukan kata-kata selain nama?",
  "Apakah ia bingung mencocokkan nama-nama anggota keluarga atau teman?",
  "Apakah ia mengalami kesulitan dalam mengenali orang yang familiar dengannya?",
];

const Skriningsoal = () => {
  const [answers, setAnswers] = useState(Array(pertanyaan.length).fill(null));

  const handleAnswer = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-[#f9fbff] px-4 py-10 flex justify-center">
        <div className="max-w-4xl w-full bg-white shadow-lg rounded-2xl p-6 md:p-10">
          <h1 className="text-2xl md:text-3xl font-bold text-blue-700 mb-6 text-center">
            Skrining Dini Alzheimer
          </h1>

          <p className="text-gray-700 text-center mb-10">
            Silahkan jawab pertanyaan berikut ini dengan memilih "Iya" atau "Tidak".
          </p>

          <div className="space-y-6">
            {pertanyaan.map((question, index) => (
              <div
                key={index}
                className="p-5 border rounded-xl bg-gray-50 flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <p className="font-medium text-gray-800 flex-1">
                  <span className="font-bold mr-2">{index + 1}.</span> {question}
                </p>

                <div className="flex gap-3">
                  <button
                    onClick={() => handleAnswer(index, "Iya")}
                    className={`px-5 py-2 rounded-lg flex items-center gap-2 font-semibold transition ${
                      answers[index] === "Iya"
                        ? "bg-blue-600 text-white"
                        : "bg-white border text-blue-600 hover:bg-blue-50"
                    }`}
                  >
                    <FaCheckCircle />
                    Iya
                  </button>
                  <button
                    onClick={() => handleAnswer(index, "Tidak")}
                    className={`px-5 py-2 rounded-lg flex items-center gap-2 font-semibold transition ${
                      answers[index] === "Tidak"
                        ? "bg-red-500 text-white"
                        : "bg-white border text-red-500 hover:bg-red-50"
                    }`}
                  >
                    <FaTimesCircle />
                    Tidak
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-6 mt-10">
            <button
              onClick={() => window.history.back()}
              className="px-8 py-3 bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold rounded-xl shadow-md transition"
            >
              Kembali
            </button>
            <button
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-md transition"
              onClick={() => {
                console.log("Jawaban:", answers);
                alert("Terima kasih! Jawaban Anda telah disimpan.");
              }}
            >
              Kirim Jawaban
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Skriningsoal;
