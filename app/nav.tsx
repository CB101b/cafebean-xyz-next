"use client"
import Image from "next/image";
import NavBeanLink from "./components/NavBeanLink";
import { useEffect, useState } from "react";
import { getResumePath } from "@/utils/api";

export default function Nav() {
  const [resumeURL, setResumeURL] = useState("");
  useEffect(() => {
    getResumePath().then((path: string) => {
      setResumeURL(path);
    })
  }, []);
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
        <NavBeanLink href={`${process.env.NEXT_PUBLIC_STRAPI_URL}${resumeURL}`}>resumé / cv</NavBeanLink>
        <NavBeanLink href="/music">music</NavBeanLink>
        <NavBeanLink href="/graphic">graphic</NavBeanLink>
      </nav>
    </div>
  );
}