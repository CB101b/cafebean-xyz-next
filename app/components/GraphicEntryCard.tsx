export default function GraphicEntryCard({img_src, title, description}:{img_src: string, title: string, description: string}) {
    return (
        <div className="flex flex-col w-1/2 m-4 h-full bg-fgcolor rounded-lg overflow-hidden">
            <img className="flex-3" src={img_src} />
            <div className="flex-1 p-4">
                <h2 className="text-bgcolor font-extrabold">{title}</h2>
                <p className="text-bgcolor font-medium">{description}</p>
            </div>
        </div>
    )
}