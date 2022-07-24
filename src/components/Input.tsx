import {  useEffect } from "react";

type Props = {
    onChar: (value: string) => void
  }

export const Input = ({ onChar }: Props) => {
  useEffect(() => {
      const listener = (ev: KeyboardEvent) => {
        const key = ev.key
        onChar(key)
      }
      
      window.addEventListener('keyup', listener)
      return () => {
        window.removeEventListener('keyup', listener)
      }
  }, [onChar])
  return <div >Hello</div>;
}