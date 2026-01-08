"use client"
import { ChevronUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";


export default function Footer() {
     const items = [{
        name:"https://simpleicons.org/icons/instagram.svg", item:"https://www.instagram.com/fti25itb/"
    },
    {
        name:"https://simpleicons.org/icons/tiktok.svg", item:"https://www.tiktok.com/@fti25itb?_t=ZS-8wiuCXCE6qd&_r=1&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGn9_XUFG2n2KIVuVfFT7YEhlMwY1WRURxV9N2aFwrJe99q1uvEFrp11qoio9U_aem_QnQ5L1Rjpi2_izQqBUbYQQ"
    },
    {
        name:"https://simpleicons.org/icons/youtube.svg", item:"https://www.youtube.com/@AkademikBPAFTI25/videos"
    },
    {
        name:"https://simpleicons.org/icons/whatsapp.svg", item:"https://www.youtube.com/@AkademikBPAFTI25/videos"
    },
]

    return(
        <footer className="bg-linear-to-t from-indigo-600 to-sky-400  backdrop-blur-[1px]">
            <div className="container mx-auto px-4 py-8">
                <div className="flex md:flex-row flex-col gap-4 md:items-center justify-between">
                    <div>
                        <div className="flex items-start space-x-2">
                            <Link className="cursor-pointer flex items-center" href={"/"}>
                                <Image src={"/ftilogo.png"} width={50} height={50} alt="logo"/>
                                <span className="font-bold text-2xl text-white">ACADS-FTI</span>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-semibold text-xl text-white px-7">Contact Us</h3>
                        <div className="gap-5 grid grid-cols-4">
                            {items.map((item, index) => (
                                <div className="cursor-pointer" key={index}>
                                    <Link href={item.item} className="w-2"><img src = {item.name}></img></Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}