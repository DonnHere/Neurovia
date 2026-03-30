import React, { useState } from "react";
import image from "../assets/imagesoya.png";
import alzheimer1 from "../assets/gambar1.jpg";
import alzheimer2 from "../assets/gambar2.jpg";
import alzheimer3 from "../assets/gambar3.jpg";
import alzheimer4 from "../assets/gambar4.jpg";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import {
  FaBrain,
  FaHeartbeat,
  FaCapsules,
  FaDumbbell,
  FaExclamationCircle,
} from "react-icons/fa";

function Dashboard() {
  const [selectedCard, setSelectedCard] = useState(null);

  const edukasiCards = [
    {
      title: "Gejala Dini Alzheimer",
      icon: <FaExclamationCircle className="text-indigo-600 text-3xl mb-2" />,
      description: "Kenali tanda awal Alzheimer untuk deteksi lebih cepat.",
      detail:
        "Gejala awal Alzheimer dapat mencakup lupa kejadian baru, kesulitan merencanakan, kebingungan waktu/tempat, dan perubahan suasana hati. Deteksi dini penting untuk penanganan optimal.",
    },
    {
      title: "Faktor Risiko & Penyebab",
      icon: <FaHeartbeat className="text-indigo-600 text-3xl mb-2" />,
      description: "Pelajari penyebab dan siapa yang lebih berisiko.",
      detail:
        "Faktor risiko termasuk usia, genetika, hipertensi, diabetes, trauma otak, dan pola hidup tidak sehat. Pencegahan bisa dimulai sejak dini.",
    },
    {
      title: "Gaya Hidup Sehat Otak",
      icon: <FaBrain className="text-indigo-600 text-3xl mb-2" />,
      description: "Tips menjaga otak tetap sehat dan aktif.",
      detail:
        "Makan bergizi, cukup tidur, kelola stres, aktif secara sosial, dan latihan mental seperti membaca atau puzzle menjaga fungsi otak.",
    },
    {
      title: "Pengobatan & Dukungan",
      icon: <FaCapsules className="text-indigo-600 text-3xl mb-2" />,
      description: "Opsi penanganan dan bantuan untuk pasien dan keluarga.",
      detail:
        "Penanganan Alzheimer melibatkan obat-obatan, terapi kognitif, dukungan keluarga, dan layanan komunitas. Pendampingan emosional sangat penting.",
    },
    {
      title: "Latihan Otak & Aktivitas",
      icon: <FaDumbbell className="text-indigo-600 text-3xl mb-2" />,
      description: "Stimulasi mental untuk memperlambat gejala Alzheimer.",
      detail:
        "Latihan seperti teka-teki silang, membaca, seni, dan aktivitas sosial dapat membantu menjaga kognisi dan memperlambat perkembangan penyakit.",
    },
  ];

  const alzheimerCards = [
  {
    title: "Penyakit Alzheimer",
    image: alzheimer1,
    description: "Penjelasan lengkap tentang Alzheimer dan dampaknya.",
    detail:
      "Penyakit Alzheimer adalah bentuk umum dari demensia yang menyebabkan masalah dengan ingatan, berpikir, dan perilaku. Gejalanya berkembang perlahan dan memburuk seiring waktu.",
  },
  {
    title: "Panduan Merawat Penderita",
    image: alzheimer2,
    description: "Tips merawat orang terdekat dengan Alzheimer.",
    detail:
      "Merawat penderita Alzheimer memerlukan kesabaran, rutinitas, dan dukungan emosional. Lingkungan aman dan pendekatan lembut sangat penting.",
  },
  {
    title: "Obat dan Terapi",
    image: alzheimer3,
    description: "Kenali opsi pengobatan dan terapi yang tersedia.",
    detail:
      "Beberapa obat dapat memperlambat perkembangan gejala. Terapi seperti stimulasi kognitif, terapi musik, dan olahraga juga sangat bermanfaat.",
  },
  {
    title: "Tahapan Alzheimer",
    image: alzheimer4,
    description: "Pelajari tahapan Alzheimer dari awal hingga lanjut.",
    detail:
      "Alzheimer berkembang dari tahap ringan (kesulitan memori ringan), sedang (kebingungan dan perubahan perilaku), hingga berat (kehilangan kemampuan komunikasi dan mobilitas).",
  },
];
 
  return (
    <div className="min-h-screen w-full flex flex-col bg-gradient-to-br from-purple-100 via-white to-indigo-100 overflow-x-hidden">
      <Navbar />
      <main className="flex-grow flex items-start justify-center">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 w-full h-full py-12 border border-white/30 bg-white/60 backdrop-blur-md shadow-lg md:rounded-3xl overflow-hidden">
          <div className="w-full md:w-1/2 flex flex-col justify-center items-start px-4 md:px-14 space-y-6 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              <span className="text-indigo-600">Neurovia</span> <br />
              Deteksi Dini Alzheimer <br />
              <span className="text-indigo-600">Selangkah Lebih Awal</span>
              <br />
              Untuk Hidup Berkualitas
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              Website edukasi dan alat bantu skrining mandiri untuk mengenali
              gejala awal Alzheimer & Demensia.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <a
                href="/skrining"
                className="bg-indigo-600 text-white px-6 py-3 rounded-xl text-lg font-medium shadow hover:bg-indigo-700 hover:scale-105 transform transition duration-300"
              >
                Mulai Skrining
              </a>
              <button className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-xl text-lg font-medium hover:bg-indigo-50 hover:scale-105 transform transition duration-300">
                Pelajari Lebih Lanjut
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex items-center justify-center px-4 md:px-12">
            <div className="w-full max-w-md">
              <img
                src={image}
                alt="Ilustrasi Alzheimer"
                className="w-full h-auto object-contain rounded-2xl"
              />
            </div>
          </div>
        </div>
      </main>
      <section className="px-6 md:px-16 py-12 bg-white">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">
          Kategori Edukasi
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {edukasiCards.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelectedCard(item)}
              className="bg-indigo-50 hover:bg-indigo-100 cursor-pointer p-6 rounded-2xl shadow transition transform duration-300 hover:scale-105 hover:-translate-y-1"
            >
              <div className="flex flex-col items-center text-center">
                {item.icon}
                <h3 className="text-xl font-semibold text-gray-800 mt-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 mt-2 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="px-6 md:px-16 py-12">
        <div className="flex flex-col items-center justify-between gap-6 w-full h-full py-12 border border-white/30 bg-white/60 backdrop-blur-md shadow-lg md:rounded-3xl overflow-hidden">
          <h2 className="text-3xl font-bold text-gray-800 text-center">
            Tentang Alzheimer
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full px-6 md:px-12">
            {alzheimerCards.map((item, index) => (
              <div
                key={index}
                onClick={() => setSelectedCard(item)}
                className="bg-white hover:bg-indigo-50 cursor-pointer rounded-2xl shadow transition transform duration-300 hover:scale-105 hover:-translate-y-1 overflow-hidden"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-52 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {selectedCard && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 max-w-xl shadow-lg mx-4 text-center">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              {selectedCard.title}
            </h2>
            <p className="text-gray-700 mb-6">{selectedCard.detail}</p>
            <button
              onClick={() => setSelectedCard(null)}
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Tutup
            </button>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default Dashboard;
