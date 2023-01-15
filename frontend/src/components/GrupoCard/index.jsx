//imagens de lanes
import Topo from '../../assets/lanes/dark/topo.svg';
import Selva from '../../assets/lanes/dark/selva.svg';
import Meio from '../../assets/lanes/dark/meio.svg';
import Suporte from '../../assets/lanes/dark/suporte.svg';
import Atirador from '../../assets/lanes/dark/atirador.svg';

import Tooltip from '@mui/material/Tooltip';

import './grupoCard.css';

const GrupoCard = ({ grupo }) => {
  const { nome, data, horario, ranqueada, topo, selva, meio, suporte, atirador } = grupo;

  return (
    <div className="card-group mt-5">
      <div>
        <h1>{nome}</h1>
        <div className='submenu'>
          <p>{data}</p>
          <p>{horario}h</p>
          <p>-</p>
          <p>{`${ranqueada ? "Competitivo" : "Casual"}`}</p>
        </div>
      </div>
      <div className='lanes-section'>
        <Tooltip title="Topo" placement="top" arrow>
          <a href="#">
            <span>
              <img src={Topo} alt="topo" />
            </span>

            <div className={`${topo[0] ? "indicador-off" : "indicador"}`}></div>

          </a>
        </Tooltip>
        <Tooltip title="Selva" placement="top" arrow>
          <a href="#">
            <span>
              <img src={Selva} alt="selva" />
            </span>
            <div className={`${selva[0] ? "indicador-off" : "indicador"}`}></div>

          </a>
        </Tooltip>
        <Tooltip title="Meio" placement="top" arrow>
          <a href="#">
            <span>
              <img src={Meio} alt="meio" />
            </span>
            <div className={`${meio[0] ? "indicador-off" : "indicador"}`}></div>

          </a>
        </Tooltip>
        <Tooltip title="Suporte" placement="top" arrow>
          <a href="#">
            <span>
              <img src={Suporte} alt="suporte" />
            </span>
            <div className={`${suporte[0] ? "indicador-off" : "indicador"}`}></div>

          </a>
        </Tooltip>
        <Tooltip title="Atirador" placement="top" arrow>
          <a href="#">
            <span>
              <img src={Atirador} alt="atirador" />
            </span>
            <div className={`${atirador[0] ? "indicador-off" : "indicador"}`}></div>
          </a>
        </Tooltip>
      </div>

    </div>
  );
};

export default GrupoCard;