import { useEffect, useState } from 'react';
import { fetchGif } from '../../typescript/fetchGif';

interface GifData {
  images: {
    original: {
      url: string;
    };
  };
}
interface CardProps {
  query: string;
  name: string;
  className: string;
}
function Card({ onClick, query, name, className = 'card' }: CardProps) {
  const [gif, setGif] = useState<GifData | null>(null); // initialize with null or a structure that matches your expected data

  useEffect(() => {
    const fetchGifData = async () => {
      const gifData = await fetchGif(query);
      if (gifData) {
        setGif(gifData);
      }
    };

    if (query) {
      fetchGifData();
    }
  }, [query]);

  // Ensure gif is not null before rendering
  if (!gif) {
    return null;
  }

  return (
    <div className={className} onClick={onClick}>
      <div
        className="card-image"
        style={{ backgroundImage: `url("${gif.images.original.url}")` }}
      ></div>
      <div className="card-name">{name}</div>
    </div>
  );
}

export { Card };
