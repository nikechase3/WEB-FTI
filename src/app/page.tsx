"use client"
import Hero from "@/components/Section/Hero";
import Feature from "@/components/Section/Feature";
import {useRef} from "react";

export default function Home() {
  const featuresRef = useRef<HTMLElement | null>(null)
  return (
    <>
    <div className="min-h-screen bg-linear-to-t from-sky-400 to-stone=200">
       <Hero featureRef={featuresRef}/>
       <Feature ref={featuresRef}/>
    </div>
    </>
  );
}
