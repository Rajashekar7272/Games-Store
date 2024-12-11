import { useRef } from "react";

interface Props {
    onSearch : (searchText: string) => void;
}

const SearchInput = ( {onSearch}: Props ) => {
    const ref = useRef<HTMLInputElement>(null);

  return (
    <form onSubmit={(event) => {
        event.preventDefault();
        if(ref.current) onSearch(ref.current.value);
    }}
    className="flex w-full" // Ensure the form takes full width of the container
    >
        <input
        type="text" ref={ref}
        placeholder="Search...Games..." 
        className="flex-1 p-2 border-2 rounded-lg focus:outline-none border-gray-600
          dark:bg-gray-900 dark:border-gray-600 placeholder:text-black
         dark:text-white dark:placeholder-gray-200"
      />
    </form>
  )
}

export default SearchInput