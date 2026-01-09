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
                       
          md:bg-[url('/Background.jpg')]
          md:bg-cover md:bg-center md:bg-no-repeat
        "
      >
       
        <div className="absolute inset-0 hidden md:block bg-black/40 backdrop-blur-sm z-0" />

        <div className="absolute inset-0 md:hidden block z-0">
            <Ballpit
            count={50}
            gravity={0.01}
            friction={1}
            wallbounce={0.95}
            followCursor={true}
            />
        </div>
  
        
        <div className="relative z-10 text-center sm:text-justify dark:text-white md:text-white gap-12 grid grid-cols-1 md:grid-cols-2 md:text-left px-6 md:px-16 ">
            <div className="lg:py-40 space-y-8"> 
                <div className="space-y-2">
                  <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-6xl font-bold ">Selamat Datang</h1>
                  <p className="text-2xl font-semibold sm:text-2xl md:text-3xl lg:text-5xl "> Massa FTI</p>
                  <p className="text-lg text-justify hidden md:block"> Website ini merupakan platform terpadu untuk mahasiswa dalam mengakses berbagai sumber penting kampus. Fitur utamanya mencakup link layanan akademik, referensi belajar mata kuliah, informasi jurusan dan fakultas, serta kalkulator IP dan IPK interaktif. Dengan tampilan yang sederhana dan fungsional, website ini hadir sebagai pusat informasi dan pendukung studi yang praktis bagi mahasiswa.</p>
                </div>
                <div className=" flex flex-col sm:flex-row gap-4 rounded-full dark">
                      <Button
                      className=" bg-[#B1C9EF] hover:bg-[#D5DEEF] sm:w-fit px-12 py-4 rounded-full"
                      onClick={() => Router.push("/library")}
                      >Mulai Belajar
                      </Button>
                      <Button
                        className="bg-[#F0F3FA] hover:bg-[#D5DEEF] sm:w-fit rounded-full px-12 py-4"
                        onClick={() => featureRef.current?.scrollIntoView({behavior:"smooth"})}
                        >Lihat Semua Tautan
                      </Button>
                </div>
            </div>

            <div className="hidden md:block relative w-fit mt-24 lg:mt-32"> 
                <div className="absolute inset-0 block z-0">
                <svg className="scale-125" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#B1C9EF" d="M37.1,-60.2C46.7,-51.6,52,-38.9,59.7,-26.1C67.4,-13.2,77.6,-0.3,78.5,13.2C79.5,26.6,71.3,40.6,60.8,52.5C50.3,64.4,37.4,74.1,24.5,73.2C11.6,72.2,-1.4,60.5,-12.3,52.5C-23.3,44.5,-32.2,40.1,-40.3,33.4C-48.3,26.8,-55.4,17.9,-56.8,8.2C-58.2,-1.6,-53.9,-12.1,-51.5,-26C-49,-39.9,-48.4,-57.2,-40.2,-66.4C-31.9,-75.6,-15.9,-76.7,-1.1,-75C13.8,-73.4,27.6,-68.9,37.1,-60.2Z" transform="translate(100 100)" />
                </svg>
                </div>
                <Image src={"/ftilogo.png"} alt="FTI-logo" width={500} height={500} className="rounded-full object-contain z-10 relative -mt-28"/>
            </div>

        </div>
      </motion.section>
    );
  }
  