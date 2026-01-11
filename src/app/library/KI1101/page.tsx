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
        folder("LATSOL", [
            pdf("1667465607128_Soal-Kuis-1-KI1101-Kimia-Dasar-A1-semester-1-2022-1-1.pdf", "1avaaSBmmAxxOHYe616X9A5KOcNdgdsmx"),
            pdf("Tugas Kelompok 4_Struktur Atom.pdf", "1aOcrKbvRyRSfwT4zq-D_WH8f03_HGcty"),
            pdf("Tugas Kelompok 3_Energetika dan Termokimia.pdf", "1aIR1B9a59DeJ-vhq-vPO0epsiRWG9vu8"),
            pdf("Tugas Kelompok 2_Stoikiometri.pdf", "1aBMY11Jvu7UJYP85zpE4BC3ivNo3Z7l1"),
            pdf("Tugas Kelompok 1_Tata Nama Kimia.pdf", "1a6n157uFmz4F8EQVP8no6UWb-DJQnKEa"),
            pdf("Tugas Kelompok 6_Gas, Cair, Padat, Interaksi Antarmolekul.pdf", "1a-UZP4cUCVEttVFJOmUK-tk82E_y9e2_"),
            pdf("Tugas Kelompok 5_Ikatan Kimia dan Senyawa Kompleks.pdf", "1_ysOXLmxPNhlmWDxB_GWa_EyhQR0tWB3"),
            pdf("K01_E_Interaksi Antarmolekul.pdf", "1_w0G5FVr4DRPh8pdBW12Tu1WWbvN4q3Z"),
            pdf("K02_E_Gaya Antar Molekul.pdf", "1_oDL7_Btpjg45-uctVauOm1BTzHEgOgc"),
            pdf("K02_E_Soal Struktur Atom.pdf", "1_lhRF44kmS8ApBD8V_KA7IeYxYTAh5Ec"),
            pdf("K03_E_Ikatan Kimia dan Senyawa Kompleks.pdf", "1_ivFKPLV6H2nzUuX7XAZT-TCRoXW5BR8"),
            pdf("K03_E_latihan soal gas diagram fasa, wujud zat, interaksi antarmolekul.pdf", "1_iRSHrw-16GOfbdvH9lktLe89L23IVmO"),
            pdf("K03_E_Struktur Atom.pdf", "1_huD45xOiw19MCGCDy_M0KYNql6jNDlI"),
            pdf("K04_E_Sifat cairan dan padatan.pdf", "1_gM8s4YXKkWVMoQm3MFABs-opcoZNhOU"),
            pdf("L01E - Interaksi Antarmolekul.pdf", "1_cXx1DpebJ9xb9FoGTbNhKmCbFHKZxfa"),
            pdf("L02E - Gaya Antar Molekul.pdf", "1_c1AoexxnApxQj7BpFTsqtqwQFCsNFwf"),
            pdf("L03E - Soal Struktur Atom.pdf", "1_ZHLDvfEtv5xW5YTkxXYoJmTpBLb3CLK"),
            pdf("L04E - Ikatan Kimia dan Senyawa Kompleks.pdf", "1_Yg9crJ8Nn6oNB3Agvyvp5iXAzmb6bza"),
            pdf("L05E - Latihan Sal Campuran.pdf", "1_X4iJ3NTEKd436qVA-aWwAkWGBmZClZZ"),
            pdf("L06E - Struktur Atom.pdf", "1_Wz8x6WGS7w9mNUOMkPNdFIll_eemU8H"),
            pdf("L07E - Sifat cairan dan padatan.pdf", "1_OL01otvRcCKpbYI7iCHKGuorgFoJPvS"),
            pdf("L08E - Review UAS 2020.pdf", "1_JMXbV1RtYnbn_EIidhlBwCRP1gchl9_"),
            pdf("L02D - Stoikiometri.pdf", "1_HxCjswwsqY_l-B8wkya2EAC1tpEzPR8"),
            pdf("L04D - Struktur Atom.pdf", "1_Hssa7je0D_mxTj67hrxGz2HWsyVetID"),
            pdf("L05D - Ikatan Kimia dan Senyawa Kompleks.pdf", "1_AzAotyzvQEiIQ7ED-0LaQHTjAFgESzm"),
            pdf("L06D - Gas, Cair, Padat, Interaksi Antarmolekul.pdf", "1_7sVLLcmsKYkbzUrNwIuC6bZMw3u4LGE"),
            pdf("1. Latihan Soal Struktur Atom.pdf", "1_3qxzlBY_KkQfIpyGePJkLbAUnbp8VDJ"),
            pdf("2. Latihan Soal Ikatan Kimia.pdf", "1_0gtTW12ImgXNu58TMdzgu4DWtMVydqD"),
            pdf("3. Latihan Soal Kuis Cirebon.pdf", "1Zzw-BrYwVtDqN1dh_YsYEgIVqQjsKmVR"),
            pdf("4. Latihan Soal Gabungan.pdf", "1ZwlaVw0ybq2N-N6pZPVXaOO8thSXwPBO"),
            pdf("Latihan Stoikiometri Kidas - Part 1.pdf", "1Zs2jFQvNqQIjlOS7sGZOj_7dHVeg9JQd"),
            pdf("Latihan UTS Kidas - Part 1.pdf", "1Zq9EgnBHtD_9FGQWEzCF_UQXQs_BH_Dc"),
            pdf("Latihan UTS Kidas - Part 2.pdf", "1Zm3cQ5oYP5k8Tk-GWYVjcsCyeUro9qDH"),
            pdf("2024-KI1101-KimiaDasar1-LatihanUAS.pdf", "1ZlnLLSvn7HoGt5hphArvFL_4-rKRUcji"),
            pdf("Latihan Soal Ikatan Kimia-1.pdf", "1ZjvRn_-YQCbBMzTZK8LC880SRy2zUEvz"),
            pdf("Latihan Soal Ikatan Kimia Tipe 1-1.pdf", "1ZjOEZCrmPKddv_HC7Dife2AIuNlPVrdz"),
        ]),
        folder("PPT Dosen", [
            folder("PPT Bu Deana Wahyuningrum", [
            pdf("Bab 1 - Unsur, Senyawa dan Sistem Periodik Unsur.pdf", "188sOzgdYfIrT5UpDr4BUeHSsOkoCFLEr"),
            pdf("Bab 2 - Stoikiometri dan Kajian tentang hubungan kuantitatif dalam reaksi kimia.pdf", "1otS9EEUIckk-EBNXt7xt0QYKE3Fy6hG5"),
            pdf("Bab 3 - Energi dan Termokimia.pdf", "1M7ckprqQl4xY5BAAljfCoy1DiYrAhCJd"),
            pdf("Bab 4 - Struktur Atom dan Keperiodikan Unsur.pdf", "1RPuW2WxptJNsHBXhWpO4n7-zfxN8pyrC"),
            pdf("Bab 5 - Ikatan Kimia dan Struktur Molekul.pdf", "1eSOrj-X6C7QwMZ-VkdEDPiFfwhDFSJwR"),
            pdf("Bab 6 - Struktur Senyawa Kompleks.pdf", "1VnvwWxyz2WxOnRvCrP7JyJyC7PAVE0TJ"),
            pdf("Bab 7 - Gas.pdf", "1KRupxIfWuFUbpPdEptqYR6PAOf6ifSx-"),
            pdf("Bab 8 - Sifat Cairan dan Padatan.pdf", "1IT_BuEm074IyBJ2JE3Q4movLeRqyn8vQ"),
            pdf("Catatan Penamaan senyawa kompleks.pdf", "1NjDkFcuQqm-hFlZPX74DCGgPSbxeFMcd"),
            pdf("Catatan Persiapan UAS KI1101.pdf", "16CAcF7Ue7iOYQr3uIu_NRj9IQLTimGEQ"),
            pdf("Catatan Persiapan UTS KI1101.pdf", "1gmIOWHX3UdBawWoxWVNoJ3gXDJbWXXXL"),
        ]),
        folder("PPT Bu Elvira Hermawati", [
            pdf("chapter-gas.pdf", "1-Q7_mIdzkY7RSUbc0lKHc43IVam2bJPb"),
            pdf("Ikatan kimia[1].pdf", "14gCZk1KjiDw_2zfAYoaxukwr-4ZgF1hz"),
            pdf("Teori Ikatan-IMP-1-2022[1].pdf", "1CsigUmjKyC_4ZeCS2Ly3kYxUWkEvh2XD"),
            pdf("week1-Unsur-senyawa-dan-tabel-periodik-2023.pdf", "1stJ7W8P1aj4ei4hotBZd__3Xrdg-dHdj"),
            pdf("week2-Mol-dan-Stoikiometri-chp3-slide.pdf", "1YiEyDkw9XYaRUDwlOFnRQMlxepkN1dz0"),
            pdf("week3-Stoikiometri-Larutan-reaksidalamair-chp4---Copy.pdf", "1KyNhfeoJaErWtwmwCu0rE5ie9wlwdiVV"),
            pdf("week4-Redoks-dan-Stokiometri-chp5.pdf", "1g2AZmsYYtEGPZEJHLMs9Rv3hu03QDuqz"),
            pdf("week5-Termokimia-chp6.pdf", "1078BvBzvQqXWeagpBYujWhwoNWL_kzbi"),
            pdf("week6-struktur atom-part2.pdf", "1ss6pN9_bg2sjErGSYZLnoO-PYw0TKLQ4"),
        ]),
        folder("PPT Bu Irma Mulyani", [
            pdf("2. Mol dan Stoikiometri_Catatan.pdf", "1fLIrAK6myiiThTPqc217EwIHt_hFTH9N"),
            pdf("2.Mol dan Stoikiometri_Latihan.pdf", "1GNnreurKiApV6GV4S1lbNDQJuGWW5kUo"),
            pdf("3. Reaksi Kimia Dalam Larutan_Catatan.pdf", "1c_s2QWXMEGQODy3P2i1S3iuBd9prKtgy"),
            pdf("3. Reaksi Kimia Dalam Larutan_Latihan.pdf", "1GrsG23-PspoibrRAjwpWnUaoERwiTreZ"),
            pdf("4. Reaksi Redoks_Catatan.pdf", "1qeSnyLIXH7yUDWZCbk9IbPGxW7sikNot"),
            pdf("4. Reaksi Redoks_Latihan.pdf", "1dihobIvjEgTETxmH1jjPKo0GYabWnAyY"),
            pdf("5. Energi Perubahan Kimia.pdf", "1dCJDyxJmvQ7UU_9-Mdac61rKHfIKWfQs"),
            pdf("9. Senyawa Kompleks.pdf", "1uMHqtxsxE_gRPvS4Cc9vawAR5ub8wCF-"),
            pdf("11. Gaya antar molekul, cairan, padatan_Catatan.pdf", "1W90cdeV4S-ygJhJeuU0V_iuBM5W_u5tC"),
        ]),
        folder("PPT Bu Made Puspasari Widhiastuty", [
            pdf("1. Unsur, Senyawa, dan Tabel Periodik.pdf", "1B2IPrwRDSKj-bW8QLiXsmH_V5Oo_IIMX"),
            pdf("2. Konsep Mol dan Stoikiometri.pdf", "1RfIMN8PtXTN4zz27u9U6_ZC5z7uNXJ_w"),
            pdf("3. Reaksi redoks.pdf", "1Cv6z_KiGORQgEwM86YFdele3tt7Jtbuz"),
            pdf("4. Reaksi dalam larutan.pdf", "1nZ4JAJNEXS8u-QMZ-7qbzBtS6XYkasm2"),
            pdf("5. Energi dan Perubahan.pdf", "1gGglEJNAx5KMsf1hkhkRHCcGqQ7wU2T3"),
            pdf("6. Struktur Atom.pdf", "1At7kkwGF_wZl4K7_Pu4_FS-1tCjxi5_l"),
            pdf("7. Dasar-Dasar Ikatan Kimia.pdf", "19HdYjln5kNZxOKHaT9l4ChWmf5DNhVhW"),
            pdf("8. Teori Ikatan.pdf", "1b0RtJ03pj6dbfOXUoIo5CdoyKaGXTdww"),
            pdf("9. Kinetik Gas.pdf", "18wp3yxRTESdU-Bd1XVB6FnshnaPWM5A1"),
            pdf("11. Gaya Antarmolekul dan Sifat Cairan.pdf", "1W_dfofR7-94_HPxXufXoYYI_fDwXlGKf"),
            pdf("12. Teori Medan Kristal.pdf", "1npiEEPV_zvS8AtV06cS-sD7Nua3QYKGY"),
            pdf("13. Padatan.pdf", "1NdsFXAghC89TRojl2IzY4YiLWvK12cmD"),
        ]),
        folder("PPT Pak Indra Noviandri", [
            pdf("1. Unsur, molekul dan sistem periodik.pdf", "1UTdByCUVDq1nbHCp_SgzwIf-IEC5iYpm"),
            pdf("2. Stoikhiometri.pdf", "16wYrPttcUdpzKblBKCP9UpLUWUTwY-eN"),
            pdf("3. Reaksi dalam larutan.pdf", "1u4jnUR4DXiFcuJ6ODfsjCFZXuU29W2Uf"),
            pdf("4. Termokimia.pdf", "1jOZ08PgfWp1oMZmSfcp9sLj67bEveJm2"),
            pdf("5. Struktur Atom.pdf", "10TvkIRmN6zHZ_7Ymp5BhzteEXQpIhDA6"),
            pdf("6. Sistem Periodik.pdf", "1b0PoEO-K0aAMw9ymVAhOjWbkbe36lj9R"),
            pdf("7. Ikatan Kimia-Konsep Dasar.pdf", "1SzSlMlkDS3EBWk0frNHETPEtOLfeYmN8"),
            pdf("8. Ikatan Kimia-Konsep Lanjut.pdf", "1DEFQcM5eW4UTJ6J-q6Ti3sxflhgcZkJi"),
            pdf("9. Gas.pdf", "1nyfjd0u7yUYVLQW8yPM2GTFKhizgWh_l"),
            pdf("11. Gaya antar molekul.pdf", "1dfTd7u9Nt0_HWAStCfGDcTOYz2vhcAW-"),
            pdf("12. Senyawa Kompleks.pdf", "1j9iLB4I23lQDbd8YbuFLLwkJslNfIN5q"),
        ]),
        folder("PPT Pak Rukman Hertadi", [
            pdf("1-Unsur-senyawa-dan-tabel-periodik.pdf", "1UvqhWLw8bCG3DSSJTz2BDqZcddektcEB"),
            pdf("2-Konsep-mol.pdf", "1oB-aHol_ZwmrCSENPVQfxPl6j6ILkq3e"),
            pdf("3-Stoikiometri-larutan.pdf", "1DkGQ8EMUkfSVllYCxxCnErS3HKOQaY5f"),
            pdf("4-Redoks-dan-Stoikiometri.pdf", "1DsUfexU5yTLYkRylfH-QvQOkRv12ndCJ"),
            pdf("5-Energi-dan-Perubahannya.pdf", "1quSs5Wxq06l-vTE1Bhqy9iNhj8sa2m5r"),
            pdf("6-Struktur-atom.pdf", "16G7sa3FsWHIlFo5rm39IC4aAox65fQFn"),
            pdf("7-Ikatan-Kimia.pdf", "14qnNfZJ_Rj6gKxqgkSonRlZp9L7mPoti"),
            pdf("8-Struktur-Molekul-dan-Teori-Ikatan-Kimia.pdf", "1VaUuZR9Eqf186KApK6MrWDjmLbQVqVwg"),
            pdf("9-Struktur-dan-Kompleks-Logam.pdf", "1UNShNNvwM1cJKFhMZp7W1eNzgDOxqVue"),
            pdf("10-Sifat-sifat-gas.pdf", "1lN0ONYiGVx3O5IVPdRv-6_SLkK7hPo9E"),
            pdf("11-Sifat-cairan-dan-padatan.pdf", "1aN3B7iBZS8YIgDyyFS0pYjcEUJRh4ndD"),
        ]),
        ]),
        folder("UP", [
            pdf("KI1101 - UP I 2022-2023 - Soal.pdf", "1QCiWo9NiBTR35kp9IsCRCCFj76NOLcoJ"),
            pdf("KI1101 - UP I 2021-2022 - Soal.pdf", "1Ni79NixG-uIehSs9GoH-26xUJ5--kgLx"),
        ]),
        folder("RBL", [
            pdf("K07_KEL06_RBLKIMIA", "1avNe5AC1nSbWWmyWGUY4o8SfJLJDzxb2"),
            pdf("K12_KEL06_RBLKIMIA-2 (2).pdf", "1Yo5jsN0r6wpkdyvwGsosHg0IMw7tA_0-"),
            pdf("INSTRUKSI-TUGAS-KIMIA-DASAR-I-Th-20242025-lightbackground.pdf", "1LuE0Ia8HVKklHZ1rLXo_z4wPJdEaYPhW"),
        ]),
        folder("LABORATORIUM", [
            pdf("ppt safety induction lab kimia dasar.pdf", "1FhZ14ixktI2flppo-WKWOxP5AkS0sFiQ"),
        ]),
        folder("KUIS", [
            pdf("2024 KBF2 KI1101 Kimia 1A .pdf", "1m9b0AYdHGL38AoiyOtPhU-AjKQT_uZ8D"),
            pdf("2023 Jawaban KBF 1 KI1101.pdf", "1WDOFpR1K_IH2Eb7lig9A7gRtDxMlWPsl"),
            pdf("2023 Jawaban KBF 2 KI1101.pdf", "19N7SXAf6GWBz32VlDDsTdY4g1n_FZgIi"),
            pdf("2022 Jawaban KBF 2.pdf", "1L7dZtmgB4kTm4nNrKs36aDjnD6pORUqg"),
            pdf("2022 Jawaban KBF 1.pdf", "1Px6KDMAGn1BAOReKoxZxonGnLaPIGWer"),
            pdf("2021 KBF I Kimia Dasar.pdf", "1Sc2Y8jaVxk1LicA_me0Y4d-O1VaIoQu2"),
            pdf("2021 KBF II Kimia Dasar.pdf", "1gUvKNfd9Q_tV9ixPXQ3wKdzaPdyEUmZ-"),
        ]),
        folder("CATATAN", [
            pdf("KIMIA SMT 1 - UAS.pdf", "1aZzNZ0dCzTx1SKWDh1VYBjWQOomv7g2L"),
        ]),
        folder("UTS", [
            folder("UTS - 2018", [
                pdf("KI1101 - UTS I 2018-2019 - Soal.pdf", "1X1PtjW-Iyx5dCda6hAqyZOhbig1TeVo_"),
                pdf("KI1101 - UTS I 2018-2019 - Solusi.pdf", "1X0i_fXyuv0D4xwaHI5HQgR1rKhgYgMA-"),
            ]),
            folder("UTS - 2019", [
                pdf("KI1101 - UTS I 2019-2020 - Solusi.pdf", "1X0DIwXicC5DHh1Zi5bj7i0oi3xWp4Mrj"),
                pdf("KI1101 - UTS I 2019-2020- Soal .pdf", "1Wx0Ns0ajKdtVlGBlcibKLoONzA9F3kgZ"),
            ]),
            folder("UTS - 2020", [
                pdf("KI1101 - UTS I 2020-2021 - Soal.pdf", "1WulamI3agdty-41NZrXEbPenoFXyoONx"),
                pdf("KI1101 - UTS I 2020-2021 - Solusi.pdf", "1WkDZP-EC_h24qCQezX7U_kkdbhrhBlkJ"),
            ]),
            folder("UTS - 2022", [
                pdf("KI1101 - UTS I 2022-2023- Soal .pdf", "1We0-m6C-gevccgo5PU8Ng5VALs6ka5Mf"),
            ]),
            folder("UTS - 2023", [
                pdf("KI1101 - UTS I 2023-2024 - Solusi (Sesi 1).pdf", "1WZnsBHQZxkff5ZTWED5APTRZhzbK4tlT"),
                pdf("KI1101 - UTS I 2023-2024 - Solusi (Sesi 2).pdf", "1WTlrG4_RJLSI3J-6hDBE_S39_wmXNW1l"),
            ]),
            folder("UTS - 2024", [
                pdf("Jawaban UTS Kidas 1 2024-2025 set1.pdf", "1LoJYLhgCYwUM1WM1B6gxT_iR0Bu_0yCC"),
            ]),
            folder("UTS - 2025", [
                pdf("KI1101 - UTS II 2025 - 2026 - Soal.pdf", "1zpr8VjE8Xelx17_JMYjY8aIpKmmHSAtz"),
                pdf("KI1101 - UTS I 2025 - 2026 - Soal.pdf", "1CZ9CwiO7Su7u-_2ulmda2iNZAAr4cTeB"),
            ]),
        ]),
        folder("UAS", [
            folder("UAS - 2011", [
                pdf("KI1101 - UAS I 2011-2012 - Soal.pdf", "1Xpc_5SEW_itF0A_IElT4lcyBEBIUX1qN"),
            ]),
            folder("UAS - 2010", [
                pdf("KI1101 - UAS I 2010-2011 - Soal.pdf", "1XsgNp86zEuE2OQA7zhSSqXVFvTaXLJP1"),
            ]),
            folder("UAS - 2012", [
                pdf("KI1101 - UAS I 2012-2013 - Soal.pdf", "1XklzT9c542vI_eUj-MofnlvHovFIP7ia"),
            ]),
            folder("UAS - 2016", [
                pdf("KI1101 - UAS I 2016-2017 - Soal.pdf", "1XfbrEFZI4JjcAsQyGrqHNKkpg6Ao8QcM"),
            ]),
            folder("UAS - 2017", [
                pdf("KI1101 - UAS I 2017-2018 - Soal.pdf", "1Xe3KW01Q7fJfQQrKAzlruEgsg7lh6cGg"),
            ]),
            folder("UAS - 2018", [
                pdf("KI1101 - UAS I 2018-2019 - Solusipdf", "1Xx3Rf0lv7jKEpWdQEUd44acz4IRGjtuR"),
                pdf("KI1101 - UAS I 2018-2019 - Soal.pdf", "1XczffBASD7875wgvUMSWc8XEIfmqRKMk"),
            ]),
            folder("UAS - 2019", [
                pdf("KI1101 - UAS I 2019-2020 - Solusi.pdf", "1XZORCThblJNV7KrSCMwUYhyKca7oobPz"),
            ]),
            folder("UAS - 2020", [
                pdf("KI1101 - UAS I 2020-2021 - Soal.pdf", "1XYCUkyqRwBApu_r31_p7rRDPFZJWYmrp"),
            ]),
            folder("UAS - 2021", [
                pdf("KI1101 - UAS I 2021-2022 - Soal.pdf", "1XOd8Vud1WuQZXEAKfTMmey-JS9J1_bbK"),
            ]),
            folder("UAS - 2022", [
                pdf("2022-2023 (kosong).pdf", "1IxHlEltZyAUJeWfiuQdmge1ki5TIcVh-"),
                pdf("KI1101 - UAS I 2022-2023 - Solusi.pdf", "1XNpXT3FVAgD8eYsTDgw6FZH-vNmafNBe"),
            ]),
            folder("UAS - 2023", [
                pdf("2023-2024 (kosongan).pdf", "1r9RTGgnQbI2UA5CEaSYXHSgSlYSltbJg"),
                pdf("KI1101 - UAS I 2023-2024 - Solusi.pdf", "1XJy_sNhnA5wxQf98-lkxLAfxwLdRTojc"),
            ]),
            folder("UAS - 2024", [
                pdf("2024-2025 v2 (kosongan).pdf", "1W70tplesZHWbL5AUehIZKc8oRqiY-_8R"),
                pdf("2024-2025 v1 (kosongan).pdf", "1C4Y3YgwBKFYFyQ9QR84gXMST-YJCQS-x"),
                pdf("Jawaban UAS Kidas 1 2024-2025 set1.pdf", "1LmijoXD7ThQ07GvwfHULYVBu9PsUsLUQ"),
            ]),
            folder("UAS - 2025", [
                pdf("KI1101 - UAS I 2025 - 2026 - Soal.pdf", "1tHjugtSs_sjHA50OPp7oaDOAm6XYt9Lk"),
                pdf("1766993183922_2025-KI1101-KimiaDasar1-UAS-15Des2025-set2-final.pdf", "136D--cVTv7OemHJs6_93WpZjeEt6gEzH"),
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
