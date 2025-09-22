import React from 'react';
import SelectedCard from '../SelectedCard/SelectedCard';


const SelectedPlayers = ({choosePlayers,removePlayer}) => {

    return (
        <div className='w-10/12 mx-auto my-10 p-3 '>
            {
                choosePlayers.map(player => <SelectedCard removePlayer={removePlayer}  key={player.id} player={player} />)
            }
        </div>
    );
};

export default SelectedPlayers;