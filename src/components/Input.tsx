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
  }, [onChar])
  return <div >Hello</div>;
}