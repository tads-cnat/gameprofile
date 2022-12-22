import React, { useState } from "react"
import Logo from '../../../assets/logo.png';
import {Link} from 'react-router-dom';
import './styles.css'


const Cadastro = () => {
    const [email, setEmail] = useState('')
    const [password, setPasseword] = useState('')
    const [name, setName] = useState('')

    return(
        <div className="container-register">
            <div className="logo-img">
              <img src={Logo} alt="GameProfile logo" className="logo mx-auto mb-9"/>    
            </div>

            <form className="login-form">
                <div className='contaiver-login'>
                    <div className='txt'>
                        <span className='txt'>Cadastre-se!</span>
                        <hr />
                        <br />
                    </div>
                    <div className='wrap-input'>
                        <input 
                            className='input' 
                            type='email'
                            placeholder="E-mail"
                            value={email}
                            onChange={event => setEmail(event.target.value)}
                        />
                    </div>

                    <div className="wrap-input">
                        <input
                            className={name !== "" ? "has-val input" : "input"}
                            type="email"
                            placeholder="Usário"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div className='wrap-input'>
                        <input 
                            className='input' 
                            type='password'
                            placeholder="Senha"
                            value={password}
                            onChange={event => setPasseword(event.target.value)}
                        />
                    </div>

                    <div className='wrap-input'>
                        <input 
                            className='input' 
                            type='password'
                            placeholder="Confirmar Senha"
                            value={password}
                            onChange={event => setPasseword(event.target.value)}
                        />
                    </div>
                    <br />
                    <div className='container-register-login-form-btn'>
                        <button className="form-login-btn">Cadastre-se</button>
                    </div>
                    <br />
                    <div className='text-center'>
                        <span className='txt1'>Já possui conta? </span>
                        <Link className='txt2' to='/'>Login</Link>
                    </div>
                </div>
            </form>
        </div>
    )
};

export default Cadastro;