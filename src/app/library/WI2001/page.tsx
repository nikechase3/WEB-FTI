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
    folder("PROYEK", [
        folder("TEKNIK KIMIA 24", [
            pdf("Modul Project Akhir PRD Teknik Kimia.pdf", "1MBamGMsXWR5nxPKCP7ORFqhF22tGXP27"),
            pdf("PPT Modul Tugas Akhir PRD.pdf", "17cmcHMblxskBI2nmEAeEfmpwDOQfyQig"),
            pdf("AHP.pdf", "1_Rg9p9Gk5ixG68MYCvMaWZBZAKtMUohF"),
            pdf("WI2001 Pembangkit Listrik Tenaga Surya.pdf", "10yGtdAS9M13CDSNXLT_Z4D30CJQ7Kyy2"),
            pdf("WI2001 Battery.pdf", "1DM9RslimF0U8qkdkAP-oSgrvkbM6ClCH"),
            pdf("WI2001 Pengembangan PLTS di ITB.pdf", "1BPAGPW4BfFF-R9yiMsZXe3HA87shvWRZ"),
        ]),
        folder("TEKNIK INDUSTRI & MANAJEMEN REKAYASA 24", [
            pdf("Panduan Pelaksanaan Project Akhir PRD .pdf", "1CgfTR-wBaBlkGUC2yJtmCW8mQFNGS-Cg"),
            pdf("Guideline Pengumpulan Video Prototype.pdf", "1FEtTVZW9EHvViWFGTmFB7VT9oDs1LSMH"),
            pdf("Template Proposal Pengajuan Dana PRD 2025.docx", "1ANbkkPzmWXJs3yV7I6ZatVr8I-MsnrSX"),
        ]),
    ]),
    folder("LATIHAN DAN UTS", [
        folder("UTS", [
            pdf("Kisi-Kisi UTS & Latihan Soal 2024-2025.pdf", "1PXelupiGmhULwxtT-v01pjnZhTab4xR9"),
            pdf("Simulasi UTS PRD FTI 2021 Bagian 1 - Soal.pdf", "1hg2UQ9lQ8yhoA5d5b8tjGbx6l0BEHwqN"),
            pdf("Simulasi UTS PRD FTI 2021 Bagian 1 - Solusi.pdf", "1-Xv5c0FTaqPZCfjyZp8XVPW0Z_DMgFVR"),
            pdf("Simulasi UTS PRD FTI 2021 Bagian 2 - Soal.pdf", "1kRAOGJsV3NDwEtb-uhfwhMhrlhSUaqAe"),
            pdf("Simulasi UTS PRD FTI 2020 by Akademik FTI 2020 - Solusi.pdf", "1hf-gkwN9koaBwfBIabvky3PC4gp8Nx5Z"),
        ]),
        folder("Latihan Soal ", [
            pdf("Latihan_Soal_UTS_Engineering Design Process.pdf", "1DFZB-LtPxZmc-O1Cd3GQiZNz7hbvlQGs"),
            pdf("Latihan_Soal_Engineering Design Process_Gabungan.pdf", "1XPj6NNZMcUTvOzx8rZ6z5Dsnk8HeHMWL"),
        ]),
    ]),
    folder("PPT DOSEN PRD'24", [
        folder("Sebelum UTS", [
            pdf("Minggu 1, Deskripsi dan Ketentuan Kuliah PRD (dapat berubah sewaktu-waktu).pdf", "1MlCokWLnqLhyqmb0f-fCM3pUB1pX0tyA"),
            pdf("Minggu 1, Pengertian Umum dan Profesi Kerekayasaan.pdf", "1vORShG8oVsvNrARoWLrbAwOVfP_P7dB8"),
            pdf("Minggu 1, Engineering Design Process.pdf", "1VAzyQTyNVh84LSSy9r6FjJl3wyVDvzRM"),
            pdf("Minggu 2, Engineering Design Process 2.pdf", "1hDZztC990bWQUDcZ2VTUwByMrwVNQuGc"),
            pdf("Minggu 2, Team Work and Communication.pdf", "1gPw-zpr_GnPr-6lcPIFhfAyQgjvq3PdU"),
            pdf("Minggu 3, Design Thinking.pdf", "1AKoWdDzIjH6cLMSj4dcq3p27yN3CtHT9"),
            pdf("Minggu 4, Ideation and Brainstroming.pdf", "1L1sPPXD2lkLoh9ch6Z5ONWx7qswms2sE"),
            pdf("Minggu 5, Pengujian dan Iterasi.pdf", "1-eXHs0bBfQ4C6Fk6JG4pSZAqrwBf1bW_"),
        ]),
        folder("Setelah UTS", [
            folder("Prodi Teknik Fisika (2024)", [
                pdf("PRD TF 24 MODUL 1.pdf", "1oBFJ8_OnU-v4Y8g167DVvZVXUGLgFm6w"),
                pdf("PRD TF 24 MODUL 2.pdf", "16qj02kzJkXS69smu-TV0jgByw2qf84Ug"),
                pdf("PRD TF 24 MODUL 3.pdf", "1mUQK-5YmL0dx7NIPLT1mcFu9TIa6zgT4"),
                pdf("PRD TF 24 MODUL 4.pdf", "1NN7ksblr5esWGq2hw6iqSbDdTpXVr2jN"),
                pdf("PRD TF 24 MODUL 4.1.pdf", "1xngpJsL4y7o6h7SlMF3hoGrdIzEK9o_1"),
                pdf("PRD TF 24 MODUL 5.pdf", "1hxl0zswLTngDo384jKYlMk-mBjvtyy4D"),
            ]),
            pdf("The Time Value of Money (Future Value and Present Value).pdf", "1EmEetI4C96fSvbc1fiAYmoYG3x7nKfOx"),
            pdf("PENGAMBILAN KEPUTUSAN MULTIKRITERIA.pdf", "1OFc7ZI3HVXDyt8LeBGX7SnADY-MAut_Y"),
        ]),
    ]),
    folder("CATATAN", [
        pdf("RANGKUMAN PERSIAPAN UTS PRD FTI 2024 MINGGU 1-5 FULL BESERTA LATSOL.pdf", "196xM073IofEQfacv887aKY1oMiHAr1qf"),
        pdf("Catatan Singkat Sesuai Kisi-Kisi.pdf", "1TucnKprJm3J-B65Xf8BbFFd9bjiUIvqx"),
        pdf("RANGKUMAN PERSIAPAN UTS PRD FTI 2024 MINGGU 1 dan 2.pdf", "19qP-qEe71v19S4iOpjHV5Bd7MGyBdJ5A"),
        pdf("RANGKUMAN PERSIAPAN UTS PRD FTI 2024 MINGGU 3.pdf", "1twk0AdMldGDMgXofc54GTV1t1yBXKkqo"),
        pdf("RANGKUMAN PERSIAPAN UTS PRD FTI 2024 MINGGU 4.pdf", "1LS8izmhMV_6o-xQ_c6OtN68JSqNLcAMJ"),
        pdf("RANGKUMAN PERSIAPAN UTS PRD FTI 2024 MINGGU 5.pdf", "1qKxyxHjprD52sVYtQmJAV22O964uVi5s"),
    ]),
    folder("TUGAS KANVAS", [
        pdf("1741004651123W2-AEIOUKanvaspdf.pdf", "1w0noALBos0PCqSDxfmV4GC-3B9uWObOq"),
        pdf("1741004651123W2-MembuatInsightKanvaspdf.pdf", "1XmGCqGQ9rNdF3QpvkwX86ILnzi9HJire"),
        pdf("1741004651123W2-PerumusanMasalahKanvaspdf.pdf", "1afSxe39IQg6CGshzUqhOX1Q1vCSTlcpl"),
        pdf("1741676744020_30Lingkaran_Kanvas-1.pdf", "1RF58P1nRe4QrHQNj6oGgGosV03CkeMND"),
        pdf("1741676744020_Curahgagas_Kanvas-1.pdf", "16BwOum7GI3ns7hd1ih70asFT-vZZCOUb"),
        pdf("1741676744020_Crazy8_Kanvas-1.pdf", "1lX3N4rkJKYLngoshyua91vIY3tKlmUD_"),
        pdf("1742393250978_3Lenses_Kanvas.pdf", "1fWKCgzIm9rtCs59aRAar3jEKkSu6J-7K"),
        pdf("1741676744020_SketsaPurwarupa_Kanvas-1.pdf", "19Cz85CJkmy_K8SLRvM96CI9Hblw26e_R"),
        pdf("1742196908576_PurwarupauntukDiuji_Kanvas.pdf", "16YAV7ZFbyFZngVfdctRfeClv0hiKy2Ol"),
        pdf("1742393226839_DRO_Kanvas.pdf", "1qTWqzPBb2pzoDdpYxYRvvtqTjg6yWgFh"),
        pdf("1742393203961_FeedbackCapture_Kanvas.pdf", "1s5B-ldscore-XWS7WEuBAKxw2956AOre"),
    ]),
    folder("PUSTAKA", [
        pdf("Exploring Engineering, Second Edition: An Introduction to Engineering and Design", "16iowRO5X-wFtnwcI8s4UhwSQiOH4zONx"),
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
    <div className="pt-21 min-h-screen bg-gray-200 dark:bg-gray-900 text-black dark:text-white p-6 flex gap-2">    
      {/* LEFT: Navigation Tree */}
      <div className='border border-gray-700 rounded-lg p-4 bg-gray-100 dark:bg-gray-950 h-[85vh] overflow-y-auto $className={isOpen ? "w-1/3" : "w-20"}'>
        <button onClick={() => setIsOpen(!isOpen)}
        className="text-white">
            <svg className = "w-6 h-6 fill-none stroke-black dark:stroke-white" viewBox = "0 0 24 24">
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
      <div className="w-full flex flex-col pt-4 h-[85vh] bg-gray-100 dark:bg-gray-950 text-white">
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
