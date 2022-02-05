import './App.css';
import Wordleboard, {Logger} from './components/Wordleboard';
import React from 'react';
import {Input} from './components/Input';


function App() {

const [word, setWord] = React.useState("");
const [goalWord, setGoalWord] = React.useState("");
const [gameWin, setGameWin] = React.useState(false);


setGoalWord("goal");
const onChar = (char : string ) => {
  setWord(`${word}${char}`)
  if(word.length == 5){
    if (word === goalWord){
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
