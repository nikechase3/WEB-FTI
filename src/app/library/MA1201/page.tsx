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
        folder("UP & Ujian Pengganti", [
            pdf("MA1201 UP 2007-2015 pdf", "1lEUMlWB-MsC4V3Z5dHmVdZoXcptdH7O3"),
            pdf("MA1201 UTS Pengganti 2019-2020_Solusi.pdf", "1Fb_gSU6yW0naOTl82E6JP-53jXMcvM6Q"),
            pdf("MA1201 UP 2021-2022_Soal.pdf", "16oEml5KkMRDtmsVZ72W6JBZI1qA7BA1v"),
            pdf("MA1201 UP 2021-2022_Solusi.pdf", "15RTSAhhrYyMxAaGuV3sAEf_YKHESMSp1"),
            pdf("MA1201 UP 2020-2021.pdf", "1R2nt-p5Wblkjym6q4FJkGPpVuSGH3Ssz"),
            pdf("MA1201 UTS Pengganti 2019-2020_Soal.pdf", "1at3QnsrDLei5pLkO5FNnYmDhw6VaeOmj"),
            pdf("MA1201 UP 2015-2016_Solusi.pdf", "1DdACP7npsJY2f3DxaNNCQ_aeSsx7xMG1"),
            pdf("MA1201 UP 2023-2024.pdf", "1onzw8exKkMTzMd_O3FXvWP91OwmDNGpP"),
            pdf("Pembahasan Latsol UP 2021-2022.pdf", "1jo-yMCfYDDx5YGvRMLl8EU7bq90mzXlY"),
            pdf("MA1201 UP 2022-2023.pdf", "1h1uT-5Q3EzjNE5cCdn7ViOUwTovVcA1i"),
            ]),
            folder("KBF & KUIS", [
            pdf("KBF 2022-2023", "1htbkHlOXkTgUPb1K_KBapdtrBgrwadso"),
            pdf("KBF 2023-2024", "19fODpwwayrpi_UA-2xxi_JJOtLJ-Jz6u"),
            ]),
            folder("SILABUS", [
            pdf("Silabus MA1201 2024-2025.pdf", "10XnLsKZePuRGfWFopKIFeI2RJQL00_eH"),
            ]),
            folder("PR DAN LATSOL DOSEN", []),
            folder("CATATAN", [
            pdf("CATATAN MATERI UAS.pdf", "1sj0C5KH3XLFnAHbsbsYttgoRKTgOTaBT"),
            pdf("CATATAN MATERI KBF 3.pdf", "1jG55dj1T78bv5kDOLPySVfW5qisMDKfJ"),
            pdf("CATATAN TUTOR 1 UTS.pdf", "1MCyA34bcG_dEiC1U4rt3Nrkez-szjk3x"),
            pdf("CATATAN MATERI UTS.pdf", "1n2-NT38QLD04PPdrF6ZTZ0iSuQwsKJON"),
            pdf("CATATAN MATERI KBF 2.pdf", "1iiwydw2nV7vv5OXS3WsnXW332t2oCUrB"),
            pdf("CATATAN MATERI KBF 1.pdf", "1yn-48XcabGP5k8XObiUkKYXa7AZ5_Rq6"),
            ]),
            folder("UAS", [
                pdf("Soal, Solusi, dan Skema Penilaian UAS MA1201 Semester 2 2024-2025.pdf", "1tvRyREUQDdrAZlgew0WwuYd72H7wOtib"),
                pdf("MA1201 - Bundel UAS 2011-2019 - Solusi.pdf", "1CgeXRDyXob_Qb7wdPXAi9HLxExRQHBoe"),
                pdf("MA1201 - UAS 2020-2021 - Solusi_Acads FTI_21.pdf", "1mWyETjGW7SfEgh26VghxWJNCSPF7T-m9"),
                pdf("MA1201 - UAS 2016-2018 - Solusi_Acads FTI_21.pdf", "1Pmx6cdOdOKiRA7FQYtP2TRbeIf-z3PpZ"),
                pdf("MA1201 - Bundel UAS 2011-2019 - Soal.pdf", "17tU3pb1UaciqC6q-OhbaHbFOBkyH913T"),
                pdf("MA1201 - UAS 2023-2024 - Soal dan Solusi - Sesi 2.pdf", "1ddygKtH_OxZlvWKsrSJaFtet-phAmdeZ"),
                pdf("MA1201 - UAS 2023-2024 - Soal dan Solusi - Sesi 1.pdf", "1wYPz79u5fuy5K5yVGX0H7_VNdV033U5J"),
                pdf("MA1201 - UAS 2020-2021 - Soal.pdf", "1DMX263uW_wDJAzeSunO4zxjUrdJGb86B"),
                pdf("MA1201 - UAS 2021-2022 - Soal dan Solusi.pdf", "1zIlOI1MT14adMZbZy0diFZCsSewLpUKi"),
                pdf("MA1201 - UAS 2016-2017 - Soal.pdf", "1GH4y9XuXYzg3MbKa9wcCWWR6cdH3U4Eg"),
                pdf("MA1201 - UAS 2015-2016 - Soal.pdf", "10yEk2uR0XPpTr1R_LSlN5gxqphtj6dgk"),
                pdf("MA1201 - UAS 2017-2018 - Soal dan Solusi.pdf", "1JZ6q3BrVM8rJItiGouzkTWGP05siFRx2"),
                pdf("MA1201 - UAS 2018-2019 - Solusi.pdf", "15LYMmEwNiCp1VxQ3LU664pMYQC9RmhLQ"),
                pdf("MA1201 - UAS 2022-2023 - Soal.pdf", "14z0eOay_xRKwBkqDi-PmUEVPd4SslWuQ"),
                pdf("MA1201 - UAS 2022-2023 - Solusi.pdf", "14voi0zFpVE-ypmRu6HcYbD6r8fIyNckW"),
            ]),
            folder("UTS", [
                pdf("Solusi UTS_MA1201_2024_2025.pdf", "1LNtfiZPknN8LQdo_gjsXp3jdoUL9gv4a"),
                pdf("Soal UTS MA1201 2024-2025.pdf", "1LNUFNgWi30nE6eIitP4gNw45dCHLMJR_"),
                pdf("Solusi UTS MA1201 Tahun 2021 .pdf", "1ak7ngjf5UHYuoB-T2RtaSMS-HGK4BtCl"),
                pdf("Soal UTS MA1201 Tahun 2021 .pdf", "1p79AeXtkoahaxjRrnFSh_xzTY_oQKCqb"),
                pdf("Soal UTS MA1201 Tahun 2022.pdf", "16BpLaVTPldczrzgzIOLp2QP_3nusqafD"),
                pdf("Solusi UTS MA1201 2011-2020.pdf", "1Cd7gX7CNuKyrJAs2RUHu3Vm0fzHNl1z0"),
                pdf("Solusi UTS MA1201 Tahun 2019 2020.pdf", "1OZHy3VS8ADd-3J5eAOTNJZHZJmU6UCSP"),
                pdf("Soal UTS MA1201 2011-2020.pdf", "1VyEl0CRi4SZCi6rrJdyBTOpRVfcHhGCr"),
                pdf("Solusi UTS MA1201 Tahun 2022.pdf", "1u4wEjM5eOBl76pvxtDm2gEplfJB_9TdS"),
                pdf("Soal UTS MA1201 Tahun 2015 2016.pdf", "1ChZ2bh8C3z1VVky6iTz63W5y2YflCHID"),
                pdf("Soal UTS MA1201 Tahun 2016 2017.pdf", "1WYwAATtZ_ZU7QL513VkKsIFIgN9ujpIr"),
                pdf("Soal UTS MA1201 Tahun 2019 2020.pdf", "190IunI9hlkHn4Gp2ld4-QbbzQDt-ebKX"),
                pdf("Soal dan Solusi UTS MA1201 Tahun 2023 2024 Sesi 1.pdf", "1e4ISkRgpDOztzOi52cjBsxUIGNhjVftz"),
                pdf("Solusi UTS MA1201 Tahun 2015 2016.pdf", "1Db7DnCUatq5fto25Ezw8FfQanvMxnwUV"),
                pdf("Solusi UTS MA1201 Tahun 2018 2019.pdf", "1znNMOKxpBk7ZYtaqkGeRhRWpA12L18Y4"),
                pdf("Soal UTS MA1201 Tahun 2018 2019.pdf", "1XSAlIIwHYmittzsARc2fNNqeVzi7QFm-"),
                pdf("Soal dan Solusi UTS MA1201 Tahun 2017 2018.pdf", "1wuY1oWSJMrszeERKi5R7NHY8fOY59nrF"),
                pdf("Soal dan Solusi UTS MA1201 Tahun 2023 2024 sesi 2.pdf", "1h5Aww81XOhYyMuqC_9HQ4r4UquVywSBW"),
            ]),
            folder("TUTORIAL", [
                pdf("Tutorial 7 MA1201 2024-2025.pdf", "1FSKemSmp8z9N0RRNgSLh2Vs8lPNI3vsr"),
                pdf("Tutorial 6 MA1201 2024-2025.pdf", "1Xkw7gMXh8w4DYKqNeJu1u1Xf7WDwu8j7"),
                pdf("Tutorial 5 MA1201 2024-2025.pdf", "1ftpgNkotAv2F2PhroVRHKjprfUoDyjjG"),
                pdf("Tutorial 4 MA1201 2024-2025.pdf", "1d6SqBno5s7oDcTe1j4s37C4c-IQII38U"),
                pdf("Tutorial 3 MA1201 2024-2025.pdf", "15s3jKqx_wevUL_H4CVBUdFgzGKGY3g3F"),
                pdf("Tutorial 2 MA1201 2024-2025.pdf", "1NkbTXypJF_wURdhc5c5UGlrg8MDEZ0N4"),
                pdf("Tutorial 1 MA1201 2024-2025.pdf", "1rKfgkAifW8_UwtSOcuSemr4YqeuxcFpu"),
            ]),
            folder("PPT", [
                pdf("BAB 7 Teknik Pengintegralan.pdf", "1B1xujLwfwdIwdua28ixHEGfHOi4c7pet"),
                pdf("BAB 8 Bentuk Tak Tentu dan Integral Tak Wajar.pdf", "1h3EV-ViAz_N_V0e8JDQ-apGN4qym-iHy"),
                pdf("BAB 9 Deret tak hingga.pdf", "15dKMvLO06vCyvatwPjQcMKURc70-_AbA"),
                pdf("BAB 10 Irisan kerucut dan koordinat polar.pdf", "1zWDRREcpTG4uWrKsB8dPcrySB5NwSjhl"),
                pdf("BAB 11 Geometri di bidang dan ruang.pdf", "1dUQnPeiaD3wo2H2d2xojdu5zpSDWH2-X"),
                pdf("BAB 12 Turunan di ruang berdimensi n.pdf", "1meT7Q2rqug39k-umapvsqJru86OAJJcc")
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
