"use client"
import Hero from "@/components/Section/Hero";
import Feature from "@/components/Section/Feature";

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-t from-sky-400 to-stone-200">
       <Hero />
       <Feature />
    </div>
  );
}
