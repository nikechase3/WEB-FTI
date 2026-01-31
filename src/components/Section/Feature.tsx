import React from "react";


const FEATURES = [
  {
    title: "Library",
    description: "Akses materi kuliah dan referensi belajar terkurasi.",
    href: "/library",
  },
  {
    title: "Jurusan & Major",
    description: "Informasi jurusan, kurikulum, dan jalur studi.",
    href: "/major",
  },
  {
    title: "Kalkulator IP/IPK",
    description: "Hitung dan pantau performa akademikmu.",
    href: "/gpa",
  },
  {
    title: "Pomodoro Timer",
    description: "Fokus belajar dengan teknik pomodoro.",
    href: "/pomo",
  },
  {
    title: "Survei FTI",
    description: "Sampaikan aspirasi dan masukan mahasiswa.",
    href: "/survei",
  },
  {
    title: "Layanan Akademik",
    description: "Akses berbagai layanan akademik online.",
    href: "#footer",
  },
];


export default function Feature() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6">

        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                Fitur Utama
            </h2>
            <p className="mt-4 text-neutral-500 text-lg">
                Semua tools akademik yang kamu butuhkan, dalam satu tempat.
                </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
          {FEATURES.map((feature) => (
            <a
            key={feature.title}
            href={feature.href}
            className="
              w-full max-w-sm
              group rounded-2xl border border-white/40
              bg-white/20 backdrop-blur
              p-6
              transition-all duration-300
              hover:shadow-lg hover:-translate-y-1"
            >
              <div className="bg-[#d6e4f0] rounded-xl p-6" />
              
              <h3 className="text-xl font-semibold mb-2">
                {feature.title}
              </h3>
              
              <p className="text-sm leading-relaxed text-neutral-700">
                {feature.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
