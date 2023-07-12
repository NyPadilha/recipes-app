import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import mealIcon from '../images/mealIcon.svg';
import './Footer.css';
import RecipeContext from '../context/useContext';

function Footer() {
  const { setFilterRecipe } = useContext(RecipeContext);
  const history = useHistory();

  return (
    <div
      data-testid="footer"
      className="footer"
    >
      <button
        onClick={ () => {
          history.push('/drinks');
          setFilterRecipe('');
        } }
      >
        <img
          data-testid="drinks-bottom-btn"
          src={ drinkIcon }
          alt="drinkIcon"
        />
      </button>
      <button
        onClick={ () => {
          history.push('/meals');
          setFilterRecipe('');
        } }
      >
        <img
          data-testid="meals-bottom-btn"
          src={ mealIcon }
          alt="searchIcon"
        />
      </button>
    </div>
  );
}

export default Footer;
