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
    id: number,
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
type Resume = {
    data: {
        attributes: {
            file: {
                data: {
                    attributes: {
                        url: string
                    }
                }
            }
        }
    }
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

export async function getResumePath(): Promise<string> {
    const res: { data: Resume } = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/resume?populate[file][fields][0]=url`);
    return res.data.data.attributes.file.data.attributes.url;
}