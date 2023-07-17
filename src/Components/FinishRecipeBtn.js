import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function FinishRecipeBtn({ recipeCurrent, allChecked }) {
  const { push } = useHistory();
  const { drinks, meals } = recipeCurrent;
  const mealOrDrink = Object.keys(recipeCurrent)[0];
  console.log(recipeCurrent);
  const date = new Date();
  const today = date.getDate();
  const mes = date.getMonth() + 1;
  const ano = date.getFullYear();
  const horas = date.getHours();
  const minutos = date.getMinutes();
  const seconds = date.getSeconds();
  const segundos = date.getMilliseconds();
  const todayRecipe = `${ano}-${(mes.length !== 1) ? `0${mes}` : mes}-${today}T${horas + 3}:${minutos}:${seconds}.${segundos}Z`;
  const routeDone = '/done-recipes';

  const doneRecipesStorage = JSON.parse(localStorage.getItem('doneRecipes'));

  const objRecipeStorageMeal = () => {
    const { idMeal, strArea, strCategory, strMeal, strMealThumb, strTags, strAlcoholic,
    } = meals[0];
    const doneRecipeMeal = {
      id: idMeal,
      type: mealOrDrink === 'meals' && 'meal',
      nationality: strArea === null ? '' : strArea,
      category: strCategory,
      alcoholicOrNot: !strAlcoholic ? '' : strAlcoholic,
      name: strMeal,
      image: strMealThumb,
      doneDate: todayRecipe,
      tags: strTags === null ? [] : [...strTags.split(',')],
    };
    return doneRecipeMeal;
  };
  const objRecipeStorageDrink = () => {
    const { idDrink, strArea, strCategory, strDrink, strDrinkThumb, strTags,
      strAlcoholic,
    } = drinks[0];
    const doneRecipeDrink = {
      id: idDrink,
      type: mealOrDrink === 'drinks' && 'drink',
      nationality: !strArea ? '' : strArea,
      category: !strCategory ? '' : strCategory,
      alcoholicOrNot: strAlcoholic === null ? '' : strAlcoholic,
      name: strDrink,
      image: strDrinkThumb,
      doneDate: todayRecipe,
      tags: strTags === null ? [] : [...strTags.split(',')],
    };
    return doneRecipeDrink;
  };

  const saveStoreAndPushRoute = () => {
    if (mealOrDrink === 'meals' && doneRecipesStorage) {
      const mealObj = objRecipeStorageMeal();
      localStorage.setItem(
        'doneRecipes',
        JSON.stringify([...doneRecipesStorage, mealObj]),
      );
      push(routeDone);
    } else if (mealOrDrink === 'meals' && !doneRecipesStorage) {
      console.log('oi');
      const mealObj = objRecipeStorageMeal();
      localStorage.setItem('doneRecipes', JSON.stringify([mealObj]));
      push(routeDone);
    }
    if (mealOrDrink === 'drinks' && doneRecipesStorage) {
      const drinkObj = objRecipeStorageDrink();
      localStorage.setItem(
        'doneRecipes',
        JSON.stringify([...doneRecipesStorage, drinkObj]),
      );
      push(routeDone);
    } else if (mealOrDrink === 'drinks' && !doneRecipesStorage) {
      console.log('oi');
      const drinkObj = objRecipeStorageDrink();
      localStorage.setItem('doneRecipes', JSON.stringify([drinkObj]));
      push(routeDone);
    }
  };

  return (
    <button
      onClick={ saveStoreAndPushRoute }
      data-testid="finish-recipe-btn"
      disabled={ !allChecked }
    >
      Finish
    </button>
  );
}

export default FinishRecipeBtn;
