"use client";

import { useState } from "react";
import { Profile } from '@/components/Section/fiturtest';

export default function Page() {
    const [OpenIndex, setOpenIndex] = useState<number | null>(null);
    const handleToggle = (index: number) => {
    if (OpenIndex === index) {
       setOpenIndex(null);
    } else {
       setOpenIndex(index);
    }
  };

    return(
    <div className="pt-21 min-h-screen bg-gray-100 text-black dark:bg-gray-900 dark:text-white p-6 flex flex-col gap-2">
        <div className="relative w-full h-[50vh] overflow-hidden">
            <img src="/fti-ser.png" className="w-full h-full object-cover object-bottom"/>
        </div>
        <h1 className="text-center text-2xl font-bold">Organogram BPA FTI-25</h1>
        <h1 className="text-center text-md">Gambar akan dilengkapi setelah diadakan setelah ada foto Berjakang</h1>
        <div className={`border bg-gray-300 text-black dark:text-white border-gray-700 rounded-lg p-4 dark:bg-gray-950 overflow-y-auto transition-all ${OpenIndex === 0 ? 'h-full' : 'h-22'}`}>
            
            {/* HEADER TOMBOL */}
            <button onClick={() => handleToggle(0)} className="w-full text-black dark:text-white text-left focus:outline-none">    
                <div className="flex flex-row items-center pt-2">
                    {OpenIndex !== 0 ? (
                        <svg className="w-8 h-8 p-1 fill-none stroke-black dark:stroke-white" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 9l6 4 6-4"/>
                        </svg>
                    ) : (
                        <svg className="w-8 h-8 p-1 fill-none stroke-black dark:stroke-white" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14"/>
                        </svg>
                    )}
                    <div className="font-bold pl-4 text-black dark:text-white">Badan Pengurus Harian</div>
                </div>
            </button>

            {/* KONTEN */}
            {OpenIndex === 0 && (
                <div className="flex flex-col pt-4 pl-2 text-black dark:text-white">
                    
                    <div className="text-left mb-6">
                        BPH merupakan sebuah badan yang mengurus segala bentuk administratif harian BPA FTI 25, BPH juga bertugas mengatur dan mengondisikan kerja masing-masing divisi agar sesuai dengan timeline yang telah ditentukan.
                    </div>

                    {/* SLIDER PROFIL */}
                    <div className="w-full overflow-hidden mb-8">
                        <div className="flex flex-nowrap gap-4 overflow-x-auto pb-4 px-4 snap-x snap-mandatory">
                            <Profile
                                image="" 
                                title="Bimar Surya Maulana"
                                subtitle="Ketua"
                            />
                            <Profile
                                image="" 
                                title="Muhammad Adzikra Raia Putra Pujayanto"
                                subtitle="Wakil Ketua 1"
                            />
                            <Profile
                                image="" 
                                title="Muhammad Ghaffar Ginting"
                                subtitle="Wakil Ketua 2"
                            />
                            <Profile
                                image="" 
                                title="Lutfi Yunita Dewi"
                                subtitle="Sekretaris 1"
                            />
                            <Profile
                                image="" 
                                title="Jasmine Patricia Effendi"
                                subtitle="Sekretaris 2"
                            />
                            <Profile
                                image="" 
                                title="Ernesto Rasendriya Sachio"
                                subtitle="Bendahara 1"
                            />
                            <Profile
                                image="" 
                                title="Umar Abdurrahman"
                                subtitle="Bendahara 2"
                            />                         
                        </div>
                    </div>

                </div>
            )}
        </div>

        <div className={`border bg-gray-300 text-black dark:text-white border-gray-700 rounded-lg p-4 dark:bg-gray-950 overflow-y-auto  ${OpenIndex === 1 ? 'h-full' : 'h-22'}`}>
            
            {/* HEADER TOMBOL */}
            <button onClick={() => handleToggle(1)} className="w-full text-black dark:text-white text-left focus:outline-none">    
                <div className="flex flex-row items-center pt-2">
                    {OpenIndex !== 1 ? (
                        <svg className="w-8 h-8 p-1 fill-none stroke-black dark:stroke-white" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 9l6 4 6-4"/>
                        </svg>
                    ) : (
                        <svg className="w-8 h-8 p-1 fill-none stroke-black dark:stroke-white" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14"/>
                        </svg>
                    )}
                    <div className="font-bold pl-4 text-black dark:text-white">Human Resource</div>
                </div>
            </button>

            {/* KONTEN */}
            {OpenIndex === 1 && (
                <div className="flex flex-col pt-4 pl-2 text-black dark:text-white">
                    
                    <div className="text-left mb-6">
                        HR merupakan pengambil keputusan tertinggi bersama ketua angkatan dalam menyetujui surat rancangan program kerja, proposal program kerja dan laporan pertanggungjawaban (LPJ) program kerja selama masa kepengurusan BPA FTI 25
                    </div>

                    {/* SLIDER PROFIL */}
                    <div className="w-full overflow-hidden mb-8">
                        <div className="flex flex-nowrap gap-4 overflow-x-auto pb-4 px-4 snap-x snap-mandatory">
                            <Profile
                                image="" 
                                title="Hafidz Ahmad Fahrezi"
                                subtitle="Anggota"
                            />
                            <Profile
                                image="" 
                                title="Ivan Setyaldi Bramantyo"
                                subtitle="Anggota"
                            />
                            <Profile
                                image="" 
                                title="Made Dea Vio Lantini"
                                subtitle="Anggota"
                            />
                            <Profile
                                image="" 
                                title="Muhammad Raka Arkananta"
                                subtitle="Anggota"
                            />
                            <Profile
                                image="" 
                                title="Nindya Cettakirana Bintoro"
                                subtitle="Anggota"
                            />     
                        </div>
                    </div>

                </div>
            )}
        </div>
        <div className={`border bg-gray-300 text-black dark:text-white border-gray-700 rounded-lg p-4 dark:bg-gray-950 overflow-y-auto ${OpenIndex === 2 ? 'h-full' : 'h-22'}`}>
            <div>
                <button onClick={() => handleToggle(2)} className="text-white">    
                    <div className="flex flex-row items-center pt-2">
                        {OpenIndex !== 2 ? (
                            <svg className="w-8 h-8 p-1 fill-none stroke-black dark:stroke-white" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 9l6 4 6-4"/>
                            </svg>
                        ) : (
                            <svg className="w-8 h-8 p-1 fill-none stroke-black dark:stroke-white" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14"/>
                            </svg>
                        )}
                        <div className="font-bold pl-4 text-black dark:text-white">Divisi Internal</div>
                    </div>
                </button>
            </div>
            {OpenIndex === 2 &&<div className="flex flex-col pt-4 pl-2">
            <div className="text-left">Divisi Internal adalah divisi yang bertanggung jawab mengelola dinamika internal Angkatan FTI 2025 melalui komunikasi dua arah, penyerapan aspirasi massa, dan pemeliharaan hubungan internal yang harmonis. Divisi ini berperan sebagai penghubung antara pengurus dan massa angkatan untuk memastikan seluruh informasi, kebutuhan, dan dinamika internal tersampaikan kepada seluruh massa FTI dengan baik. </div>
                <div className="flex flex-row pt-4">
                    <div className="w-full overflow-hidden">
                    <div className ="flex flex-row">
                        <div className="flex flex-nowrap gap-4 overflow-x-auto pb-4 px-4 snap-x snap-mandatory">
                            <Profile
                                image = "https://b.fssta.com/uploads/application/soccer/headshots/2091.vresize.350.350.medium.1.png"
                                title = "Fazil Sabilarrasyad"
                                subtitle = "Ketua Divisi"
                            />
                            <Profile
                                image = "https://b.fssta.com/uploads/application/soccer/headshots/2091.vresize.350.350.medium.1.png"
                                title = "Muhammad Kaisar Raya"
                                subtitle = "Wakil Ketua Divisi"
                            />        
                        </div>
                    </div>
                    <div className="w-full mt-8 flex flex-col gap-8">
                            <div className="flex flex-col gap-3">
                                <h3 className="font-bold text-lg text-black dark:text-white border-b border-gray-700 pb-2 w-fit pr-8">
                                    Subdivisi PJ Massa
                                </h3>
                                
                                <div className="flex flex-wrap gap-2">
                                    {[
                                        "Manuel Dokimos Yudivianno",
                                        "Rizvi Pashya Shalih Al Fauzan",
                                        "Zahwa Khairinnisa",
                                        "Jeremy Fransisco Sitorus",
                                        "Calista Azra Maulidya",
                                        "Muhammad Hanif Safahuda",
                                        "Abimanyu Aryasila",
                                        "Hotasi Joshua Netaneel Simanjuntak",
                                        "Muhammad Ferdian Nasruddin",
                                        "Huga Ibra Nugroho",
                                        "Aisah Fitria Ramadhani",
                                        "Muhammad Hafiz Trianda Hamdani",
                                        "Kesya Prisilia",
                                        "Shadiq A. H. Tambunan"
                                    ].map((name, index) => (
                                        <div 
                                            key={index} 
                                            className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-full text-xs sm:text-sm text-gray-200 transition-colors cursor-default"
                                        >
                                            {name}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* --- SUBDIVISI EO --- */}
                            <div className="flex flex-col gap-3">
                                <h3 className="font-bold text-lg text-black dark:text-white border-b border-gray-700 pb-2 w-fit pr-8">
                                    Subdivisi EO
                                </h3>
                                
                                <div className="flex flex-wrap gap-2">
                                    {[
                                        "Muhammad Raihan Abdullah",
                                        "Davin Prayoga Cangraputra",
                                        "Chatarina Audrey Vicella Angelica",
                                        "Azra Dian Anandita",
                                        "Neitha Safira",
                                        "Eltarra Buena Anugrah I T",
                                        "Sekar Arum Adi Fattaah",
                                        "Imad Sabiq Abdul Aziz",
                                        "Farsya Naila Rahmadita",
                                        "Gitaratri Rahma Zein"
                                    ].map((name, index) => (
                                        <div 
                                            key={index} 
                                            className="px-4 py-2 bg-gray-800  border border-gray-700 rounded-full text-xs sm:text-sm text-gray-200 transition-colors cursor-default"
                                        >
                                            {name}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>}
        </div>
        <div className={`border bg-gray-300 text-black dark:text-white border-gray-700 rounded-lg p-4 dark:bg-gray-950 overflow-y-auto ${OpenIndex === 3 ? 'h-full' : 'h-22'}`}>
            <div>
                <button onClick={() => handleToggle(3)} className="text-white">    
                    <div className="flex flex-row items-center pt-2">
                        {OpenIndex !== 3 ? (
                            <svg className="w-8 h-8 p-1 fill-none stroke-black dark:stroke-white" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 9l6 4 6-4"/>
                            </svg>
                        ) : (
                            <svg className="w-8 h-8 p-1 fill-none stroke-black dark:stroke-white" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14"/>
                            </svg>
                        )}
                        <div className="font-bold pl-4 text-black dark:text-white">Divisi Eksternal</div>
                    </div>
                </button>
            </div>
            {OpenIndex === 3 &&<div className="flex flex-col pt-4 pl-2">
            <div className="text-left">Divisi Eksternal adalah divisi yang bertanggung jawab mengatur, menjalin, dan memelihara hubungan resmi Angkatan FTI 2025 dengan pihak eksternal baik dari dalam maupun luar ITB. Divisi ini memastikan semua komunikasi dan kerja sama eksternal berlangsung secara profesional dan sesuai prosedur kelembagaan. </div>
                <div className="flex flex-row pt-4">
                    <div className="w-full overflow-hidden">
                    <div className ="flex flex-row">
                        <div className="flex flex-nowrap gap-4 overflow-x-auto pb-4 px-4 snap-x snap-mandatory">
                            <Profile
                                image = ""
                                title = "Nasywa Alifia Luswandi"
                                subtitle = "Ketua Divisi"
                            />
                            <Profile
                                image = ""
                                title = "Callysta Nayla Sandrina"
                                subtitle = "Wakil Ketua Divisi"
                            />        
                        </div>
                    </div>
                    <div className="w-full flex flex-col gap-8">
                        
                        {/* --- SUBDIVISI CAMPUS RELATIONS --- */}
                        <div className="flex flex-col gap-3">
                            <h3 className="font-bold text-lg text-black dark:text-white border-b border-gray-700 pb-2 w-fit pr-8">
                                Subdivisi Campus Relations
                            </h3>
                            
                            <div className="flex flex-wrap gap-2">
                                {[
                                    "Bebby Amany Sani",
                                    "Syahira Zahra",
                                    "Akhmad Alwan Hatorangan Marbun",
                                    "Gusti Ammar Mukhsith",
                                    "Christabel Sherina",
                                    "Zaina Tabina Yusuf"
                                ].map((name, index) => (
                                    <div 
                                        key={index} 
                                        className="px-4 py-2 bg-gray-200 dark:bg-gray-800 border border-gray-700 rounded-full text-xs sm:text-sm text-black dark:text-gray-200 cursor-default"
                                    >
                                        {name}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* --- SUBDIVISI PUBLIC RELATIONS --- */}
                        <div className="flex flex-col gap-3">
                            <h3 className="font-bold text-lg text-black dark:text-white border-b border-gray-700 pb-2 w-fit pr-8">
                                Subdivisi Public Relations
                            </h3>
                            
                            <div className="flex flex-wrap gap-2">
                                {[
                                    "Sheila Queenissa Ridwan",
                                    "Ratu Alea Khalisha Asjhari",
                                    "Kireina Ardelia Mansur",
                                    "Abdillah Zidane Albiruni",
                                    "Bayu Dharma Wiranatha",
                                    "Dicka Muhamad Ansyori",
                                    "Nizarafi Bagas Diksahandya",
                                    "Prina Zaenara Murtanto"
                                ].map((name, index) => (
                                    <div 
                                        key={index} 
                                        className="px-4 py-2 bg-gray-200 dark:bg-gray-800 border border-gray-700 rounded-full text-xs sm:text-sm text-black dark:text-gray-200 cursor-default"
                                    >
                                        {name}
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                    </div>
                </div>
            </div>}
        </div>
        <div className={`border bg-gray-300 text-black dark:text-white border-gray-700 rounded-lg p-4 dark:bg-gray-950 overflow-y-auto ${OpenIndex === 4 ? 'h-full' : 'h-22'}`}>
            
            <button onClick={() => handleToggle(4)} className="w-full text-black dark:text-white text-left focus:outline-none">    
                <div className="flex flex-row items-center pt-2">
                    {OpenIndex !== 4 ? (
                        <svg className="w-8 h-8 p-1 fill-none stroke-black dark:stroke-white" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 9l6 4 6-4"/>
                        </svg>
                    ) : (
                        <svg className="w-8 h-8 p-1 fill-none stroke-black dark:stroke-white" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14"/>
                        </svg>
                    )}
                    <div className="font-bold pl-4 text-black dark:text-white">Divisi Student Development</div>
                </div>
            </button>

            {OpenIndex === 4 && (
                <div className="flex flex-col pt-4 pl-2 text-black dark:text-white">
                    
                    <div className="text-left mb-6">
                        Divisi Student Development bertanggung jawab atas pengembangan minat dan bakat massa FTI 25. Student Development bertugas untuk merealisasikan program-program kerja yang berkaitan dengan kegiatan non-akademik massa FTI 25 sebagai mahasiswa, seperti dalam pelaksanaan kompetisi bakat, olahraga, dan lain-lain. Bertanggung jawab pula dalam program-program meningkatkan kompetensi massa FTI 25 dalam aspek-aspek di luar akademik.
                    </div>

                    <div className="w-full overflow-hidden mb-8">
                        <div className="flex flex-nowrap gap-4 overflow-x-auto pb-4 px-4 snap-x snap-mandatory">
                            <Profile
                                image=""
                                title="Alika Arraafi"
                                subtitle="Ketua Divisi"
                            />
                            <Profile
                                image=""
                                title="Kezia Nania Manik"
                                subtitle="Wakil Ketua Divisi"
                            />        
                        </div>
                    </div>

                    <div className="w-full flex flex-col gap-8">
                        
                        <div className="flex flex-col gap-3">
                            <h3 className="font-bold text-lg text-black dark:text-white border-b border-gray-700 pb-2 w-fit pr-8">
                                Subdivisi Pemetaan dan Analisis
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {[
                                    "Zalfa Luthfiyana Darwin",
                                    "Muhammad Arrafif Rizkyanda Wirawan",
                                    "Nayla Putri Khalisha",
                                    "Syifa Nisrina Riwayat"
                                ].map((name, index) => (
                                    <div key={index} className="px-4 py-2 bg-gray-200 dark:bg-gray-800 border border-gray-700 rounded-full text-xs sm:text-sm text-black dark:text-gray-200 cursor-default">
                                        {name}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col gap-3">
                            <h3 className="font-bold text-lg text-black dark:text-white border-b border-gray-700 pb-2 w-fit pr-8">
                                Subdivisi Program Pengembangan
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {[
                                    "Erina Shaafiyah Dewina",
                                    "Aurelia Agatha Paramesti",
                                    "M. Irsyadil Fikri",
                                    "Kayla Putri Amalia",
                                    "Ghaitsa Abidah",
                                    "Keisha Nayla Izzati"
                                ].map((name, index) => (
                                    <div key={index} className="px-4 py-2 bg-gray-200 dark:bg-gray-800 border border-gray-700 rounded-full text-xs sm:text-sm text-black dark:text-gray-200 cursor-default">
                                        {name}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col gap-3">
                            <h3 className="font-bold text-lg text-black dark:text-white border-b border-gray-700 pb-2 w-fit pr-8">
                                Subdivisi Manajemen Kegiatan
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {[
                                    "Christine T R Samosir",
                                    "Nadya Aliya Falisha",
                                    "Tampubolon, George Julio Horas Martua",
                                    "Nabila Az-zahra Kurniawati",
                                    "Aqilah Nazifa"
                                ].map((name, index) => (
                                    <div key={index} className="px-4 py-2 bg-gray-200 dark:bg-gray-800 border border-gray-700 rounded-full text-xs sm:text-sm text-black dark:text-gray-200 cursor-default">
                                        {name}
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            )}
        </div>
        <div className={`border bg-gray-300 text-black dark:text-white border-gray-700 rounded-lg p-4 dark:bg-gray-950 overflow-y-auto ${OpenIndex === 5 ? 'h-full' : 'h-22'}`}>
            
            <button onClick={() => handleToggle(5)} className="w-full text-black dark:text-white text-left focus:outline-none">    
                <div className="flex flex-row items-center pt-2">
                    {OpenIndex !== 5 ? (
                        <svg className="w-8 h-8 p-1 fill-none stroke-black dark:stroke-white" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 9l6 4 6-4"/>
                        </svg>
                    ) : (
                        <svg className="w-8 h-8 p-1 fill-none stroke-black dark:stroke-white" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14"/>
                        </svg>
                    )}
                    <div className="font-bold pl-4 text-black dark:text-white">Divisi Media</div>
                </div>
            </button>

            {OpenIndex === 5 && (
                <div className="flex flex-col pt-4 pl-2 text-black dark:text-white">
                    
                    <div className="text-left mb-6">
                        Divisi Media adalah divisi yang bertanggung jawab mengelola identitas visual, publikasi informasi, dan dokumentasi kegiatan resmi Angkatan FTI 2025. Terdiri dari subdivisi Dokumentasi, Publikasi, dan Kreatif. Divisi ini memastikan setiap konten visual dan informasi disampaikan secara tepat, konsisten, dan sesuai standar branding angkatan.
                    </div>

                    <div className="w-full overflow-hidden mb-8">
                        <div className="flex flex-nowrap gap-4 overflow-x-auto pb-4 px-4 snap-x snap-mandatory">
                            <Profile
                                image=""
                                title="Thirza Humaira Zen"
                                subtitle="Ketua Divisi"
                            />
                            <Profile
                                image=""
                                title="Nafis Rayza Rahman Sunoko"
                                subtitle="Wakil Ketua Divisi"
                            />        
                        </div>
                    </div>

                    <div className="w-full flex flex-col gap-8">
                        
                        {/* Subdivisi Dokumentasi */}
                        <div className="flex flex-col gap-3">
                            <h3 className="font-bold text-lg text-black dark:text-white border-b border-gray-700 pb-2 w-fit pr-8">
                                Subdivisi Dokumentasi
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {[
                                    "Izyan Imaduddin Ash Shidiq",
                                    "Nashira Najwa Habibah Haryono",
                                    "Elder Churchilo Manik",
                                    "Abinsya Akbar Ramadhan",
                                    "Moch. Sayfa Bhirawa Riady",
                                    "Hafiz Habibie Mardhatillah"
                                ].map((name, index) => (
                                    <div key={index} className="px-4 py-2 bg-gray-200 dark:bg-gray-800 border border-gray-700 rounded-full text-xs sm:text-sm text-black dark:text-gray-200 cursor-default">
                                        {name}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Subdivisi Publikasi */}
                        <div className="flex flex-col gap-3">
                            <h3 className="font-bold text-lg text-black dark:text-white border-b border-gray-700 pb-2 w-fit pr-8">
                                Subdivisi Publikasi
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {[
                                    "Nabila Pasmalia",
                                    "Annisa Rana Putri Atikah",
                                    "Dheanka Athaya Tiarisha",
                                    "Rhyanti Amanda Bilqis",
                                    "M. Fadharrel Syahrazza S",
                                    "Khaira Salsadila Rinditya"
                                ].map((name, index) => (
                                    <div key={index} className="px-4 py-2 bg-gray-200 dark:bg-gray-800 border border-gray-700 rounded-full text-xs sm:text-sm text-black dark:text-gray-200 cursor-default">
                                        {name}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Subdivisi Kreatif */}
                        <div className="flex flex-col gap-3">
                            <h3 className="font-bold text-lg text-black dark:text-white border-b border-gray-700 pb-2 w-fit pr-8">
                                Subdivisi Kreatif
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {[
                                    "Fathiya Karaissa Syaukani",
                                    "Muhammad Hanif Ar Rayyan",
                                    "Mahardika Rafi Pratama",
                                    "Koming Marcella Octaryne",
                                    "Jovanni Anabel Pratama",
                                    "Sherina Zahra"
                                ].map((name, index) => (
                                    <div key={index} className="px-4 py-2 bg-gray-200 dark:bg-gray-800 border border-gray-700 rounded-full text-xs sm:text-sm text-black dark:text-gray-200 cursor-default">
                                        {name}
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            )}
        </div>
        <div className={`border bg-gray-300 text-black dark:text-white border-gray-700 rounded-lg p-4 dark:bg-gray-950 overflow-y-auto ${OpenIndex === 6 ? 'h-full' : 'h-22'}`}>
            
            <button onClick={() => handleToggle(6)} className="w-full text-black dark:text-white text-left focus:outline-none">    
                <div className="flex flex-row items-center pt-2">
                    {OpenIndex !== 6 ? (
                        <svg className="w-8 h-8 p-1 fill-none stroke-black dark:stroke-white" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 9l6 4 6-4"/>
                        </svg>
                    ) : (
                        <svg className="w-8 h-8 p-1 fill-none stroke-black dark:stroke-white" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14"/>
                        </svg>
                    )}
                    <div className="font-bold pl-4 text-black dark:text-white">Divisi Akademik</div>
                </div>
            </button>

            {OpenIndex === 6 && (
                <div className="flex flex-col pt-4 pl-2 text-black dark:text-white">
                    
                    <div className="text-left mb-6">
                        Divisi Akademik adalah divisi yang bertanggung jawab memfasilitasi kebutuhan akademik mahasiswa FTI 2025.
                    </div>

                    <div className="w-full overflow-hidden mb-8">
                        <div className="flex flex-nowrap gap-4 overflow-x-auto pb-4 px-4 snap-x snap-mandatory">
                            <Profile
                                image=""
                                title="Tarafa Cashi Kirana"
                                subtitle="Ketua Divisi"
                            />
                            <Profile
                                image=""
                                title="Kayla Pandego"
                                subtitle="Wakil Ketua Divisi"
                            />        
                        </div>
                    </div>

                    <div className="w-full flex flex-col gap-8">
                        {/* Subdivisi Kurikulum */}
                        <div className="flex flex-col gap-3">
                            <h3 className="font-bold text-lg text-black dark:text-white border-b border-gray-700 pb-2 w-fit pr-8">
                                Ketua Subdivisi Kurikulum
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {[
                                    "Naufal Auliya Yusran"
                                ].map((name, index) => (
                                    <div key={index} className="px-4 py-2 bg-gray-200 dark:bg-gray-800 border border-gray-700 rounded-full text-xs sm:text-sm text-black dark:text-gray-200 cursor-default">
                                        {name}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Subdivisi Media */}
                        <div className="flex flex-col gap-3">
                            <h3 className="font-bold text-lg text-black dark:text-white border-b border-gray-700 pb-2 w-fit pr-8">
                                Ketua Subdivisi Media
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {[
                                    "Devi Nurpalah Farizi",
                                ].map((name, index) => (
                                    <div key={index} className="px-4 py-2 bg-gray-200 dark:bg-gray-800 border border-gray-700 rounded-full text-xs sm:text-sm text-black dark:text-gray-200 cursor-default">
                                        {name}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <h3 className="font-bold text-lg text-black dark:text-white border-b border-gray-700 pb-2 w-fit pr-8">
                                Subdivisi Khusus Web FTI
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {[
                                    "Bertrand Aurey Justinian",
                                    "Haikal Danendra Asa",
                                    "Blesstian Putra Sianturi",
                                    "Jonathan Diego Susanto"
                                ].map((name, index) => (
                                    <div key={index} className="px-4 py-2 bg-gray-200 dark:bg-gray-800 border border-gray-700 rounded-full text-xs sm:text-sm text-black dark:text-gray-200 cursor-default">
                                        {name}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <h3 className="font-bold text-lg text-black dark:text-white border-b border-gray-700 pb-2 w-fit pr-8">
                                Anggota Divisi
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {[
                                    "Kevin Satria Arya Pratama",
                                    "Joni Anwar Afrizul",
                                    "Jean Fide Tjahjamuljo",
                                    "Wildan Haris Rasikh",
                                    "Muhammad Rafli Fujianto",
                                    "Thirafi Ray Ramadhan",
                                    "Jessica Christabelle Sihombing",
                                    "Gamaliel Pasaribu",
                                    "Jonathan Diego Susanto"
                                ].map((name, index) => (
                                    <div key={index} className="px-4 py-2 bg-gray-200 dark:bg-gray-800 border border-gray-700 rounded-full text-xs sm:text-sm text-black dark:text-gray-200 cursor-default">
                                        {name}
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            )}
        </div>
        <div className={`border bg-gray-300 text-black dark:text-white border-gray-700 rounded-lg p-4 dark:bg-gray-950 overflow-y-auto ${OpenIndex === 7 ? 'h-full' : 'h-22'}`}>
            
            {/* HEADER TOMBOL */}
            <button onClick={() => handleToggle(7)} className="w-full text-black dark:text-white text-left focus:outline-none">    
                <div className="flex flex-row items-center pt-2">
                    {OpenIndex !== 7 ? (
                        <svg className="w-8 h-8 p-1 fill-none stroke-black dark:stroke-white" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 9l6 4 6-4"/>
                        </svg>
                    ) : (
                        <svg className="w-8 h-8 p-1 fill-none stroke-black dark:stroke-white" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14"/>
                        </svg>
                    )}
                    <div className="font-bold pl-4 text-black dark:text-white">Divisi Fundraise</div>
                </div>
            </button>

            {/* KONTEN */}
            {OpenIndex === 7 && (
                <div className="flex flex-col pt-4 pl-2 text-black dark:text-white">
                    
                    <div className="text-left mb-6">
                        Divisi Fundraise adalah divisi yang bertanggung jawab merencanakan dan mengelola kegiatan pendanaan guna memastikan keberlangsungan finansial BPA FTI 2025.
                    </div>

                    {/* SLIDER PROFIL KETUA & WAKIL */}
                    <div className="w-full overflow-hidden mb-8">
                        <div className="flex flex-nowrap gap-4 overflow-x-auto pb-4 px-4 snap-x snap-mandatory">
                            <Profile
                                image="" 
                                title="Aldrian Moreno"
                                subtitle="Ketua Divisi"
                            />
                            <Profile
                                image="" 
                                title="Aulia Kurnia Putri"
                                subtitle="Wakil Ketua Divisi"
                            />        
                        </div>
                    </div>

                    {/* LIST ANGGOTA */}
                    <div className="flex flex-col gap-3">
                        <h3 className="font-bold text-lg text-black dark:text-white border-b border-gray-700 pb-2 w-fit pr-8">
                            Anggota Divisi
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {[
                                "Fierhan Arya Pasha",
                                "Charles Chen",
                                "Ikhsan Nur Prasetya",
                                "Freya Fausta Danish",
                                "Jeffren Raflin",
                                "Imdad Daren Chandrasyah",
                                "Aghietya Chasby Habibullah",
                                "Dimas Syahriza Adiwira",
                                "Zalfa Ahza Safira",
                                "Alvy Amalia Syahla",
                                "R. M. Habiburrahman"
                            ].map((name, index) => (
                                <div key={index} className="px-4 py-2 bg-gray-200 dark:bg-gray-800 border border-gray-700 rounded-full text-xs sm:text-sm text-black dark:text-gray-200 cursor-default">
                                    {name}
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            )}
        </div>
    </div>
    );
}
