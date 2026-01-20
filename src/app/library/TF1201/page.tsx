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
        pdf("University Physics with Modern Physics 15th Edition", "1-7rjkXl6Sh0pfCW6wmw5fVKCiotka31p"),
        pdf("Mechanics of Materials 7th.pdf", "1vHXen_We29d8YkCxN8BcW2XpEP7JMDil"),
    ]),
    folder("PPT", [
        pdf("w1-pengantar_kekuatan_material-I.pptx", "1QcNXPLbgxRV70RdeDYhmJfgRIgrK4nbc"),
        pdf("w2-pengantar_kekuatan_material-II.pptx", "1AxqbuvUQ99quz6NRD0qWJs2Xh-BBo6QB"),
        pdf("w3-5-Gelombang_mekanis.pptx", "1EaoyHK3KKobqfiHu_Q_m0HXw2CzzQ_3b"),
        pdf("w9 - Pengantar Laju Proses.pdf", "1RBFRUlH6P3TIjimk8_HSSO8Qm3gns1vs"),
        pdf("w10&11 - Pengantar Elektrik.pdf", "1nw33ns5j5l6ql2HIHeU7fI4FgetfdSxx"),
        pdf("w12-13-Optika.pdf", "1rZkXytTlufz0t-Lwq6H3u9wdXweuDQvy"),
        pdf("w16-Pengantar-Fisika-Modern.pdf", "1FXTQkCJMyv4d1Yq3-_aEAer8ljEptdoR"),
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
