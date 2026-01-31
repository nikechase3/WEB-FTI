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
        folder("Aturan Perkuliahan", [
   pdf("2025_Info-mahasiswa-kidas-2A.pdf", "1boBZerv2PJBDRhExidJBnty5Mfoa6YM7"),
]),
    folder("CATATAN", [
        pdf("1. Termodinamika Kimia.pdf", "1o-wNIiy7VnlpUjhcqZ8EdbtKZFCGeif1"),
        pdf("2. Sifat Koligatif Larutan.pdf", "1moxDY6bBqfMZxsC_ypc8sRMeRx6Im9Ym"),
        pdf("3. Kesetimbangan Kimia .pdf", "1K1Ju3TTphBW9Jq-lJvzc3coJC69X2aM6"),
        pdf("4. Kinetika Kimia", "1t6QFbUla7Q2QkEt4Ga3G2l7yVjAaRZ73"),
        pdf("5. Teori Asam Basa.pdf", "1NT9YsUXlMX3aWvXhqRwv95wKu_RQenRT"),
        pdf("6. Kesetimbangan Asam Basa.pdf", "1RecZQa1BCwvbpIr7jdF31cxkcm_u9pEy"),
        pdf("7. Kesetimbangan Kimia.pdf", "1rZH25Pq-wVma8ifFxXY4ZrBQ9jxsXaC8"),
        pdf("8. Elektrokimia.pdf", "1Ue5th5vONR4MotVgULn9HrFXhlp8IWok"),
        pdf("9. Kimia Organik.pdf", "1iL-5D68sT-0iM7Bn5KRo0YdDwKwseDEp"),
        pdf("10. Rangkuman UAS.pdf", "19WFQb0xKJVZ42rm_sMcRhexZWOjgo7rH"),
    ]),
    folder("KBF", [
            folder("2023/2024", [
                pdf("Pembahasan KBF 2 FTI.pdf", "1IvSZuJ2riF2AcoBvXoIgynWp7MsooCPS"),
            ]),
            folder("2022/2023", [
                pdf("Solusi KBF 2022-2023.pdf", "1hJDxeUDMqr4V00gNfnuzCbXOgT8V-Mwy"),
                pdf("Solusi KBF 1 2022_2023 FTI-G - FTI_21.pdf", "1_PrGen2lZ3_DROTJweQMjiCNA9_aGjyS"),
                pdf("Pembahasan KBF 1 - 2022_2023 - sesi 1.pdf", "1xNT73NSlpfM0RHtd9FMp8Ylwt7beWa1X"),
                pdf("Pembahasan KBF 1 - 2022_2023 - sesi 2.pdf", "1pSm_BtprqnJwR-RoTRrA8U4K9nwZw7VF"),
                pdf("Pembahasan KBF 1 - 2022_2023 - sesi 3.pdf", "1iGhsUqmchjA0-MINZ0gcxLuXUaq__2xY"),
                pdf("Solusi KBF 2 2022_2023 FTI-G - FTI_21.pdf", "1-yF4V6nIlQJvKQR0zXvDH_fnT8AeyrIL"),
                pdf("Solusi KBF 2 - 2022_2023.pdf", "1vheGO8NFhm0Ihbc_VhoBry1ONFDg-dvu"),
                pdf("Pembahasan KBF 2 - 2022_2023 - sesi 1.pdf", "1KDLm1hCpCnTiDDoUx1iSPB0i94JZtGcx"),
                pdf("Pembahasan KBF 2 - 2022_2023 - Sesi 2.pdf", "1PqwtkxTh3z4mzSHtDR2PNAbQOWVj7YOg"),
                pdf("Pembahasan KBF 2 - 2022_2023 - sesi 3.pdf", "1BQzNuqaategXzRR50421VTf5CholKYN9"),
            ]),
            folder("2021/2022", [
                pdf("KBF 1 - 2021 - FTI-G.pdf", "1cDBmG_-H_I84cPyn0-3KMSm0JrdvC4_H"),
                pdf("Solusi KBF 1 - 2021 - FTI-G - FTI_21.pdf", "19DZvJhgRkkxnM-U_WhCU3Jej1lXM5M5j"),
                pdf("Solusi KBF 2 - 2021_2022 - FTI-G - FTI_21.pdf", "1CNUDo_TI144BWEMbue7OdCRV4AdznMwO"),
            ]),
            folder("2020/2021", [
                pdf("KBF 1 - 2020 - FTI-G.pdf", "184w741perR_BDn_GfSQf3i-qtmyN-IJQ"),
                pdf("Solusi KBF 2 - 2020_2021 - FTI-G -FTI_21.pdf", "1TQOVqfYfqCUAp0CYAlBBGaF2RkW85nxD"),
            ]),
        ]),
        folder("UTS", [
            folder("Catatan Tutor Sebaya", [
                pdf("FTI UTS Lengkap.pdf", "10yCgJb-IC591ExNvJNpTaQcXu5VAYB9I"),
            ]),
            folder("Soal - Soal UTS", [
                pdf("KI1201 - UTS II 2023-2024 - Solusi", "1yJkx1hXhFFbIUZMCQJacBveDfcnEKxpzkJ7uHThsOhw"),
                pdf("KI1201 - UTS II 2023-2024 - Solusi", "1nBm5rN5VBOB_I_lFeKLFRqXWpB8VIHvb"),
                pdf("KI1201 - UTS II 2022-2023 - Solusi.pdf", "1eGKpxYjqceO7d81jSJ7NT-T-mpHbwT3f"),
                pdf("KI1201 - UTS II 2021-2022 - Soal.pdf", "1TFlO7sQgm0DRduNNQ3WWwBhuP3dFS4oJ"),
                pdf("KI1201 - UTS II 2021-2022 - Solusi.pdf", "1M-WRRF1JwfMSkTWZBnHXNukFjGoRNunN"),
                pdf("KI1201 - UTS II 2020-2021 - Soal.pdf", "1zCdbADrV76azTc48sVtdS-XLHmdbEASE"),
                pdf("KI1201 - UTS II 2020-2021 - Solusi.pdf", "1aeZwVJNJ2WYu-m1FzTRb-itY3M7RiMUY"),
                pdf("KI1201 - UTS II 2019-2020 - Solusi.pdf", "1jV-xZ0JZwbSObccIvPENDu7xj8REufIQ"),
                pdf("KI1201 - UTS II 2018-2019 - Solusi.pdf", "1Qwm6bWkdIskew3-FezQswhF_JdNtggxQ"),
                pdf("KI1201 - UTS II 2017-2018 - Soal.pdf", "1bSncdwDpH5FxFmuzR2Q_LixDn-eDDy9o"),
                pdf("KI1201 - UTS II 2015-2016 - Soal.pdf", "1VyKotvRDXZP9yQ70ynySTkd6uzXtKvhX"),
                pdf("KI1201 - UTS II 2015-2016 - Solusi.pdf", "1Yg53_BbvaM1c5YthpfEu5R-kOwPZUl4z"),
                pdf("KI1201 - UTS II Gabungan - Solusi.pdf", "1KI8ePkexG4TdZx09kMajRmWVWkLqF-Fi"),
            ]),
        ]),
        folder("LATIHAN SOAL", [
            folder("SOAL-SOAL MOCK UP (FTI 23)", [
                folder("UTS", [
                    pdf("KI1201 - UTS II Mockup I - Soal.pdf", "1p39i7eXNXuHDHjge6YDvf9DtfEigT2NQ"),
                    pdf("KI1201 - UTS II Mockup I - Solusi.pdf", "19VVjzZpR0b5S0DNI19ro4jcDuGKQN8uV"),
                    pdf("KI1201 - UTS II Mockup II - Soal.pdf", "1ArNOI24F3q_r-L6X1bCrsOfsgxdrNJN-"),
                    pdf("KI1201 - UTS II Mockup II - Solusi.pdf", "1wt9ZTdbIYu73Pz3SSP6UTfexLocYgmz0"),
                    pdf("KI1201 - UTS II Mockup III - Soal.pdf", "1VGUmXwrqBt_2k5o6QLdRjWQsDZtGaNUX"),
                ]),
                folder("UAS", [
                    pdf("KI1201 - UAS II Mockup I - Soal.pdf", "1BX5HGadE0wT7DcIqz3yfaH1fpJDvAqgp"),
                    pdf("KI1201 - UAS II Mockup I - Solusi.pdf", "1LW4Ifgolnq7WIm3TeQ7FOH4qQyw2SPnd"),
                    pdf("KI1201 - UAS II Mockup II - Soal.pdf.pdf", "1moue8oPhQroQI1tBWImHWRo-Yg335mFc"),
                    pdf("KI1201 - UAS II Mockup II - Solusi.pdf", "1qvMM3CTXmWX74tFnDhOdluc0npf7JCaz"),
                ]),
            ]),
            folder("FTI 21 (Pembahasan)", [
                pdf("Pembahasan Bab 12 - Sifat Fisik Larutan_FTI_21.pdf", "1ZB3xQ2Ng53R-Z4mUePkb5kBKu_6AgKzv"),
                pdf("Pembahasan Bab 13 - Kinetika Kimia_FTI_21.pdf", "1EQ2Yr-YNZQtcS3ranh7GiTXmzoIg6Ad7"),
                pdf("Pembahasan Bab 14 - Kesetimbangan Kimia_FTI_21.pdf", "11u6awlTi-ZN5ReEF-r9HCp9mIiPrWd_-"),
                pdf("Pembahasan Bab 15 - Termodinamika_FTI_21.pdf", "1J4LNYh3YjuDj79_75VeN0cVWeJbsv8fl"),
                pdf("Pembahasan Bab 15 - Kesetimbangan Asam Basa_FTI_21.pdf", "17Tqfupd2sjJKCqIIuf7ljXCPPSUMKyo3"),
                pdf("Pembahasan Bab 19 - Kesetimbangan Larutan_FTI_21.pdf", "16hBaVdzXNWAuFeh6di25NazuBx71i3wU"),
                pdf("Pembahasan Bab 20 - Elektrokimia_FTI_21.pdf", "1XJ7cHMiIY32ue5NyE01BeySwohiuaWAc"),
                pdf("Pembahasan Bab 21 - Kimia Organik dan Biomolekul_FTI_21 .pdf", "1rIEf5j01Rm5v9n2xs9YpCXMi3brxrdQU"),
            ]),
            folder("LATSOL PAK NIZAR HAPPYANA", [
                pdf("Bab 12-15 - Latihan UTS II.pdf", "13fkQ5SOY_DB_Xid9DtdA6SbI8WQMckOm"),
                pdf("Bab 16&17 - Latihan (Kesetimbangan) Asam Basa_NH.pdf", "1F6hCjhKC-mzm14VuRQz4dekuBkrLPd0Y"),
                pdf("Bab 19 - Latihan Elektrokimia_NH.pdf", "1L6KUhvLuOrkzIQj-8BoHNaxLad-za7-V"),
                pdf("Bab 16-19 - Latihan UAS II.pdf", "1dKIkApRtParjHtALA9h_SoMUrNM3t7VR"),
            ]),
            folder("LATSOL BU DEANA WAHYUNINGRUM", [
                pdf("Bab 12 - Sifat Fisik Larutan_DW.pdf", "1SFxqugOrfFQTiODZlq6YYsM5qaMoz9Z6"),
                pdf("Bab 13 - Kinetika Kimia_DW.pdf", "1Ilq1IcjT73Bzvid3gSoZW-yMd6SIl2ut"),
                pdf("Bab 14 - Kesetimbangan Kimia_DW.pdf", "1PThqgi60izMCbGDRhJ5r8o_gTF0Rq-h_"),
                pdf("Bab 15 - Termodinamika_DW.pdf", "1uEzW_ACWFe7Q4qrfTg4Dd3kuGL2S9gf-"),
                pdf("Bab 16 & 17 - Asam Basa_DW.pdf", "1KKMFZm3JtGfg3Rv9bTB44mPdETw7g_cA"),
                pdf("Bab 20 - Kimia Inti dan Radiasi_DW.pdf", "1k8i8PZ9DwA_1EHiuWPiCxK0Zm0GxsrGP"),
            ]),
            folder("LATIHAN SOAL PER BAB", [
                pdf("Bab 12a - Larutan dan Sifat Fisik Larutan.pdf", "1EIV9wE8GLBaEKZzwqPcJKCkG5UZox_RC"),
                pdf("Bab 13a - Kinetika Kimia.pdf", "19w0JokWny-SyIs46tiACfoQxeINLnfNS"),
                pdf("Bab 14a - Kesetimbangan Kimia.pdf", "1Sfr_K0RcpwPTnoteYq8NpFonvrAQM7fV"),
                pdf("Bab 15a - Termodinamika Kimia.pdf", "13c-WV3xAyy0cLUNEV63pAyovujIev9sR"),
                pdf("Bab 16a - Teori Asam dan Basa.pdf", "1CdlRwexV80UbFhmqj2hTNJR498PlL287"),
                pdf("Bab 16b - Kesetimbangan Asam Basa.pdf", "1A42m4X0BJlHkna9MTU3-P14Bk7TEuq8j"),
                pdf("Bab 17 - Kesetimbangan Asam dan Basa.pdf", "1i4zqV4AIdXKj4Tax-4DzcY37texeDYHX"),
                pdf("Bab 18 - Kesetimbangan Kelarutan.pdf", "1KHHByLg3VmxRGP24xo-pYtr4vgh9W9Dv"),
                pdf("Bab 19 - Elektrokimia.pdf", "1OrRN9954mkYDqU8NoXSA4HyRI_NaezUJ"),
                pdf("Bab 20a - Kimia Inti dan Radiasi.pdf", "1iYw20FTSAe5-7EXVxWTKUm_NFX235JXS"),
                pdf("Bab 21 - Kimia Organik dan Biokimia.pdf", "1OEwmvOmwEoZh80Ok4kkZ5qlP4tH0nBZo"),
            ]),
        ]),
        folder("UAS", [
            pdf("KI1201 - UAS II 2023-2024 - Solusi Set 1.pdf", "1M24DvQ851BIAXwlcC173ywjWJ-Zget1_"),
            pdf("KI1201 - UAS II 2023-2024 - Solusi Set 2.pdf", "1QFDr7d7x9ADtt47S1jOiSNoOm86Kpq71"),
            pdf("KI1201 - UAS II 2022-2023 - Solusi.pdf", "1vdf_x0mrgHIdQ8bEINPGR5b3hH1Y8Oix"),
            pdf("KI1201 - UAS II 2021-2022 - Solusi.pdf", "1XU2KIMEoPjbEAGiyFzcdvwxXnIg3lKZw"),
            pdf("KI1201 - UAS II 2018-2019 - Solusi.pdf", "1PB304_XS1Se2Cdu9HjMXvCH6z7JSIrrS"),
            pdf("KI1201 - UAS II 2017-2018 - Soal.pdf", "1yqx-kWjVDsTOYR_ccMsJ4_S2UARzbOSN"),
            pdf("KI1201 - UAS II 2005-2006 - Soal.pdf", "1P1NRZ0yt3yNuUV6GjzcPaVvF7u6a5J3j"),
        ]),
        folder("UP", [
            pdf("KI1201 - UP II 2022-2023 - Soal.pdf", "1UhkvJx-JgRlgVpvB-j9IjmpqA73qir8S"),
            pdf("Pembahasan_UP_Kidas_2A_2022-2023.pdf", "1he9SIgueScx3KPPs4RXn1Obyg_xG0ivH"),
        ]),
        folder("PRAKTIKUM", [
            pdf("MODUL-PRAKTIKUM-KIMIA-DASAR-2A-dan-2B-2025-rev (1).pdf", "1xVkeTnrgJbrcMfQE5nMl8JaIRYewMgw4"),
        ]),
        folder("PPT DOSEN", [
            folder("Catatan Bu Ria Sri Rahayu", [
                pdf("Bab 12 Sifat Fisik Larutan_2023 (catatan).pdf", "1R3mQHdH_MfQExUpNew_TD1SZrVaz93c-"),
                pdf("Bab 13 Kinetika Kimia_2023 (catatan).pdf", "1yiPgIBHi8f52PTJAoQxR78vFUUylOuoc"),
                pdf("Bab 14 - Kesetimbangan Kimia_2023 (catatan).pdf", "1V3xcz3Qsgjush-ClE5kmeVeYax3qrksJ"),
                pdf("Bab 15 Teori Asam Basa_2023 (catatan).pdf", "1uX7i1rFf3XTg7HzH1QxBdcA4vtAzcYHx"),
                pdf("Bab 16 Kesetimbangan Asam dan Basa_2023 (catatan).pdf", "1XNyKY-J6Fq9lqN6kBF-PFc5eazx8LH5B"),
                pdf("Bab 17 Kesetimbangan kelarutan_2023 (catatan).pdf", "1hOMZsaCx63Kfve-EkYnAioL8ZCrX9Piy"),
                pdf("Bab 18 Termodinamika Kimia_2023 (catatan).pdf", "10QobfJlivyjPi0rmsDuBjx7XsEncEws7"),
                pdf("Bab 19 Elektrokimia_2023 (catatan).pdf", "1RYKEhgZAS2s3deCzccWYnRz3i2rMtRnl"),
                pdf("Bab 20 Kimia Inti 2023 (catatan).pdf", "1iaG-URUgo9k8YmA2B055xl2ialXcvsJu"),
            ]),
            folder("Pak Rukman Hertadi", [
                pdf("12-Sifat-Fisik-Larutan.pdf", "1Mnwa7tjP32BaFvXBi1vCfJn5SxhxeGe0"),
                pdf("13-Kinetika-Kimia.pdf", "1uL-J_iDi_NTLAzkBOoYW0DQAsr8_6Lrx"),
                pdf("14-Kesetimbangan-Kimia.pdf", "1FnX9m0gutHwcOZOTZv9N8K2zZjH2mI5Y"),
                pdf("15-Termodinamika-Kimia.pdf", "1RlNkRwb2KtIZR-fZTbueSOEZ1pIn0XlK"),
                pdf("16-Elektrokimia.pdf", "1Be_aWai5dXmZ1ocaCNa5UbU1bNWFGdZ5"),
                pdf("17-Teori-Asam-Basa.pdf", "1XecY7aytKF4_b_KBO9UQ09gPifzmOVeZ"),
                pdf("18-Kesetimbangan-Asam-dan-Basa.pdf", "1hyZ9RIh9gJv5INNringvicUSUWu6Pc_9"),
                pdf("19-Kesetimbangan-kelarutan.pdf", "1Yr5likEZIqLOEnm7ID4CSzxw14i4UwF8"),
                pdf("21-Kimia Organik dan Biomolekul.pdf", "1LDO7HVLIaKN60WtoIWNPDtHOgL6LmBid"),
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
