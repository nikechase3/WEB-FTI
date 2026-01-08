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
        folder("Catatan", [
            pdf("RANGKUMAN UAS MAT.pdf", "1wanje-zG22Wgbrh7jCiCPf8bVNL8VkMR"),
            pdf("RANGKUMAN UTS MAT.pdf", "1fsbGfSoPqg77x4qTa5iLYERx-JEGqXk9"),
        ]),
        folder("Kumpulan UAS", [
            folder("UAS - 2010-2017", [
                pdf("SOLUSI UAS MA1101 Tahun 2013.pdf", "17BFVaK6Z_VQX7dAQy5pNsVB0QNKfLE6W"),
                pdf("SOAL DAN JAWABAN UAS MA1101 2010-2017.pdf", "18KSyJPah31-G4CbdQaokyCnWzBzrI8hb"),
                pdf("SOAL UAS MA1101 Tahun 2010.pdf", "1Z7rUU66ElD8RcFvAtHrRq0Kzc0A1ClJv"),
                pdf("SOAL UAS MA1101 Tahun 2015.pdf", "1yckq-Uhf4t1Q-cQA3JaVsxM9jrY_LYSK"),
                pdf("SOAL UAS MA1101 Tahun 2016.pdf", "1JTSapCIbf2r_dZzbiYTewchk6HbxomlT"),
                pdf("SOAL UAS MA1101 Tahun 2017.pdf", "1I6WXDISUSPDNEKSxI2gDHJ9Fhfso-WBx"),
            ]),
            folder("UAS - 2018", [
                pdf("SOLUSI UAS MA1101 Tahun 2018.pdf", "1nMF31xX3tXJv2H_sMzt6NsHPICvKeDlz"),
                pdf("SOAL UAS MA1101 Tahun 2018.pdf", "1i5-WNZF91pLsAYA2ZCa9BPEY0qOjxAFu"),
            ]),
            folder("UAS - 2019", [
                pdf("SOLUSI UAS MA1101 Tahun 2019.pdf", "1BMr18PRLdMrS_1XGSXJV1jl2MIaY9d1s"),
                pdf("SOAL UAS MA1101 Tahun 2019.pdf", "1phkVH2QBBmLpqhZQrrQbaB6frjCT-CId"),
            ]),
            folder("UAS - 2020", [
                pdf("SOAL UAS MA1101 Tahun 2020.pdf", "17i0FfVuhzABWRs2fiVlB3BdXuHfoPuXe"),
            ]),
            folder("UAS - 2021", [
                pdf("SOAL UAS MA1101 Tahun 2021.pdf", "1TylJtXpoFiuDDdgh-4w22NlguL12Eqyw"),
            ]),
            folder("UAS - 2022", [
                pdf("SOLUSI UAS MA1101 Tahun 2022.pdf", "1F5Fj68vIlBY4bt4BGCeddEpAk7wJQuEQ"),
                pdf("SOAL UAS MA1101 Tahun 2022.pdf", "1UcC-vQq0BTI3GtoqQlEHCv8JPhNd2ryQ"),
            ]),
            folder("UAS - 2023", [
                pdf("SOLUSI UAS MA1101 Tahun 2023 Sesi 1.pdf", "1f0xAmwPXRDNlAFu06ZpLgMsd1v8sx-d9"),
                pdf("SOAL UAS MA1101 Tahun 2023 Sesi 1.pdf", "1tCDSPilvh5OpIzojHEG576yt-pMi-Wzr"),
                pdf("SOAL UAS MA1101 Tahun 2023 Sesi 2.pdf", "16Ub64rEc1iJ7KxLBQngfWnJBfgexfNG7"),
                pdf("SOLUSI UAS MA1101 Tahun 2023 Sesi 2.pdf", "18Vc-jtOYFyReZNnWOehb2Ey9zXokaMJW"),
            ]),
            folder("UAS - 2025", [
                folder("Mockup Dosen FTI 2025/26", [
                    pdf("Pembahasan Soal Latihan Bu Sri.pdf", "121Ucdwn17bARUA5pFnsdHDudzot1wLiS"),
                    pdf("Pembahasan Soal Mockup Pak Barra", "1_rp0Ft9XNinOkCyIgDL0epjwHZ4P9PnR"),
                    pdf("Mockup 1 Pak Theo", "1ij7VseQkzh93LzlZvXFPxFBGPzPo-h0o"),
                    pdf("Latihan Bu Sri", "1CQqvlrFm4pi2YcKBe5vmnu9ND0EHb1vL"),
                    pdf("Mockup Pak Barra", "1B7phGiN-nKRL_Z3_Lx-469c9QqexjKfT"),
                ])
            ]),
            folder("UAS - 2024", [
                pdf("Sesi_1-UAS-MA1101-2024_Soal-Solusi-SkemaPenilaian.pdf", "1zfn5Ldi5SjS4lvusQGeYxqbYgJ1zv-uX"),
                pdf("Sesi_2-UAS-MA1101-2024_Soal-Solusi-SkemaPenilaian.pdf", "1pAJBjmg5vEZlMAn0XyYoBFn8N1ZHlfGN"),
                pdf("SOAL UAS MA1101 TAHUN 2024/2025 SESI 2.pdf", "1b4T4XWjB-hZ64Dgquy6pLCSy_0tcrDYM"),
                pdf("SOAL UAS MA1101 TAHUN 2024/2025 SESI 1.pdf", "1rWoi6MW1H4FufV0Z9ZpQPMTV-FI9ou0s"),
                pdf("SOLUSI UAS MA1101 TAHUN 2024/2025 SESI 1.pdf", "1XgSxFC9UvvYXeX_sZjogSliJM3rxGyP5"),
            ]),
        ]),
        folder("Kumpulan UTS",[

            folder("UTS - 2010", [
                pdf("SOAL UTS MA1101 TAHUN 2010.pdf", "17UMtk4NbTrdFtdm4UDe0HMRvuBjNUKb9"),
            ]),
            folder("UTS - 2011-2019", [
                pdf("SOAL DAN SOLUSI UTS MA1101 TAHUN 2011.PDF", "182aA9DuOaChKR9mWh7mqGeqMu6Exkwh1"),
                pdf("SOAL UTS MA1101 TAHUN 2016.pdf", "14tfhRO4_sFdH5vOO2iqoO5ymm15KrWiQ"),
                pdf("SOLUSI UTS MA1101 TAHUN 2019.pdf", "13o-RJGx8c7L8A2bm8TyH2k9foMek78Cr"),
                pdf("SOLUSI UTS MA1101 TAHUN 2017 BAG A.pdf", "1nh2nDrf_mJhoJ-Bs_OCbugWshC0rlQgj"),
                pdf("SOAL UTS MA1101 TAHUN 2011-2019.pdf", "1P5fdim10OZsbKR_XfVlzWfLCv8pHhWv_"),
            ]),
            folder("UTS - 2020", [
                pdf("SOAL DAN SOLUSI UTS MA1101 TAHUN 2020.pdf", "1Q5nIDIH5PybbImfZbao-BQyzqgypl4eT"),
            ]),
            folder("UTS - 2022", [
                pdf("SOAL DAN SOLUSI UTS MA1101 TAHUN 2022.pdf", "1Dk8TzGVkiZTjRynvy_LYIHJub2bRasxC"),
                pdf("SOLUSI UTS MA1101 TAHUN 2022 SESI 1.pdf", "19qolOscBQelJnCVhaJ6reME6fNwVec87"),
            ]),
            folder("UTS - 2024", [
                pdf("SOAL UTS MA1101 TAHUN 2024 SESI 1.pdf", "1DwKvs8wCtjjCX2pbtqh33eVSZsjSms44"),
                pdf("SOAL UTS MA1101 TAHUN 2024 SESI 2.pdf", "194hc5_X-99ffDzDnndDgqbHMNG7m7XSR"),
                pdf("SOLUSI UTS MA1101 TAHUN 2024 SESI 2.pdf", "1NcQwI7FdizRkv5LgePJbErJ2Tdx3AzEZ"),
                pdf("SOLUSI UTS MA1101 TAHUN 2024 SESI 1.pdf", "1hdcgkYm7c63REugvVm0yol8SpEsi063O"),
            ]),
            folder("UTS - 2023", [
                pdf("SOAL UTS MA1101 TAHUN 2023 SESI 1.pdf", "1TKXGvVADxUVH_k3vC4IKzfDP--q-t3qx"),
                pdf("SOLUSI UTS MA1101 TAHUN 2023 SESI 1.pdf", "1t2p4lyWN1yv-A8KsGTwkzPBoQK95-Qt4"),
                pdf("SOAL UTS MA1101 TAHUN 2023 SESI 2.pdf", "1IjPLHg5L4iHqMrypFC37ONAvJXj8nrHe"),
                pdf("SOLUSI UTS MA1101 TAHUN 2023 SESI 2.pdf", "1HRpsTPGOrS0NbT13gm7nFfVRmbMmTffC"),
            ]),
        ]),
        folder("Kumpulan UR",[
            pdf("Salinan MA1101 - UP 2021-2022 - Solusi.pdf", "1srPG3iPGNK6PzNPSOnZiBoLSip3PZVsi"),
            pdf("Salinan MA1101 - UP 2014-2015 - Solusi.pdf", "1jl8vJZZcUIFJ6QhmGPhuLkrUV88Yy4OQ"),
            pdf("Salinan MA1101 - UP 2021-2022 - Soal.pdf", "1ryNOwjlR4UdtA6wCtb9czmENbpBvvJuc"),
            pdf("Salinan MA1101 - UP 2014-2015 - Soal.pdf", "1p1P9gk0T25jQozkJrK6FfL65f6EeNfB2"),
            pdf("Salinan MA1101 - UP 2010-2011 - Solusi.pdf", "1R58nCX8vq4P9Qu8-aILiLwjrzDzlZYK4"),
            pdf("Salinan MA1101 - UP 2013-2014 - Soal.pdf", "1THlUC3CNJTUjbpRxjFHv2Zjz50fEK__M"),
            pdf("Salinan MA1101 - UP 2010-2011 - Soal.pdf", "1KBLBoiaicQpP_uRuqL8GErxmmNaoQ6hb"),
            pdf("SOLUSI REEVALUASI MA1101 TAHUN 2022.pdf", "1EEHeu1BKKrvv3pjXHRIp9Xnt0J7QBZom"),
            pdf("PEMBAHASAN REEVALUASI 2023-2024.pdf", "1RDmeAaGtXc-h4TpV45vzkidIp6zDx8uQ"),
            pdf("14 Solusi Ujian_Reevaluasi_MA1101_2023_2024.pdf", "1HZSx93U6i_82DkFw_Lu0zDwWF5mCOClL"),
            pdf("13 Soal Ujian_Reevaluasi_MA1101_2023_2024.pdf", "1HY_dhtCekRcYoDu5SC-wlMG1sdgyxlJR"),
            pdf("Soal UP UTS MA1101 Tahun 2023.pdf", "1EDEerZ9kJD_aF86n5YtxGGyMuSZodHEA"),
            pdf("Solusi UP UTS MA1101 Tahun 2023.pdf", "1E5aP1_rPaQpgr2_bPpeebhyKhTl3fGZL"),
            pdf("Soal UP UAS MA1101 Tahun 2023.pdf", "1DpwujXmTj2XzurQdfVYOEad4cKKn-Ofu"),
            pdf("Solusi UP UAS MA1101 Tahun 2023.pdf", "1uLDSnmVwUqN5uZjpo5_gXN8pPy4VF5Di"),            
        ]),
        folder("Kumpulan Tutorial", [ 
            folder("Tutorial 25", [
                pdf("Tutorial Bab 4.pdf", "10V9BkQjql4uBbF-n08aFgn-r_v396wSL"),
                pdf("Tutorial Bab 1.pdf", "10lK9q7LlY7HJ2Ljjcve4gfwbksW0Pa_A"),
                pdf("Tutorial Bab 6.pdf", "11vdLIiumAmpipTFfdEujLLqbXbPmbDlW"),
                pdf("Tutorial Bab 0.pdf", "17bTcVZ1S-U6oZdokTdnuZ-ojG5ur2tgn"),
                pdf("Tutorial Bab 4.pdf", "1H7Uhzsi5akezTPTGMn3e8vgSukwosbig"),
                pdf("Tutorial Bab 2 Bagian 1.pdf", "1e-DA3p_wcbX5SQnVpPOSWDMd0fjJ_6aH"),
                pdf("Tutorial Bab 2 Bagian 2.pdf", "1g14N_eApdOVEIE6DMzSLZQo1MqvYwBmN"),
                pdf("Tutorial Bab 4.pdf", "1h7ik7T63GHeBLiRVFmXPTLH1o1EQ9djP"),
                pdf("Tutorial Bab 5.pdf", "1hKDKL5N0cNdM7GgqwkSAu6dcRsoEPNHl"),
                pdf("Tutorial Bab 3.pdf", "1ycFRNwxaGwfuJWHL46-stPtATFppxNDo"),
            ]),
            folder("Tutorial 24", [
                pdf("Tutorial_8_MA1101_Matematika_I_2024.pdf", "1MHzrR8huq8WUgYJxkhRLPk-Z9rniFvlG"),
                pdf("Tutorial_7_MA1101_Matematika_I_2024.pdf", "1phb1QA5ghLB1VKDWm-9VqfZFmJXqXncx"),
                pdf("Tutorial_6_MA1101_Matematika_I_2024.pdf", "1mYUxhitMmdGLrSruGZ3N54ETlaiaBTtw"),
                pdf("Tutorial_2_MA1101_Matematika_I_2024.pdf", "1en-PpbbbDGYGdY4eO8Dvs1w8Bs3-9vt2"),
                pdf("Tutorial_5_MA1101_2024_2025.pdf", "1fPL5wkHnEGd8Uu3N66U8WFStZHQsvsFC"),
                pdf("Tutorial_4_MA1101_Matematika_I_2024.pdf", "182_B5JM5FGMOLvUCxkj8Ax--fDIJCjGs"),
                pdf("Tutorial_3_MA1101_Matematika_I_2024.pdf", "1TOep5fgXdNtmJcPWXDBOAUeP0Jwypvpg"),
                pdf("Tutorial_1_MA1101_Matematika_I_2024.pdf", "1iGkY2ADbKCY31Fd0sOQWp3qIt0gPdP3L"),
            ]),
        ]),
        folder("Project Mini",[
            pdf("25. Contoh Laporan.pdf", "1UY4XKEf49R-Y5t2jLzQLvXiLdoth2OMO"),
            pdf("25. PROYEK FTI 2025.pdf", "1TaglX7v2zMYqsmlpu4jboTabELPvJKZf"),
            pdf("24. PROYEK MINI.pdf", "1hW6UN740-Xr7pg_lmb-B-mB2KZx1Omrn"),
            pdf("24. CONTOH LAPORAN PROYEK MINI.pdf", "1ZN2fszSvwDmBbuVLOPM2SnY0SB6D_MoS"),            
        ]),
        folder("KBF", [
            pdf("Salinan Pembahasan KBF 3 MA1101 2023.pdf", "1KiS5X1v3bR6IWi0ikW5P1aYjmFCib2Tz"),
            pdf("Salinan Pembahasan KBF 4 MA1101 2023.pdf", "1ZPtpbpwMRLpKGX1NA6XLIX9Kd6VTRyZ6"),
            pdf("Salinan Pembahasan KBF 2 MA1101 2023.pdf", "1AA86pVyI8HEys3IxQMktvpebo-cQMH07"),
            pdf("Salinan Pembahasan KBF 1 MA1101 2023.pdf", "1iSRPV0aCLAY0BHDb5vy-8DUNASDweIQM"),
            pdf("Salinan KBF 4 MA1101 2023.pdf", "1b9NfaK-z8OPHWCnjfHkOfJqK7CzaAqt8"),
            pdf("Salinan KBF 3 MA1101 2023.pdf", "1xA3mnJU1DneOh0EyvPRNxaEmU5hF9aLJ"),
            pdf("Salinan KBF 2 MA1101 2023.pdf", "1NBUNagKsFUUbjsSJD1K2aJvt29mcWEt1"),
            pdf("Salinan KBF 1 MA1101 2023.pdf", "1o4XtgZXocFfb5Zrlv5MqQm7X4ZpMMbJ_"),
            pdf("Solusi KBF 2 MA1101 FTI Tahun 2024.pdf", "1SKREFj2SlI3azNH10S97vgDNVss4JXBC"),
            pdf("Solusi KBF 2 FMIPA Tahun 2024.pdf", "1LZXhXckKia6N3pi503kzCJm_LFQNwujA"),
            pdf("KBF 2 MA1101 FTI Tahun 2024.pdf", "1Qy5qliO4MkVqoD70G2AkFWrSgVR-i0h-"),
            pdf("KBF 2 MA1101 FMIPA Tahun 2024.pdf", "1JmQCNlRD0uVeD3zlXFtQoL9SOMwrVLjB"),
            pdf("KBF 1 MA1101 FMIPA Tahun 2024.pdf", "1shJdsvF34HnhPxvHDEI1sP6y61PL1ZW4"),
            pdf("KBF 1 MA1101 FTI Tahun 2024.pdf", "1O3IXFzS2mdjHcfdd5fJfj6gipHJRtk31"),
        ]),
        folder("SCL",[
            pdf("1-SCL - MATEMATIKA (Operasi Bilangan, Pemfaktoran, Lingkaran, Persamaan Garis, Pertidaksamaan Linier).pdf", "1T5YoVz3Xgz1UmrEDcFOpBDuboJnfjHUb"),
            pdf("2-SCL - MATEMATIKA (Pertidaksamaan, Mutlak, dan Fungsi).pdf", "18rzNr5UBX2UMqbUIfd4u41JL4UyqIBza"),
            pdf("3-SCL - MATEMATIKA (Operasi Fungsi, Komposisi Fungsi, Fungsi Trigonometri).pdf", "172dmVJ7B5JPCB7kAyhGN30ZWgfFEdNKP"),
            pdf("4-SCL - MATEMATIKA (Limit).pdf", "10qRxI-68Rl3lpTIeHPNqA4leDBiZ6wBh"),
            pdf("5-SCL - MATEMATIKA (Turunan 1).pdf", "1wTMdAWPTR2LvBIEnI8LnyP4EOmZKW1Ap"),
            pdf("6-SCL - MATEMATIKA (Turunan 2).pdf", "1Nua8wk6Z3jF3P845zF9LG1QQl0G9fwk_"),
            pdf("7-SCL - MATEMATIKA IA (Aplikasi Turunan).pdf", "1xlltcI49gbT9fOnjv8oFkLJohIYiHvyP"),
            pdf("8-SCL - MATEMATIKA (Anti Turunan dan Integral 1).pdf", "1F6rW09pSsMrEI-gWUDYEtk6bDvgw0Hm0"),
            pdf("9-SCL - MATEMATIKA (Integral 2).pdf", "1vmYcWwYkaBm2J-KT1HahjIL6RQoLfo-O"),
            pdf("10-SCL - MATEMATIKA (Aplikasi Integral).pdf", "1aeOcD01aaNLjinvzNv9KxhpIb8cYruzG"),
            pdf("Modul 11 Rev1.pdf", "1Nh538IpzKlUX3LW4lMCyHVWLdyaP2ajX"),
        ])
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
