import react, {ChangeEvent, useState} from 'react';
import './Wordleboard.css'

const verticalAxis = [1, 2, 3, 4, 5, 6, 7, 8];
const horizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];

export const Logger = () => {
    // Inputs with `onChange` should be controlled,
    // e.g. they have to have a value:
    const [value, setValue] = useState('');
    
    // e.target is a reference to the element
    // this event was fired on.
    //Add keyboard support
    const logAndUpdate = (e: ChangeEvent): void => {
      const newValue = (e.target as HTMLTextAreaElement).value;
      console.log(newValue);
      setValue(newValue);
    }
    
    return (
      <input 
        type="text" 
        onChange={logAndUpdate} 
        value={value} />
    );
  }

  type Props = {
    word: string
  }


export default function Wordleboard(word: Props) {
    let board = [];
    for(let i=0; i <word.word.length; i++){
            board.push(<div className='tile'>[{word.word[i]}]</div>)
    }
    return <div id="Wordleboard">{board}</div>;
}