import './App.css';

import Board from './components/Board';
const boardList=["X","O","X","O","X","O","X","O","X"]
function App() {
  return (
    <div className="App">
    <Board boardList={boardList} onClick={null}/>
    </div>
  );
}

export default App;
