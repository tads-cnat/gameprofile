import CardLaneGroup from "../../../components/CardLaneGroup";

const Grupo = () => {
    return(
        <div className="app-area">
            <h1>Grupo</h1>
            <div className='flex justify-around mt-10'>   

                <CardLaneGroup lane='topo' name='topo' />
                <CardLaneGroup lane='selva' name='selva' />
                <CardLaneGroup lane='meio' name='meio' />
                <CardLaneGroup lane='atirador' name='atirador' />
                <CardLaneGroup lane='suporte' name='suporte' />

                </div>
        </div>
    );
};

export default Grupo;