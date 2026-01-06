import { FileX } from "lucide-react";
import {Box} from '@/components/Section/fiturtest';

export default function Page() {
  return (
    <>
      <div className = "pt-21">
        <h1 className="text-center text-5xl font-bold">Materi</h1>
        <div className = "bg-gray-800 w-100% rounded-lg m-4 p-4">
            <h1>Filter</h1>
            <select className = "p-3 rounded-lg border" name ="jurusan" id = "jurusan">
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
           <Box
                kode = "MA1101"
                image = "https://static.wikia.nocookie.net/gup/images/5/5e/P-40.png/revision/latest?cb=20170205025926"
                title = "Matematika Dasar I"
                subtitle = "Tahap Tahun Pertama FTI"
                button = "https://gup.fandom.com/wiki/Anchovy"
           />
           <Box
                kode = "FI1101"
                image = "https://static.wikia.nocookie.net/gup/images/d/dc/CV-33.png/revision/latest/top-crop/width/200/height/150?cb=20170205030747"
                title = "Fisika Dasar I"
                subtitle = "Teknik Kimia"
                button = "https://gup.fandom.com/wiki/Anchovy"
           />
           <Box
                kode = "MA2101"
                image = "https://static.wikia.nocookie.net/gup/images/e/e2/Semovente.png/revision/latest/top-crop/width/200/height/150?cb=20170206094231"
                title = "Matriks dan Ruang Vektor"
                subtitle = "Teknik Fisika"
                button = "https://gup.fandom.com/wiki/Anchovy"
           />
           <Box
                kode = "WI1103"
                image = "https://static.wikia.nocookie.net/gup/images/e/e2/Semovente.png/revision/latest/top-crop/width/200/height/150?cb=20170206094231"
                title = "Pengantar Prinsip Keberlanjutan"
                subtitle = "Tahap Tahun Pertama FTI"
                button = "https://gup.fandom.com/wiki/Anchovy"
           />
        
        </div>
      </div>
    </>
  );
}

