import React from 'react';
import deleteImg from '../../assets/Frame.png'

const SelectedCard = ({ player,removePlayer, }) => {
    console.log(player);

    const handeRemovePlayer = ()=> {
        removePlayer(player)
    }
    return (
        <div key={player.id} className='w-10/12 mx-auto my-10 p-3 '>
            <div className='flex justify-between items-center '>
                <div className='flex gap-5 items-center'>
                    <img src={player.playerImg} alt="" className='h-30 w-30 rounded-xl' />
                    <div>
                        <h1>{player.playerName}</h1>
                        <p>{player.playerRole}</p>
                    </div>
                </div>

                <div onClick={handeRemovePlayer}>
                    <img src={deleteImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default SelectedCard;