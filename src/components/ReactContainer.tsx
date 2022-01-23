import { KeyboardEvent, useEffect } from "react";

type Props = {
    onChar: (value: string) => void
    onDelete: () => void
    onEnter: () => void
    guesses: string[]
  }

  useEffect(() => {
      const listener = (e: KeyboardEvent) => {
        const key = e.key
        onChar(key)
      }
  }, [onChar])