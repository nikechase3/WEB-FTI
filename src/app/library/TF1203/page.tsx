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
    folder("Buku Referensi", [
        pdf("Materials Science and Engineering An Introduction by Callister", "1nbNN2SBQlaspIxwMgMcLiT3d5-CHnTN0"),
        pdf("The Science and Engineering of Materials", "1-QpB9kiAbEq5hRMTj_J-lr2UQ-pI4BBu"),
        pdf("Electronic Materials & Devices Principles of 4th Ed", "1ED9RPBMSEe9aNptld3n-QaaRLEaIyiw1"),
    ]),
    folder("PPT", [
        pdf("Intro_1.pdf", "1GGRT9gzKoDlcmstSDhE_ZCM4JxQkXUcW"),
        pdf("1 Pengantar Sains dan Rekayasa Material GS.pdf", "1S7g_nhWRw0URclDpelDrT_nWDkjVBcDF"),
        pdf("Ch2.pdf", "1Qyv5JLK-00R_OIQEfiQZ_IUhb1dwhcYy"),
        pdf("Ch3_SSM_2025.pdf", "1K4Ij_2pw3tJOLZz7IVL3HlQW-zXeOps0"),
        pdf("Cacat pada material.pdf", "160pzgLYrpe-pGnfpTfDzu3Ca38Fy1X4e"),
        pdf("5 Difusi Atom Ion.pdf", "1vVxAoZA0YKxHsZKM57D7HAa7-AtVeGm4"),
        pdf("6 Pengantar Sifat Mekanik (1).pdf", "1VauzHpdMKfSAwq0ubLcywSSRr06cxv43"),
        pdf("TF1203 Struktur dan Sifat Material - Pengantar Sifat Listrik (Bag. 1).pdf", "1-ApsQyQBR6rUKPvlLkQkIP2JoNGPIZEL"),
        pdf("TF1203 Struktur dan Sifat Material - Pengantar Sifat Listrik (Bag. 2).pdf", "1EZ7RHnYxVoAbe0WCEowp6h4ZkIGxu6Bb"),
        pdf("TF1203 Struktur dan Sifat Material - Pengantar Sifat Listrik (Bag. 3).pdf", "1Sm1NKK5GW5UdHeLi4skp3EE6ekawc9c4"),
        pdf("TF1203 Struktur dan Sifat Material - Pengantar Sifat Magnetik.pdf", "176HWl1_E5WOhuY40dJA2tuyvfojvM-0N"),
        pdf("TF1203 Struktur dan Sifat Material - Pengantar Sifat Optik.pdf", "1Z_DuhdonbHzWfMzc523Anv6oDVOU5xMs"),
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
