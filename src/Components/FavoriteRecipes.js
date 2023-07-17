import React from 'react';
import ShareRecipes from './ShareRecipes';
import FavoriteButton from './FavoriteButton';

export default function FavoriteRecipes() {
  const favoriteStorage = JSON.parse(localStorage.getItem('favoriteRecipes'));
  console.log(favoriteStorage);
  return (
    <div>

      <button data-testid="filter-by-all-btn">All</button>
      <button data-testid="filter-by-meal-btn">Meals</button>
      <button data-testid="filter-by-drink-btn">Drinks</button>

      {
        (favoriteStorage) && favoriteStorage.map((favorite, index) => {
          const { image, name } = favorite;
          return (
            <div key={ name }>
              <img
                src={ image }
                alt={ name.toLowerCase() }
                data-testid={ `${index}-horizontal-image` }
              />
              <h1 data-testid={ `${index}-horizontal-top-text` }>texto</h1>
              <p data-testid={ `${index}-horizontal-name` }>{name}</p>
              <ShareRecipes index={ index } />
              <FavoriteButton index={ index } />
            </div>
          );
        })
      }
    </div>
  );
}
