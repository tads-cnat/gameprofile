import Map from "../../../components/map";

import './styles.css';

const Grupo = () => {
    return(
        <div className="app-area">
            <h1 className="text-3xl font-bold">Crie seu grupo!</h1>
            <p className="text-gray-100">Escolher pelo menos uma Posição e o Tipo de Partida.</p>
            <div className="form-group">
                <label className="text-2xl text-dark">Nome do Grupo:<span className="red-text">*</span></label>
                <input 
                    type="text" 
                    name="nome" 
                    placeholder='Insira o nome do grupo...' 
                    id="nome-grupo" 
                    className='text-xl ml-5 bg-gray-700 rounded text-gray-200 p-3 w-2/4' 
                    required/>
            </div>
            <div className="container-map">
                <Map  />
            </div>
            <div className='flex flex-row-reverse mt-5'>
            <button type="submit" id='button-purple' className='rounded py-2 px-7'> Criar </button>
            <a href="/" className='py-2 px-7 rounded mr-5 button-grey'> Cancelar </a>
            </div>
        </div>
    );
};

export default Grupo;