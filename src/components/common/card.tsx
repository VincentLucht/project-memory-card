import { useEffect, useState } from 'react';

interface CardProps {
  query: string;
  name: string;
}
interface GifData {
  images: {
    original: {
      url: string;
    };
  };
}
function Card({ query, name }: CardProps) {
  const [gif, setGif] = useState<GifData | null>(null); // initialize with null or a structure that matches your expected data

  useEffect(() => {
    const fetchGif = async () => {
      const API_KEY = 'gITEY8DSUDIHSunL7lYFsxUthoB3mE8S';
      const endpoint = `https://api.giphy.com/v1/gifs/${query}?api_key=${API_KEY}`;

      try {
        const response = await fetch(endpoint);

        if (!response.ok) {
          throw new Error(`Network error: ${response.statusText}`);
        }

        const data = await response.json();

        if (data.data) {
          setGif(data.data);
        } else {
          throw new Error('No GIF found');
        }
      } catch (error) {
        console.error('Error fetching gif:', error.message);
      }
    };

    if (query) {
      fetchGif();
    }
  }, [query]);

  // Ensure gif is not null before rendering
  if (!gif) {
    return null;
  }

  return (
    <div className="card">
      <div
        className="card-image"
        style={{ backgroundImage: `url("${gif.images.original.url}")` }}
      ></div>
      <div className="card-name">{name}</div>
    </div>
  );
}

export { Card };
