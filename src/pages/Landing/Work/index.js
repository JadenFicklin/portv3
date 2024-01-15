import React from 'react';
import { WorkArray } from '../../../data/Work';

function Index() {
  return (
    <>
      {WorkArray.map((item) => (
        <div>
          <img src={item.image} alt={item.name} />
          <p>{item.name}</p>
          <p>{item.position}</p>
          <p>{item.description}</p>
          <p>{item.technologies}</p>
        </div>
      ))}
    </>
  );
}

export default Index;
