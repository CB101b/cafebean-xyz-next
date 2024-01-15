import axios from "axios";

export type WorkItem = {
    attributes: {
        title: string;
        category: string;
        cover_photo: {
            data: {
                attributes: {
                    url: string
                }
            }
        }
    }
}

export type Works = {
    data: WorkItem[]
}

export type AboutMe = {
    data: {
        attributes: {
            text: string
        }
    }
}

export type Song = {
    attributes: {
        title: string,
        audio_file: {
            data: {
                attributes: {
                    url: string
                }
            }
        }
    }
}
export type Songs = {
    data: Song[]
}

export async function getWorks(): Promise<Works> {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/works?populate=*`);
    return res.data;
}

export async function getAboutMe(): Promise<AboutMe> {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/about-me`);
    return res.data;
}

export async function getSongs(): Promise<Songs> {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/songs?populate=audio_file`);
    return res.data;
}