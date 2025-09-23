
import SelectedCard from '../SelectedCard/SelectedCard';



const SelectedPlayers = ({choosePlayers,removePlayer,setToggle}) => {



    return (
        <div className='w-10/12 mx-auto my-10 p-3 '>
            {
                choosePlayers.map(player => <SelectedCard removePlayer={removePlayer}  key={player.id} player={player} />)
            }
            <div>
                <button onClick={() => { setToggle(true) }} className='btn rounded-xl bg-[#E7FE29] mt-3 border-0'>Add More</button>
            </div>
        </div>
        
    );
};

export default SelectedPlayers;