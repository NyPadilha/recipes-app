import clipboardCopy from 'clipboard-copy';
import { useState } from 'react';
import shareImage from '../images/shareIcon.svg';

function ShareRecipes() {
  const [copyLink, setCopyLink] = useState(false);

  const handleClick = () => {
    clipboardCopy(window.location.href);
    setCopyLink(true);
  };

  return (
    <div>
      <button
        data-testid="share-btn"
        onClick={ handleClick }
      >
        <img src={ shareImage } alt="Link" />
      </button>
      {copyLink && <div>Link copied!</div>}
    </div>
  );
}

export default ShareRecipes;
