import './App.css';
import Wordleboard, {Logger} from './components/Wordleboard';
import React from 'react';
import {Input} from './components/Input';

const [word, setWord] = React.useState("");
const [goalWord, setGoalWord] = React.useState("");
const [gameWin, setGameWin] = React.useState(false);

const onChar = (char : string ) => {
  setWord(`${word}${char}`)
  if(word.length == 5){
    if (word === goalWord){
      setGameWin(true);
    }
  }
}

function App() {
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
