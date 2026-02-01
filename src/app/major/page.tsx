"use client"
import { jurusanDept } from "@/components/hooks/data";
import { Card, CardContent } from "@/components/ui/card";
import {motion, AnimatePresence} from "framer-motion";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";


export default function MajorPage(){
    const [openIndex, setOpenIndex] = useState<number|null>(null)
    return(
        <div className="min-h-screen bg-[#8ce5ff] dark:bg-gray-900 py-20">
            <div className="text-center">
                <h1 className="text-4xl md:text-6xl font-bold">Jurusan</h1>
            </div>

            <section className="py-10 mx-auto">
                <div className="grid grid-cols-1 px-4 gap-4">
                    {jurusanDept.map((item, index) => (
                        <Card key={index} className="bg-white/40 backdrop-blur-[1px] dark:hover:bg-neutral-300/30 border border-neutral-400/30">
                            <motion.button onClick={() => setOpenIndex(openIndex === index ?  null : index)}
                                className="w-full flex items-center justify-center">
                                    <h1 className="text-center font-bold text-xl">{item.name}</h1>
                                    <div className="flex-shrink">
                                        {openIndex === index ? <ChevronDown/> :   <ChevronRight/> }
                                    </div>
                            </motion.button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                    initial={{height : 0 , opacity : 0}}
                                    animate = {{height : 'auto', opacity: 1}}
                                    exit = {{height: 0, opacity: 0}}
                                    transition = {{duration: 0.3, ease: 'easeInOut'}}>

                                        <CardContent className="space-y-6">
                                            <div className="space-y-2">
                                                <h1 className="font-bold">&#45;Deskripsi Jurusan:</h1>
                                                <p className="text-start">{item.ilmu}</p>
                                            </div>
                                            <div className="space-y-2">
                                                <div className="flex flex-col md:flex-row gap-2">
                                                    <div className="ml-1">
                                                        <h2 className="font-bold">Gaji:</h2>
                                                        <p className="truncate text-lg md:translate-y-1/2">{item.gaji}</p>
                                                    </div>
                                                    <div className="md:pl-50">
                                                        <h2 className="font-bold">Prospek Kerja:</h2>
                                                        <p>{item.prospekKerja}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </Card>
                    ))}
                </div>
            </section>
        </div>
    )
}
