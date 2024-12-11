import logo from '../assets/photo_2024-12-06_15-36-22.jpg';
import SearchInput from './SearchInput';

interface Props {
  onSearch : (searchText: string) => void;
}

const NavBar = ({onSearch}: Props) => {
  return (
    <div className="flex items-center px-4 py-2">
      
      {/* Logo */}
      <img src={logo} alt="Logo" className="h-10 xs:mr-1 lg:mr-4 rounded-full border-2 border-black 
      cursor-pointer"/>

      {/* Search Input */}
      <SearchInput onSearch={onSearch}/>
      
    </div>
  );
};

export default NavBar;

