import React, { useState } from "react"
import Logo from '../../../assets/logo/logo.svg';
import {Link} from 'react-router-dom';
import {ButtonLogin,  ButtonBack} from '../../../components/styled-components/Buttons';
import './styles.css'


const Cadastro = () => {
    const [email, setEmail] = useState('')
    const [password, setPasseword] = useState('')
    const [username, setUsername] = useState('')

    return(
        <div className="content w-full">
            <span>
                <Link to="/">
                <ButtonBack>Voltar para Inicio</ButtonBack>
                </Link>
            </span>
            <div className="container-register">
                <div className="logo-img">
                <img src={Logo} alt="GameProfile logo" className="logo mx-auto mb-9"/>    
                </div>

                <form className="login-form">
                    <div className='container-login'>
                        <div className='txt'>
                            <span className='txt'>Cadastre-se!</span>
                            <hr />
                        </div>
                        <div className='wrap-input'>
                            <input 
                                className={`input-text-cadastro`} 
                                type='email'
                                placeholder="E-mail"
                                value={email}
                                onChange={event => setEmail(event.target.value)}
                                />
                        </div>

                        <div className="wrap-input">
                            <input
                                className={`input-text-cadastro`}
                                type="email"
                                placeholder="Usuário"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                />
                        </div>

                        <div className='wrap-input'>
                            <input 
                                className={`input-text-cadastro`}  
                                type='password'
                                placeholder="Senha"
                                value={password}
                                onChange={event => setPasseword(event.target.value)}
                                />
                        </div>

                        <div className='wrap-input'>
                            <input 
                                className={`input-text-cadastro`}  
                                type='password'
                                placeholder="Confirmar Senha"
                                value={password}
                                onChange={event => setPasseword(event.target.value)}
                                />
                        </div>

                        <div className=''>
                            <ButtonLogin className="form-login-btn">Cadastre-se</ButtonLogin>
                        </div>

                        <div className='login-link'>
                            <span className='txt1'>Já possui conta? </span>
                            <Link className='txt2' to='/login'>Login</Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default Cadastro;