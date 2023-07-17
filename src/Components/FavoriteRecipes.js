import React from 'react';
import ShareRecipes from './ShareRecipes';
import FavoriteButton from './FavoriteButton';

export default function FavoriteRecipes() {
  return (
    <div>
      <button data-testid="filter-by-all-btn">All</button>
      <button data-testid="filter-by-meal-btn">Meals</button>
      <button data-testid="filter-by-drink-btn">Drinks</button>
      <image data-testid={ `${index}-horizontal-image` } />
      <h1 data-testid={ `${index}-horizontal-top-text` }>texto</h1>
      <p data-testid={ `${index}-horizontal-name` } />
      <ShareRecipes data-testid={ `${index}-horizontal-share-btn` } />
      <FavoriteButton data-testid={ `${index}-horizontal-favorite-btn` } />

    </div>
  );
}
