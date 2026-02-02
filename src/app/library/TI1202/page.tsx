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
            folder("GAMBAR TEKNIK & METROLOGI", [
            folder("RENCANA PEMBELAJARAN", [
                pdf("Rencana Pembelajaran Semester", "1bjRiDistRnlElN1wNYOhQqMb5KiHP39r"),
            ]),
            folder("PPT DOSEN", [
                pdf("1. Pengantar Komunikasi Grafik", "1bxfc3wwutBOp56-J0trUla3SwwaLmsjn"),
                pdf("2. Pengukuran dan Alat Ukur", "1c0Z-z7SRjB83AYqlUMM2yllZMrwqMnG7"),
                pdf("3. Toleransi Linier dan Suaian", "1c1547YetOshfZbT8IU3m7ERh_RUaYOW-"),
                pdf("4. Datum dan Toleransi Geometrik", "1c5dqr5gRvKb6vW2SSRiFz2NeUg10DQB2"),
                pdf("5. Teori Proyeksi", "1c15XJHdIzt8QTg1IzopTmF_2fkK0dKv1"),
                pdf("6. Standar Gambar Teknik (A)", "1c2FKzMkTPBZ75wgmYe5vqL0ubeFWBNRi"),
                pdf("6. Standar Gambar Teknik (B)", "1c5hanusMQ27_Gcbek9Ol20XtQMHxoapC"),
            ]),
            folder("CATATAN", [
                pdf("1 - Toleransi dan Suaian", "1d7YAeiGQzGJbztjypjmmMy3oQ7T8iLR7"),
                pdf("2 - Datum dan Toleransi Geometris", "1RQjR5vSFk684HL2lBx4hPiPY50C4rGbI"),
                pdf("3 - Teori Proyeksi", "12wbuKFsmF5G8p7LJjUYlXlEeFLUJIPxm"),
                pdf("4a - Section View & Dimensioning", "1aeoOGuT6NklvU7eX2v1zPUCD6eCGbJYM"),
                pdf("4b - Fastener, Gambar Kerja, & Perakitan", "1aiyUy3uoLO_8nZkHKFI3lf0v67EU9Yk4"),
            ]),
            folder("TUGAS & LATIHAN SOAL", [
                pdf("Latihan 1", "16lCA8csJDAXxCOWHMGcidZ8YOU5EXd1H"),
                pdf("Tugas 1", "1M9oMZu_u-kclj3Rn8msKhujkTvXCZLmR"),
                pdf("Latihan 2", "13Y-PTDgxEp53eULhFX2P5pQcWkGyjPiO"),
                pdf("Tugas 2", "1Utl5z4bEb8vgptXWFjdaqSXKMDWGbzu5"),
            ]),
            folder("PRAKTIKUM", [
                folder("Modul", [
                    pdf("Modul 1", "1tBvl2zNf0UMruRoO4d3HdiDLwuYWSm7c"),
                    pdf("Modul 2", "1RhZr8bqEC_KN_Piwq5M2gMimNZj6gHW4"),
                    pdf("Modul 3", "1ynOsE8RhjHW70NwN04fFhICcvL3BpD_I"),
                    pdf("Modul 4", "1y851SIlH4CWM58OPhOv_dExVujgw09wA"),
                    pdf("Modul 5", "1T3bEiAMfk7UsRR06v52UMeAiNJQYmUso"),
                    pdf("Modul Tugas Besar - Suplemen Freehand Sketch ", "1rdPWi__KcM0BCcoPe7Zde5Z0xBFOqo6m"),
                ]),
                folder("Tugas Pendahuluan", [
                    folder("Modul 1", [
                        pdf("TP Modul 1 Tipe A", "1xUlPOhawik2azSgAvPVDVnhRadn_1O_S"),
                        pdf("TP Modul 1 Tipe B", "1_YoCaiDAVMCVwEigXygyXIaJr2P8Pkdj"),
                    ]),
                    folder("Modul 2", [
                        pdf("TP Modul 2 ", "1OIsANl5O0599J5XykQhP1rIcswnCVeBs"),
                        pdf("TP Modul 2 - Front View.SLDPRT", "1p2F2kYeO0vo7VqDPxxqKcUXLBMEy3UpW"),
                        pdf("TP Modul 2 - Right View.SLDPRT", "1PxZLS0bC64HxBdGTrSPFn1Ab5vgJ0Mna"),
                        pdf("TP Modul 2 - Top View.SLDPRT", "1IlJt4xzHQN6xmfTr1T8YUswPQXi4ZdQE"),
                    ]),
                    folder("Modul 3", [
                        pdf("TP Modul 3", "1jGOSZlJ4DBoGHtkzicLayd0lPfSBNh8d"),
                        pdf("TP Modul 3.SLDPRT", "1xP7XSD2z0-uPhEMD-JStOuuuM51DLxJh"),
                    ]),
                    folder("Modul 4", [
                        pdf("TP - Modul 4.zip", "14I9ovwyJgjsPNb4pb6BRcI8HPoobVF6W"),
                        pdf("TP Modul 4.SLDASM", "1EdiD77tl3PfTb-Qy16mtMyDYoxrBah_r"),
                    ]),
                    folder("Modul 5", [
                        pdf("TP - Modul 5 - Guideline Pengerjaan", "1svaRuYb2wH1kD3FDXaEkXV9kMtNnJAnx"),
                        pdf("TP - Modul 5 - Wheel Support Assembly.zip", "1T2RocgLFTpoljNDuY4QO1axR4JF8mjR0"),
                        folder("Solusi", []),
                    ]),
                ]),
                folder("Soal Praktikum", [
                    folder("Modul 2", [
                        folder("Tes Akhir 1 & 2 - Modul 2", [
                            pdf("Tes Akhir 1 & 2 - Modul 2 - Soal", "1csFBV3FVDcXI1CZLvV-lej1fDcbzCLH0"),
                            folder("Tes Akhir 1 - Modul 2 - Solusi", [
                                pdf("Front View", "1V0YfmwRaSPNofR_XRfPA52zqPfUq-9eS"),
                                pdf("Right View", "1l3uX4wHhSylkUiSkcAvbkVoXdCTWE7ig"),
                                pdf("Top View", "104wdlZ1P4vSXOsBtl6HlRqFwPXqQdq0D"),
                            ]),
                            folder("Tes Akhir 2 - Modul 2 - Solusi", [
                                pdf("Front View", "1NDTkUisrGSjw9X0RW_nMr48mYaa-U4hM"),
                                pdf("Right View", "1HjZ98RvJChLP4QLVMT78mEYlKXh26d1q"),
                                pdf("Top View", "176L5jzRNka_0mtE1LGaLibPzIYeISEpN"),
                            ]),
                        ]),
                        folder("Tes Akhir 3 - Modul 2", [
                            pdf("Tes Akhir 3 - Modul 2 - Soal", "11wFV34y1nNtiEXKniB8y3SfUTq0m26mX"),
                            folder("Tes Akhir 3 - Modul 2 - Solusi", [
                                pdf("Front View", "1L6z4Tjt0IAi_D2xTH4TpcNweT01Uwip_"),
                                pdf("Right View", "1GM90_Xb2m-mz8x8qpVTx2bWWtZK8L1EG"),
                                pdf("Top View", "12m2_fpY4b1gEGOg6_W2uRZAVHmB8rMAF"),
                            ]),
                        ]),
                        folder("Tes Akhir 4 - Modul 2", [
                            pdf("Tes Akhir 4 - Modul 2 - Soal", "1c5QP8diXgsu8CtWXdZ0GqFaDQYMBJztq"),
                            pdf("Tes Akhir 4 - Modul 2 - Solusi.SLDPRT", "1igqOtSySPdZWDvbMQi7wz1bFf1HKZ_dS"),
                        ]),
                    ]),
                    folder("Modul 3", [
                        folder("Tes Akhir 1 - Modul 3", [
                            pdf("Tes Akhir 1 - Modul 3 - Soal", "1i3YeRu7BSLma7ErF44YkKldAPgiCtr0V"),
                            pdf("Tes Akhir 1 - Modul 3 - Solusi", "16j6J4Hcgu53sPr0CrDIrg37wPAQAnOGE"),
                        ]),
                        folder("Tes Akhir 2 - Modul 3", [
                            pdf("Tes Akhir 2 - Modul 3 - Soal", "1lEFvyyrRow_q585wTC9OKQ10w_9hRlqW"),
                            pdf("Tes Akhir 2 - Modul 3 - Solusi", "1oC4C7LHsZ5G_EkLyg9y6qIzl4PQfvFiG"),
                        ]),
                        folder("Tes Akhir 3 - Modul 3", [
                            pdf("Tes Akhir 3 - Modul 3 - Soal", "1VQ3HjQUm5pFqBTLB3QH4_sEEFJOhmwhv"),
                            pdf("Tes Akhir 3 - Modul 3 - Solusi", "106PSHebkLxbCrXmNJRBjyM0zfoMmJoPa"),
                        ]),
                    ]),
                    folder("Modul 4", [
                        folder("Tes Akhir 1 - Modul 4", [
                            pdf("Tes Akhir 1 - Modul 4 - Soal", "10tq65XZS7fMzfP2EJuQwlX-grgL4peKe"),
                            pdf("Tes Akhir 1 - Modul 4 - Solusi", "1zfrKdlk12cqSx4mBKABve70nvyc_0R1a"),
                        ]),
                        folder("Tes Akhir 2 - Modul 4", [
                            pdf("Tes Akhir 2 - Modul 4 - Soal", "1WIu7qjqCAu7wj9KBNKnIXvV8CShtkqeE"),
                            pdf("Tes Akhir 2 - Modul 4 - Solusi", "1RcRwFSwCfgxsPu0uyHyPG3_TCIAiyY9q"),
                        ]),
                        folder("Tes Akhir 3 - Modul 4", [
                            pdf("Tes Akhir 3 - Modul 4 - Soal", "1e5q0Ob3Lm08Ew6MHMa6SLKZBcBRhqkh9"),
                            pdf("Tes Akhir 3 - Modul 4 - Assembly Video", "1_qkaS4HocrrUcOR4MssPTKAfXHmq4wQ2"),
                        ]),
                    ]),
                    folder("Modul 5", [
                        folder("Tes Akhir 1 - Modul 5", [
                            pdf("Tes Akhir 1 - Modul 5 - Soal", "1Zm6y1X3bPy4dxDJs7lvsY1UQsKQPGW1D"),
                            pdf("Tes Akhir 1 - Modul 5 - Solusi", "1kEAZF66vN7ZDMfbI9qCjzrhPsHWleHs7"),
                        ]),
                        folder("Tes Akhir 2 - Modul 5", [
                            pdf("Tes Akhir 2 - Modul 5 - Soal", "1WtGKORStOYGfqJ4Yp8rwbH21sVrzZEK5"),
                            pdf("Tes Akhir 2 - Modul 5 - Solusi", "17hzDzzSLX_RjYJsQZTTOCljfIuewVVt_"),
                        ]),
                        folder("Tes Akhir 3 - Modul 5", [
                            pdf("Tes Akhir 3 - Modul 5 - Soal", "1-J2j0WrxJH_HNeX-p1nPCDbPx4LPBej3"),
                        ]),
                    ]),
                ]),
            ]),
            folder("TUGAS BESAR", [
                folder("Mesin A", [
                    pdf("1.HEIC", "1bJdqSQF9dbjOZb3JPoARRrhgX_RxXITw"),
                    pdf("2.HEIC", "1hXq41ZksO2khg8vY1w7saad-tI9M-7RX"),
                    pdf("3.HEIC", "14JDzi9uQFKgN5S4Z-FQPicnx7edukKHu"),
                    pdf("4.HEIC", "1uWmcLilGkw8jtvwn0DhNEkoLF5v6H1IO"),
                    pdf("5.HEIC", "1ykCRXuPD1DUz4vHFqAbxzB4GwkxHLc19"),
                    pdf("6.HEIC", "1HD4hWYumAIqaLpFs-d1XIfZVdOUzHLQ1"),
                    pdf("7.HEIC", "1MCVbEsPgaWacBfDe-sjiN2fcgO6qbVmd"),
                    pdf("8.HEIC", "1ixU1aB619atreZhDFgiRPjQdrBGQlN8p"),
                    pdf("9.HEIC", "1ZL_T0Q1qM4PfljcVCC3Mz-mH51qe8Y0c"),
                    pdf("10.HEIC", "1uU7NyqRY4vbPuF5PhCqhVgD2DIQGwklG"),
                    pdf("11.HEIC", "1nAeaMtazaBC3q0T7qkniBiFF-wgYT8Cq"),
                    pdf("12.HEIC", "13_2ZaphS35wROu2REbONN6UyJN4jHQkM"),
                    pdf("13.HEIC", "1DAN9FpHXXjI5U5IboPoD7YmiQ2T0x431"),
                    pdf("14.HEIC", "1O7LnzB_wOhUbTCTFH8CDEb88UJzSfv33"),
                    pdf("15.HEIC", "1r4CfYKglwgJIJwL2hWze1E-W_nSrw3UZ"),
                    pdf("16.HEIC", "10kBgJlPGAEFypgv1ZLyDGKSnuNMOxnKy"),
                    pdf("17.HEIC", "1-eXp9PvKOhoN-sXr59w6PsDAtMdo9bH5"),
                    pdf("18.HEIC", "15rNOYr6v_RNCyQQCDBxW8zAG6e6s4pDX"),
                    pdf("19.HEIC", "11ErbHwIld8FQOxuJge2E0e8aMUWBTGlz"),
                ]),
                folder("Mesin B", [
                    pdf("Dimetric View.jpg", "1y_LYqPxoyX1NVLWyy2vgc8Fek7LI-r1X"),
                    pdf("Front View.jpg", "1r6HWDDhHbvA-CS8xhavmd1d9L5F1diPB"),
                    pdf("Top View.jpg", "1QDiEuoV8oNx32PgpH_8L-nfoeV-XntnW"),
                ]),
                folder("Mesin C", [
                    pdf("Front View.jpg", "1Yvkpt4YDFcp7H-yjo4Rz-1cp9FOAxt4N"),
                    pdf("Right View.jpg", "1Vmb2Pj-FOE2ji-Ry_iWRAXXunEdvHqKb"),
                    pdf("Top View.jpg", "1GgEulUqFoD5xNEC9Lj_VKMIh1khyJY0b"),
                ]),
                folder("Mesin D", [
                    pdf("Front View.jpg", "1EYoCKm_3XdMYD69JzI35cUsFaJYVIzC3"),
                    pdf("Left View.jpg", "1i9NY6X7PSjxcqpoRyRd5WceAz52dxJyR"),
                    pdf("Right View.jpg", "19bl5eyVR0eU_uWy0lt9Rka4PNATIUZjL"),
                    pdf("Top View.jpg", "15N9FRZxqPCxvwayeqSfBmy4Jmy0W8AHE"),
                ]),
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
    <div className="pt-21 min-h-screen bg-gray-200 dark:bg-gray-900 text-white p-6 flex gap-2">    
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
