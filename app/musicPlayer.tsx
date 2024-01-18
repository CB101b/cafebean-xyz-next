export default function MusicPlayer({src, title}: {src: string, title: string}) {
  return (
    <div className="bg-fgcolor p-3 rounded-lg">
      <span className="text-bgcolor font-medium">{title}</span>
      <audio className="w-full" src={src} controls />
    </div>
  );
}