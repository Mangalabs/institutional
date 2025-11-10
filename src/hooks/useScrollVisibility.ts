import { useState, useEffect } from 'react'

/**
 * Retorna `true` se a posição de scroll vertical
 * for maior que o `threshold` (limite) fornecido.
 *
 * @param threshold - O número de pixels para ativar a visibilidade.
 */
export function useScrollVisibility(threshold: number) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowCTA(window.scrollY > threshold)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [threshold])

  return isVisible
}

function setShowCTA(arg0: boolean) {
    throw new Error('Function not implemented.')
}
