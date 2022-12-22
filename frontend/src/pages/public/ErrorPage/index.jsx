import DarkLogo from '../../../assets/logoDark.png';
import Link from "react-router-dom"
import './errorPage.css';

export default function ErrorPage() {
  return (
    <div className="flex align-middle items-center justify-center w-full h-full" id="container">
      <div className="text-white m-auto h-fit w-fit">
        
        <figure>
          <img src={DarkLogo} alt="Logo" className="w-64 h-64 m-auto" />
        </figure>
        <h2 className="font-bold text-9xl text-center">404</h2>
        <p className="text-lg text-center">O Recurso que você deseja acessar está indisponivel volte para a <a href="/" className=' underline underline-offset-2	text-blue-200'> Home </a> </p>


      </div>
    </div>
  );
}