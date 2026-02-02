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
            folder("Bapak Agus Suroso", [
                pdf("Muatan, Gaya, dan Medan Listrik.pdf", "1qxmWHpBiENGEWV8xdGmO5MmuflPzbDq4"),
                pdf("Hukum Gauss.pdf", "1HIpUOsajTE_JFn2thEc-ouMcN6iePqev"),
                pdf("Potensial Listrik.pdf", "1fwe_EP64yrNWjOOhGG4hwjtU6FS2J3Hm"),
                pdf("Kapasitor dan Dielektrik.pdf", "13Pr9N66Y6Z0c0vOusEyrBEJletb4EchJ"),
                pdf("Rangkaian Listrik Arus Searah.pdf", "1SkgDM4s_7xobehpMmJP8lpcVZDeDCiKf"),
                pdf("Magnetostatik.pdf", "1dJjZNwjtTCxAq2Q6akh9xWdIHNSD7A4P"),
                pdf("Hukum Biot-Savart, Hukum Ampere, Kawat Berarus.pdf", "1925Sc_8tHf20QBwvGAzzgVNU2eucrPcL"),
                pdf("Induksi Elektromagnetik.pdf", "1699kmWiUdn0l_YCxU1q-3BI8kWRVF36O"),
            ]),
            folder("Bapak Getbogi Hikmawan", [
                folder("Coretan K21", [
                    pdf("[0] Pendahuluan - K21.pdf", "1_4nsoQIogUyPV1cbgVks3ZziMnKLmO8D"),
                    pdf("[21][1] Elektrostatik.pdf", "1sIM6YO5udJLgnZ7o_GA6liYBuELvDTwC"),
                    pdf("[21][2] Kapasitor dan Dielektrik.pdf", "1vGz9JOoVqJR-58KMCYPX2GlYMsWpetZN"),
                    pdf("[21][4] Magnetostatik 1.pdf", "12zwcUzWxR-BTNo3xTtcWd9iRTxqDaXJI"),
                    pdf("[21][5] Induksi Elektromagnetik.pdf", "1Yy3mMzlebYdAmkQ-kxCRmdJGjQLId9D0"),
                ]),
                folder("General", [
                    pdf("[1] Elektrostatik.pdf", "1z_o8NkaZEUHlSJINizMjZZeXBWYlM1L6"),
                    pdf("[2] Kapasitor dan Dielektrik.pdf", "19cyOeRrajYbUu-5IytZquXik3S-p93BQ"),
                    pdf("[3] Arus Searah.pdf", "1XObjRrIyP27LCmD5OZldmJDb3Jka7kgC"),
                    pdf("[4] Magnetostatik.pdf", "100TIOl2B60mE43seWOPlzjQ5GtgTa6AG"),
                    pdf("[5] Induksi Elektromagnetikpdf.pdf", "11bAYdzl2_eQMtIhq32dy7CwB8ukFkN4I"),
                    pdf("[6] Arus Bolak-balik.pdf", "1IXOY3czE5lo9ASit9HkvB416YAyby8QX"),
                    pdf("[7] Gelombang Elektromagnetik-rev.pptx", "1o6AGo_tG-LJO4vqrW-cdGjpGpOCRs02W"),
                ]),
            ]),
        ]),
        folder("INFORMASI UMUM", [
        pdf("SOP-Pengawasan-Ujian-Fidas-_A5_.pdf", "18IeGpRGr37X_bZKthA6FgzC5-oWWS2pE"),
        pdf("Protokol-Penindakan-Kecurangan-Ujian-Fidas-_A5_.pdf", "1s29hzzGOG0VY33W3zjgU2zQ-5Xj_BrTK"),
        pdf("Pengumuman-Kalkulator-Ujian-Fidas.pdf", "1sBEiN6JbjkK1Arkr9dOZTDP2sXFnKZBx"),
        pdf("Surat-Pengakuan-Bersalah-dan-Pernyataan-Menerima-Sanksi.pdf", "1ANjGJpCjlRCiJSlMvd5cZya-4PFw-EpP"),
        pdf("Aturan Perkuliahan Fidas 2A.pdf", "1zGjOhUKj62RnBMxn9u-uVD8fPw6Oc1EB"),
        pdf("SAP Fidas 2A.pdf", "1a2wqOrOJOcY7OOF02cs6XYrUAWUlqsvp"),
        ]),
        folder("LCE", [
        pdf("1746417212209_Panduan-Tugas-LCE-Fisika-Dasar-2A_Semester-2-2024-2025.pdf", "1ijQlkBoNOg9TkBCUgInf_vnUn9NPs1-9"),
        pdf("Tugas LCE_SIklotron.pdf", "18g-nhkYneSnhXHfWpgCi3HH8raA2ltZm"),
        ]),
        folder("CATATAN", [
        pdf("Potensial Listrik dan Kapasitor", "1C0lDLhNem6W55thSB2qjff8mRoqpAepc"),
        pdf("Arus Searah.pdf", "1C3CJ2YCqoffag8_f0tG4adJ4pgxZePRL"),
        pdf("Medan Magnet, Induksi Elektromagnetik.pdf", "1_VxF2l_y5WKQr85cYoV4VIMdmWIpGBpi"),
        pdf("Electromagnetism.pdf", "1sFI9WYepnPIiNczpO_tsFA8TpKQYIGLa"),
        pdf("Osilasi dan Gelombang EM, arus AC, dan Persamaan Maxwell.pdf", "1CecdSgRVPgS4Te5InF1CXO_8oPLhuJiO"),
        pdf("Interferensi dan Difraksi.pdf", "1F2WdtQkrw32BNTPq50bje_oKnTv5NEdR"),
        ]),
        folder("UTS", [
            pdf("FI1201 - UTS 2024-2025 - Soal and solusi.pdf", "14elvUDAopEqOa5Zuvgb82x595uFRLwlk"),
            pdf("FI1201 - UTS 2023-2024 - Soal and solusi (Sesi 1).pdf", "16-CVFVSxvgvgdulL3ucT7-SFIBAYzZQG"),
            pdf("FI1201 - UTS 2023-2024 - Soal and solusi (Sesi 2).pdf", "1MRbe7F3QQEDlTxAcPTKCeeuDt4F-YyjC"),
            pdf("FI1201 - UTS 2023-2024 - Soal and solusi (Sesi 3).pdf", "1DC4XUvBLxuQXD2l3FosbSkVwj7TK79Sh"),
            pdf("FI1201 - UTS 2022-2023 - Soal and solusi.pdf", "1xCCBlHqr4dX6ylNzAC3VwLOp0ocwluIz"),
            pdf("FI1201 - UTS 2021-2022 - Soal and solusi.pdf", "1xTQ1C59X0nMAuWT_716ENPpewo-c2kDA"),
            pdf("FI1201 - UTS 2020-2021 - Soal.pdf", "1x9UmReaLOuTWb0aZ8s50tYvCgBZziKfZ"),
            pdf("FI1201 - UTS 2020-2021 - Solusi.pdf", "1xAFyV7ioWbpt3htynbHdcm8vdRW7MHhT"),
            pdf("FI1201 - UTS 2019-2020 - Soal and solusi.pdf", "1RQbpLKdc3tkH-JP7vOOs6uNr3ds2-_dn"),
            pdf("FI1201 - UTS 2018-2019 - Soal and Solusi.pdf", "1x5y6eVXcD9utUnAfDoVJoayh5KWS_o75"),
            pdf("FI1201 - UTS 2017-2018 - Soal and Solusi.pdf", "1x57yMzkyJgrqZKXZYcGMSOREzbm-P30G"),
            pdf("FI1201 - UTS 2016-2017 - Soal.pdf", "1x-OnMTT_JYjxEvHBGwiYV-CpGmvat8VD"),
            pdf("FI1201 - UTS 2016-2017 - Solusi.pdf", "1x4lEELcWoHBVJTdt4AcDWV_QrxmzT1LH"),
            pdf("FI1201 - UTS 2015-2016 - Solusi.pdf", "1wnUB8W0d0o5Ga5KqUMpdndFVC0VYtAK_"),
            pdf("FI1201 - UTS 2011-2012 - Soal and solusi.pdf", "17eUbLQ7GqFXUWlkQ5c7HAh4KE71PH1tw"),
            ]),
        folder("UAS", [
            pdf("UAS 2024-2025 - Soal and Solusi.pdf", "1_GGWE4e0zX06RH5JpekSB2twp_WQOeu7"),
            pdf("MOCKUP UAS 2023-2024 - Soal and Solusi.pdf", "1x3cWj54bpv8QdrFl54ukRlNAyujQDzRY"),
            pdf("UAS 2022-2023 - Soal .pdf", "1bkoTQLTj3rHgR1ZpvkogR93u0nD8520W"),
            pdf("UAS 2022-2023 - Soal and Solusi.pdf", "1Gj7VFExw8yNP25W0TjgRQS1Zh3xHzMtX"),
            pdf("UAS 2021-2022 - Soal.pdf", "1CbCj3A44e2XqXCq0rZyBYP4wkasvMFOF"),
            pdf("UAS 2021-2022 - Soal and Solusi.pdf", "1kZhfdF8vir4xmu-RQsN-UhpunE70cs4V"),
            pdf("UAS 2020-2021 - Soal.pdf", "14ECYQ2NnnQyal5H1EUdSSPZfvqs3QpY0"),
            pdf("UAS 2020-2021 - Soal (Susulan).pdf", "1s5GMFNtwOzHfb-ilemvuBUI3RXojPKbj"),
            pdf("UAS 2019-2020 - Soal.pdf", "1k2-S5uu-2vJxfQ9H2vwa4k1bb-uMbTPn"),
            pdf("UAS 2018-2019 - Soal and solusi.pdf", "1r5t1CEfj7rISKeriTAynfJH8ueYf0al_"),
            pdf("UAS 2017-2018 - Soal.pdf", "1Xwd-4gQPxTYjyCXBPazCcg4lFop2NIoq"),
            pdf("UAS 2017-2018 - Soal and Solusi.pdf", "1G2uhJIrsikIPLceEyy7Jj0DV3yq_WHOT"),
            pdf("UAS 2016-2017 - Soal.pdf", "1pLaa0YlzsBOvt1cj5bGRTGQYHfo1xRId"),
            pdf("UAS 2015-2016 - Soal.pdf", "13Dpjr3WSGY8PYrNEYsxVHdcyOd6lwKeE"),
            pdf("UAS 2011-2012 - Solusi .pdf", "1CNLt81844RoCPxCSodXny-PtBJiE_hPI"),
        ]),
        folder("UP", [
            pdf("UP FI1201 2024-2025 - Soal and Solusi.pdf", "1uZD0ZZVe4DOzutT9lnMzYfdAOQ6R-6i9"),
            pdf("UP FI1201 2023-2024 - Soal and Solusi.pdf", "1bnqZfdSw7RFIRBy1tLktw7uHRWILt8S_"),
            pdf("UP FI1201 2022-2023 - Soal and Solusi.pdf", "1fBRi_69wLJpWjJyr2-dtfqaxtsiR3Ykm"),
            pdf("UP FI1201 2021-2022  - Soal.pdf", "18CcQgFAB6W73NAVokzb98mveqiaqpeMi"),
            pdf("UP FI1201 2011-2012 - Soal and Solusi.pdf", "1vr0iloCHJ52Z99UKy1c8ggL4PDr4iia7"),
        ]),
        folder("LATIHAN SOAL ", [
            pdf("1-Gaya-Medan-Listrik.pdf", "1r1tZL88AwV13H9KLSL93O9nMEnpZ65KW"),
            pdf("2-Energi-Potensial-Listrik.pdf", "15yeqCSIyNIJwA1fqr5vVCvjqLm3zj9ZQ"),
            pdf("3-Arus-searah.pdf", "1aBiMvA02fKVgegqpqYndnl51idLLQ7Mz"),
            pdf("4-Medan-Magnet.pdf", "1C5vt_Uq9xa9MG97ZpAZnFS3KlSAZL_et"),
            pdf("Latihan Soal Persiapan UTS FIDAS 2A.pdf", "16o6-wV-gNO5Wsefi5u89xytdroJmRDLH"),
            pdf("Solusi 1.pdf", "1Vb4Zx6fpCnNdHvvYBgOxKO19ci5wJFqL"),
            pdf("Solusi 2.pdf", "1raVljbts7tK8X7VP24xjfHB2TuQkkr9y"),
            pdf("Solusi 3.pdf", "1VIzIT91hCGdSNi0BpC79VODSsrck5EcN"),
        ]),
        folder("KUIS", [
            pdf("Kuis Hukum Coulomb.pdf", "1ag-RuDhGBeq_OJPqiLRPDmtSngKTE-t7"),
            pdf("Kuis Muatan Titik.pdf", "1r2lF_1Ni4HQ_Vq9va7N99mWmdvAk4JWi"),
            pdf("Kuis 1 (Bu Rena).pdf", "1SQImZzDvJR1YDYTRmcEk8kZ2u2SmRT9l"),
            pdf("Kuis 2 (Pa Maman).pdf", "1WsB75OCWRlKq-23jngTRxaEjENbQ_jBL"),
            pdf("Kuis 2 (Persiapan UTS).pdf", "1KxXkUN4UmGLFMdpStZSYmIE6ZYfu50mL"),
        ]),
        folder("LTM", [
            folder("2024/2025", [
                pdf("LTM-01-Indonesia.pdf", "1_8z88KrsGJD-Mi6ersoM4-x__NDSS4EN"),
                pdf("LTM-01-English.pdf", "1jSrhcoW4eM9tJ4ScitPT6bNHFLSduYs8"),
                pdf("LTM-01-Solusi.pdf", "1okAkXDWrrTobcMDnvnSBYec_fKqf-luG"),
                pdf("LTM-02-Indonesia.pdf", "1rt9BdzRj8A3yg8GpV_PTyqyppKE-qZ1W"),
                pdf("LTM-02-English.pdf", "1EIP39bbviVS9OPAGms5JNQhI6tjqCFGL"),
                pdf("LTM-02-Solusi.pdf", "1-ICRHLhHPbd32d-wLDLhHEu19oel719g"),
                pdf("LTM-03-Indonesia.pdf", "16sj4TgHmh3PjPDE6FmPoOHnEh-tyFxB8"),
                pdf("LTM-03-English.pdf", "1oumBd8gRcYbNVRnG6PtPRfVOj0JjW6PX"),
                pdf("LTM-03-Solusi.pdf", "1AkfE6blCHk0afJK3fB9pitZIdu7qtAqQ"),
                pdf("LTM-04-Indonesia.pdf", "1YdKcmIBE25IsA10gRWF4OqQW8EwdXKmM"),
                pdf("LTM-04-English.pdf", "16G_qgA6EDCIGLX0zux3HMzXgyRJnnkV4"),
                pdf("LTM-04-Solusi.pdf", "1-TCJJJW6Onc6O24jmotMZegfUxDbO6jE"),
            ]),
            folder("2023/2024", [
                pdf("SOAL-Modul-1-Fidas-IIA_2023-2024.pdf", "1rhgpbYlDm78dN6Puq1sS7nyKTrfF7qjj"),
                pdf("SOAL-Modul-1-Fidas-IIA_2023-2024_English.pdf", "15A7nQ0znSbljEuW7Pt4IzDaRdfg0MOfB"),
                pdf("SOLUSI-Modul-1-Fidas-IIA_2023-2024.pdf", "18WsO0ygduAsbtjXFBIKB3wH9yLq0CpOF"),
                pdf("SOAL-Modul-2-Fidas-IIA_2023-2024.pdf", "1TWs0P_vJmOhvPulcxxiJoVM6z7Riz8Sd"),
                pdf("SOAL-Modul-2-Fidas-IIA_2023-2024_English.pdf", "1nbUE6QzajHkjXuh0JmzF-dYRUWmJWM_X"),
                pdf("SOLUSI-Modul-2-Fidas-IIA_2023-2024.pdf", "1wJPI46rUiYZnU3NMW9q2u2c-IokxB33s"),
                pdf("SOAL-Modul-3-Fidas-IIA_2023-2024.pdf", "10-jqUVPXsNy2XKkeAZf4iQYUVFK-obFm"),
                pdf("SOAL-Modul-3-Fidas-IIA_2023-2024_English.pdf", "1TKWWP0SGAiyS88zFnFw-mJzpTgz7SkzL"),
                pdf("SOLUSI-Modul-3-Fidas-IIA_2023-2024.pdf", "1uMD4PWZrWTqDshV-L998R9_V9XlcU_Ln"),
                pdf("SOAL-Modul-4-Fidas-IIA_2023-2024.pdf", "16vtl9w2nOI8hqcUl8Kvc5xXS_iu467FN"),
                pdf("SOAL-Modul-4-Fidas-IIA_2023-2024_English.pdf", "1ZFNgWcabFEfwE64HEbXsorZg7JG9IOnJ"),
                pdf("SOLUSI-Modul-4-Fidas-IIA_2023-2024.pdf", "1dwzqat9pCLP4w3toDu4Y0wirSnS0XIFt"),
                pdf("SOAL-Modul-5-Fidas-IIA_2023-2024.pdf", "1Usfcg5hJNH4nJXDFIWy3_5dYwA693FS6"),
                pdf("SOAL-Modul-5-Fidas-IIA-2023-2024-English.pdf", "1A_jpImB6X_PmEAKpJHGIHIQs7cedR9AP"),
                pdf("SOLUSI-Modul-5-Fidas-IIA_2023-2024.pdf", "120dg4Tsr3FR1QoIcrpQjDthB-E0HUpg_"),
                pdf("SOAL-Modul-6-Fidas-IIA_2023-2024.pdf", "1IHIO3OsT93kWDpPQaNZP5lUjXPztUr-N"),
                pdf("SOAL-Modul-6-Fidas-IIA-2023-2024-English.pdf", "1CPKdXYFVvUFqPNPuMuHGnCog3KndKkzi"),
                pdf("SOLUSI-Modul-6-Fidas-IIA_2023-2024.pdf", "16Ndq94xn5H2srCCphsDJQ4cJPKX-c4i_"),
            ]),
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
      <div className='border border-gray-700 rounded-lg p-4 bg-gray-100 dark:bg-gray-100 dark:bg-gray-950 h-[85vh] overflow-y-auto $className={isOpen ? "w-1/3" : "w-20"}'>
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
