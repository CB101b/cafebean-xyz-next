"use client"

import axios from "axios";
import { useEffect, useState } from "react";
import GraphicEntryCard from "../components/GraphicEntryCard"

interface WorkItem {
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

interface WorksApiResponse {
    data: WorkItem[]
}

export default function Graphic() {
    let [workItems, setWorkItems]: [WorkItem[], Function] = useState([]);
    useEffect(() => {
        getWorks().then(works => {
            console.log(works);
            setWorkItems(works.data);
        })
    }, [])
    async function getWorks(): Promise<WorksApiResponse> {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/works?populate=*`);
        return res.data;
    }
    return (
        <div className="grid grid-cols-3">
            {workItems.map(item => (
                <GraphicEntryCard key={item.attributes.title} img_src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${item.attributes.cover_photo.data.attributes.url}`} title={item.attributes.title} description={item.attributes.category} />
            ))}
        </div>
    )
}