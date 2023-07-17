import React from 'react';
import { screen, act, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './renderWithRouter';
import RecipeProvider from '../context/RecipeProvider';

describe('Testando o componente Recipe Details', () => {
  beforeEach(() => {
    jest.fn().mockImplementation(() => Promise.resolve({
      json: () => data,
    }));
  });

  const finish = 'finish-recipe-btn';

  it('Verificando se os elementos estão sendo renderizados na tela meals', async () => {
    const { history } = renderWithRouter(
      <RecipeProvider>
        <App />
      </RecipeProvider>,
    );
    act(() => { history.push('/drinks/15997/in-progress'); });
    await waitFor(() => screen.getByText('GG'));

    const gg = screen.getByText('GG');
    const buttonFavorite = screen.getByTestId('favorite-btn');
    const buttonShare = screen.getByTestId('share-btn');
    const inputCheckbox = screen.getAllByRole('checkbox');
    const buttonFinish = screen.getByTestId(finish);

    expect(gg && buttonFavorite && buttonShare
&& inputCheckbox && buttonFinish).toBeInTheDocument();
  });

  it('Verificando se o botão start recipe esta funcionando corretamente', async () => {
    const { history } = renderWithRouter(
      <RecipeProvider>
        <App />
      </RecipeProvider>,
    );
    act(() => { history.push('/drinks/15997/in-progress'); });
    await waitFor(() => screen.getByText('GG'));

    const buttonFinish = screen.getByTestId(finish);
    const inputCheckbox = screen.getAllByRole('checkbox');
    expect(buttonFinish).toBeDisabled();

    userEvent.click(inputCheckbox[0]);
    userEvent.click(inputCheckbox[1]);
    userEvent.click(inputCheckbox[2]);

    expect(buttonFinish).toBeEnabled();
  });

  it('Verificando se o botão start recipe esta funcionando corretamente', async () => {
    window.localStorage.clear();
    const { history } = renderWithRouter(
      <RecipeProvider>
        <App />
      </RecipeProvider>,
    );
    act(() => { history.push('/meals/52967/in-progress'); });
    await waitFor(() => screen.getByText('Home-made Mandazi'));

    const buttonFinish = screen.getByTestId(finish);
    const inputCheckbox = screen.getAllByRole('checkbox');
    expect(buttonFinish).toBeDisabled();

    userEvent.click(inputCheckbox[0]);
    userEvent.click(inputCheckbox[1]);
    userEvent.click(inputCheckbox[2]);
    userEvent.click(inputCheckbox[3]);

    expect(buttonFinish).toBeEnabled();
  });
});
