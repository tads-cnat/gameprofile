//importando imagens das lanes
import topLane from '../../assets/lanes/light/topo.svg';
import junglane from '../../assets/lanes/light/selva.svg';
import midLane from '../../assets/lanes/light/meio.svg';
import adcLane from '../../assets/lanes/light/atirador.svg';
import supportLane from '../../assets/lanes/light/suporte.svg';
import "./styles.css"
import { useEffect, useState } from 'react';

import Switch from '@mui/material/Switch';

const CardLaneGroup = (props:any) => {

    const [checked, setChecked] = useState(false);
    const [selected , setSelected] = useState('');


    const handleChange = (event:any) => {
        setChecked(event.target.checked);
    };

    useEffect(() => {
        if(props.lane === "topo"){
            setSelected(topLane);
        }else if(props.lane === "selva"){
            setSelected(junglane);
        }else if(props.lane === "meio"){
            setSelected(midLane);
        }else if(props.lane === "atirador"){
            setSelected(adcLane);
        }else if(props.lane === "suporte"){
            setSelected(supportLane);
        }
    })

    return(
        <div className="card-lane bg-slate-800 rounded text-white p-6">
            
            <div className="lane-id flex flex-col justify-center w-full">
                <img src={selected} alt={props.name} width='60px' className='m-auto'/>
                <span className='mx-auto my-2'>{props.name}</span>
            </div>
            <hr />
            <div className='lane-options flex flex-col w-full mt-5'>
                <label className='flex m-auto justify-start'>
                    <p className='my-auto'>----------</p>
                </label>
            </div>
        </div>
    );
}

export default CardLaneGroup;