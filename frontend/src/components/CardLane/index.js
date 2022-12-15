//importando imagens das lanes
import topLane from '../../assets/top.png';
import junglane from '../../assets/jungle.png';
import midLane from '../../assets/mid.png';
import adcLane from '../../assets/adc.png';
import supportLane from '../../assets/support.png';

import Switch from '@mui/material/Switch';

const CardLane = (props) => {
    let selected = null;

    if(props.lane === "top"){
        selected = topLane;
    }else if(props.lane === "jungle"){
        selected = junglane;
    }else if(props.lane === "mid"){
        selected = midLane;
    }else if(props.lane === "adc"){
        selected = adcLane;
    }else if(props.lane === "sup"){
        selected = supportLane;
    }



    return(
        <div className="card-lane bg-slate-800 rounded text-white p-6">
            
            <div className="lane-id flex flex-col justify-center w-full">
                <img src={selected} alt={props.name} width='60px' className='m-auto'/>
                <span className='mx-auto my-2'>{props.name}</span>
            </div>
            <hr />
            <div className='lane-options flex flex-col w-full mt-5'>
                <label className='flex m-auto justify-start'>
                    <p className='my-auto'>Pick</p>
                    <input type='radio' color="secondary" name='pick' value={props.name} className='ml-3 w-5' required/>
                </label>
                <label  className='flex m-auto justify-start'>
                    <p className='my-auto'>Reservar</p>
                    <Switch color="secondary" name={props.name}/>
                </label>
            </div>
        </div>
    );

}

export default CardLane;