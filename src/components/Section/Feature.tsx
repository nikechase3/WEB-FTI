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
    href: "/calendar",
    icon: CalendarClock,
  },
];


export default function Feature() {
  return (
    <section id="features"className="py-24
    bg-sky-400 dark:bg-[#1e293b]
    transition-colors">
      <div className="mx-auto max-w-6xl px-6">

        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className=" text-3xl md:text-4xl font-semibold text-neutral-900 dark:text-white">
                Fitur Utama
            </h2>
            <p className="mt-4 text-neutral-500 text-lg dark:text-neutral-300">
                Semua tools akademik yang kamu butuhkan, dalam satu tempat.
                </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
  {FEATURES.map((feature) => {
    const Icon = feature.icon;

    return (
      <a
        key={feature.title}
        href={feature.href}
        className="
          group rounded-2xl border border-white/20
          bg-white/20 dark:bg-white/10
          backdrop-blur-md
          p-6
          transition-all duration-300
          hover:-translate-y-1 hover:shadow-xl
        "
      >
        {/* Icon */}
        <div className="
          mb-4 inline-flex h-12 w-12 items-center justify-center
          rounded-xl
          bg-white/40 dark:bg-white/20
        ">
          <Icon className="h-6 w-6 text-neutral-900 dark:text-white" />
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
          {feature.title}
        </h3>

        {/* Description */}
        <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
          {feature.description}
        </p>
      </a>
    );
  })}
</div>
      </div>
    </section>
  );
}