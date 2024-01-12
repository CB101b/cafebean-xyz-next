"use client"
import Image from "next/image"
import Link from "next/link"
import NavBeanLink from "./components/NavBeanLink";

export default function Nav() {
    return (
        <div className="flex-1 flex justify-center items-center md:flex-row flex-col">
            <div>
            <Image src="/cb_brounze.svg" 
            alt="cafebean logo in brounze"
            width={150}
            height={150}
            className="m-12"
            />
            </div>
            <nav className="flex flex-col items-left transition">
            <NavBeanLink href="/">about me</NavBeanLink>
            <NavBeanLink href="/resume">resumé / cv</NavBeanLink>
            <NavBeanLink href="/music">music</NavBeanLink>
            <NavBeanLink href="/graphic">graphic</NavBeanLink>
            </nav>
        </div>
    )
}