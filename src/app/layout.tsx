import type { Metadata } from "next";
import {Poppins} from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navigation from "@/components/Section/navigation";
import ftiLogo from  '../../public/ftilogo.png'
import Footer from "@/components/Section/Footer";

const poppins = Poppins({
  variable:"--font-poppins",
  subsets:["latin"],
  weight:['100','200','300','400','500', '600','700']
})

export const metadata: Metadata = {
  title: "ACADS FTI ",
  icons:{
    icon:ftiLogo.src
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"
    suppressHydrationWarning
    >
      <body
        className="bg-[#f6f6f6] text-[#163172]"
      >
        <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange>
          <Navigation/>
          <main>
            {children}
          </main>
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}
