import { RefObject, useState, useEffect } from 'react'

export const useKeyPress = (
  target: string,
  ref: RefObject<HTMLInputElement>
) => {
  const [keyPressed, setKeyPressed] = useState(false)

  const downHandler = ({ key }: { key: string }) => {
    if (key === target) {
      setKeyPressed(true)
    }
  }
  const upHandler = ({ key }: { key: string }) => {
    if (key === target) {
      setKeyPressed(false)
    }
  }
  useEffect(() => {
    ref.current?.addEventListener('keydown', downHandler)
    ref.current?.addEventListener('keyup', upHandler)

    return () => {
      ref.current?.removeEventListener('keydown', downHandler)
      ref.current?.removeEventListener('keyup', upHandler)
    }
  }, [downHandler, upHandler])

  return keyPressed
}
