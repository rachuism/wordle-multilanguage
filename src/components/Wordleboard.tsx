import react, {ChangeEvent, useState} from 'react';
import './Wordleboard.css'
import { Cell } from'./Cell'

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
              return <div>
                <Cell value={word.word[0]} />
                <Cell value={word.word[1]} />
                <Cell value={word.word[2]} />
                <Cell value={word.word[3]} />
              </div>
}