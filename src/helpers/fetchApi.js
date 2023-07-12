export const fetchApiIngredient = async (parametro, rota) => {
  const urlMeals = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${parametro}`;
  const urlDrinks = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${parametro}`;

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
