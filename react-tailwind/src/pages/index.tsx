import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className="
    
    flex justify-center 
    items-center h-screen
    bg-zinc-700 text-7xl
    
    ">  
      Página Incial
    </div>
  )
}
