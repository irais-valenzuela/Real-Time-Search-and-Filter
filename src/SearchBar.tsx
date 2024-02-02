const SearchBar = ({ searchValue, handleChange }) => {
  return (
    <div>
      <label htmlFor="coffeeSearch">Search</label>
      <br />
      <input
        id="coffeeSearch"
        type="text"
        onChange={handleChange}
        value={searchValue}
      />
      <br />
    </div>
  );
};

export default SearchBar;
