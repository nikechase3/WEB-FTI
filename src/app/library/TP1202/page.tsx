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
        folder("MATERI", [
            pdf("PG1202_Dasar Mikrobiologi Pangan.pdf", "1Yaa4YtADzAOsB7bjyiyGj_Swynk6JN_4"),
            pdf("PG1202_Bakteri Ragi Jamur.pdf", "1iUgoq0lxqRE2P772-_xQKiBtNE9fUHHK"),
            pdf("PG1202_Jamur.pdf", "1T9J_j2CkuCY2rgxP-UiY66Y59rtWSJLP"),
            pdf("PG1202_Pertumbuhan Mikroba.pdf", "1HR7ohWQABnJmcIM4qyKlTSII7ndw4FHt"),
            pdf("PG1202_Food Spoilage.pdf", "17avPHyhJ0ShR_CW8X7tTiQjx_Lzkj-jK"),
            pdf("PG1202_Foodborne Disease.pdf", "1FhF8V3ijdkMKJro719jdO_W-Iy98xrln"),
            pdf("PG1202_Mikrobiologi Industri (Materi TK).pdf", "1WbY2USNNztROBmOtafTdVJPSXYCzqnnY"),
        ]),
        folder("PRAKTIKUM", [
            pdf("PG1202_Petunjuk Praktikum Mikpang 2025pdf.pdf", "1Y45-ctNKJMdOsqKw67ikxxd6LGMK-7xA"),
        ]),
        folder("UJIAN", [
            folder("RINGKASAN DAN SIMULASI UTS UAS", [
                pdf("RANGKUMAN MIKROBIOLOGI PANGAN UTK UTS.pdf", "1v7bRgTNQJ_n3oLNpDm01bAaH7fVpgztx"),
                pdf("RINGKASAN PPT KEL DAN SIMULASI UAS MIKPANG .pdf", "1PFVw15SN97zS74Inv1O0LaQHK-Q8Dp87"),
            ]),
            folder("SOAL UJIAN TAHUN SEBELUMNYA", [
                folder("UTS", [
                    pdf("Soal UTS 2022 mikpang.pdf", "15rfyKagT4kwmwbiSwxXBHRpJ0mR80P3-"),
                    pdf("UTS 23 mikpang jawab louisa ed.pdf", "1dlqe1eYPo9HRTlpGSoQbqg-b5qiuq-fq"),
                    pdf("Notes UTS Mikpang edited.pdf", "1ecIwCFe6zuZbLXdf75R3xXPm_qQxKXVq"),
                ]),
                folder("UAS", [
                    pdf("SOAL UAS TAHUN SEBELUMNYA YG NYAMBUNG.pdf", "1U5SxHn1jLq7avx_ev4iNBMO5uhKwKOeE"),
                ]),
            ]),
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
