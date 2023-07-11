import PropTypes from 'prop-types';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import SearchBar from './SearchBar';

function Header({ routeName }) {
  return (
    <>
      <h1 data-testid="page-title">{routeName}</h1>
      <header>
        <img
          data-testid="profile-top-btn"
          src={ profileIcon }
          alt="profileIcon"
          type="button"
        />
        { ((routeName !== 'Profile') && (routeName !== 'Done Recipes')
        && (routeName !== 'Favorite Recipes')) && <img
          data-testid="search-top-btn"
          src={ searchIcon }
          alt="searchIcon"
          type="button"
        />}
      </header>
      <SearchBar />
    </>
  );
}

Header.propTypes = {
  routeName: PropTypes.string.isRequired,
};

export default Header;
