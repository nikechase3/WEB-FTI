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
        folder("TATA TERTIB", [
            pdf("TATA TERTIB PELAKSANAAN MKOR WI2003 SEMESTER II 2024/2025.pdf", "1huKMI5WJjdTDR0SxuxpVrxfq-Vtsl7dy"),
        ]),
        folder("PPT DOSEN", [
            pdf("Pengantar Olahraga Semester II 2024/2025.pdf", "1yzgqxc3y4WqDhWh_a0b7hakcFUcghvXe"),
            pdf("PPT Pertemuan-1-Teori-2024/2025pdf.pdf", "1qrjlIncNfcSuXPDefvGEhNdjQmcKwOat"),
        ]),
        folder("CATATAN", [
            pdf("Rangkuman FTI 2022.pdf", "15t0iE3_ZfmRK1pl9hk91mvItW0W2SMHm"),
        ]),
        folder("UAS", [
            pdf("UAS Teori Olahraga 2023-2024.pdf", "1qPOzJFuHq8bJfTdpb2dQUf_RFcVZ0g_x"),
            pdf("UAS Teori Olahraga 2022-2023 Part 1.pdf", "1eIydxS5-GZZG7e2hm3-kjI2ZinHlTgi8"),
            pdf("UAS Teori Olahraga 2022-2023 Part 2.pdf", "1P47-cP6DV8XVlypk80IFRtb2qSKmS5pw"),
            pdf("UAS Teori Olahraga 2022-2023 Part 3.pdf", "1atE5pAFBn2UWJqg9ljIYzR8pGMWdS8uU"),
        ]),
        folder("PUSTAKA", [
            pdf("Physiology of Sport and Exercise - 3rd Ed", "1sAeoj68kd_FEexF-i2HtwYfRlI4LYhHk"),
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
