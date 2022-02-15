import React from 'react';
import './App.css';
import Home from './Components/Home-Component/Home';
import Student from './Components/Student-Component/Student';
import Game from './Components/Game-Component/Game';
import Lotto from './Components/Lottery-Component/Lottery';

function App() {
  return (
    <div className="App">
     {/* <Student/> */}
     {/* <Home/> */}
     {/* <Game/> */}
     <Lotto/>
    </div>
  );
}

export default App;
