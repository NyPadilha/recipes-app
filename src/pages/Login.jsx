import React, { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const saveEmail = () => {
    localStorage.setItem('user', JSON.stringify({ email }));
  };

  const validateInputs = () => {
    const minimumPasswordLength = 6;
    const emailRegex = /\S+@\S+\.\S+/i;
    const passwordRegex = password.length > minimumPasswordLength;
    return !(emailRegex.test(email) && passwordRegex);
  };

  return (

    <div>
      <input
        type="email"
        name="email"
        id=""
        placeholder="email"
        data-testid="email-input"
        value={ email }
        onChange={ ({ target }) => setEmail(target.value) }
      />
      <input
        type="password"
        name="password"
        id=""
        value={ password }
        data-testid="password-input"
        placeholder="password"
        onChange={ ({ target }) => setPassword(target.value) }
      />
      <button
        type="button"
        disabled={ validateInputs() }
        data-testid="login-submit-btn"
        onClick={ saveEmail }
      >
        Enter

      </button>
    </div>
  );
}
