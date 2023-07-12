import React from 'react';
import { screen, act, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './renderWithRouter';
import RecipeProvider from '../context/RecipeProvider';

describe('Testando o componente searchBar', () => {
  const searchTop = 'search-top-btn';
  const searchInput = 'search-input';
  const firstLetter = 'First Letter';
  const execSearch = 'exec-search-btn';

  it('Verificando se os elementos estão sendo renderizados na tela', async () => {
    const { history } = renderWithRouter(
      <RecipeProvider>
        <App />
      </RecipeProvider>,
    );
    act(() => { history.push('/meals'); });

    const buttonSearch = screen.getByTestId(searchTop);
    userEvent.click(buttonSearch);

    const inputSearch = screen.getByTestId(searchInput);
    const radioIngredient = screen.getByText('Ingredient');
    const radioName = screen.getByText('Name');
    const radioFirstLetter = screen.getByText(firstLetter);
    const buttonHandleSearch = screen.getByTestId(execSearch);

    expect(buttonSearch && inputSearch
&& radioIngredient && radioName
&& radioFirstLetter && buttonHandleSearch).toBeInTheDocument();
  });

  it('Verificando se o radio name para meals esta funcionando corretamente', async () => {
    const { history } = renderWithRouter(
      <RecipeProvider>
        <App />
      </RecipeProvider>,
    );
    act(() => { history.push('/meals'); });
    const buttonSearch = screen.getByTestId(searchTop);
    userEvent.click(buttonSearch);

    const inputSearch = screen.getByTestId(searchInput);
    const radioName = screen.getByText('Name');
    const buttonHandleSearch = screen.getByTestId(execSearch);

    userEvent.type(inputSearch, 'salmon eggs');
    userEvent.click(radioName);
    userEvent.click(buttonHandleSearch);

    jest.fn().mockImplementation(() => Promise.resolve({
      json: () => data,
    }));

    await waitFor(() => screen.getByText('Salmon Eggs Eggs Benedict'));
    const salmonEggs = screen.getByText('Salmon Eggs Eggs Benedict');
    expect(salmonEggs).toBeInTheDocument();
    expect(history.location.pathname).toBe('/meals/52962');
  });

  it('Verificando se o radio first letter esta funcionando corretamente', async () => {
    const { history } = renderWithRouter(
      <RecipeProvider>
        <App />
      </RecipeProvider>,
    );
    act(() => { history.push('/meals'); });
    const buttonSearch = screen.getByTestId(searchTop);
    userEvent.click(buttonSearch);

    const inputSearch = screen.getByTestId(searchInput);
    const radioFirstLetter = screen.getByText(firstLetter);
    const buttonHandleSearch = screen.getByTestId(execSearch);

    userEvent.type(inputSearch, 'e');
    userEvent.click(radioFirstLetter);
    userEvent.click(buttonHandleSearch);

    jest.fn().mockImplementation(() => Promise.resolve({
      json: () => data,
    }));

    await waitFor(() => screen.getByText('Eton Mess'));

    const etonMess = screen.getByText('Eton Mess');
    expect(etonMess).toBeInTheDocument();
  });

  it('Verificando se o radio name  para drinks esta funcionando corretamente', async () => {
    const { history } = renderWithRouter(
      <RecipeProvider>
        <App />
      </RecipeProvider>,
    );
    act(() => { history.push('/drinks'); });
    const buttonSearch = screen.getByTestId(searchTop);
    userEvent.click(buttonSearch);

    const inputSearch = screen.getByTestId(searchInput);
    const radioName = screen.getByText('Name');
    const buttonHandleSearch = screen.getByTestId(execSearch);

    userEvent.type(inputSearch, 'Long Vodka');
    userEvent.click(radioName);
    userEvent.click(buttonHandleSearch);

    jest.fn().mockImplementation(() => Promise.resolve({
      json: () => data,
    }));
    await waitFor(() => screen.getByText('Long vodka'));
    const LongVodka = screen.getByText('Long vodka');
    expect(LongVodka).toBeInTheDocument();
    expect(history.location.pathname).toBe('/drinks/13196');
  });

  it('Verificando se o radio ingredient esta funcionando corretamente', async () => {
    const { history } = renderWithRouter(
      <RecipeProvider>
        <App />
      </RecipeProvider>,
    );
    act(() => { history.push('/meals'); });
    const buttonSearch = screen.getByTestId(searchTop);
    userEvent.click(buttonSearch);

    const inputSearch = screen.getByTestId(searchInput);
    const radioIngredient = screen.getByText('Ingredient');
    const buttonHandleSearch = screen.getByTestId(execSearch);

    userEvent.type(inputSearch, 'egg');
    userEvent.click(radioIngredient);
    userEvent.click(buttonHandleSearch);

    jest.fn().mockImplementation(() => Promise.resolve({
      json: () => data,
    }));

    await waitFor(() => screen.getByText('Beef Lo Mein'));

    const BeefLoMein = screen.getByText('Beef Lo Mein');
    expect(BeefLoMein).toBeInTheDocument();
  });

  it('Verificando se o alerta do radio first letter esta funcionando corretamente', async () => {
    const alert = jest.fn();
    global.alert = alert;
    const { history } = renderWithRouter(
      <RecipeProvider>
        <App />
      </RecipeProvider>,
    );
    act(() => { history.push('/meals'); });
    const buttonSearch = screen.getByTestId(searchTop);
    userEvent.click(buttonSearch);

    const inputSearch = screen.getByTestId(searchInput);
    const radioFirstLetter = screen.getByText(firstLetter);
    const buttonHandleSearch = screen.getByTestId(execSearch);

    userEvent.type(inputSearch, 'egg');
    userEvent.click(radioFirstLetter);
    userEvent.click(buttonHandleSearch);

    expect(alert).toHaveBeenCalled();
  });
});
