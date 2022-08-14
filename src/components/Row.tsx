import { Cell } from './Cell'

type Props = {
   letter: string
   position: number 
}

export const Row = ({
letter, position
}: Props) => {
    return (
        <div className="flex justify-center mb-1">
        <Cell
            value = {letter}
            position = {position}
        />
        </div>
    )
}