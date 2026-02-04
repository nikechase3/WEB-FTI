"use client"
import Link from "next/link"
import { ModeToggle } from "../ui/dark-toggle"
import { useState, useRef} from "react"
import {motion, AnimatePresence} from "framer-motion"


export default function Navigation(){
    const items = [{
        name:"Home", href:"/"
    },
    {
        name:"About Us", href:"/aboutus"
    },
    {
        name:"Library", href:"/library"
    },
    {
        name:"Major", href:"/major"
    },
    {
        name:"Calc", href:"/gpa"
    }, 
    {
        name:"PomoTimer", href:"/pomo",
    },
    {
        name:"Survei", href:"/survei"
    },
    {
        name:"Organogram", href:"/organogram"
    },
    {
        name:"Calendar, href:"/calendar"}
    ]
    

    const [isOpen, setIsOpen] = useState(false)
    const menuRef = useRef<HTMLDivElement>(null)

    const toggleMenu= () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
        <nav className="hidden md:flex fixed top-4 mx-auto max-w-5xl inset-x-0 bg-white/50 shadow-lg backdrop-lg rounded-full z-50 px-8 py-2 items-center justify-between ">

            <ul className="hidden md:flex items-center justify-between space-x-6">
                {items.map ((item, index) => (
                    <li
                    key={index}
                    className="relative group">
                        <Link href={item.href} className="font-semibold text-lg text-[#D5DEEF] dark:hover:text-white hover:text-[#395886]">{item.name}</Link>
                        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-[#B1C9EF] to-[#628ECB] transition-all duration-300 group-hover:w-full"></span>
                    </li>
                ))}
            </ul>

            <ModeToggle/>

        </nav>

        {/*Mobile navigation view */}

        <nav className="md:hidden fixed top-4 right-4 z-50 flex items-center space-x-4">
            

            <motion.button
            onClick={toggleMenu}
            className="relative z-50 w-12 h-12 flex flex-col items-center justify-center space-y-1.5 bg-white/50 dark:bg-gray-900/50 backdrop-blur-lg rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300"
            whileTap={{scale: 0.95}}>
                <motion.span
                className="w-6 h-0.5 bg-[#395886] dark:bg-[#D5DEEF] block"
                animate={{
                    rotate: isOpen ? 45 : 0,
                    y: isOpen ? 6 : 0,
                }}
                transition={{
                    duration: 0.3,
                    ease:[0.25, 0.46, 0.45, 0.94]
                }}/>

                <motion.span
                className="w-6 h-0.5 bg-[#395886] dark:bg-[#D5DEEF] block"
                animate={{
                    opacity: isOpen ? 0 : 1,
                    y: isOpen ? -10 : 0,
                }}
                transition={{
                    duration: 0.3,
                    ease:[0.25, 0.46, 0.45, 0.94]
                }}/>

                <motion.span
                className="w-6 h-0.5 bg-[#395886] dark:bg-[#D5DEEF] block"
                animate={{
                    rotate: isOpen ? -45 : 0,
                    y: isOpen ? -6 : 0,
                }}
                transition={{
                    duration: 0.3,
                    ease:[0.25, 0.46, 0.45, 0.94]
                }}/>
            
            </motion.button>    

        </nav>

        {/* mobile Menu overlay*/}
        <AnimatePresence>
            {isOpen &&(
                <>
                
                <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
                transition={{duration: 0.3}}
                className="md:hidden fixed inset-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg z-40 flex items-center justify-center"
                ref={menuRef}>
                    <div className="absolute top-6 right-20 z-50">
                        <ModeToggle/>
                    </div>
                    <motion.nav
                    initial={{y: 50, opacity: 0}}
                    animate ={{y: 0, opacity:1}}
                    exit={{y:50, opacity:0}}
                    transition={{duration:0.4, delay:0.1}}
                    className="text-center">
                        <ul className="space-y-8">
                            {items.map((item, index) => (
                                <motion.li
                                key={index}
                                initial={{y:30, opacity:0}}
                                animate={{y:0, opacity: 1}}
                                transition={{
                                    duration:0.4,
                                    delay: 0.2 + index * 0.1,
                                    ease:[0.25, 0.46, 0.45, 0.94]
                                }}>
                                    <Link href={item.href}
                                    className="text-[#395886] dark:text-[#D5DEEF] md:text-4xl font-semibold tracking-wide hover:text-[#628ECB] dark:hover:text-white transition-colors duration-300"
                                    onClick={() => setIsOpen(false)}>
                                        {item.name}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>

                    </motion.nav>
                </motion.div>
                </>
            )}
        </AnimatePresence>

        </>

    )
}
