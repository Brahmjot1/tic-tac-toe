import React,{ useState } from 'react';
import './App.css';
import Board from './components/Board';
import ScoreBoard from './components/ScoreBoard';
import Reset from './components/Reset';
function App() 
{
  const [boardList,setBoardList]=useState(Array(9).fill(null));

  const [detectPlayer,setDetectPlayer]=useState(true);

  const [score,setScore]= useState({xScore:0,oScore:0});

  const [gameOver,setGameOver] = useState(false);

  // const boardList=["X","O","X","O","X","O","X","O","X"]

  //For do x o x o logic we have taken a usedState by default value true
   //then added the logic if value is true then x else o
   // we are seting it to false to get o next time

   const winCondition =[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
   


   const resetBoard = () =>{
       setGameOver(false)
       setBoardList(Array(9).fill(null));

   }

  const boardClickHandler = (blockIdx) => {
      const updateBoard = boardList.map((value,idx)=>{
        if(blockIdx===idx)
        {
          return detectPlayer===true ?"X":"O" 
        }
        else
        {
          return value;
        }
      });

      const winner =CheckWinner(updateBoard);

      if(winner)
      {
        if(winner==="O")
        {
       
        let{oScore}=score;
        oScore=oScore+1
        setScore({...score,oScore});
        }
      else
      {
        let{xScore}=score;
        xScore=xScore+1
        setScore({...score,xScore});
      }
     }
      console.log(score);

      setBoardList(updateBoard);
      setDetectPlayer(!detectPlayer);
      
  }

  const CheckWinner =(boardList) =>{
    for(let i=0;i<winCondition.length;i++)
    {
      const[x,y,z]=winCondition[i];
      if(boardList[x] && boardList[x]===boardList[y] && boardList[z]===boardList[y] )
      {
        setGameOver(true);
        console.log(boardList[x]);
        return boardList[x];
      }
     
    }
  }


  return (
    <div className="App">
      <ScoreBoard score={score} detectPlayer={detectPlayer}/>
    <Board boardList={boardList} onClick={ gameOver ? resetBoard:boardClickHandler}/>
    <Reset resetBoard={resetBoard}/>
    </div>
  );
}

export default App;
