export const fetchApiIngredient = async (parametro) => {
  const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${parametro}`;
  const response = await fetch(url);
  const data = response.json();
  return data;
};

export const fetchApiName = async (parametro) => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${parametro}`;
  const response = await fetch(url);
  const data = response.json();
  return data;
};

export const fetchApiFirstLetter = async (parametro) => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${parametro}`;
  const response = await fetch(url);
  const data = response.json();
  return data;
};
