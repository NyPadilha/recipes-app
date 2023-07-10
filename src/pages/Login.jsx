import React, { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
        disabled={ email.length === 0 || password.length === 0 }
        data-testid="login-submit-btn"
      >
        Enter

      </button>
    </div>
  );
}
