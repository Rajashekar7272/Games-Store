interface HeadingProps {
    selectedGenre?: string;
    searchText: string;
  }
  
  const Heading = ({ selectedGenre, searchText }: HeadingProps) => {
    const capitalizeFirstLetter = (text: string) => {
        if (text.length === 0) return text;
        return text.charAt(0).toUpperCase() + text.slice(1);
      };

    let headingText = "";
  
    // Determine the heading based on the genre or search text
    if (selectedGenre) {
      headingText = `${selectedGenre} Games`; // Dynamic heading based on genre
    } else if (searchText) {
      headingText = `Search results for "${searchText}"`; // Dynamic heading based on search term
    } else {
      headingText = "All Games"; // Default heading if no genre or search is active
    }
  
    return <h2 className="text-4xl font-semibold p-4 text-black underline dark:text-white">{capitalizeFirstLetter(headingText)}</h2>;
  };
  
  export default Heading;
  