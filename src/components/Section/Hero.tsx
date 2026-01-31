"use client"
import { Button } from "../ui/button";
import Ballpit from "../ui/Ballpit";
import { useTransform, useScroll, motion } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";


export default function HeroSection({featureRef} : {featureRef : React.RefObject<HTMLElement | null>}) {
    const ref = useRef(null)
    const {scrollYProgress} = useScroll({
      target: ref,
      offset:["start start", "end start"]

    });

    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
    const Router = useRouter();

    

    return (
      <motion.section
      ref={ref}
      style={{opacity}}
        className="
          relative min-h-screen flex items-center justify-center
          bg-[#F6F6F6]
        "
      >
       
        
  
        
        <div className="relative z-10 max-w-3xl mx-auto text-center px-6">
            <div className="lg:py-40 space-y-8"> 
                <div className="space-y-2">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight">
                    Semua kebutuhan akademik FTI 
                    dalam satu tempat
                  </h1>
                  
                  <p className="mt-6 text-lg md:text-xl text-neutral-600">
                    Akses materi kuliah, layanan akademik, dan kalkulator IP/IPK
                    dalam satu dashboard yang sederhana dan cepat.
                  </p>

                </div>
                <div className="mt-10 flex flex-col items-center gap-3">
                  <Button
                  className="px-12 py-4 rounded-full 
                  text-base font-medium
                  bg-black text-white
                  shadow-lg shadow-black/20
                  hover:bg-neutral-800"
                  >
                    Mulai Belajar
                  </Button>

                  <p className="text-sm text-neutral-400">
                    Scroll untuk melihat fitur
                  </p>
                </div>
            </div>

            <div className="hidden md:block relative w-fit mt-24 lg:mt-32"> 
                <div className="absolute inset-0 block z-0">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#B1C9EF" d="M37.1,-60.2C46.7,-51.6,52,-38.9,59.7,-26.1C67.4,-13.2,77.6,-0.3,78.5,13.2C79.5,26.6,71.3,40.6,60.8,52.5C50.3,64.4,37.4,74.1,24.5,73.2C11.6,72.2,-1.4,60.5,-12.3,52.5C-23.3,44.5,-32.2,40.1,-40.3,33.4C-48.3,26.8,-55.4,17.9,-56.8,8.2C-58.2,-1.6,-53.9,-12.1,-51.5,-26C-49,-39.9,-48.4,-57.2,-40.2,-66.4C-31.9,-75.6,-15.9,-76.7,-1.1,-75C13.8,-73.4,27.6,-68.9,37.1,-60.2Z" transform="translate(100 100)" />
                </svg>
                </div>
                <Image src={"/ftilogo.png"} alt="FTI-logo" width={600} height={400} className="rounded-full object-contain z-10 relative"/>
            </div>

        </div>
      </motion.section>
    );
  }
  