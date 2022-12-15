import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';

import CardLane from '../../components/CardLane';


const CreateGroup = () =>{
    return(
        <div className="w-full h-full p-14">
            <Box sx={{ display: 'flex', alignItems: 'center' }} className='bg-gray-200 rounded p-10 w-full h-full'>

                <form action="#" className="w-full h-full flex flex-col justify-between">

                <label>
                    <h1 className="text-6xl">Nome do Grupo</h1>
                    <input type="text" name="nome" placeHolder='Digite o nome do grupo' id="nome-grupo" className='bg-gray-400 rounded w-3/6 h-10 py-1 px-3 text-gray-200' />
                </label>

                <label className='mt-5 flex flex-row align-middle'>
                    <h1 className="text-xl my-auto">Data</h1>
                    <input type="date" name="data" id="data-grupo" className='ml-5 p-1 bg-gray-700 rounded text-gray-200'/>
                </label>

                <label className='mt-5 flex flex-row align-middle'>
                    <h1 className="text-xl my-auto">Horario</h1>
                    <input type="time" name="hora" id="hora-grupo" className='ml-5 p-1 bg-gray-700 rounded text-gray-200'/>
                </label>

                <div className='flex justify-around mt-10'>   

                <CardLane lane='top' name='top' />
                <CardLane lane='jungle' name='jungle' />
                <CardLane lane='mid' name='mid' />
                <CardLane lane='adc' name='adc' />
                <CardLane lane='sup' name='sup' />


                </div>

                <label className='mt-5 flex flex-row align-middle'>
                    <h1 className="text-xl my-auto">Casual</h1>
                    <Switch color="secondary" name="rank"/>
                    <h1 className="text-xl my-auto" >Ranqueada</h1>
                </label>


                {/* button area */}
                <div className='flex flex-row-reverse mt-5'>
                    <button action='submmit' className='bg-purple-700 rounded text-gray-200 py-2 px-7'>Criar</button>
                    {/* cancel button */}
                    <a href="/" className='bg-gray-400 py-2 px-7 rounded mr-5'>Cancelar</a>
                </div>

                </form>
            
            
            </Box>
        </div>
    )

}

export default CreateGroup;