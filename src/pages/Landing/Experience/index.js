import React from 'react';
import { ExperienceArray } from '../../../data/Experience';

function Index() {
  return (
    <div className="mt-32">
      {ExperienceArray.map((item) => (
        <div>
          <p>{item.timeframe}</p>
          <p>{item.name}</p>
          <p>{item.position}</p>
          <p>{item.description}</p>
          <p>{item.technologies}</p>
        </div>
      ))}
    </div>
  );
}

export default Index;
