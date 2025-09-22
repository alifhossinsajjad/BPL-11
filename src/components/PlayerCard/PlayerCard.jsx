
import UserImg from '../../assets/user-1.png'
import countryFlag from '../../assets/report-1.png'
import { useState } from 'react';
import { toast } from 'react-toastify';

const PlayerCard = ({ player, availableBalance, setAvailableBalance,choosePlayers,setChoosePlayers }) => {


    const [isSelected, setIsSelected] = useState(false)


    const handleSelected = (playerData) => {
        const playerBrandValue = parseInt(playerData.playerBrandValue.split('$').join('').split('USD').join('').split(',').join(''))
        if (availableBalance < playerBrandValue) {
            toast('Not enough balance')
            return;
        }
        { setIsSelected(true) }
            setAvailableBalance(availableBalance - playerBrandValue);

            setChoosePlayers([...choosePlayers, playerData])
           
    }
        return (
            <div key={player.id}
                className="card bg-base-100 w-80 mx-auto md:w-96 xl:w-96 shadow-sm p-4">
                <figure>
                    <img
                        src={player.playerImg}
                        alt="Shoes"
                        className='w-full h-62 object-cover' />
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
                        <p>Price : {player.
                            playerBrandValue
                        }</p>
                        <button disabled={isSelected} onClick={() => {
                            handleSelected(player)
                        }} className="btn">{isSelected === true ? "Selected Player" : "Choose the Player"}</button>
                    </div>
                </div>
            </div>
        );
    };

    export default PlayerCard;