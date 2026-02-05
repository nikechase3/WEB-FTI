import React from "react";
import { BookOpen, Calculator, Clock, GraduationCap, CalendarClock, FileChartColumn } from "lucide-react";


const FEATURES = [
  {
    title: "Library",
    description: "Akses materi kuliah dan referensi belajar terkurasi.",
    href: "/library",
    icon: BookOpen,
  },
  {
    title: "Jurusan & Major",
    description: "Informasi jurusan, kurikulum, dan jalur studi.",
    href: "/major",
    icon: GraduationCap,
  },
  {
    title: "Kalkulator IP/IPK",
    description: "Hitung dan pantau performa akademikmu.",
    href: "/gpa",
    icon: Calculator,
  },
  {
    title: "Pomodoro Timer",
    description: "Fokus belajar dengan teknik pomodoro.",
    href: "/pomo",
    icon: Clock,
  },
  {
    title: "Survei FTI",
    description: "Sampaikan aspirasi dan masukan mahasiswa.",
    href: "/survei",
    icon: FileChartColumn
  },
  {
    title: "Calender Akademik",
    description: "Akses jadwal akademik penting.",
    href: "#calendar",
    icon: CalendarClock,
  },
];


export default function Feature() {
  return (
    <section id="features"className="py-24">
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
      hover:shadow-lg hover:-translate-y-1
    "
  >
    {/* Icon */}
    {feature.icon && (
      <div
        className="
          mb-4 inline-flex items-center justify-center
          rounded-xl p-3
          bg-sky-100 text-sky-700
          dark:bg-sky-900/40 dark:text-sky-300
        "
      >
        <feature.icon className="h-6 w-6" />
      </div>
    )}

    {/* Title */}
    <h3 className="text-xl font-semibold mb-2 text-slate-800 dark:text-slate-100">
      {feature.title}
    </h3>

    {/* Description */}
    <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
      {feature.description}
    </p>
  </a>
))}
        </div>

      </div>
    </section>
  );
}
