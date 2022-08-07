import { Cell } from './Cell'

type Props = {
   letter: string
   position: number 
}

export const Row = ({
letter, position
}: Props) => {
    return (
        <Cell
            value = {letter}
            position = {position}
        />
    )
}