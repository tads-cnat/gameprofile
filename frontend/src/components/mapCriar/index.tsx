import Topo from "../../assets/lanes/dark/topo.svg";
import Selva from "../../assets/lanes/dark/selva.svg";
import Meio from "../../assets/lanes/dark/meio.svg";
import Suporte from "../../assets/lanes/dark/suporte.svg";
import Atirador from "../../assets/lanes/dark/atirador.svg";
import Maplol from "../../assets/img/mapLol.jpg"

import "./styles.css";
import { Group } from "../../entities/group";
import { FunctionComponent, ReactElement, useState } from "react";

import Switch from '@mui/material/Switch';

const Map: FunctionComponent = (): ReactElement => {
    const [topChecked, setTopChecked] = useState(false);
    const [topSelected , setTopSelected] = useState('');
    return(
        <div id="map">
            <img src={Maplol} alt="mapLol" />
            <div id="topo" className="position-box">
                <div className="position-box-img">
                    <img src={Topo} alt="Topo" />
                </div>
                <div className="position-box-input">
                    <label className='flex m-auto justify-start'>
                        <p className='my-auto'>Pick</p>
                        <input type='radio' name='pick' value="Top" className='ml-3 w-5' required/>
                    </label>
                    <label  className='flex m-auto justify-start'>
                        <p className='my-auto'>Reservar</p>
                        <Switch value={topChecked} onChange={(e:React.ChangeEvent<HTMLInputElement>) => setTopChecked(e.target.checked)} name="Top"/>
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
                        <input type='radio' name='pick' value="Top" className='ml-3 w-5' required/>
                    </label>
                    <label  className='flex m-auto justify-start'>
                        <p className='my-auto'>Reservar</p>
                        <Switch value={topChecked} onChange={(e:React.ChangeEvent<HTMLInputElement>) => setTopChecked(e.target.checked)} name="Top"/>
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
                        <input type='radio' name='pick' value="Top" className='ml-3 w-5' required/>
                    </label>
                    <label  className='flex m-auto justify-start'>
                        <p className='my-auto'>Reservar</p>
                        <Switch value={topChecked} onChange={(e:React.ChangeEvent<HTMLInputElement>) => setTopChecked(e.target.checked)} name="Top"/>
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
                        <input type='radio' name='pick' value="Top" className='ml-3 w-5' required/>
                    </label>
                    <label  className='flex m-auto justify-start'>
                        <p className='my-auto'>Reservar</p>
                        <Switch value={topChecked} onChange={(e:React.ChangeEvent<HTMLInputElement>) => setTopChecked(e.target.checked)} name="Top"/>
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
                        <input type='radio' name='pick' value="Top" className='ml-3 w-5' required/>
                    </label>
                    <label  className='flex m-auto justify-start'>
                        <p className='my-auto'>Reservar</p>
                        <Switch value={topChecked} onChange={(e:React.ChangeEvent<HTMLInputElement>) => setTopChecked(e.target.checked)} name="Top"/>
                    </label>
                </div>
            </div>
        </div>
        
    )
};

export default Map;
