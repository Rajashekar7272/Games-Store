import { useState } from "react";
import { ModeToggle } from "./components/mode-toggle";
import { ThemeProvider } from "./components/theme-provider";
import GameGenres from "./Componentss/GameGenres";
import GameList from "./Componentss/GameList";
import NavBar from "./Componentss/NavBar";
import Heading from "./Componentss/Heading"; // Import Heading

function App() {
  const [selectedGenre, setSelectedGenre] = useState<string | undefined>(undefined);
  const [searchText, setSearchText] = useState<string>("");

  const handleSearch = (searchTerm: string) => {
    setSearchText(searchTerm);
  };

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex flex-col h-screen">
        {/* Top Navbar */}
        <div className="flex items-center px-4 py-2">
          {/* Navbar on the left */}
          <div className="flex-1 xs:justify-between">
            <NavBar onSearch={handleSearch} />
          </div>

          {/* Mode Toggle on the right */}
          <div className="xs:ml-6 flex justify-start items-center">
            <ModeToggle />
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-1">
          {/* Sidebar */}
          <aside className="hidden md:block w-1/4 p-4">
            <GameGenres onGenreClick={setSelectedGenre} />
          </aside>

          {/* Main content with Game List */}
          <main className="flex-1 flex flex-col items-center justify-center p-4">
            {/* Heading placed on top of the Game List */}
            <div className="w-full mb-2">
              <Heading selectedGenre={selectedGenre} searchText={searchText} />
            </div>

            {/* Game List */}
            <GameList selectedGenre={selectedGenre} searchText={searchText} />
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
