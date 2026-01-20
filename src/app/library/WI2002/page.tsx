"use client";

import { FileX } from "lucide-react";
import {Box} from '@/components/Section/fiturtest';
import { useState } from "react";
import { File, Folder, Tree, TreeViewElement} from '@/components/magicui/file-tree'
import {Embed} from '@/components/Section/fiturtest';
export default function Page() {
    let autoid =1;
    const getID = () => String(autoid++);
            const folder = (name: string, children: TreeViewElement[] = []) => ({
            id: getID(),
            name,
            children,
        });

    const pdf = (name: string, driveID:string) => ({
            id: getID(),
            name,
            url: `https://drive.google.com/file/d/${driveID}/preview`,
        });
    const data = [
        folder("RPMK & SILABUS", [
            pdf("1739778753107_[FINAL]-RPMK-&-SIlabus-MKWI-Literasi-Data-dan-IA.pdf", "1aGG1-nVD0kgCRnGqxwap6MSfjNLBPJKI"),
        ]),
        folder("PPT DOSEN", [
            pdf("Materi 0. Pengantar Perkuliahan.pdf", "1_SEGentXDq9_e9PCXcF_x8CvqYIqPeik"),
            pdf("Materi 1a. Pengenalan Literasi Data dan IA.pdf", "1FwWZGzuQh2OYBfiI78Hz8WAtWUBYgPoj"),
            pdf("Materi 1b. Intelligent Agent.pdf", "1062Bc9Pp-UxFp7uuybuUtYBXLML0XXIC"),
            pdf("Materi 2. Konsep Penting Literasi Data.pdf", "10_UWuraotcmfPSIRX2JS2wLyDmF4zFtz"),
            pdf("Materi 3. Exploratory data analysis Statistika deskriptif numerik.pdf", "1ScipcQTCoWzbj7fL2Cnc0X7D5Wx5GuA_"),
            pdf("Materi 4. EDA visualisasi.pdf", "13i6H_gln4HxV1xUcLs9i5-kxUHxo_nyF"),
            pdf("Materi 5. Peluang, Peluang Bersyarat, dan Kebebasan.pdf", "1U-TxRWhbTcgvOmDKoaEUVXHAvc8NHNKV"),
            pdf("Materi 6. Data Preparasi.pdf", "1xTj0IYD7YPMx1QBINZ-6hiwg5TKxlPPn"),
            pdf("Materi 8a. Pengantar-Data-Analytics-dan-Regresi.pdf", "11MB1tkKLRK_MZSw-o6FNF9vO-sn909FK"),
            pdf("Materi 8b. Machine-Learning.pdf", "1k5RhafC7LINeRgwXmocIGrAujonR145_"),
            pdf("Materi 9. Tahapan_Supervised_Learning.pdf", "1h3gVYGZ8ny6xBg2qJxbFteBCg3iQkRYJ"),
            pdf("Materi 10. Generative_AI_LLM_Teks.pdf", "19z5EuBJrAYhFZusiQgsrG-C8jy1dveiF"),
            pdf("Materi 11a. GenAI-nonText.pdf", "1QgtYNA6VRTt4JVUHI-y8cZrH-pd1ZzWm"),
            pdf("Materi 11b. Prompting.pdf", "19AcCaO0_ptqvIqmoaiPgG7ddicwOMuhi"),
            pdf("Materi 12. Etika-IA.pdf", "1UTyjaglkayS1iipGF9THtfhZiUgW8h74"),
        ]),
        folder("CATATAN", [
            pdf("Rangkuman Persiapan UTS.pdf", "1yqqQ_dYDMGwmf71pk3sle_7u1-Xd8OI_"),
        ]),
        folder("PREDIKSI UTS", [
            pdf("Latihan_Pra_UTS_LiDIA-1.pdf", "1WSXcSgpnrlW8rrkSvPoXPWKL9WQW2uEk"),
            pdf("Pembahasan Latihan Pra-UTS LiDIA.pdf", "1W5NqydlgNSJ7N3Ics_pPNhUOw5argQhD"),
        ]),
        folder("PROYEK TUGAS BESAR", [
            pdf("LAPORAN TUGAS BESAR (1).pdf", "11XrNbBe9F2jjm8YqiV0zykXEQejieKxx"),
        ]),
    ];
    
    const [Url, SetUrl] = useState("");
    const [Title, SetTitle] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const renderTree = (elements: any[]) => {
        return elements.map((element) => {

            if (element.children && element.children.length > 0){
                return(
                    <Folder key = {element.id} element = {element.name} value={element.id}>
                        {renderTree(element.children)}
                    </Folder>
                );
            }
            return(
                <File key={element.id} value={element.id}>
                    <div className="" onClick ={() => {
                        if(element.url){
                            SetUrl(element.url);
                            SetTitle(element.name);
                        }
                    }}
                    >
                        {element.name}
                    </div>
                </File>
            );
        }
    );
    }
    return (
    <div className="pt-21 min-h-screen bg-gray-900 text-white p-6 flex gap-2">    
      {/* LEFT: Navigation Tree */}
      <div className='border border-gray-700 rounded-lg p-4 bg-gray-950 h-[85vh] overflow-y-auto $className={isOpen ? "w-1/3" : "w-20"}'>
        <button onClick={() => setIsOpen(!isOpen)}
        className="text-white">
            <svg className = "w-6 h-6" fill="None" stroke="white" viewBox = "0 0 24 24">
                <path strokeLinecap="round" strokeWidth = {2} d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
        </button>
        <div className={isOpen ? "block" : "hidden"}>
            <h2 className="text-xl font-bold mb-4 border-b border-gray-800 pb-2">Daftar Materi</h2>

            <Tree initialSelectedId="1" indicator={true} elements={data}>
                {/* This command actually draws the data on screen */}
                {renderTree(data)}
            </Tree>
        </div>
        </div>

      {/* RIGHT: Viewer */}
      <div className="w-full flex flex-col pt-4 h-[85vh] bg-gray-950 text-white">
         {Url ? (
             <Embed 
                header={Title} 
                embed={Url}
                footer=""
             />
         ) : (
             <div className="h-full flex items-center justify-center text-gray-500 text-xl border border-dashed border-gray-800 rounded-xl">
                <h1>-- Klik file di kiri untuk melihat</h1>
             </div>
         )}
      </div>

    </div>
  );
}
