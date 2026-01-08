"use client";

import { FileX } from "lucide-react";
import {Box} from '@/components/Section/fiturtest';
import { useState } from "react";

export default function Page() {
  const [Jurusan, pilJurusan] = useState("def");

  const materiData = [
    {
      id: 1,
      category: "FT",
      kode: "MA1101",
      image: "https://static.wikia.nocookie.net/gup/images/5/5e/P-40.png/revision/latest?cb=20170205025926",
      title: "Matematika Dasar I",
      subtitle: "Tahap Tahun Pertama FTI",
      button: "testlib/MA1101"
    },
    {
      id: 2,
      category: "FT",
      kode: "FI1101",
      image: "https://static.wikia.nocookie.net/gup/images/d/dc/CV-33.png/revision/latest/top-crop/width/200/height/150?cb=20170205030747",
      title: "Fisika Dasar I",
      subtitle: "Tahap Tahun Pertama FTI",
      button: "testlib/KI1101"
    },
    {
      id: 3,
      category: "FT",
      kode: "KI1101",
      image: "https://static.wikia.nocookie.net/gup/images/e/e2/Semovente.png/revision/latest/top-crop/width/200/height/150?cb=20170206094231",
      title: "Kimia Dasar I",
      subtitle: "Tahap Tahun Pertama FTI",
    },
    {
      id: 4,
      category: "FT",
      kode: "WI1101",
      image: "https://static.wikia.nocookie.net/gup/images/e/e2/Semovente.png/revision/latest/top-crop/width/200/height/150?cb=20170206094231",
      title: "Pancasila",
      subtitle: "Tahap Tahun Pertama FTI",
    },
    {
      id: 5,
      category: "FT",
      kode: "WI1102",
      image: "https://static.wikia.nocookie.net/gup/images/e/e2/Semovente.png/revision/latest/top-crop/width/200/height/150?cb=20170206094231",
      title: "Berpikir Komputasional",
      subtitle: "Tahap Tahun Pertama FTI",
    },
    {
      id: 6,
      category: "FT",
      kode: "WI1103",
      image: "https://static.wikia.nocookie.net/gup/images/e/e2/Semovente.png/revision/latest/top-crop/width/200/height/150?cb=20170206094231",
      title: "Pengantar Prinsip Keberlanjutan",
      subtitle: "Tahap Tahun Pertama FTI",
    },
    {
      id: 8,
      category: "TF",
      kode: "TF1201",
      image: "https://static.wikia.nocookie.net/gup/images/e/e2/Semovente.png/revision/latest/top-crop/width/200/height/150?cb=20170206094231",
      title: "Dasar Fisika Teknik",
      subtitle: "Teknik Fisika",
    }
  ];

  const filteredData = materiData.filter((item) => {
    if (Jurusan === "def") return true; // Show all if default is selected
    return item.category === Jurusan;
  });

  return (
    <>
      <div className = "pt-21">
        <h1 className="text-center text-5xl font-bold">Materi</h1>
        <div className = "bg-gray-800 w-100% rounded-lg m-4 p-4">
            <h1>Filter</h1>
            <select className = "p-3 rounded-lg border" name ="jurusan" id = "jurusan" value={Jurusan}
            onChange={(e) => pilJurusan(e.target.value)}>
            <option className = "bg-gray-500" value = "def">Pilih jurusan</option>
            <option className = "bg-gray-700" value = "FT">Tahap Tahun Pertama FTI</option>
            <option className = "bg-gray-400" value = "TF">Teknik Fisika</option>
            <option className = "bg-gray-700" value = "TK">Teknik Kimia</option>
            <option className = "bg-gray-400" value = "TI">Teknik Industri</option>
            <option className = "bg-gray-700" value = "MR">Manajemen Rekayasa</option>
            <option className = "bg-gray-400" value = "TB">Teknik Bioenergi dan Kemurgi</option>
            <option className = "bg-gray-700" value = "TP">Teknik Pangan</option>
            </select>
        </div>
        <div className = "grid grid-cols-4 gap-4 p-4">
        {filteredData.map((item) => (
           <Box
                kode = {item.kode}
                image = {item.image}
                title = {item.title}
                subtitle = {item.subtitle}
                button = {"testlib/" + item.kode}
                id = {item.id}
           />
        ))}  
        </div>
      </div>
    </>
  );
}

