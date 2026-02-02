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
        pdf("PG1201-0.pdf", "1pnLMYm9BcZhwPndjJHoOnWdQsDwE1p0t"),
        pdf("Berhitung-dan-Model.pdf", "1mJxYXqyP8-_iFGoA18v7hZeF3dogrFu2"),
        pdf("PG1201-2.pdf", "1FpzC08PEJxMc0rL8_UESG5x6o7IIBcPq"),
        pdf("PG1201_3 (1).pdf", "1vpIK3bz5Iw8AhhdousHzSdI5zRpQoK7G"),
        pdf("PG1201-Penyelesaian-Persamaan-Tak-Linier.pdf", "1YPGYOjj0wr3yvk7M3axE9vPmK398l5Ms"),
        pdf("PG1201-Penyelesaian-Persamaan-Tak-Linier-02-01.pdf", "1PzV4qN9Kyloqxne9mEZ5tyEcfOigS_dP"),
        pdf("PG1201-Penyelesaian-Persamaan-Tak-Linier-Soal-Latihan (1).pdf", "14QJ0suKwjVzo9Y3irt7hxWvcZHWisWzL"),
        pdf("PG1201_4.pdf", "19r11pQGJ2HIrf1Brv3EazTXX5JsX7wSB"),
        pdf("PG1201_5.pdf", "1Vo-M4xG0Va93hHPWgyCiFDXckHQw9mO9"),
        pdf("TK2106-ODE-01-Motivasi.pdf", "1iw1uiRwD2pA8H9HnpY1_7ipkGr1rxCaI"),
        pdf("TK2106-ODE-02-Pendahuluan-ODE-Syarat-Awal.pdf", "12-bg9CsbIr313Qcvu827IPg7uLwuZBx0"),
        pdf("TK2106-OPT-Optimisasi.pdf", "1wc6owM-W-x-nUdqZA5oOxaJRDrCLsLot"),
    ]),
    folder("TUGAS", []),
    folder("KUIS", []),
    folder("UJIAN MODUL", []),
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
