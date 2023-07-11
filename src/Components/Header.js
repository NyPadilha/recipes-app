import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

function Header({ routeName }) {
  const history = useHistory();

  const handleClick = () => {
    history.push('/profile');
  };

  return (
    <>
      <h1 data-testid="page-title">{routeName}</h1>
      <header>
        <button
          onClick={ handleClick }
        >
          <img
            data-testid="profile-top-btn"
            src={ profileIcon }
            alt="profileIcon"
          />
        </button>
        { ((routeName !== 'Profile') && (routeName !== 'Done Recipes')
        && (routeName !== 'Favorite Recipes')) && <img
          data-testid="search-top-btn"
          src={ searchIcon }
          alt="searchIcon"
          type="button"
        />}
      </header>
    </>
  );
}

Header.propTypes = {
  routeName: PropTypes.string.isRequired,
};

export default Header;
