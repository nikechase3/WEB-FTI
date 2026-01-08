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
        folder("MATERI DAN RANGKUMAN", [
        pdf("Materi 1.pdf", "1aaHVEd_5eLcE74F3mkv_iUhGF-dfHhpB"),
        pdf("Materi 2.pdf", "1n-y5hPVPWqpavHIMUSB0wHVhOs4_vykC"),
        pdf("Materi 3.pdf", "1L3G-fczrij-2TeJtMBV06KNFWM7marHg"),
        pdf("Materi 4.pdf", "1EesTIz6N7I2gCpO-LevshW1EGScl4600"),
        pdf("Materi 5.pdf", "19NmW9qMZ4C441482LehC4ALxTbnEB4IY"),
        pdf("Materi 6.pdf", "1TpVHwKVTSDM_a7LmTbQaVi7aa0QKM2-D"),
        pdf("Materi 7.pdf", "1GDeDAp-ocm5u0d-KKs3AnRyHCRtljMUW"),
        pdf("Climate Change Mitigation.pdf", "1G068VG0NjK6ST_-aDP97SZd0lc1njVg_"),
        pdf("Rangkuman Sustainability by AI.pdf", "1GOsNdA3aQkjj5UQyIJZS-U0tco-yey3D"),
    ]),
    folder("PROYEK", [
        pdf("Poster Proyek Sustain.jpg", "1_amjoB2XxiMPpgSa3nvzJ0t6teoIU-AM"),
        pdf("Booklet-Sustainability-FTI-K07_04.pdf", "1WMGfXe2spoR6qxCx5iSjdqDoqG6zi9M2"),
    ]),
    folder("UTS", []),
    folder("KUIS", [
        pdf("Kuis 1.pdf", "1zm3hUouBU2OhvkVDreWQeimRw9U8uizd"),
        pdf("Kuis 2.pdf", "1uTkdC6R_BXU1IztWaW-BonamB8gQ36jy"),
    ]),
    ];
    
    const [Url, SetUrl] = useState("");
    const [Title, SetTitle] = useState("");

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
      <div className="w-1/3 border border-gray-700 rounded-lg p-4 bg-gray-950 h-[85vh] overflow-y-auto">
         <h2 className="text-xl font-bold mb-4 border-b border-gray-800 pb-2">Daftar Materi</h2>
         
         <Tree initialSelectedId="1" indicator={true} elements={data}>
            {/* This command actually draws the data on screen */}
            {renderTree(data)}
         </Tree>
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
