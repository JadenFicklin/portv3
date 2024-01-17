import React, { useState, useEffect } from 'react';

const CursorLight = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [rippling, setRippling] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleClick = () => {
      setRippling(true);
      setTimeout(() => setRippling(false), 600); // Match the duration of the ripple animation
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <>
      {/* Constant light */}
      <div
        className="cursor-light"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`
        }}
      />
      {/* Ripple effect */}
      {rippling && (
        <div
          className="cursor-ripple"
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`
          }}
        />
      )}
    </>
  );
};

export default CursorLight;
