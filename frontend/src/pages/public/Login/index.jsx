import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import Logo from '../../assets/logo.png';
import './styles.css'
import {validateEmail, validatePassword} from '../../utils/regex';

export const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPasseword] = useState('')

  const [emailErr, setEmailErr] = useState(false)
  const [passwordErr, setPassewordErr] = useState(false)

  const validate = () => {
    if(!validateEmail.test(email)){
      setEmailErr(true)
    } else {
      setEmailErr(false)
    }

    if(!validatePassword.test(password)){
      setPassewordErr(true)
    } else {
      setPassewordErr(false)
    }
  };

  console.log({email, password})

    return (
        <div className="container">
            <div>
              <img src={Logo} alt="GameProfile logo" className="logo mx-auto mb-9"/>    
            </div>
            <div className='contaiver-login'>
                <div className='wrap-input'>
                  <input 
                    className='input' 
                    type='email'
                    placeholder="E-mail ou usuário"
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                  />
                  {emailErr && <p>Por favor digite um e-mail válido!</p>}
                </div>

                <div className='wrap-input'>
                  <input 
                    className='input' 
                    type='password'
                    placeholder="Senha"
                    value={password}
                    onChange={event => setPasseword(event.target.value)}
                  />
                  {passwordErr && <p>Por favor digite uma senha mais segura!</p>}
                </div>
                
                <div className='container-login-form-btn'>
                  <button onClick={validate}>Login</button>
                </div>

                <div className='text-center'>
                  <span className='txt1'>Não possui conta? </span>
                  <Link className='txt2' to='/register'>
                    Cadastre-se
                  </Link>
                </div>
            </div>
        </div>
    );
}
