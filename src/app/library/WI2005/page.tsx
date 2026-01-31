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
folder("PPT DOSEN", [
        folder("Pengantar", [
            pdf("Pengantar Perkuliahan TTKI (Pertemuan 1).pdf", "1DYiObrENwebqe3goqELeigqdCKZaERNt"),
            pdf("Pengantar Materi Penulisan Karya Ilmiah.pdf", "1zmOi2cN5hdNMlxJSL9gOCLAaxB6wXlzr"),
            pdf("Materi Kebahasaan.pdf", "1eha7gJZbqy7TtuTOlGSMsbDMCg72Y3GC"),
        ]),
        folder("Ejaan", [
            pdf("Pengantar Ejaan.pdf", "1BGd74yLuSiEnr5GERL1FsGvKu2zFjRD8"),
            pdf("Pemakaian Huruf.pdf", "1BDZX2pwcaWq4KR7ZStZoi2qzPEbAp7UH"),
            pdf("Pemakaian Huruf Kapital", "1BKz55WRfTtGGUGvCeCH9VxpWa80VZaS3"),
            pdf("Penulisan Huruf Miring dan Tebal", "1BHC5ChkO30dynIkV4EKODXI3aQqn7Aob"),
            pdf("Penulisan Kata", "1BMJCTT448UyFOak2lQzpqRRoNgui1hEe"),
            pdf("Penulisan Kata Majemuk, Kata Ulang, Angka, dan Kata Bilangan", "1BL6RGRvHyMQzWqpqPbaaGxPZ3SBn1jg3"),
            pdf("Pemakaian Tanda Baca l", "1BQNseLDNCB9pmFt1hGg0k9S-yuuOcoq0"),
            pdf("Pemakaian Tanda Baca ll", "1BSEkqM1EocmJjdsPcKYV9gogVJ5F8zSk"),
            pdf("Penulisan Unsur Serapan", "1BRqQuddjwLu2UWjijquCR8pZOFtwezEG"),
        ]),
        folder("Tata Kata", [
            pdf("Pengantar Tata Kata", "1BV_VapTBk5TMpOBAHQ_l2X3_Op1AbZgc"),
            pdf("Pembentukan Kata", "1BYEgYtF005LuhHQYHCeWgkJHdp_ss5lm"),
            pdf("Pemakaian Bentukan Kata Dalam Kalimat", "1BfWJb1BCXuUEkjUN2TV34Znc9H2eMcPO"),
            pdf("Kata yg sering salah Penggunaannya", "1Bg-zjQixHEntxmG_iCKrHVjHIt3YK-Wn"),
        ]),
    ]),
        folder("RANGKUMAN", [
            pdf("Rangkuman TTKI", "1W0f1so0MZKbMVOnFR9KB99LnEYqZ1sigbu_hn-MrAZU"),
            pdf("Rangkuman TTKI.pdf", "1Q2Z5QlYoZjiIfVmq9VRahq124oI0MkuO"),
        ]),
        folder("SOAL UTS", [
            pdf("2023_Pembahasan Soal PRA UTS", "1C-hyBcGHI_fDDUhUyslROnayuP2X7SRo"),
            pdf("UTS TTKI 2021.pdf", "1DABdVYcL49KUPiMgmqp7iljRPuHbQOcL"),
            pdf("UTS TTKI 2020.pdf", "1ev5NGHPjY-HKeqT9Hp3CtB04y7KFHg3r"),
            pdf("Soal PERLATIHAN PRAUTS 2020-1.pdf", "1egna1uwybx6x1Qzfseb2XJFiWaPxJBTX"),
            pdf("SIMULASI UTS SEMESTER I 2019 - 2020 STEI.pdf", "1erbjpHJ4H2spgdETvewJmYELGNbQQGoa"),
            pdf("SIMULASI UTS TPB 2018-1.pdf", "1er5hjOR2HXNmVyNEmnsJOUaagjwTtVuQ"),
            pdf("Persiapan UTS.pdf", "1emfy_Mkd2Zsp0HyeUdsguewUICB5njlU"),
        ]),
        folder("SOAL UAS", [
            pdf("Latihan UAS TTKI 2022.docx", "1CBCJTWLnp89FqOl9udSJezB4XBO5volx"),
            pdf("SOAL UAS TTKI 2021.pdf", "1DBHMPFWuz-_uUOCDe_0ca1nKkxJzG2-a"),
            pdf("Latihan UAS TTKI 2021.pdf", "1BnegzSfQ2JeTZXgZ6HzxHjnFbCh9_QDX"),
            pdf("Pembahasan UAS TTKI Semester 1 2020-2021.pdf", "1DThVFTG7rATiBmUSsqedbydxR0cOHq37"),
            pdf("Latihan UAS TTKI 2020.pdf", "1BwKm3xmqz-ePPvuHZBTAqY8Jilwf3OQ-"),
            pdf("Latihan Soal UAS TTKI.pdf", "1DOVoRPhqyhzSCoeJCkaOlcPy2kdHy1Rq"),
            pdf("UAS TTKI CONVERT.pdf", "1DJiwWbrN2bAEtKAraSVTpCxHowoQsbhN"),
        ]),
        folder("KUIS & TUGAS", [
            pdf("-Soal- Perlatihan Tata Kata 2023.pdf", "1D5cfCmnI22lvuS_-tgSB3ju9qY0GBS5m"),
            pdf("-Jawaban- Perlatihan Tata Kata.pdf", "1CguxgqqrBwARt3ogVfzpMu7h9CGnm7Qy"),
            pdf("-Soal- Perlatihan Tata Kalimat 2023.pdf", "1Ctl2-UDm55CcvtKjGdtoR1Hs8zlhriEb"),
            pdf("Perlatihan 01 - Tanda Baca dan Ejaan 2021.pdf", "1CecpFzG3w6DRnQh9vOF-aec9sATCcIOv"),
            pdf("Perlatihan 02 - Tata Kata 2021.pdf", "1D5auYxiWOAXTFYbysEUZuFlksItsqcC9"),
            pdf("Perlatihan 03 - Tata Kalimat 2021.pdf", "1CbdbM3PqJaT05eWXylm91NW0S0_yc-ja"),
            pdf("Perlatihan TTKI Ferry Fauzi Hermawan 2021.pdf", "1CWK1bGAd-qQqBkZCjf05s69WNqMyeTmw"),
        ]),
        folder("TUBES", [
            pdf("PENYELAMATAN SUNGAI CIKERUH ANALISIS SUMBER, JENIS SAMPAH, DAN STRATEGI PEN_20250707_033035_0000.pdf", "1odPuRBTfPlYygljg_lVRlG6lxkzf991c"),
            pdf("Kelas_28_Kelompok_09.pdf", "1mQfO8Ru8nkUgwycEc7H1169KMIK1-toY"),
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
