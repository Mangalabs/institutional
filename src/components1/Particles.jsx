import { useEffect, useRef } from 'react';

const Particles = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const createParticle = () => {
      const particle = document.createElement('div');
      const size = Math.random() * 10 + 5;
      const duration = Math.random() * 3 + 5;

      Object.assign(particle.style, {
        position: 'absolute',
        left: `${Math.random() * 100}vw`,
        width: `${size}px`,
        height: `${size}px`,
        animationDuration: `${duration}s`,
      });

      particle.className = 'particle';
      container.appendChild(particle);

      setTimeout(() => container.removeChild(particle), duration * 1000);
    };

    const intervalId = setInterval(createParticle, 300);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0"
    />
  );
};

export default Particles;
