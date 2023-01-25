import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import Logo from '../../../assets/logo/logo.svg';
import './styles.css'
import {ButtonLogin,  ButtonBack} from '../../../components/styled-components/Buttons';
import {validateEmail, validatePassword} from '../../../utils/regex';

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [emailErr, setEmailErr] = useState(false)
  const [passwordErr, setPasswordErr] = useState(false)

  const validate = () => {
    if(!validateEmail.test(email)){
      setEmailErr(true)
    } else {
      setEmailErr(false)
    }

    if(!validatePassword.test(password)){
      setPasswordErr(true)
    } else {
      setPasswordErr(false)
    }
  };

  function handlerEmail(event: any) {
    setEmail(event.target.value);
    setEmailErr(false);
  }
  function handlerPassword(event: any) {
    setPassword(event.target.value);
    setPasswordErr(false);
  }

    return (
      <div className="w-full content">

        <span>

          <Link to="/">
            <ButtonBack>Voltar para Inicio</ButtonBack>
          </Link>
        </span>

        <div className="container m-auto">
            <div>
              <img src={Logo} alt="GameProfile logo" className="logo-login mx-auto mb-9"/>    
            </div>
            <div className='container-login'>
                <div className='wrap-input'>
                  <input 
                    className={`input-text-login  ${emailErr ? 'login-error-input' : ''}`} 
                    type='email'
                    placeholder="E-mail ou usuário"
                    value={email}
                    onChange={event => handlerEmail(event)}
                    />
                  {emailErr && <p className="login-error-label">Por favor digite um e-mail válido!</p>}
                </div>

                <div className='wrap-input'>
                  <input 
                    className={`input-text-login ${passwordErr ? 'login-error-input' : ''}`} 
                    type='password'
                    placeholder="Senha"
                    value={password}
                    onChange={event => handlerPassword(event)}
                    />
                  {passwordErr && <p className="login-error-label">Senha Incorreta!</p>}
                </div>
                
                <div className='container-login-form-btn p-3'>
                  <ButtonLogin onClick={validate}>Login</ButtonLogin>
                </div>

                <div className='cadastro-link'>
                  <span className='txt1'>Não possui conta? </span>
                  <Link className='txt2' to='/cadastro'>
                    Cadastre-se
                  </Link>
                </div>
            </div>
        </div>
      </div>
    );
}

export default Login;