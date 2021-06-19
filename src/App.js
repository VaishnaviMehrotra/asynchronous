import React, {useState,useEffect} from 'react';
import Board from './components/Board.js'
const initialState=["","","","","","","","",""];
function App() {
  const [game, updateState] = useState(initialState);
  // console.log(game)
  const [isChance,updateChance]=useState(false);
  const onClicked=(index)=>{
    let strings=Array.from(game);   
      console.log(strings);
      if(strings[index]){
        alert("Something Went Wrong !");
      }else{
        strings[index]=isChance?"X":"O";
      updateState(strings);
      updateChance(!isChance);
      }
    
  }
  useEffect(()=>{
    const winner=checkWinner();
    if(winner){
      alert(`${winner} has Won The Game !`);
      updateState(initialState);
    } 
    // else if(!winner){
      //   alert("Game Over");
      // }
      // eslint-disable-next-line
  },[game])
  const checkWinner=()=> {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (game[a] && game[a] === game[b] && game[a] === game[c]) {
        return game[a];
      }
    }
    return null;
  }
    return (
      <div className="header">
        <h1>Tic-Tac-Toe</h1>
      <div className="row center">
        <Board className="b" state={game[0]} onClick={()=>onClicked(0)}/>
        <Board className="b-top b-bottom" state={game[1]} onClick={()=>onClicked(1)}/>
        <Board className="b" state={game[2]} onClick={()=>onClicked(2)}/>
        </div>
        <div className="row center">
        <Board className="b-left b-right" state={game[3]} onClick={()=>onClicked(3)}/>
        <Board state={game[4]} onClick={()=>onClicked(4)}/>
        <Board className="b-left b-right" state={game[5]} onClick={()=>onClicked(5)}/>
        </div>
        <div className="row center">
        <Board className="b" state={game[6]} onClick={()=>onClicked(6)}/>
        <Board className="b-top b-bottom" state={game[7]} onClick={()=>onClicked(7)}/>
        <Board className="b" state={game[8]} onClick={()=>onClicked(8)}/>
        </div>
        <button className="restart" onClick={()=>updateState(initialState)}>Restart</button>
      </div>
    )
  
}
export default App;