// import React from "react";
import './SearchResultsList.css'
import SearchResult from './SearchResult';
import PropTypes from 'prop-types';

const SearchResultsList = ({ results }) => {
  return (
    <div className="results-list">
      {
        results.map((result, id) => {
          return <SearchResult result={result} key={id}/>
        })
      }
    </div>
  )
};

SearchResultsList.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default SearchResultsList;