import React, { use } from 'react';
import PlayerCard from '../PlayerCard/PlayerCard';


const AvailablePlayers = ({ playerPromise, availableBalance, setAvailableBalance,choosePlayers,setChoosePlayers }) => {


    const playerData = use(playerPromise);
   

    return (
        <div className='max-w-10/12 mx-auto my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6'>

            {
                playerData.map(player => <PlayerCard availableBalance={availableBalance} setAvailableBalance={setAvailableBalance}  player={player} choosePlayers={choosePlayers} setChoosePlayers={setChoosePlayers}/>)
            }


        </div>
    );
};

export default AvailablePlayers;