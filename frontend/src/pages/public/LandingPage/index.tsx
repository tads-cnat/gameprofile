import { Link } from 'react-router-dom';
// import LandingNavBar from '../../../components/LandingNavBar'
import logo from "../../../assets/logo/logo.svg"
import imgJogo from "../../../assets/img/imgJogo.png"


import './styles.css'
import { ButtonPrimary } from '../../../components/styled-components/Buttons';

const LandingPage = () => {
    return(
        <div>
        {/* // <div id="landing-page">
        //     <LandingNavBar/> */}
            <header id="header">
            <nav className="nav-container">
                <a className="logo" href="#">Game<span>Profile</span></a>
                <div className="menu">
                <ul>
                    <li><a className="title" href="#home">Inicio</a></li>
                    <li><a className="title" href="#about">Sobre</a></li>
                    <li><a className="title" href="#register">Cadastrar</a></li>
                    <li>
                    <Link className="button" to='/login'>
                        <ButtonPrimary>Login</ButtonPrimary>
                    </Link>
                    </li>
                </ul>
                </div>
            </nav>
            </header>
            <main>
            <section className="section" id="home">
                <div className="lading-page-container">
                <div className="text">
                    <h1 className="title">Game<span>Profile</span></h1>
                    <p>Uma plataforma que conectar jogadores com outros jogadores.</p>
                    <Link to='/login'>
                        <ButtonPrimary>Entrar</ButtonPrimary>
                    </Link>
                </div>
                <div className="image">
                    <img
                    src={logo}
                    alt="imagem 1"
                    />
                </div>
                </div>
            </section>

            <section className="section" id="about">
                <div className="lading-page-container">
                <div className="image">
                    <img
                    src={imgJogo}
                    alt="imagem 2"
                    />
                </div>
                <div className="text">
                    <h2 className="title">Sobre Nós</h2>
                    <p>
                    Fundada em Natal (RN), a rede social Gameprofile tem como ênfase permitir a interação entre jogadores de games em geral.
                    </p>
                    <br />
                    <p>
                    O Gameprofile é uma rede social que busca conectar jogadores com outros jogadores, de forma simples, pretendendo proporcionar aos jogadores uma forma fácil de encontrar colegas para formar grupos para jogarem juntos.
                    </p>
                    <br />
                </div>
                </div>
            </section>

            <section className="section" id="register">
                <div className="img-background"></div>
                <div className="lading-page-container">
                    <div className="text">
                        <h2 className="title">Entre e participe de um grupo!</h2>
                        <p>Se cadastre na plataforma e participe de grupos ou crie seus próprios grupos para jogar LOL.</p>
                        <Link to='/cadastro'>
                            <ButtonPrimary>Fazer Cadastro</ButtonPrimary>
                        </Link>
                    </div>
                </div>
            </section>
            </main>

            <footer>
            <div className="lading-page-container">
                <div>
                <a className="logo logo-alt" href="#home">Game<span>Profile</span></a>
                <p>©2021 GameProfile.</p>
                <p>All rights reserved.</p>
                </div>
            </div>
            </footer>
        </div>

    );

}

export default LandingPage;