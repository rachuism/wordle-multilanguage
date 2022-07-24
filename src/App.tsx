import './App.css';
import Wordleboard, {Logger} from './components/Wordleboard';
import React from 'react';
import {Input} from './components/Input';


function App() {

const [word, setWord] = React.useState("");
const [goalWord, setGoalWord] = React.useState("");
const [gameWin, setGameWin] = React.useState(false);

const onChar = (char : string ) => {
  setGoalWord("goal");
  setWord(`${word}${char}`)
  if(word.length == 4){
    if (word == goalWord){
      setGameWin(true);
      console.log("you win")
    }
  }
}

  return (
    <div id="app">
      <Wordleboard
        word = {word}
        />
      <Logger/>
      <Input
        onChar = {onChar}
      />
    </div>
  );
}

export default App;
