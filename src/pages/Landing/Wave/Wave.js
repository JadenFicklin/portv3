import React, { useEffect } from 'react';
import Svg from '../../../components/customComponents/Svg';

function Wave() {
  useEffect(() => {
    const applyRandomHoverEffect = () => {
      const paths = document.querySelectorAll('.wave g path');
      const numberOfPathsToSelect = Math.ceil(paths.length * 0.15); // 25% of paths

      // Clear styles from all paths
      paths.forEach((p) => {
        p.style.fill = '';
        p.style.strokeWidth = '';
        p.style.stroke = '';
      });

      // Create a set to store unique random indices
      const selectedIndices = new Set();

      // Select random paths
      while (selectedIndices.size < numberOfPathsToSelect) {
        const randomIndex = Math.floor(Math.random() * paths.length);
        selectedIndices.add(randomIndex);
      }

      // Apply styles to selected paths
      selectedIndices.forEach((index) => {
        const path = paths[index];
        // path.style.stroke = '#5EEAD410';
        path.style.strokeWidth = '.9';
      });
    };

    const interval = setInterval(applyRandomHoverEffect, 400);

    return () => clearInterval(interval);
  }, []);

  return (
    <Svg
      src={require('../../../data/SVGs/wave.svg').default}
      className="hidden pointer-events-none lg:block lg:fixed wave"
    />
  );
}

export default Wave;
