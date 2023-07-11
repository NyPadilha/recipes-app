import React from 'react';
import { screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './renderWithRouter';
import RecipeProvider from '../context/RecipeProvider';

describe('Testando o componente searchBar', () => {
  it('Verificando se os elementos estão sendo renderizados na tela', () => {
    const { history } = renderWithRouter(
      <RecipeProvider>
        <App />
      </RecipeProvider>,
    );
    act(() => { history.push('/meals'); });

    const buttonSearch = screen.getByTestId('search-top-btn');
    userEvent.click(buttonSearch);

    const inputSearch = screen.getByTestId('search-input');
    const radioIngredient = screen.getByText('Ingredient');
    const radioName = screen.getByText('Name');
    const radioFirstLetter = screen.getByText('First Letter');
    const buttonHandleSearch = screen.getByTestId('exec-search-btn');

    expect(buttonSearch && inputSearch && radioIngredient && radioName
	&& radioFirstLetter && buttonHandleSearch).toBeInTheDocument();
  });
  it('Verificando se o radio esta funcionando corretamente', async () => {
    const { history } = renderWithRouter(
      <RecipeProvider>
        <App />
      </RecipeProvider>,
    );
    act(() => { history.push('/meals'); });
    const buttonSearch = screen.getByTestId('search-top-btn');
    userEvent.click(buttonSearch);

    const inputSearch = screen.getByTestId('search-input');
    const radioFirstLetter = screen.getByText('First Letter');
    const buttonHandleSearch = screen.getByTestId('exec-search-btn');

    userEvent.type(inputSearch, 'egg');
    userEvent.click(radioFirstLetter);
    userEvent.click(buttonHandleSearch);

  });
});
