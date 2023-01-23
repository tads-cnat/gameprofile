import logo from '../../../assets/logo.svg';
import { Link } from 'react-router-dom';

import './landingPage.css';

const LandingPage = () => {
    return(
        <div className='flex flex-row items-center justify-center w-full h-full fundo'> 

            <div className="w-1/2">
                <img src={logo} alt className='w-4/6 m-auto' />
            </div>
            <div className="w-1/2 h-full flex items-center align-middle justify-center flex-col">
                <div>
                    <h1 className='text-5xl text-gray-200'>Bem vindo a 
                    <span className='highlight'> GameProfile</span>!</h1>
                </div>
                <div className='flex flex-row justify-around'>
                    <Link to='/login' className='btn'>Login</Link>
                    <Link to='/cadastro' className='btn'>Cadastre-se</Link>
                </div>
            </div>

        </div>
    )
}

export default LandingPage;