
import './App.css'
import { Suspense } from 'react'
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers'
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers'
import NavBar from './components/NavBar/NavBar'


const playerPromise = fetch("../public/utilitis/cricket_players_100.json").then(res => res.json())  



function App() {



  return (
    <>

        <NavBar/>
      

      <Suspense fallback={<div className='text-center text-3xl font-bold mt-20'><span className="loading loading-spinner loading-xl"></span></div>}>
        <AvailablePlayers playerPromise={playerPromise}/>
      </Suspense>



    <Suspense>
      <SelectedPlayers/>
    </Suspense>
    </>
  )
}

export default App
