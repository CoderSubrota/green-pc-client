import React from 'react';
import Wave from 'react-wavify';
const WaveStart = () => {
    return (
        <>
 <Wave fill="url(#gradient)">
  <defs>
    <linearGradient id="gradient" gradientTransform="rotate(90)">
      <stop offset="5%"  stopColor="lime" />
      <stop offset="58%" stopColor="darkblue" />
    </linearGradient>
  </defs>
</Wave>
  
        </>
    );
};

export default WaveStart;