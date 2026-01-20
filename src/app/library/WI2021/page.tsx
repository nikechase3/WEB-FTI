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
        folder("MANAJEMEN REKAYASA INDUSTRI", [
            folder("PPT DOSEN", [
                pdf("Minggu 2 - Evolusi Manajemen.pdf", "1Z6J16cpwn-2bqwjRsO4slwDz4268vVG9"),
                pdf("Minggu 3 - Strategic Planning.pdf", "1pgzs-tyn5qtowO8VbzWIXos0FVNngSwv"),
                pdf("Minggu 4 - Organizing.pdf", "1_ZnL8mTKrL5mHBtdaeBd_DwyUieG5aiv"),
                pdf("Minggu 5 - Kepemimpinan.pdf", "1AYXSvWoQXvgusAtjuxkG4SzwJY5ydss9"),
                pdf("Minggu 6 - Controlling.pdf", "1OzrFbvae9Am4IZn3XkBqWraPWsIfNc9t"),
            ]),
            folder("CATATAN", [
                pdf("Bab 2 - Evolusi Manajemen.docx", "1YiCUdY2kcLOQNLwV2-Yd1lrYenPHqaSv"),
                pdf("Bab 3 - Strategic Planning.docx", "17IGO5_66Rp_6dnqiGMLU7JZHWEjKIdfT"),
                pdf("Bab 4 - Organizing.docx", "1C-cL2sCEDWrPBuLwa9Av61tUEoad7BJP"),
                pdf("Bab 5 - Kepemimpinan.docx", "1zFRUWaYv0kMgpJz7snJEjuXEe89yO1CO"),
                pdf("Bab 6 - Controlling.docx", "1KZ1M_BCMOumNTKaBc0SeUoqAJyM8lY1h"),
            ]),
            folder("UTS", [
                pdf("SOAL UTS 2024 (seinget gua).docx", "1D30F1guDEWZwn9ave0yDDebHNnPUqYno"),
            ]),
            folder("UAS", [
                pdf("Soal UAS MRI 2024.docx", "1JpOjLhX5YV3U4XYf4HYQsCLiojVFBqb8"),
                pdf("Rangkuman UAS MRI 2024.docx", "1Xz2D-AqgwuB5gf9ml20bil1RA-fm5lyn"),
            ]),
        ])
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
