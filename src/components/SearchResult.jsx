import PropTypes from 'prop-types';
import './SearchResult.css'


const SearchResult = ({ result }) => {
  return (
    <div className="search-result" onClick={(e) => alert(`You clicked on ${result.name}`)}>{result.name}</div>
  )
};

SearchResult.propTypes = {
  result: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default SearchResult