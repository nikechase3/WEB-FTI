"use client";

import { Button } from "../ui/button";
import Ballpit from "../ui/Ballpit";
import { useTransform, useScroll, motion } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function HeroSection() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <motion.section
      ref={ref}
      style={{ opacity }}
      className="
        relative min-h-screen flex items-center justify-center
        bg-[#F6F6F6] dark:bg-gray-800
      "
    >
       <div className="relative z-10 max-w-3xl mx-auto text-center px-6">
            <div className="lg:py-40 space-y-8"> 
                <div className="space-y-2">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-neutral-900 dark:text-white">
                    Semua kebutuhan akademik FTI 
                    dalam satu tempat
                  </h1>
                  
                  <p className="mt-6 text-lg md:text-xl text-neutral-600 dark:text-neutral-300">
                    Akses materi kuliah, layanan akademik, dan kalkulator IP/IPK
                    dalam satu dashboard yang sederhana dan cepat.
                  </p>

                </div>
                <Link href="/library">
                  <Button
                  className="px-12 py-4 rounded-full 
                  text-base font-medium
                  bg-black text-white
                  shadow-lg shadow-black/20
                  hover:bg-neutral-800 
                  dark:bg-white 
                  dark:text-black 
                  dark:hover:bg-neutral-200"
                  
                  >
                    Mulai Belajar
                  </Button>
                </Link>

                  <p className="text-sm text-neutral-400">
                    Scroll untuk melihat fitur
                  </p>
                </div>
            </div>
      {/* content unchanged */}
    </motion.section>
  );
}
