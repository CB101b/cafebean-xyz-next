"use client"

import { useEffect, useState } from "react";
import GraphicEntryCard from "../components/GraphicEntryCard";
import { WorkItem, getWorks } from "@/utils/api";

export default function Graphic() {
  let [workItems, setWorkItems]: [WorkItem[], Function] = useState([]);
  useEffect(() => {
    getWorks().then(works => {
      setWorkItems(works.data);
    })
  }, []);
  return (
    <div className="grid grid-cols-3">
      {workItems.map(item => (
        <GraphicEntryCard key={item.attributes.title} img_src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${item.attributes.cover_photo.data.attributes.url}`} title={item.attributes.title} description={item.attributes.category} />
      ))}
    </div>
  );
}