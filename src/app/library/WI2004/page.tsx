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
    folder("SYLLABUS", [
        pdf("1742137483419_INTRO-TO-COLLABORATIVE-PRESENTATION-2025.pdf", "1nXcDhEYyP-xUa-u1JRhyWpG3BY6w0yOM"),
    ]),
    folder("PPT DOSEN", [
        folder("Pak Bayu Jika Magistra", [
            pdf("#1- Introduction to Presentation Skills.pptx", "1aoNu3b4kPt-zakf-L5Z9u9XPmehtvJM-"),
            pdf("#2 - Planning your Presentation (2).pptx", "1n5VYh4wlFOzvJpOoBxyuwvU8YSF9zXfr"),
            pdf("#3 - Engaging Your Audience (Greeting & Hook) + Drafting Opener 3.pptx", "1Atcxf5AnJrReMwaCggl91ovTbEWkj_U3"),
            pdf("#4 - Visual Aids + Drafting Body of Presentation.pptx", "1q8s5wuY5Z3-NvGqpVOAttHJcxoTe7Brm"),
            pdf("#5 - Delivery Techniques and Drafting Conclusion [Autosaved].pptx", "1zth2nESvQwfMKfk1_iBU8pWHDq0OzXtH"),
            pdf("#6 - Drafting Conclusions + Handling Questions & Feedbacks.pptx", "1e3_BQDa_AvhmSWXFWMZiPLNz-2X9qRPF"),
        ]),
        pdf("1742137483419_INTRO-TO-COLLABORATIVE-PRESENTATION-2025.pdf", "1AU5B_up_e7iE1BfzS2XqLjJQ0bvLzt7D"),
        pdf("1742111154855_Planning-your-presentation.pdf", "1sEhwi638pl05vGeQYed3JaW83FgkXv7Z"),
        pdf("1742178309451_Starting-a-Presentation.pdf", "1_C3AeOHKTU9HbX_h7uKObTT7uPl-2yO2"),
        pdf("1742136452346_Common-Phrases-for-Presentation.pdf", "1ACT3ZyrUC7NekZJukfO4tmLJRYWuc-cZ"),
        pdf("1742178407883_Presentation-Closing.pdf", "1mFzibjdzmMJy2wym3lsRHsOldVDGZw7P"),
    ]),
    folder("UTS", [
        folder("Mid Term Test_2024-2025 (Group Presentation)", [
            pdf("Contoh 1 PPT UTS 2024.pdf", "1hCEZBscM2n-kb-pKVQAOMeYYGIXpnqOV"),
            pdf("Contoh 2 PPT UTS 2024.pdf", "1WRccXIvj-pmvUm1KghuWT9itP8gOQyl0"),
        ]),
        pdf("Mid Term Test_2023-2024.pdf", "1Vv3L09zgWpklsebli6HN_nvjL-gKCmIg"),
        pdf("Mid Term Test_2021-2022.pdf", "18UHeGZx44bc2rNz5k3VkL7JFTxrQp5RE"),
        pdf("Mid Term Test_2020-2021.pdf", "1PAi1BFF3K-3av7ga33OVpQzx7qykJqJ7"),
    ]),
    folder("UAS", [
        folder("PREPARATION FINAL TEST 2024", [
            pdf("PREPARATION FOR FINAL EXAM.pptx", "1R8a1_dT-Jl4fN4GoEtvANjm3bd2s70Vy"),
            pdf("1695783104095_Lecture-note-Structuring-your-presentation.pdf", "1SpCGeRhRFIhtLAMrmiLTcM8PNAd4EzKh"),
            pdf("1695782431664_Presentation-structure_1.pdf", "1SYS79j1ECypcvkHKsTiBWW5mDaMsoGsA"),
            pdf("1696426162900_grabbing-attention.pdf", "1ZtZyngRaWb5nGt9P8zp2ktxk4xOMgeUl"),
            pdf("1696426211404_Transitional-expressions.pdf", "1C6q2kTcVXIC4oRHl6WjcMPhUJZcLqNhv"),
            pdf("Preparation 1.jpg", "1vl10P5K8sxiFlpHWB5B8CK6rAh5b3vlr"),
            pdf("Preparation 2.png", "1drxcv0VMy2yCmM8kFaoGdFVw_OeCuldT"),
            pdf("Preparation 3.jpg", "1ZomTbCy0w38GN37HXHJGJhS-7HXR5pwF"),
        ]),
        pdf("Final Test_2021-2022.pdf", "1m0vQaAaDNcLlfdNXtD4r8neS0gYWxfAu"),
    ]),
    folder("VIDEO REFERENCE FOR PRESENTATION", [
        pdf("Video Reference _ How to Presentation.docx", "1Bl2s6rJO49DgSKiUUEuZ-u6YtLgz-w4Q"),
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
