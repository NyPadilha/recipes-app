import clipboardCopy from 'clipboard-copy';
import { useState } from 'react';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import PropTypes from 'prop-types';
import shareImage from '../images/shareIcon.svg';

function ShareRecipes({ index }) {
  const [copyLink, setCopyLink] = useState(false);
  const { pathname } = useLocation();

  const handleClick = () => {
    clipboardCopy(window.location.href.replace('/in-progress', ''));
    setCopyLink(true);
  };

  const validaRota = () => {
    if (pathname === '/done-recipes' || pathname === '/favorite-recipes') {
      return 'true';
    }
    return 'false';
  };

  return (
    <div>
      <button
        data-testid={
          validaRota() === 'true' ? `${index}-horizontal-share-btn` : 'share-btn'
        }
        onClick={ handleClick }
      >
        <img src={ shareImage } alt="Link" />
      </button>
      {copyLink && <div>Link copied!</div>}
    </div>
  );
}

ShareRecipes.propTypes = {
  index: PropTypes.number,
}.isRequired;

export default ShareRecipes;
