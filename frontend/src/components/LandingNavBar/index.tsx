import {Link} from 'react-router-dom'
import {ButtonPrimary} from '../styled-components/Buttons'
import Logo from '../../assets/logo/logo.svg'
import './styles.css'

const LandingNavBar = () => {
    return(
        <div id="navbar">
            {/* <img id="logo" src={Logo}/> */}
            <h2 id="texto-chamativo"> Entre no Jogo </h2>
            <nav>
                <ul>
                    <li>
                        <Link to='/login'>
                            <ButtonPrimary>Entrar</ButtonPrimary>
                        </Link>
                    </li>
                    <li>
                        <Link to='/cadastro'>
                            <ButtonPrimary>Cadastrar</ButtonPrimary>
                        </Link>
                    </li>
                </ul> 
            </nav>
        </div>
    )
}

export default LandingNavBar