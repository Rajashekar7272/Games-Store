import {
  FaPlaystation,
  FaXbox,
  FaWindows,
  FaMobile,
  FaAndroid,
  FaLinux,
  FaApple,
  FaAppStoreIos,
} from "react-icons/fa"; // Importing platform icons
import { SiNintendo } from "react-icons/si";


// Define the types for the GameCard props
interface GameCardProps {
  name: string;
  image: string;
  platforms: string[]; // A list of platform names (strings)
  description: string;
}

// A function to map platform names to icons
const getPlatformIcon = (platform: string) => {
  switch (platform.toLowerCase()) {
    case "playstation 3":
      return <FaPlaystation />;
    case "xbox":
      return <FaXbox />;
    case "pc":
      return <FaWindows />;
    case "mobile":
      return <FaMobile />;
    case "android":
      return <FaAndroid />;
    case "ios":
      return <FaApple />;
    case "linux":
      return <FaLinux />;
    case "sinintendo":
      return <SiNintendo />;
    case "macos":
      return <FaAppStoreIos />;
    default:
      return null;
  }
};

const GameCard: React.FC<GameCardProps> = ({
  name,
  image,
  platforms,
  description,
}) => {
  return (
    <div
      className="w-full h-full rounded-lg overflow-hidden shadow-lg border-2 bg-gray-900
     border-gray-800 dark:border-0 dark:bg-gray-800 hover:scale-105 transition hover:cursor-pointer"
    >
      {" "}
      {/* Adjusted width and height */}
      {/* Game Image */}
      <img src={image} alt={name} className="w-full h-48 object-cover" />{" "}
      {/* Adjusted height of the image */}
      <div className="p-2">
        {/* Game Title */}
        <h3 className=" font-bold text-white dark:text-white">{name}</h3>

        {/* Game Description */}
        <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
          {description}
        </p>

        {/* Platforms (Only Icons) */}
        <div className="mt-4 text-white">
          <ul className="flex flex-wrap mt-2">
            {platforms.map((platform) => (
              <li key={platform} className="ml-1">
                {getPlatformIcon(platform)} {/* Only the icon */}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GameCard;