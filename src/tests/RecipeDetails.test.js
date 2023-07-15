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

  const path = '/meals/52977';

  it('Verificando se os elementos estão sendo renderizados na tela meals', async () => {
    const { history } = renderWithRouter(
      <RecipeProvider>
        <App />
      </RecipeProvider>,
    );
    act(() => { history.push(path); });
    await waitFor(() => screen.getByText('Corba'));
    await waitFor(() => screen.getByText('GG'));

    const corba = screen.getByText('Corba');
    const buttonFavorite = screen.getByTestId('favorite-btn');
    const buttonShare = screen.getByTestId('share-btn');
    const buttonStart = screen.getByTestId('start-recipe-btn');
    const ggCard = screen.findByTestId('0-recommendation-card');
    const ggTitle = screen.getByText('GG');

    expect(corba && buttonFavorite && buttonShare
&& buttonStart && ggCard && ggTitle).toBeInTheDocument();
  });
  it('Verificando se o botão favorite esta funcionando corretamente', async () => {
    const { history } = renderWithRouter(
      <RecipeProvider>
        <App />
      </RecipeProvider>,
    );
    act(() => { history.push(path); });

    await waitFor(() => screen.getByText('Corba'));

    const buttonFavorite = screen.getByTestId('favorite-btn');
    expect(buttonFavorite.src).toEqual('http://localhost/whiteHeartIcon.svg');

    userEvent.click(buttonFavorite);

    expect(buttonFavorite.src).toEqual('http://localhost/blackHeartIcon.svg');
  });

  it('Verificando se o botão start recipe esta funcionando corretamente', async () => {
    const { history } = renderWithRouter(
      <RecipeProvider>
        <App />
      </RecipeProvider>,
    );
    act(() => { history.push(path); });

    await waitFor(() => screen.getByText('Corba'));

    const buttonStart = screen.getByTestId('start-recipe-btn');

    userEvent.click(buttonStart);
    expect(history.location.pathname).toBe('/meals/52977/in-progress');
  });
  it('Verificando se os elementos estão sendo renderizados na tela drinks', async () => {
    const { history } = renderWithRouter(
      <RecipeProvider>
        <App />
      </RecipeProvider>,
    );
    act(() => { history.push('/drinks/15997'); });
    await waitFor(() => screen.getByText('GG'));
    await waitFor(() => screen.getByText('Corba'));

    const gg = screen.getByText('GG');
    const corbaCard = screen.findByTestId('0-recommendation-card');
    const corbaTitle = screen.getByText('Corba');

    expect(gg && corbaCard && corbaTitle).toBeInTheDocument();
  });
});
