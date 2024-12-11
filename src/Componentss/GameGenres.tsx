import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";

interface Genre {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}

interface GameGenresProps {
  onGenreClick: (genreSlug: string) => void;
}

const GameGenres: React.FC<GameGenresProps> = ({ onGenreClick }) => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setLoading] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);

  const fetchGenres = async () => {
    setLoading(true);

    const baseUrl = import.meta.env.VITE_BASE_URL;
    const apiKey = import.meta.env.VITE_API_KEY;

    if (!baseUrl || !apiKey) {
      setError("Configuration error: Missing API key or base URL.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(`${baseUrl}/genres?key=${apiKey}`);
      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();
      if (data.results) {
        setGenres(data.results);
      } else {
        setError("No genres found.");
      }
    } catch (err) {
      setError("Failed to load genres. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGenres();
  }, []);

  const handleGenreClick = (slug: string) => {
    setSelectedGenre(slug); // Update selected genre
    onGenreClick(slug); // Notify parent component
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Game Genres</h2>

      {isLoading && <Spinner />}

      {error && <p className="text-red-500">{error}</p>}

      {!isLoading && !error && genres.length > 0 && (
        <ul className="space-y-3">
          {genres.map((genre) => (
            <li
              key={genre.id}
              className="flex items-center space-x-4 cursor-pointer"
              onClick={() => handleGenreClick(genre.slug)}
            >
              <img
                src={genre.image_background}
                alt={`${genre.name} background`}
                className="h-10 w-10 rounded-md object-cover"
              />
              <span
                className={`font-medium italic text-lg hover:underline hover:text-xl ${
                  selectedGenre === genre.slug ? "text-green-500 font-bold text-xl underline" : ""
                }`}
              >
                {genre.name}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default GameGenres;
