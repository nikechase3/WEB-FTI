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
            pdf("UTS 2025/26.pdf", "167vZeq9nvFC4IgUz-XVkhRli3pBVww94"),
        ]),
        folder("KUIS", [
            pdf("Kuis Pancasila + Jawaban.pdf", "11kA0TvPaVbbujVcO9JmHVl-KB4fdFLG9"),
            pdf("Kuis Pancasila.pdf", "1Ks-TTIpMSkMGZr5lOigzItClvNelYs9L"),
        ]),
        folder("PPT", [
            pdf("Pancasila-sebagai-Dasar-Pengembangan-Ilmu-pengetahuan---Harry-Nuriman.pptx", "1OYgSwWzZSNBoNMjjVbw0a3RqfYaqKxDA"),
            pdf("Pancasila-sebagai-nilai-etika.pptx", "1viImX3lBaTwHOU5wyH7Buc-cWU8vWYmU"),
            pdf("Pancasila-sebagai-filsafat-negara.pptx", "1i977I-8rNy9euXv_0aok7xIqAHUBg01u"),
            pdf("Pancasila-sebagai-ideologi-nasional.pptx", "1kKdCf_yMicJDDu5wLMicu8kMmTu_5bNa"),
            pdf("Pengertian-dasar-negara.pptx", "1tT4I6a6YGnnme5bkDKowtEQOaBiyb6lm"),
            pdf("Pancasila-sebagai-dasar-negara---Pengertian-Negara-dan-Tujuan-Negara-dan-Pentingnya-Dasar-Negara.pptx", "1Ui3BTuuCRNepwUVRHlqqJyPbjfW6QS0B"),
            pdf("Sejarah-pancasila.pptx", "1LqpCv00pWBvHFbO3Ok_AKIPYa0XSMKph"),
            pdf("Pengantar-Mata-Kuliah-Pancasila.pptx", "1GH7uV4HeCsyjVaRrpIphtoZx8a_OPYMB"),
        ]),
        folder("LAPORAN", [
            pdf("Referensi Proposal Proyek Pancasila 3.pdf", "1_9dtOuRNsE5xv14iMLlCi6wcrTY9s8Rx"),
            pdf("Referensi Proposal Proyek Pancasila 2.pdf", "1lV7xJuPxK88BxB2iGC3II1LcB_3rJY4E"),
            pdf("Referensi Studi Kasus.pdf", "1ghXsoNpsp2YXY8CVgcpXmKofEDFUvOby"),
            pdf("Referensi Proposal Proyek Pancasila.pdf", "1uKTF9GLvjFSJFKM99y1lxubQ-qdDASbS"),
        ]),
        folder("CATATAN", [
            pdf("Pancasila Bab 2.pdf", "16n3IOfOgXaBrdyC3tQPAuKt2Gxc8kalm"),
            pdf("Pancasila Bab 1.pdf", "1f1WA1foTjBBisMm2oC7B47k84nA8JIg5"),
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
