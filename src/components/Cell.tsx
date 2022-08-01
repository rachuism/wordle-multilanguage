
type Props = {
    value?: string,
    position?: number
}

export const Cell = ({
    value,
    position
}: Props) => {
    return (
        <div className="cell">
            {value}
        </div>
    )
}