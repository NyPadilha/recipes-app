import React from 'react';
import { screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './renderWithRouter';
import RecipeProvider from '../context/RecipeProvider';

describe('Testando a pagina Profile', () => {
  window.localStorage.setItem('user', JSON.stringify({ email: 'tryber@teste.com' }));

  it('Verificando se os elementos estão sendo renderizados na tela', () => {
    const { history } = renderWithRouter(
      <RecipeProvider>
        <App />
      </RecipeProvider>,
    );
    act(() => { history.push('/profile'); });

    expect(history.location.pathname).toBe('/profile');

    const profileEmail = screen.getByTestId('profile-email');
    const buttonDone = screen.getByTestId('profile-done-btn');
    const buttonFavorite = screen.getByTestId('profile-favorite-btn');
    const buttonLogout = screen.getByTestId('profile-logout-btn');

    expect(profileEmail && buttonDone
&& buttonFavorite && buttonLogout).toBeInTheDocument();
  });

  it('Verificando se o botao done recipes esta funcionando corretamente', () => {
    const { history } = renderWithRouter(
      <RecipeProvider>
        <App />
      </RecipeProvider>,
    );
    act(() => { history.push('/profile'); });

    const buttonDone = screen.getByTestId('profile-done-btn');
    userEvent.click(buttonDone);

    expect(history.location.pathname).toBe('/done-recipes');
  });

  it('Verificando se o botao favorite recipes esta funcionando corretamente', () => {
    const { history } = renderWithRouter(
      <RecipeProvider>
        <App />
      </RecipeProvider>,
    );
    act(() => { history.push('/profile'); });

    const buttonFavorite = screen.getByTestId('profile-favorite-btn');
    userEvent.click(buttonFavorite);

    expect(history.location.pathname).toBe('/favorite-recipes');
  });

  it('Verificando se o botao logout esta funcionando corretamente', () => {
    const { history } = renderWithRouter(
      <RecipeProvider>
        <App />
      </RecipeProvider>,
    );
    act(() => { history.push('/profile'); });

    const buttonLogout = screen.getByTestId('profile-logout-btn');
    userEvent.click(buttonLogout);

    expect(history.location.pathname).toBe('/');
  });
});
