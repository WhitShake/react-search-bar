import { useState } from "react";
import "./SearchBar.css"
import {FaSearch} from "react-icons/fa"
import PropTypes from 'prop-types';

const SearchBar = ({ setResults }) => {

  const [input, setInput] = useState("")

  const fetchData = (value) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        // console.log(json);
        const results = json.filter((user) => {
          // value == if the value is empty | normally filter on backend not frontend
          return value && user && user.name && user.name.toLowerCase().includes(value)
        });
        // console.log(results);
        setResults(results);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  }

  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input 
        placeholder="Type to search..." 
        value={input} 
        onChange={(e) => handleChange(e.target.value)}
        />
    </div>
  )
};

SearchBar.propTypes = {
  setResults: PropTypes.func.isRequired,
};

export default SearchBar