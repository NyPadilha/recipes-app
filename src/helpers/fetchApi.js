export const fetchApiIngredient = async (parametro, rota) => {
  const urlMeals = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${parametro}`;
  const urlDrinks = `https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${parametro}`;

  const response = await fetch((rota === '/meals') ? urlMeals : urlDrinks);
  const data = response.json();
  return data;
};

export const fetchApiName = async (parametro, rota) => {
  const urlMeals = `https://www.themealdb.com/api/json/v1/1/search.php?s=${parametro}`;
  const urlDrinks = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${parametro}`;

  const response = await fetch((rota === '/meals') ? urlMeals : urlDrinks);
  const data = response.json();
  return data;
};

export const fetchApiFirstLetter = async (parametro, rota) => {
  const urlMeals = `https://www.themealdb.com/api/json/v1/1/search.php?f=${parametro}`;
  const urlDrinks = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${parametro}`;

  const response = await fetch((rota === '/meals') ? urlMeals : urlDrinks);
  const data = response.json();
  return data;
};

export const fetchCategoryMeals = async () => {
  const url = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
  const response = await fetch(url);
  const data = response.json();
  return data;
};

export const fetchCategoryDrinks = async () => {
  const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
  const response = await fetch(url);
  const data = response.json();
  return data;
};

export const fetchApiUseEffect = async (rota) => {
  const urlMeals = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
  const urlDrinks = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

  const response = await fetch((rota === '/meals') ? urlMeals : urlDrinks);
  const data = response.json();
  return data;
};
