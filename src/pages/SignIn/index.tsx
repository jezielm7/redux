import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { StoreState } from '../../store/createStore';
import { signInRequest } from '../../store/modules/auth/actions';

import react from '../../assets/react.webp';
import redux from '../../assets/redux.png';

import './styles.css';

const SignIn: React.FC = () => {
  const { loadingSignInRequest } = useSelector((state: StoreState) => state.auth);
  const dispatch = useDispatch();

  console.log('Loading:', loadingSignInRequest);
  return (
    <div className="sign-in-page">
      <div>
        <img src={react} alt="React Logo" />
        <img src={redux} alt="Redux Logo" />
      </div>
      <input type="text" defaultValue="test@email.com" />
      <input type="password" defaultValue="12345678" />
      <button onClick={() => dispatch(signInRequest(
        {
          email: 'test@email.com',
          password: '12345678'
        }
      ))}>
        { loadingSignInRequest ? 'Carregando' : 'Entrar' }
      </button>
    </div>
  );
};

export default SignIn;
