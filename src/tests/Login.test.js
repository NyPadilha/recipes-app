import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('Testando a pagina de login', () => {
  it('Verificando se os elementos estão sendo renderizados na tela', () => {
    render(<App />);
    const inputEmail = screen.getByTestId('email-input');
    const inputPassword = screen.getByTestId('password-input');
    const buttonLogin = screen.getByTestId('login-submit-btn');

    expect(inputEmail && inputPassword && buttonLogin).toBeInTheDocument();
  });

  it('Verificando se os elementos estão funcionando corretamente', () => {
    render(<App />);
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
  });
});
