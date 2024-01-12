"use client"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from 'next/navigation'

export default function Nav() {
    const pathName = usePathname();

    return (
        <div className="flex justify-center items-center md:flex-row flex-col">
            <div>
            <Image src="/cb_brounze.svg" 
            alt="cafebean logo in brounze"
            width={150}
            height={150}
            className="m-12"
            />
            </div>
            <nav className="flex flex-col items-left transition">
            <Link className={`${pathName === "/" ? "text-color-fg-active" : ""}`} href="/"><span className= "font-black text-3xl hover:text-color-fg-active transition duration-75">about me</span></Link>
            <Link className={`${pathName === "/resume" ? "text-color-fg-active" : ""}`} href="/resume"><span className="font-black text-3xl hover:text-color-fg-active transition duration-75">resumé / cv</span></Link>
            <Link className={`${pathName === "/music" ? "text-color-fg-active" : ""}`} href="/music"><span className="font-black text-3xl hover:text-color-fg-active transition duration-75">music</span></Link>
            </nav>
        </div>
    )
}