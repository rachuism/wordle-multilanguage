import { KeyboardEvent, useEffect } from "react";

type Props = {
    onChar: (value: string) => void
  }

export const Input = ({ onChar }: Props) => {
  useEffect(() => {
      const listener = (e: KeyboardEvent) => {
        const key = e.key
        onChar(key)
      }
      window.addEventListener('keyup', listener)
      return () => {
        window.removeEventListener('keyup', listener)
      }
  }, [onChar])
  return <div >Hello</div>;
}