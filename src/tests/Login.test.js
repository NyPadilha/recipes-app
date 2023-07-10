import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './renderWithRouter';

describe('Testando a pagina de login', () => {
  it('Verificando se os elementos estão sendo renderizados na tela', () => {
    renderWithRouter(<App />);
    const inputEmail = screen.getByTestId('email-input');
    const inputPassword = screen.getByTestId('password-input');
    const buttonLogin = screen.getByTestId('login-submit-btn');

    expect(inputEmail && inputPassword && buttonLogin).toBeInTheDocument();
  });

  it('Verificando se os elementos estão funcionando corretamente', () => {
    const { history } = renderWithRouter(<App />);
    const inputEmail = screen.getByTestId('email-input');
    const inputPassword = screen.getByTestId('password-input');
    const buttonLogin = screen.getByTestId('login-submit-btn');

    expect(buttonLogin).toBeDisabled();

    userEvent.type(inputEmail, 'teste@teste.com');
    expect(buttonLogin).toBeDisabled();

    userEvent.type(inputPassword, '123');
    expect(buttonLogin).toBeDisabled();

    userEvent.type(inputPassword, '1234567');
    expect(buttonLogin).toBeEnabled();

    userEvent.click(buttonLogin);
    expect(history.location.pathname).toBe('/meals');
  });
});
