import React from 'react';
import react from '../../assets/react.webp';
import redux from '../../assets/redux.png';

import './styles.css';

const SignIn: React.FC = () => {
  return (
    <div className="sign-in-page">
      <div>
        <img src={react} alt="React Logo" />
        <img src={redux} alt="Redux Logo" />
      </div>
      <input type="text" defaultValue="test@email.com" />
      <input type="password" defaultValue="12345678" />
      <button>
        Entrar
      </button>
    </div>
  );
};

export default SignIn;
