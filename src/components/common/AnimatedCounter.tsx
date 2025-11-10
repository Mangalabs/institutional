import { useState, useRef, useEffect } from 'react'

interface AnimatedCounterProps {
  value: string
  duration?: number
}

export function AnimatedCounter({
  value,
  duration = 2,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const numericValue = parseInt(value.replace(/\D/g, '')) || 0
  const suffix = value.replace(/[0-9]/g, '')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          let startTime: number
          const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime
            const progress = Math.min(
              (currentTime - startTime) / (duration * 1000),
              1
            )

            setCount(Math.floor(progress * numericValue))

            if (progress < 1) {
              requestAnimationFrame(animate)
            }
          }
          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [hasAnimated, numericValue, duration])

  return (
    <div ref={ref}>
      {count}
      {suffix}
    </div>
  )
}