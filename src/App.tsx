import { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import CoffeeTempFilter from "./CoffeeTempFilter";
import "./App.css";

function App() {
  const [coffees, setCoffees] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [filteredCoffeeSearch, setFilteredCoffeeSearch] = useState([]);
  const [coffeeTemp, setCoffeeTemp] = useState("hot");
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.sampleapis.com/coffee/${coffeeTemp}`,
        );
        const data = await response.json();
        setCoffees(data);
      } catch (error) {
        setError("Something went wrong please try again later")
        console.error(error);
      }
    };
    fetchData();
  }, [coffeeTemp]);

  const handleChange = (event) => {
    const value = event.target.value;
    setSearchValue(value);
    dynamicSearch(value);
  };

  const dynamicSearch = (value) => {
    const newCoffeeResults = coffees.filter((drink) => {
      if (drink.title.slice(0, value.length).toLowerCase() === value.toLowerCase()) {
        return drink;
      }
    });
    setFilteredCoffeeSearch(newCoffeeResults);
  };

  const handleSelect = (event) => {
    const selectValue = event.target.value;
    if (error.length > 0) setError("");
    if (selectValue.length === 0)
      setError("Please select from the available choices!");
    setCoffeeTemp(selectValue);
  };

  return (
    <>
      <SearchBar handleChange={handleChange} searchValue={searchValue} />
      <CoffeeTempFilter handleSelect={handleSelect} />
      <div className="flex">
        {error.length > 0 ? (
          <p>{error}</p>
        ) : filteredCoffeeSearch.length > 0 ? (
          filteredCoffeeSearch.map((drink) => {
            return (
              <div>
                <p key={drink.id}>{drink.title}</p>
                <img src={drink.image} alt={drink.title} />
              </div>
            );
          })
        ) : coffees.length > 0 ? (
          coffees.map((drink) => {
            return (
              <div>
                <p key={drink.id}>{drink.title}</p>
                <img src={drink.image} alt={drink.title} />
              </div>
            );
          })
        ) : (
          "Loading"
        )}
      </div>
    </>
  );
}

export default App;
