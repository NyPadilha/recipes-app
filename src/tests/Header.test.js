import React from 'react';
import { screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './renderWithRouter';

describe('Testando o componente Header', () => {
  it('Verificando se os elementos estão sendo renderizados na tela', () => {
    const { history } = renderWithRouter(<App />);
    act(() => { history.push('/meals'); });

    expect(history.location.pathname).toBe('/meals');

    const buttonProfile = screen.getByTestId('profile-top-btn');
    const buttonSearch = screen.getByTestId('search-top-btn');

    expect(buttonProfile && buttonSearch).toBeInTheDocument();
  });
  it('Verificando se o botão profile esta funcionando corretamente', () => {
    const { history } = renderWithRouter(<App />);
    act(() => { history.push('/meals'); });

    expect(history.location.pathname).toBe('/meals');

    const buttonProfile = screen.getByTestId('profile-top-btn');
    userEvent.click(buttonProfile);

    expect(history.location.pathname).toBe('/profile');
  });
  it('Verificando se o botão search esta funcionando corretamente', () => {
    const { history } = renderWithRouter(<App />);
    act(() => { history.push('/meals'); });

    expect(history.location.pathname).toBe('/meals');

    const buttonSearch = screen.getByTestId('search-top-btn');

    userEvent.click(buttonSearch);
    const inputSearch = screen.getByTestId('search-input');

    expect(inputSearch).toBeInTheDocument();

    userEvent.click(buttonSearch);
    expect(inputSearch).not.toBeInTheDocument();
  });
});
