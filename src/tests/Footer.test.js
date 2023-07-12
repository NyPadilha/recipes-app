import React from 'react';
import { screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './renderWithRouter';
import RecipeProvider from '../context/RecipeProvider';

describe('Testando o componente Footer', () => {
  it('Verificando se os elementos estão sendo renderizados na tela', () => {
    const { history } = renderWithRouter(
      <RecipeProvider>
        <App />
      </RecipeProvider>,
    );
    act(() => { history.push('/meals'); });

    const buttonDrinks = screen.getByTestId('drinks-bottom-btn');
    const buttonMeals = screen.getByTestId('meals-bottom-btn');

    expect(buttonDrinks && buttonMeals).toBeInTheDocument();
  });
  it('Verificando se o botão drinks esta funcionando corretamente', () => {
    const { history } = renderWithRouter(
      <RecipeProvider>
        <App />
      </RecipeProvider>,
    );
    act(() => { history.push('/meals'); });

    const buttonDrinks = screen.getByTestId('drinks-bottom-btn');
    userEvent.click(buttonDrinks);

    expect(history.location.pathname).toBe('/drinks');
  });

  it('Verificando se o botão meals esta funcionando corretamente', () => {
    const { history } = renderWithRouter(
      <RecipeProvider>
        <App />
      </RecipeProvider>,
    );
    act(() => { history.push('/drinks'); });

    const buttonMeals = screen.getByTestId('meals-bottom-btn');
    userEvent.click(buttonMeals);

    expect(history.location.pathname).toBe('/meals');
  });
});
