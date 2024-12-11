import React, { useEffect, useState } from "react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

interface Platform {
  platform: { name: string };
}

interface Game {
  id: number;
  name: string;
  background_image: string;
  platforms: Platform[];
  description_raw: string;
}

const skeletons = Array.from({ length: 20 }, (_, index) => index + 1);

interface GameListProps {
  selectedGenre?: string;
  searchText: string;
}

const GameList: React.FC<GameListProps> = ({ selectedGenre, searchText }) => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setLoading] = useState(false);

  const fetchGames = async (genreSlug?: string, searchText?: string) => {
    setLoading(true);

    const baseUrl = import.meta.env.VITE_BASE_URL;
    const apiKey = import.meta.env.VITE_API_KEY;

    if (!baseUrl || !apiKey) {
      setError("Configuration error: Missing API key or base URL.");
      setLoading(false);
      return;
    }

    try {
      const url = genreSlug
        ? `${baseUrl}/games?key=${apiKey}&genres=${genreSlug}&search=${searchText}`
        : `${baseUrl}/games?key=${apiKey}&search=${searchText}`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();
      setGames(data.results || []);
    } catch (err) {
      setError("Failed to load games. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGames(selectedGenre, searchText);
  }, [selectedGenre, searchText]);

  return (
    <div className="p-4 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {isLoading && skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}

      {error && <p className="text-red-500">{error}</p>}

      {!isLoading &&
        games.map((game) => (
          <GameCard
            key={game.id}
            name={game.name}
            image={game.background_image}
            platforms={game.platforms.map((p) => p.platform.name)}
            description={game.description_raw}
          />
        ))}
    </div>
  );
};

export default GameList;
