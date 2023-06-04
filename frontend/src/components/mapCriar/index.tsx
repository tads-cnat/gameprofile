import Topo from "../../assets/lanes/dark/topo.svg";
import Selva from "../../assets/lanes/dark/selva.svg";
import Meio from "../../assets/lanes/dark/meio.svg";
import Suporte from "../../assets/lanes/dark/suporte.svg";
import Atirador from "../../assets/lanes/dark/atirador.svg";
import Maplol from "../../assets/img/mapLol.jpg"

import "./styles.css";
import { Group } from "../../entities/group";
import React, { useEffect, useState } from "react";

import Switch from '@mui/material/Switch';

export type onChangeReturn = {
    pick: string,
    topo: boolean,
    selva: boolean,
    meio: boolean,
    atirador: boolean,
    suporte: boolean
}

type Props={
    onMapChange: (data: onChangeReturn) => void,
}

type Values = {
    pick: string,
    topo: boolean,
    selva: boolean,
    meio: boolean,
    atirador: boolean,
    suporte: boolean
}

const initialState: Values = {
    pick: "",
    topo: false,
    selva: false,
    meio: false,
    atirador: false,
    suporte: false
}

const MapCriar: React.FC<Props> = ({onMapChange}) => {
    const [state, setState] = useState<Values>(initialState);

    const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        switch (e.target.name) {
            case "topo":
                setState({...state, topo: e.target.checked});
                onMapChange({...state, topo: e.target.checked})
                break;
            case "selva":
                setState({...state, selva: e.target.checked});
                onMapChange({...state, selva: e.target.checked})
                break;
            case "meio":
                setState({...state, meio: e.target.checked});
                onMapChange({...state, meio: e.target.checked})
                break;
            case "atirador":
                setState({...state, atirador: e.target.checked});
                onMapChange({...state, atirador: e.target.checked})
                break;
            case "suporte":
                setState({...state, suporte: e.target.checked});
                onMapChange({...state, suporte: e.target.checked})
                break;
            case "pick":
                    setState({...state, pick: e.target.value});
                    onMapChange({...state, pick: e.target.value})
                    break;
            default:
                break;
        }
    }

    return(
        <div id="map-criar">
            <img src={Maplol} alt="mapLol" />
            <div id="topo" className="position-box">
                <div className="position-box-img">
                    <img src={Topo} alt="Topo" />
                </div>
                <div className="position-box-input">
                    <label className='flex m-auto justify-start'>
                        <p className='my-auto'>Pick</p>
                        <input type='radio' name='pick' value="topo" className='ml-3 w-5' required checked={state.pick==="topo"} onChange={onChange} />
                    </label>
                    <label  className='flex m-auto justify-start'>
                        <p className='my-auto'>Reservar</p>
                        <Switch value={state.topo} onChange={onChange} name="topo"/>
                    </label>
                </div>
            </div>
            <div id="selva" className="position-box">
                <div className="position-box-img">
                    <img src={Selva} alt="Selva" />
                </div>
                <div className="position-box-input">
                    <label className='flex m-auto justify-start'>
                        <p className='my-auto'>Pick</p>
                        <input type='radio' name='pick' value="selva" className='ml-3 w-5' required checked={state.pick==="selva"} onChange={onChange}/>
                    </label>
                    <label  className='flex m-auto justify-start'>
                        <p className='my-auto'>Reservar</p>
                        <Switch value={state.selva} onChange={onChange} name="selva"/>
                    </label>
                </div>
            </div>
            
            <div id="meio" className="position-box">
            <div className="position-box-img">
                <img src={Meio} alt="Meio" />
            </div>
                <div className="position-box-input">
                    <label className='flex m-auto justify-start'>
                        <p className='my-auto'>Pick</p>
                        <input type='radio' name='pick' value="meio" className='ml-3 w-5' required checked={state.pick==="meio"} onChange={onChange}/>
                    </label>
                    <label  className='flex m-auto justify-start'>
                        <p className='my-auto'>Reservar</p>
                        <Switch value={state.meio} onChange={onChange} name="meio"/>
                    </label>
                </div>
            </div>

            <div id="suporte" className="position-box">
            <div className="position-box-img">
                <img src={Suporte} alt="Suporte" />
            </div>
                <div className="position-box-input">
                    <label className='flex m-auto justify-start'>
                        <p className='my-auto'>Pick</p>
                        <input type='radio' name='pick' value="suporte" className='ml-3 w-5' required checked={state.pick==="suporte"} onChange={onChange}/>
                    </label>
                    <label  className='flex m-auto justify-start'>
                        <p className='my-auto'>Reservar</p>
                        <Switch value={state.suporte} onChange={onChange} name="suporte"/>
                    </label>
                </div>
            </div>
            <div id="atirador" className="position-box">
            <div className="position-box-img">
                <img src={Atirador} alt="Atirador" />
            </div>
                <div className="position-box-input">
                    <label className='flex m-auto justify-start'>
                        <p className='my-auto'>Pick</p>
                        <input type='radio' name='pick' value="atirador" className='ml-3 w-5' required checked={state.pick==="atirador"} onChange={onChange}/>
                    </label>
                    <label  className='flex m-auto justify-start'>
                        <p className='my-auto'>Reservar</p>
                        <Switch value={state.atirador} onChange={onChange} name="atirador"/>
                    </label>
                </div>
            </div>
        </div>
        
    )
};

export default MapCriar;
