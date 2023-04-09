
import './search-box.style.css';

const SearchBox = ({placeholder, className, onChangeHandler}) => {
  return (
    <input
      className={`search-box ${className}`}
      type='search'
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  );
};

export default SearchBox;
