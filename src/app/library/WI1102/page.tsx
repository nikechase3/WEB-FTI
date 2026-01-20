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
                folder("UTS", [
    pdf("Mock Up UTS Berpikir Komputasional 2025", "1Zn-sFbmTjZLOrEfFCZ24E8Mq6SwXf4nZ"),
    pdf("UTS_PENGKOM_2022.pdf", "173OVPJqHpHv6p5rJ7yFrNykYClzf7TRT"),
    pdf("UTS_KU1102_2021.pdf", "1uqLUdj5wdmEWHezeFREzADD-9CykQbmH"),
    pdf("UTS_KU1102_2019.pdf", "14TxkQp4dI89F3XzKQJHBOGQOtw3rfvXY"),
    pdf("UTS_KU1102_2018.pdf", "1Aq-35-Q9AOg9I1HlBGPtGQwYR2Tn_8qB"),
    pdf("SOLUSI UTS_KU1102_2021.pdf", "1LkpY2fhXj_rxHwhzUtZNuZY_EA8Lkt6Y"),
  ]),
  folder("UAS", [
    pdf("UAS_KU1102_2022.pdf", "1AJfjg-eu1bDOmK9N7IsD2wc4sbU9kQlp"),
    pdf("UAS_KU1102_2021.pdf", "1Y2rEpx1c8ptrEi9YsKej0zR_UiEYpirU"),
    pdf("UAS_KU1102_2018.pdf", "1Xb3OgW7JmYiNjQ1Dqdx_xyTpvrEzAZtC"),
    pdf("UAS_KU1102_2019.pdf", "1vfDr7_s9_GAEGAn9U4BOVCKUvhnfgL3K"),
  ]),
  folder("PRAKTIKUM", [
    pdf("Pembahasan Soal Praktikum Berpikir Komputasional.pdf", "1mhTLXZFXl5zG6zw4-mheABpxvJekoOQ-"),
    pdf("Modul Berpikir Komputasional", "1Ifpw-wwoxkLVCu0Bt7mIx9pO6APau8EH"),
  ]),
  folder("PPT DOSEN", [
    pdf("1762843997153_WI1102_11_DampakComputing-AI.pdf", "1xG4tLnudTGqf6tHY0u5qDUt2V0bvZ_rm"),
    pdf("1762843974944_WI1102_11_DampakComputing-tanpa-AI.pdf", "17W3S1o8W9hbKHmAsj-VKucu9nAiZwS-j"),
    pdf("1762843522577_WI1102_10_Python_Subprogram.pdf", "1IK3A-EFiIMUpbY91tyqn9l4AcMS4mJaP"),
    pdf("1759819093066_WI1102_06_Python_Array.pdf", "15gukdVqOnInfUXxM9YEL5TzsERqO2ViD"),
    pdf("1759293806936_WI1102_05_Python_1_AnalisisKasus.pdf", "1n8KQmueAwWfnQhudMu5W3PBggJdw4LM4"),
    pdf("1759293788091_WI1102_05_Python_1_Pengulangan.pdf", "1GX9yAOoewbeQvvsSXyubZLSgMtm1MG5y"),
    pdf("1758612872618_WI1102_04_Python_StrukturDasarProgram_2025.pdf", "1-OE5VzBvZGD2zzMNZn0VQkjF-tVkoN21"),
    pdf("1757400009965_WI1102_02_AlgorithmicThinking.pdf", "12WqgCojdn3vL4Titm5qoKEFHOH8e1XPr"),
    pdf("1756791112052_WI1102_01_ComputationalThinking.pdf", "1Op7Nfizz_IUhuW_BZldabU5P7AiIAbkq"),
  ]),
    folder("TUGAS PROYEK", [
        folder("Proyek I", [
            pdf("Contoh Laporan Proyek I", "1g-YHb3YvbfLFEGqpTAqQ8nvtPpOEj4AN"),
        ]),
        folder("Proyek II", [
            pdf("Contoh Laporan Proyek II", "1Lz-XrI9IcAeKq1Wl_KiiM8Wh3zAzEYiexBqWCOfa0wQ"),
            pdf("Contoh Laporan Proyek II", "10q2-fmgrtAbkTWJAX-SsSLHReqhEjhqB"),
            pdf("Contoh Laporan Proyek II", "1VRSnsxNFwipswBBnnqL6bmrEHP-nnbWE"),
        ]),
    ]),
    folder("CATATAN", [
        pdf("Rangkuman_05_Algorithmic Thinking_Pengenalan Komputasi_Genap.pdf", "1_-SZ-KurzWcCyR8rs6Qs72f51VFBW6N4"),
        pdf("Rangkuman_03_Impact of Computing_Pengenalan Komputasi-Genap.pdf", "1YtXqKL9ys5HU3BdzwiElpqhcFGLxCmDv"),
        pdf("Rangkuman_04_Computational Thinking_Pengenalan Komputasi_Genap.pdf", "14fmFNDMW5A3vm9YDYVBOEWCf3aDZsaG0"),
        pdf("Rangkuman_02_Computing System Network and Internet_Pengenalan Komputasi-Genap.pdf", "1Y0DIwRqj3mZr1qH0MprfEl_ejSxwiM44"),
        pdf("Copy of Cheatsheet_UAS_ Pengenalan Komputasi-Genap (1).pdf", "1OceoKThdL66Aqm_9o9m_8w5GWflBUSBw"),
        pdf("Cheatsheet_UTS_ Pengenalan Komputasi-Genap.pdf", "1Dqgq8QA4wrIYxRswYZMuqD-xvRon7Nfe"),
        pdf("Solusi_UAS _2019-2021_Pilihan Berganda_Pengenalan Komputasi-Genap.pdf", "1ect6UP7mW9eCqd5L6vSvy6juQUezc-BQ"),
        pdf("Solusi_UAS _2019-2021_Essay_Pengenalan Komputasi-Genap.pdf", "116qsfCzZeF7WeNy1z4V-HQz0vhFyMjFK"),
        pdf("Rangkuman_Pengenalan AI_Pengenalan Komputasi-Genap.pdf", "13b6U_c9BkOAEEYaVkxSiV0vIpW0dkIXU"),
        pdf("Rangkuman_Data Analyst_Pengenalan Komputasi-Genap.pdf", "1ARSAYCWuoWu_EO_q99OaS9n-Ktu0dfiK"),
        pdf("Mockup_UAS_Soal_Pengenalan Komputasi-Genap.pdf", "1eFN8_Yj9HaPrZCRI7ZAWl1vpouPBnVZE"),
        pdf("Mockup_UAS_Soal dan Solusi_Pengenalan Komputasi-Genap.pdf", "1i27UoVvBjS2AEa-cOsC1cimgL6Nbtypj"),
        pdf("Copy of Cheatsheet_UAS_ Pengenalan Komputasi-Genap.pdf", "1uFXzzHahBoI-pSq3G_2B9XfHipJLKAch"),
        pdf("Cheatsheet_UAS_ Pengenalan Komputasi-Genap.pdf", "1bfoed7NH4iFji-a5eXo344ifrnyCuyXn"),
        pdf("3. Dampak dan Trend Teknologi Computing.pdf", "1D4aiFgEhBSx52P0NOUh8KKAa2_fSJ3O8"),
        pdf("2. Python.pdf", "1OJHUZrpej-HTZJDN7EwtSPzS__UkTBOL"),
        pdf("1. Konsep Dasar Computational Thinking.pdf", "1D2oQHlI73W81sbXddMnb42oFvHHS1nSo"),
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
