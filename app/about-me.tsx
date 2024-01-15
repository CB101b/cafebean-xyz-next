import { getAboutMe, AboutMe as AboutMeType } from "@/utils/api";
import { useEffect, useState } from "react"

export default function AboutMe() {
    const [aboutMe, setAboutMe] = useState("If this text is visible, that means the CMS for this site is down 😳 embarrassinggg");
    useEffect(() => {
        getAboutMe().then((data: AboutMeType) => {
            setAboutMe(data.data.attributes.text);
        })
    }, [])
    return (
        <div>
            <h1 className="text-xl font-light">Hiiiiiiiiii!!!</h1>
            <p>I&#39;m <strong>Merijn Sandvliet</strong>, and this is my website. You may also know me by my alias: <strong>cafebean</strong>.</p>
            <br />
            <p>{aboutMe}</p>
        </div>
    )
}