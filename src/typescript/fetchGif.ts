interface GifData {
  images: {
    original: {
      url: string;
    };
  };
}

export async function fetchGif(query: string): Promise<GifData | null> {
  const API_KEY = 'gITEY8DSUDIHSunL7lYFsxUthoB3mE8S';
  const endpoint = `https://api.giphy.com/v1/gifs/${query}?api_key=${API_KEY}`;

  try {
    const response = await fetch(endpoint);

    if (!response.ok) {
      throw new Error(`Network error: ${response.statusText}`);
    }

    const data = await response.json();

    if (data.data) {
      return data.data;
    } else {
      throw new Error('No GIF found');
    }
  } catch (error) {
    console.error('Error fetching gif:', error.message);
    return null;
  }
}
