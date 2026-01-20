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
    folder("PPT Dosen", [
        pdf("1-Pendahuluan 2024-2025.pdf", "1t6Ldz0SRNXJPSnhnyIhkFIoq7EmShMfd"),
        pdf("2-The Chemical Context and The Molecular Diversity of Life.pdf", "1WstzyU5CmskoaF3FwZWIKxz-hG104SCT"),
        pdf("3-Cell structure and function.pdf", "1XbnG5CTW_xkDJikHcc18KgK6ofjgtMtD"),
        pdf("4-Genetika dan Evolusi.pdf", "1zgPZO6V9nA44M18mvtqs9LbBQIps8kgn"),
        pdf("5-Sel, Genetika Dasar Kehidupan, dan Implikasinya terhadap Keselamatan di Tempat Kerja.pdf", "1V9a0JRmxa-f1UD2vchzV-WStgSb7z8bH"),
        pdf("6-Musculoskeletal System.pdf", "1e5SgkwJ36QXzFAHRaAWvX8gmuNqdh0NI"),
        pdf("7-Digestion, Respiration and Circulation.pdf", "1FaqAEblldq6oYgA7yD1Va7GxBPRz8E0-"),
        pdf("8-Osmoregulation, Secretion, Immune and Nervous System.pdf", "16CGFTQircHfYuhpTzKh9nrWfECVVa7PT"),
        pdf("9-Principle of Ecology.pdf", "1HLXzedtP_MAfREjaKMNqON7S8nnv74Mo"),
        pdf("10-Evolution and Adaptation.pdf", "1d8Qt3o5Bd-TlFmm0LZoAH-Xb7pCwb0kP"),
    ]),
    folder("Catatan", [
        pdf("Rangkuman UTS.pdf", "11Yl8y2fgawNYwA11Zpsuu4thMAu50LkG"),
        pdf("Rangkuman UAS.pdf", "1G69BJU1MM16qhBqrOaAvgZ2-DRWVH366"),
    ]),
    folder("UTS", [
        pdf("TI1201 - UTS 2024_2025 - Soal PIlihan Ganda.pdf", "1MiEMx5297e-Z0Mx_5rjFdaZZpwGe0vDd"),
    ]),
    folder("UAS", [
        pdf("TI1201 - UAS 2024_2025 - Soal.pdf", "1TaznlBKBR88q2kVHEZ6b6aS5uUxh72NF"),
    ]),
    folder("Tugas PPT", [
        pdf("Optimalisasi Penerapan Ilmu Biologi dalam Industri Sebagai Upaya Mitigasi Risiko Paparan Kadmium pada Pekerja Bengkel.pdf", "18OR3gZX9q3cQsc3_ZKA1qI0iUqnWHLjv"),
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
