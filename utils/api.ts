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

export async function getWorks(): Promise<Works> {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/works?populate=*`);
    return res.data;
}