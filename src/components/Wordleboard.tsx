import react from 'react';
import './Wordleboard.css'

const verticalAxis = [1, 2, 3, 4, 5, 6, 7, 8];
const horizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];

export default function Wordleboard() {
    let board = [];

    for(let i=0; i <horizontalAxis.length; i++){
        for(let j=0; j<verticalAxis.length; j++){
            board.push(<span>{horizontalAxis[i]} {verticalAxis[j]}</span>)
        }
    }
    return <div id="Wordleboard">{board}</div>;
}