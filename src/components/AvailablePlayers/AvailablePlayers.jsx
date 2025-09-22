import React, { use } from 'react';
import UserImg from '../../assets/user-1.png'
import countryFlag from '../../assets/report-1.png'

const AvailablePlayers = ({ playerPromise }) => {


    const playerData = use(playerPromise);
    console.log(playerData);

    return (
        <div className='max-w-10/12 mx-auto my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6'>

            {
                playerData.map(player => <div key={player.id}
                    className="card bg-base-100 w-96 shadow-sm p-4">
                    <figure>
                        <img
                            src={player.playerImg}
                            alt="Shoes" />
                    </figure>
                    <div className="m-4">
                        <div className='flex items-center gap-3 mt-2 mb-3'>
                            <img src={UserImg} alt="" />
                            <h2>{player.playerName}</h2>
                        </div>
                        <div className='flex justify-between items-center mb-3 border-b pb-3 border-gray-300'>
                            <div className='flex items-center '>
                                <img src={countryFlag} alt="" />
                                <span>{player.playerCountry}</span>
                            </div>
                            <button className="btn">{player.playerDesignation}</button>
                        </div>

                        <div className='flex justify-between items-center mb-3'>
                            <span>Rating :</span>
                            <span>{player.playerRating}</span>
                        </div>

                        <div className='flex justify-between items-center mb-3'>
                            <span>{player.playerHand}</span>
                            <span>{player.playerRole}</span>
                        </div>

                        <div className="card-actions mt-4 flex justify-between items-center">
                            <p>Price: {player.
                                playerBrandValue
                            }</p>
                            <button className="btn">Choose Player</button>
                        </div>
                    </div>
                </div>)
            }


        </div>
    );
};

export default AvailablePlayers;