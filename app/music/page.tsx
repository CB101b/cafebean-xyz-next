'use client'
import { getSongs, Song } from '@/utils/api';
import { useEffect, useState } from 'react';
import MusicPlayer from '../musicPlayer';

export default function Music() {
  const [songs, setSongs]: [Song[], Function] = useState([]);
  useEffect(() => {
    getSongs().then(songs => {
      setSongs(songs.data)
    });
  }, []);
  return (
    <div className='p-24'>
      {songs.map((song: Song) => (
        <MusicPlayer key={song.id} title={song.attributes.title} src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${song.attributes.audio_file.data.attributes.url}`} />
      ))}
    </div>
  );
}