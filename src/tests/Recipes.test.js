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
  it('Verificando se o link esta funcionando corretamente', async () => {
    const { history } = renderWithRouter(
      <RecipeProvider>
        <App />
      </RecipeProvider>,
    );
    act(() => { history.push('/drinks'); });
    await waitFor(() => screen.getByText('GG'));

    const gg = screen.getByText('GG');
    userEvent.click(gg);

    expect(history.location.pathname).toBe('/drinks/15997');
  });
});
