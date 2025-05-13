'use client'
import { useState, useEffect } from 'react';

const ShinyBorder = ({ delayFactor }: { delayFactor?: number }) => {
  const [randomDelay, setRandomDelay] = useState(0);
  
  useEffect(() => {
    const delay = delayFactor !== undefined 
      ? delayFactor 
      : Math.random() * 4;
    
    setRandomDelay(delay);
  }, [delayFactor]);

  return (
    <svg className="absolute inset-0 z-[-1] size-full" overflow="visible">
      <linearGradient
        id={`borderGradient-${randomDelay}`}
        x1="0"
        x2="0"
        y1="0"
        y2="1"
        gradientTransform="rotate(0 0 0)"
      >
        <animateTransform
          attributeName="gradientTransform"
          type="rotate"
          values="0 0 0;360 0 0"
          dur="2s"
          repeatCount="indefinite"
          begin={`${randomDelay}s`} 
        />
        <stop offset="0%" stopColor="rgba(216,236,248,0.2)" />
        <stop offset="75%" stopColor="white" />
        <stop offset="100%" stopColor="rgba(168,216,245,0.08)" />
      </linearGradient>
      <filter id={`shadow-${randomDelay}`}> 
        <feDropShadow
          dx="0"
          dy="2"
          stdDeviation="4"
          floodColor="white"
          floodOpacity="0.2"
        />
      </filter>
      <rect
        width="100%"
        height="100%"
        stroke={`url(#borderGradient-${randomDelay})`}
        strokeWidth="1"
        fill="url(#bgGradient)"
        filter={`url(#shadow-${randomDelay})`}
        rx="8"
      />
    </svg>
  );
};

export default ShinyBorder;