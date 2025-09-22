
import './App.css'
import { Suspense, useState } from 'react'
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers'
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers'
import NavBar from './components/NavBar/NavBar'


const playerPromise = fetch("/utilitis/cricket_players_100.json").then(res => res.json())  



function App() {


  const [toggle, setToggle] = useState(true)

  const [availableBalance, setAvailableBalance] = useState(40000000)  

  const [choosePlayers, setChoosePlayers] = useState([])




  return (
    <>

        <NavBar availableBalance= {availableBalance}/>

        <div className='w-10/12 mx-auto my-5 p-3 flex justify-between items-center'>
          <h1 className='font-bold text-2xl'>{toggle === true ? 'Available players' : 'Selected Player'}</h1>

          <div className=' font-bold'>
            <button onClick={() => {setToggle(true)}} className={`py-3 px-4 border-1 border-gray-400 rounded-l-2xl border-r-0  cursor-pointer ${toggle === true ? 'bg-[#E7FE29]':[]}`}>Available Players </button>
            <button onClick={() => {setToggle(false)}} className={`py-3 px-4 border-1 border-gray-400 rounded-r-2xl border-l-0 cursor-pointer ${toggle === !true ? 'bg-[#E7FE29]':[]}`}>Selected Players <span>0{}</span></button>
          </div>
        </div>



        {
          toggle === true ?<Suspense fallback={<div className='text-center text-3xl font-bold mt-20'><span className="loading loading-spinner loading-xl"></span></div>}>
        <AvailablePlayers availableBalance={availableBalance} setAvailableBalance ={setAvailableBalance} playerPromise={playerPromise} choosePlayers={choosePlayers} setChoosePlayers={setChoosePlayers}/>
      </Suspense> : <Suspense>
      <SelectedPlayers choosePlayers={choosePlayers}/>
    </Suspense>
        }
      
      



    
    </>
  )
}

export default App
