import React from 'react';
import About from './About';
import Hero from './Hero';
import Nav from '../../components/Nav';
import Icons from '../../components/Icons';
import { ExperienceArray } from '../../data/Experience';
import { WorkArray } from '../../data/Work';

function index() {
  return (
    <>
      <div className="w-full min-h-screen bg-background">
        <div className="lg:grid max-w-screen-xl min-h-screen mx-auto  lg:grid-cols-2">
          <div className="py-24">
            <Hero />
            <Nav />
            <Icons />
          </div>
          <div className="py-24">
            <About />
            {ExperienceArray.map((item) => (
              <div>
                <p>{item.timeframe}</p>
                <p>{item.name}</p>
                <p>{item.position}</p>
                <p>{item.description}</p>
                <p>{item.technologies}</p>
              </div>
            ))}
            {WorkArray.map((item) => (
              <div>
                <img src={item.image} />
                <p>{item.name}</p>
                <p>{item.position}</p>
                <p>{item.description}</p>
                <p>{item.technologies}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default index;
