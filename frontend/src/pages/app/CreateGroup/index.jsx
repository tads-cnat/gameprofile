import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import './index.css'

import CardLane from '../../../components/CardLane';


const CreateGroup = () =>{
    return(
        <div className="w-full h-full p-14">
            <Box sx={{ display: 'flex', alignItems: 'center' }} className='bg-gray-200 rounded p-10 w-full h-full'>

                <form action="#" className="w-full flex flex-col justify-between">

                <label className='mt-5 flex flex-row align-middle'>
                    <h1 className="text-3xl text-dark">Nome do Grupo:<span className="red-text">*</span></h1>
                    <input type="text" name="nome" placeHolder='Insira o nome do grupo...' id="nome-grupo" className='text-3xl ml-5 p-1 bg-gray-700 rounded text-gray-200' />
                </label>

                <label className='mt-5 flex flex-row align-middle'>
                    <h1 className="text-2xl my-auto">Data:<span className="red-text">*</span></h1>
                    <input type="date" name="data" id="data-grupo" className='text-2xl ml-5 p-1 bg-gray-700 rounded text-gray-200'/>
                </label>

                <label className='mt-5 flex flex-row align-middle'>
                    <h1 className="text-2xl my-auto">Horário:<span className="red-text">*</span></h1>
                    <input type="time" name="hora" id="hora-grupo" className='text-2xl ml-5 p-1 bg-gray-700 rounded text-gray-200'/>
                </label>

                <div className='flex justify-around mt-10'>   

                <CardLane lane='top' name='top'/>
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