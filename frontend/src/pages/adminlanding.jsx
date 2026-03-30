import React from "react";

const dummyData = [
  {
    nama: "Andi Wijaya",
    email: "andi@example.com",
    skor: 8,
    intervensi: "Rujuk ke ahli saraf",
  },
  {
    nama: "Siti Rahma",
    email: "siti@example.com",
    skor: 4,
    intervensi: "Konsultasi online",
  },
  {
    nama: "Budi Santoso",
    email: "budi@example.com",
    skor: 2,
    intervensi: "Edukasi mandiri",
  },
  {
    nama: "Dina Ayu",
    email: "dina@example.com",
    skor: 7,
    intervensi: "Observasi 1 minggu",
  },
];

const AdminLanding = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-800">
            📋 Hasil Skrining Pasien
          </h1>
          <a
            href="/"
            className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-md text-sm font-semibold shadow transition duration-200"
          >
            Logout
          </a>
        </div>
        <div className="overflow-x-auto rounded-xl shadow-md bg-white">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold">Nama</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Email</th>
                <th className="px-6 py-4 text-center text-sm font-semibold">Skor</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Intervensi Lanjut</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {dummyData.map((pasien, index) => (
                <tr
                  key={index}
                  className="hover:bg-blue-50 transition-colors duration-200"
                >
                  <td className="px-6 py-4 whitespace-nowrap text-gray-900">
                    {pasien.nama}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                    {pasien.email}
                  </td>
                  <td className="px-6 py-4 text-center font-bold text-blue-700">
                    {pasien.skor}
                  </td>
                  <td className="px-6 py-4 text-gray-700">{pasien.intervensi}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminLanding;
