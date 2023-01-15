import GrupoCard from '../../../components/GrupoCard';


import mock from '../../../mock/grupos.json';

const Grupos = () => {

    return (
        <div className='mx-auto lg:w-4/5 h-full p-10'>

            <div className='pesquisa-filtro'>
                <input type="text" placeholder='Pesquisar' />
            </div>

            <div className='flex flex-row w-fit align-middle justify-center items-center'>
                <div className='indicador-header'></div>
                <h1 className='ml-3 text-lg'> Posição em Aberto </h1>
            </div>

            {mock.grupos.map((grupo) => {
                return (
                    <GrupoCard grupo={grupo} />
                );
            })}
        </div>
    );
}

export default Grupos;