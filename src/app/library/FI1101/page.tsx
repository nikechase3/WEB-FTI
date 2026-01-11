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
        folder("SCL", [
            folder("MODUL", [
                pdf("modul 1 SCL Fisika_vektor dan Kinematika_fix.pdf", "1dR-eFjuHlxcwIWj8vXp12-1MsMTnEvFD"),
                pdf("modul 2 SCL Fisika_kinematika.pdf", "1HORljLxXVGi62F_Bg0eFmC_hGotGdssZ"),
                pdf("modul 3 SCL Fisika_Dinamika.pdf", "1Sydmdetglh-JP959JtOg_wlZTNsHHOTS"),
                pdf("modul 4 SCL Fisika_Usaha dan Energi.pdf", "1ZucjaMS1ELR_nwS2IwDDNovQTMqgUZUq"),
                pdf("modul 5 SCL Momentum Linear.pdf", "1CdLRV_bzypUCpUzjtlgK5CtmslIseE6m"),
                pdf("modul 6 SCL Fisika_Benda Tegar I.pdf", "1XRB9vfUa-ZXf0KfLA6gjcfQZb8QPNO_D"),
                pdf("Modul 7 SCL_Elastisitas dan Osilasi_revisi.pdf", "1fS4qYs_BvWXpm3wwyy9itEsaq-2nVpFg"),
                pdf("Modul 8 SCL Gelombang Mekanik.pdf", "1NpLgDpkFfdzLPR85lToqaR8X3-nrXCWS"),
                pdf("Modul 9 SCL Fluida Statis.pdf", "1VazvaCmg5mwyHEamHoM8aEUnBY2mJspo"),
                pdf("modul 10 SCL Fisika_Fluida Dinamis.pdf", "1pM8VENRFp61EpiiG9_uukKe2XsnF9WNT"),
                pdf("modul 11 SCL Fisika Teori Kinetik Gas.pdf", "1NGIoSaC8DlO07iIU4rSq1kqnFOB32fHG"),
                pdf("modul_12_SCL_Fisika_Termodinamika.pdf", "1Sc4tArh_u7g1RPcgN-fwKYSi8KlD-ao6"),
            ]),
            folder("SOLUSI", [
                pdf("Solusi Modul 1.pdf", "1yigK8FHH5fQbM5QaToFBBhCyKRpJkOC4"),
                pdf("Solusi Modul 2.pdf", "1QUKsvzV4XXCjSwsiSWGt5duAEcPuzPG7"),
                pdf("Solusi Modul 3.pdf", "1CMlOo7WGTBs-kiTN_2f11Qyzc9CH4UTn"),
                pdf("Solusi modul 4 scl fisika.pdf", "1OvIGLuDbtiMrDxO_xey5K25Hh3klQAcV"),
                pdf("Solusi Modul 7.pdf", "1kw4X-nnOe0DHSE96kEKWx6aUfpgNRlI2"),
                pdf("Solusi Modul 8.pdf", "1LgvuycaeI5K6jrgSJ2Lw9-ajGk3Au2mL"),
                pdf("Solusi Modul 9.pdf", "1E4o2KTraVdFCImrinsTfER_CgoBoHzTm"),
                pdf("Solusi Modul 10.pdf", "1HMysa-5yHuCXTtoKDNTEfExTLcQB_peN"),
                pdf("Solusi Modul 11.pdf", "1jOR1dtH3XYO5oU6mgPC1KKcIDQd5lK-Z"),
                pdf("Solusi Modul 12.pdf", "16GpG1fVNt9qx27I_7sJTKmuhkdGbkF76"),
            ]),
            
        ]),
        folder("LCE", [
            pdf("1763529364582_Panduan-Tugas-LCE-Fisika-Dasar-1-2025rev_170112025.pdf", "1IAMW_V6NSEAG5beoemW0GxYEg0HMWO_5"),
            pdf("Panduan Tugas LCE Fisika Dasar_Fin.pdf", "1CBQlTpqwRojIGyWPQJ_Fd_XIMj5GL8w2"),
        ]),
        folder("LTM", [
            folder("LTM 2025", [
                pdf("Modul-7_Tutorial_FI11012025.pdf", "1b_cGygA7haf9vqXTwl2ta3ZobG9Lu6CR"),
                pdf("Modul-6_Tutorial_FI11012025.pdf", "1Ptq-s-rLluX_H7XH_wuiEiqAmdUFZG3i"),
                pdf("Modul-5_Tutorial_FI11012025.pdf", "1QnQJN8YXFMYdjOoKwhhGr9b0LV_E9Hre"),
                pdf("Modul-4_Tutorial_FI11012025.pdf", "15gT8JanUr9QBRlDtgZOs8FuOBdoxdgQ6"),
                pdf("Modul-3_Tutorial_FI11012025.pdf", "1qkv-TmGTShdh9FM4SwuixdAEjMnmvqL2"),
                pdf("modul-2_Tutorial_FI11012025.pdf", "10rhw4U23J-Ooyn0cWl6W9phm6MqwzbjE"),
                pdf("Modul-1_Tutorial_FI11012025.pdf", "1NKekdF2gV1jBJSisw59S0YgmDpSGp4Vh"),
            ]),
            // Additional LTM Files
            pdf("SOLUSI-Modul-6-Fidas-IA_2023-2024.pdf", "1YhOf5vcFv6MiKIonsZKpnB6DQ8bSe8em"),
            pdf("SOLUSI-Modul-5-Fidas-IA_2023-2024.pdf", "1-h1AV7R09WDjXKQEF5vq3vEB4VUKMh53"),
            pdf("SOLUSI-Modul-4-Fidas-IA_2023-2024.pdf", "11u_8yc1eZzLGAUVUGIM-tMmmFQVDaEZf"),
            pdf("SOLUSI-Modul-3-Fidas-IA_2023-2024.pdf", "1XgBc9GfjWlm4Mq5UY_abB1YGCukwpdvS"),
            pdf("SOLUSI-Modul-2-Fidas-IA_2023-2024.pdf", "1UZr-8TM5vfiX3WzTSSMUcD-3RI9Vznef"),
            pdf("SOLUSI-Modul-1-Fidas-IA_2023-2024.pdf", "1Sme3buOB_BesPFKM_FR2ubZGMSXAngNM"),
            pdf("Soal LTM-4.pdf", "17WUzikZJP-CD-3IM-pFSOzD0E815khw6"),
            pdf("Soal LTM-3.pdf", "1BYJylAyRI7tFABtFLanqrpSgAn7onc6W"),
            pdf("Soal LTM-2.pdf", "1afKOW2KLiCHg5DRwhq6MbnrtBUvV4T3f"),
            pdf("Soal LTM-1.pdf", "1UDhHrJviYlVHMFPQLMA8H5q18WL25F_1"),
        ]),
        folder("PPT DOSEN", [
            folder("IUP", [
                pdf("Modul-1.pdf", "1GqtqobiJdq4AHShnHAng56VxYiGT6J0N"),
                pdf("Modul-2.pdf", "1n2qeIywH-mzGMu9Is_wfkHpN1MqC_SEb"),
                pdf("Modul-3.pdf", "1zW0ZY560FBdAuc9gmbDy_bl1gCB11bQ3"),
                pdf("Modul-4.pdf", "1dI33-Kw_RlEqGfiACyYPyb9LFgF6m5pc"),
                pdf("Modul-5.pdf", "1v5U9wq0GpTqOUdJrbM3tUk40DJPQpq1s"),
                pdf("Modul-6.pdf", "1eB9LEdgIKCzcg8rSARjMMgrV_0k1433L"),
                pdf("Modul-7.pdf", "1IL9WHOQb1uhulNCjuCfxlKDjT1dRhWNo"),
                pdf("Modul-8.pdf", "1O-gqpEdk0AUU2_jcMPmn0cTnx-JNx_Lr"),
                pdf("Modul-9.pdf", "1DYD7JvEBuUGRN8LhtGBTNZP8-gTKMwrt"),
                pdf("Modul-10.pdf", "1-izHNQWFoxbslx_BzQwUEsI1EbV_Cf0g"),
                pdf("Modul-11.pdf", "1BFuRICmWrGOYOkpQYeU599K0g0tfpbP7"),
                pdf("Modul-12.pdf", "1ObVozTxfFFq6MHxVNrHUMiHYxpGRhr4D"),
                pdf("Modul 13-14.pdf", "14ZXCwkW9VKJfzfaKWsFt7LL4RqxHU5w8"),
            ]),
            folder("Pak Fahdzi Muttaqien", [
                pdf("Pengukuran dan Satuan.pdf", "1QEb5VKmw7ZNXeCHsSB0TpR7qCu42tyBH"),
                pdf("Kinematika Benda Titik 1D.pdf", "1NpkSTcp4jUVk-d1Vrum7v-nPPjZyKU2F"),
                pdf("Kinematika Benda Titik 2D dan 3D.pdf", "1tbUSmRxP2FK0Y5L0EoXoD67TgnFCGepe"),
                pdf("Dinamika Benda Titik.pdf", "1MwtszRkkVDCCzaa64y9cA3TK6p9pO08b"),
                pdf("Usaha dan Energi.pdf", "1x9fqv8qTNXInUEoFpSsCJGLskQMT37dE"),
                pdf("Energi Potensial dan Konservasi Energi.pdf", "1zZ6uwrYn4wPLkOWhIJ33Bk4sb4V-yOqm"),
                pdf("Pusat Massa dan Momentum Linear.pdf", "1zHt9VqkmMXBfFpMWKNAb021gCGNkZ7sJ"),
                pdf("Gerak Rotasi dan Menggelinding.pdf", "1Sdo9rdODtr3ZKQgK2p89Tm52Xnyxje2U"),
                pdf("Kesetimbangan dan Elastisitas.pdf", "1OlEbuazlZ5hyLSyEIGHsHBWuBL0hxl4p"),
                pdf("Osilasi.pdf", "1avzVGnY2V0hxIIjfiqbWhHreP4aWfPpm"),
                pdf("Gelombang Mekanik.pptx", "1BdvxNaTaPJOwE614WrpZ_2NY03fh3joL"),
                pdf("Fluida.pdf", "1YoQM5hVj_Id55CXDKOnoH0v5UDMaLahG"),
            ]),
        ]),
        folder("UP", [
            pdf("FI1101 - UP 2022-2023 - Pembahasan.pdf", "1R95Iyx8lXtZIRK9liS430lzbIjVCtcL5"),
            pdf("FI1101 - UP 2011-2012 - Soal dan Solusi (1).pdf", "1iESoCNw6msNrqzm9mJxQKQV5EFHP1f2g"),
            pdf("FI1101 - UP 2011-2012 - Soal dan Solusi.pdf", "1Xe7Zn3eFEv66GaN1d95yvsSo2iT_wdtq"),
            pdf("Soal & Solusi 2022.pdf", "1wJlu_KESxaqhRCUhYzEeCsLKuCyl7zK5"),
            pdf("Soal & Solusi 2011.pdf", "1pmofFOn14YLlX7K2MQiyYCGZNhhM03OD"),
            pdf("FI1101 - UP 2021-2022 - Soal.pdf", "1lxpFOjCSeNH-DqXCMv9XtWWwaMaj0-FF"),
            pdf("FI1101 - UP 2018-2019 - Soal dan Solusi.pdf", "1eYhVxO5KWLOk9_ezCD9jR9QfQLcZN92Q"),
            pdf("FI1101 - UP 2019-2020 - Soal dan Solusi.pdf", "1oN-VtcI2Wh-2636Ma4kvfW4hf1obHxzc"),
        ]),
        folder("PBL", [
            pdf("1763529389567_MODUL-PBL-Mengukur-Rapat-Massa-Minyak-Sem-1-TA-2025-2026.pdf", "1M_H9ZLcNWPty0wDAb4O0olZ_I-w57Z5e"),
            pdf("Format Laporan PBL.pdf", "1C-7oJ3aTQYqigDGjad2pZRb0XzGxukkS"),
            pdf("Modul PBL 30 Oktober 2024.pdf", "1P4Q6bq3d_YhLpXIXREj8Da2hSfDIG__S"),
        ]),
        folder("LABORATORIUM", [
            pdf("Buku-Saku-Praktikum-Semester-1.pdf", "1r4dxck90xyKk5UIKkuk6z_mdErKPUzVE"),
            pdf("Format Laporan.pdf", "1dfmRZNhV_ZWY-0S7_v-jJcBa1X7njWWw"),
            pdf("PPT Pengenalam Praktikum LFD Sem 1 2425.pdf", "1u4R2trQRLAVn6NzWI7exmfTiij01e-Ri"),
        ]),
        folder("UAS", [
            folder("UAS - 2013", [
                pdf("FI1101 - UAS 2013-2014 - Soal dan Solusi.pdf", "1acUnINQU9voV9JZp_DMXCnv3wFaYDew3"),
            ]),
            folder("UAS - 2011", [
                pdf("FI1101 - UAS 2011-2012 - Soal dan Solusi.pdf", "1W235gAeEAypql7dGEPKWHegyGteUomqS"),
            ]),
            folder("UAS - 2015", [
                pdf("FI1101 - UAS 2015-2016 - Solusi.pdf", "1VHPhdNF1oB6pAicS6A-TacHmEElOeffD"),
                pdf("FI1101 - UAS 2015-2016 - Soal.jpg", "1m8WGbx2utiuub0WFBZDVlwPAjZQOupwS"),
            ]),
            folder("UAS - 2016", [
                pdf("FI1101 - UAS 2016-2017 - Soal.pdf", "1g5lmhFaRvxiou-7mVF4NNLAU6Axn8eX3"),
                pdf("FI1101 - UAS 2016-2017 - Solusi.pdf", "1u56mMwWyt7nJ7QAQdYOL9LcRaPyZsNdG"),
            ]),
            folder("UAS - 2017", [
                pdf("FI1101 - UAS 2017-2018 - Soal.pdf", "1ENanResil7L8_JxBnZkjjpuPAAUjl8M-"),
                pdf("FI1101 - UAS 2017-2018 - Solusi.pdf.pdf", "1Wlupsw0xMYG923ufpbnc7lxbzlx6F1i6"),
            ]),
            folder("UAS - 2018", [
                pdf("FI1101 - UAS 2018-2019 - Soal.pdf", "1YwfgvNmAkugKgAcaEI1Y6fSx5YLeKJPl"),
                pdf("FI1101 - UAS 2018-2019 - Solusi.pdf", "1fsyUzc4CnU8RbslULVUVx0RnU6nE42pC"),
            ]),
            folder("UAS - 2021", [
                pdf("FI1101 - UAS 2021-2022.pdf", "1sssi7xV9Y1jclrhQN-EYvfZWWTHhlCi6"),
            ]),
            folder("UAS - 2019", [
                pdf("FI1101 - UAS 2019-2020 - Soal (arranged).pdf", "1_m0la_lfIWBqTaD599zenjjIsgsKb4be"),
                pdf("FI1101 - UAS 2019-2020 - Soal.pdf", "1sOBCMK-0GBy1N3V-Vlz5I8ACCuaNRmeY"),
                pdf("FI1101 - UAS 2019-2020 - Solusi.pdf", "1hyPzLVqzYFneuPQRVtglFjgqtLtL8LPn"),
            ]),
            folder("UAS - 2022", [
                pdf("FI1101 - UAS 2022-2023 - Solusi.pdf", "16TbZT1Gwvkq7vD1eBOdracO9gNqd9IQm"),
                pdf("FI1101 - UAS 2022-2023 - Soal.pdf", "1VarpDFQsMrEHx8izXQtVgZw9JBtG-SIs"),
            ]),
            folder("UAS - 2023", [
                pdf("FI1101 - UAS 2023-2024 - SoalB.pdf", "19gj3Hfb8W_s4O-0KpgGRvT_pFDblMxSq"),
                pdf("FI1101 - UAS 2023-2024 - SoalA.pdf", "1N5d3XDnh4icW94ESR1jRqDOIv2KNdljn"),
                pdf("FI1101 - UAS 2023-2024 - SoalB.pdf", "1qzbt4N3SQuVCirOXHvrdDT3bwjYVSEma"),
                pdf("FI1101 - UAS 2023-2024 - SoalA.pdf", "19iI0pGCCc5aLT74UZ-amuKJ8Lyq7gWeo"),
            ]),
            folder("UAS - 2024", [
                pdf("FI1101 - UAS 2024-2025 - Soal B.pdf", "15PwOQA2qBHN7aikuA5_s3earfVc4w_Qw"),
                pdf("FI1101 - UAS 2024-2025 - Soal A.pdf", "1q3GgCqkhMWIbTedkaQohePm6Em5c0uPt"),
                pdf("FI1101 - UAS 2024-2025 - Soal B - Solusi.pdf.pdf", "1ucqAgOtOVK9zLuE1GSqAp7zsdjpbQWZE"),
                pdf("FI1101 - UAS 2024-2025 - Soal A - Solusi.pdf", "1eoJ9GvR8UeV_pkA594TkuB2VWG_oEAxE"),
            ]),
            folder("UAS - 2025", [
                pdf("1767172927424_Solusi_U2_sesi1_edunex.pdf", "1Rj3d76ET6gwUHTWdUzkfQJgjBkZXvtGn"),
                pdf("1767172927424_Solusi_U2_sesi1_edunex.pdf", "1xHbt41zumzC-q1qpyvHoHJIJsYgCO-Ra"),
                pdf("Sial_Ujian_2_Fisdas_2025-26_Sem1.pdf", "1JbLrt09x8n_LF_XzoeqjaP8ik6LmzECh"),
            ]),
        ]),
        folder("UTS", [
            folder("UTS - 2017", [
                pdf("FI1101 - UTS 2017-2018 - Solusi .pdf", "1hALgBRLtdVAXATkUA9Y6EiYQ2BESklTN"),
            ]),
            folder("UTS - 2016", [
                pdf("FI1101 - UTS 2016-2017 - Soal.pdf", "1bDZsngZSslAL5SmXtchXphDVDQADqBqA"),
            ]),
            folder("UTS - 2015", [
                pdf("FI1101 - UTS 2015-2016 - Soal.jpg", "1nWIUEGDUHrOpgfsScKdxbBpmU1tLhjQC"),
            ]),
            folder("UTS - 2018", [
                pdf("FI1101 - UTS 2018-2019 - Solusi.pdf", "1-20gumhb1sPM7Wly4OyWBsmQm2llxPoe"),
                pdf("FI1101 - UTS 2018-2019 - Soal.pdf", "1xdsmaxJM2TOIxxrox0VPAkBt6rYn9t5K"),
            ]),
            folder("UTS - 2019", [
                pdf("Solusi Ujian 1 Fisika Dasar 1 A 2019-2020.pdf", "1AVmFQdt79tT5ZKCWYHAdddn68bDSx1l_"),
                pdf("FI1101 - UTS 2019-2020 - Soal.pdf", "1QTwLKGyjyqFTfXoNLr8Z188O6vJv2QOF"),
            ]),
            folder("UTS - 2011", [
                pdf("FI1101 - UTS 2011-2012 - Solusi.pdf", "1iDaED5KIsDrNEYKfnCQl-Qw6mCDWQ_cF"),
            ]),
            folder("UTS - 2021", [
                pdf("FI1101 - UTS 2021.pdf", "1m3-bfBkqn-NsrcaPjXoV9CI71xw5dvTt"),
            ]),
            folder("UTS - 2022", [
                pdf("FI1101 - UTS 2022-2023- Solusi.pdf", "1kG7VBGRXYbao5xs7QrVL9qgOWooFLIZq"),
                pdf("FI1101 - UTS 2022-2023 - Soal.pdf", "1tU_88qrQhPZLOyHeeokmhE-E6QSD0g2Z"),
            ]),
            folder("UTS - 2023", [
                pdf("FI1101 - UTS 2023-2024 - SoalB.pdf", "1zWxem07F2GIMI9wY011R9lrqx-x5v9KC"),
                pdf("FI1101 - UTS 2023-2024 - SoalA.pdf", "16LoRvJ6sSDdK5ZvS9K9WG_KAT2wSmE5L"),
            ]),
            folder("UTS - 2024", [
                pdf("FI1101 - UTS 2024-2025 - SoalB.pdf", "1uhScf_8O2a32plz88ii1eZq0InpSggMY"),
                pdf("FI1101 - UTS 2024-2025 - SoalA.pdf", "1zKJQqOtUJKFrn8cgTcpDkL5XUQtTbetF"),
            ]),
            folder("UTS - 2025", [
                pdf("1767172909868_Solusi_U1_sesi2_edunex.pdf", "13Sed_t-A9nBGXx7cUUvyZgSumTODShpk"),
                pdf("1767172906015_Solusi_U1_sesi1_edunex.pdf", "1rr_54aqtPCA9nRgui1C27oYHVP8QyWiN"),
            ]),
        ]),
        folder("KUIS", []),
        folder("CATATAN", [
            pdf("Rangkuman Fisika UTS.pdf", "1KcTE5uDMQXUiRnEg8iSxtpHpGu7kRoOm"),
            pdf("RANGKUMAN UAS FIDAS 1A.pdf", "1BV90x8wgzT-OJi3NAL3IblDFVHcCaZe5"),
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
