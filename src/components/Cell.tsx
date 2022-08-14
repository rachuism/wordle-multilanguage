import classNames from 'classnames'

export type Value = string | number | boolean | undefined | null;
export type Mapping = { [key: string]: any };
export type Argument = Value | Mapping | Argument[];


type Props = {
    value?: string,
    position?: number
}

export const Cell = ({
    value,
    position
}: Props) => {

    var isHighContrast= true;
    var isFilled = true;
    var shouldReveal = true;
    var status = "";

    const classes = classNames(
        'w-14 h-14 border-solid border-2 flex items-center justify-center mx-0.5 text-4xl font-bold rounded dark:text-white',
        {
          'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-600':
            !status,
          'border-black dark:border-slate-100': value && !status,
          'absent shadowed bg-slate-400 dark:bg-slate-700 text-white border-slate-400 dark:border-slate-700':
            status === 'absent',
          'correct shadowed bg-orange-500 text-white border-orange-500':
            status === 'correct' && isHighContrast,
          'present shadowed bg-cyan-500 text-white border-cyan-500':
            status === 'present' && isHighContrast,
          'correct shadowed bg-green-500 text-white border-green-500':
            status === 'correct' && !isHighContrast,
          'present shadowed bg-yellow-500 text-white border-yellow-500':
            status === 'present' && !isHighContrast,
          'cell-fill-animation': isFilled,
          'cell-reveal': shouldReveal,
        }
    )

    return (
        <div className="cell">
            {value}
        </div>
    )
}