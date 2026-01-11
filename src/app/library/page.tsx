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
      id: 7,
      category: ["TF","TK","TB","TP","TI","MR"],
      kode: "WI2001",
      image: "https://static.wikia.nocookie.net/gup/images/e/e2/Semovente.png/revision/latest/top-crop/width/200/height/150?cb=20170206094231",
      title: "Pengantar Rekayasa dan Desain",
      subtitle: "Mata Kuliah Wajib ITB",
    },
    {
      id: 8,
      category: ["TF","TP","TI","MR"],
      kode: "WI2002",
      image: "https://static.wikia.nocookie.net/gup/images/e/e2/Semovente.png/revision/latest/top-crop/width/200/height/150?cb=20170206094231",
      title: "Literasi Data dan Inteligensi Artifisial",
      subtitle: "Mata Kuliah Wajib ITB",
    },
    {
      id: 9,
      category: ["TF","TK","TB"],
      kode: "WI2003",
      image: "https://static.wikia.nocookie.net/gup/images/e/e2/Semovente.png/revision/latest/top-crop/width/200/height/150?cb=20170206094231",
      title: "Olahraga",
      subtitle: "Mata Kuliah Wajib ITB",
    },
    {
      id: 10,
      category: ["TK","TP"],
      kode: "WI2004",
      image: "https://static.wikia.nocookie.net/gup/images/e/e2/Semovente.png/revision/latest/top-crop/width/200/height/150?cb=20170206094231",
      title: "Bahasa Inggris",
      subtitle: "Mata Kuliah Wajib ITB",
    },
    {
      id: 11,
      category: ["TF","TK","TB","TP","TI","MR"],
      kode: "WI2005",
      image: "https://static.wikia.nocookie.net/gup/images/e/e2/Semovente.png/revision/latest/top-crop/width/200/height/150?cb=20170206094231",
      title: "Bahasa Indonesia",
      subtitle: "Mata Kuliah Wajib ITB",
    },
    {
      id: 12,
      category: ["MR"],
      kode: "WI2021",
      image: "https://static.wikia.nocookie.net/gup/images/e/e2/Semovente.png/revision/latest/top-crop/width/200/height/150?cb=20170206094231",
      title: "Manajemen Rekayasa Industri",
      subtitle: "Mata Kuliah Wajib ITB",
    },    
    {
      id: 13,
      category: ["TK","TB","TI","MR"],
      kode: "MA1201",
      image: "https://static.wikia.nocookie.net/gup/images/e/e2/Semovente.png/revision/latest/top-crop/width/200/height/150?cb=20170206094231",
      title: "Matematika Dasar 2A",
      subtitle: "Matematika",
    },
    {
      id: 14,
      category: ["TK","TI","MR"],
      kode: "FI1201",
      image: "https://static.wikia.nocookie.net/gup/images/e/e2/Semovente.png/revision/latest/top-crop/width/200/height/150?cb=20170206094231",
      title: "Fisika Dasar 2A",
      subtitle: "Fisika",
    },
    {
      id: 15,
      category: ["TK"],
      kode: "KI1201",
      image: "https://static.wikia.nocookie.net/gup/images/e/e2/Semovente.png/revision/latest/top-crop/width/200/height/150?cb=20170206094231",
      title: "Kimia Dasar 2A",
      subtitle: "Kimia",
    },
    {
      id: 16,
      category: ["TP","TB"],
      kode: "KI1202",
      image: "https://static.wikia.nocookie.net/gup/images/e/e2/Semovente.png/revision/latest/top-crop/width/200/height/150?cb=20170206094231",
      title: "Kimia Dasar 2B",
      subtitle: "Kimia",
    },
    {
      id: 21,
      category: "TF",
      kode: "TF1201",
      image: "https://static.wikia.nocookie.net/gup/images/e/e2/Semovente.png/revision/latest/top-crop/width/200/height/150?cb=20170206094231",
      title: "Dasar Fisika Teknik",
      subtitle: "Teknik Fisika",
    },
    {
      id: 22,
      category: "TF",
      kode: "TF1202",
      image: "https://static.wikia.nocookie.net/gup/images/e/e2/Semovente.png/revision/latest/top-crop/width/200/height/150?cb=20170206094231",
      title: "Rangkaian Listrik",
      subtitle: "Teknik Fisika",
    },
    {
      id: 23,
      category: "TF",
      kode: "TF1203",
      image: "https://static.wikia.nocookie.net/gup/images/e/e2/Semovente.png/revision/latest/top-crop/width/200/height/150?cb=20170206094231",
      title: "Pengantar Struktur dan Sifat Material",
      subtitle: "Teknik Fisika",
    },
    {
      id: 24,
      category: "TF",
      kode: "MA2021",
      image: "https://static.wikia.nocookie.net/gup/images/e/e2/Semovente.png/revision/latest/top-crop/width/200/height/150?cb=20170206094231",
      title: "Matriks dan Ruang Vektor",
      subtitle: "Teknik Fisika",
    },
    {
      id: 31,
      category: "TB",
      kode: "TB1201",
      image: "https://static.wikia.nocookie.net/gup/images/e/e2/Semovente.png/revision/latest/top-crop/width/200/height/150?cb=20170206094231",
      title: "Ilmu Kimia Bahan Nabati",
      subtitle: "Teknik Bioenergi dan Kemurgi",
    },
    {
      id: 32,
      category: "TB",
      kode: "TB1202",
      image: "https://static.wikia.nocookie.net/gup/images/e/e2/Semovente.png/revision/latest/top-crop/width/200/height/150?cb=20170206094231",
      title: "Kerekausahaan dan Pengenalan Keprofesian",
      subtitle: "Teknik Bioenergi dan Kemurgi",
    },
    {
      id: 41,
      category: "TP",
      kode: "TP1201",
      image: "https://static.wikia.nocookie.net/gup/images/e/e2/Semovente.png/revision/latest/top-crop/width/200/height/150?cb=20170206094231",
      title: "Analisis Matematik dan Numerik",
      subtitle: "Teknik Pangan",
    },
    {
      id: 42,
      category: "TP",
      kode: "TP1202",
      image: "https://static.wikia.nocookie.net/gup/images/e/e2/Semovente.png/revision/latest/top-crop/width/200/height/150?cb=20170206094231",
      title: "Mikrobiologi Pangan",
      subtitle: "Teknik Pangan",
    },
    {
      id: 51,
      category: "TI",
      kode: "TI1201",
      image: "https://static.wikia.nocookie.net/gup/images/e/e2/Semovente.png/revision/latest/top-crop/width/200/height/150?cb=20170206094231",
      title: "Biologi Dasar",
      subtitle: "Teknik Industri",
    },
    {
      id: 52,
      category: ["TI","MR"],
      kode: "TI1202",
      image: "https://static.wikia.nocookie.net/gup/images/e/e2/Semovente.png/revision/latest/top-crop/width/200/height/150?cb=20170206094231",
      title: "Gambar Teknik",
      subtitle: "Teknik Industri",
    },
  ];

  const filteredData = materiData.filter((item) => {
    if (Jurusan === "def") return true; 
    return item.category.includes(Jurusan);
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
        <div className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
        {filteredData.map((item) => (
           <Box
                kode = {item.kode}
                image = {item.image}
                title = {item.title}
                subtitle = {item.subtitle}
                button = {"library/" + item.kode}
                id = {item.id}
           />
        ))}  
        </div>
      </div>
    </>
  );
}

