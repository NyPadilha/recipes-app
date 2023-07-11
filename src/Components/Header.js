import PropTypes from 'prop-types';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

function Header({ routeName }) {
  const [searchInput, setSearchInput] = useState(false);

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
        && (routeName !== 'Favorite Recipes')) && <button
          onClick={ () => (setSearchInput(!searchInput)) }
        >
          <img
            data-testid="search-top-btn"
            src={ searchIcon }
            alt="searchIcon"
          />
                                                  </button>}
        {!searchInput ? false : true
&& <div
  data-testid="search-input"
>
  aa
</div>}
      </header>
    </>
  );
}

Header.propTypes = {
  routeName: PropTypes.string.isRequired,
};

export default Header;
