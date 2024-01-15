import React, { useEffect, useRef } from 'react';
import About from './About';
import Hero from './Hero';
import Nav from '../../components/Nav';
import Icons from '../../components/Icons';
import { ExperienceArray } from '../../data/Experience';
import { WorkArray } from '../../data/Work';

function Index() {
  const rightSectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = (event) => {
      if (rightSectionRef.current) {
        // Scroll the right section programmatically
        rightSectionRef.current.scrollBy(0, event.deltaY);
      }
    };

    // Add event listener for scroll
    window.addEventListener('wheel', handleScroll);

    // Remove event listener on cleanup
    return () => window.removeEventListener('wheel', handleScroll);
  }, []);

  return (
    <>
      <div className="w-full h-screen bg-background">
        <div className="h-screen max-w-screen-xl mx-auto lg:grid lg:gap-4 lg:grid-cols-2 lg:px-24">
          {/* Left section */}
          <div className="flex flex-col justify-between lg:py-24">
            <div>
              <Hero />
              <Nav />
            </div>

            <Icons />
          </div>
          {/* Right section */}
          <div
            ref={rightSectionRef}
            className="h-screen overflow-auto lg:py-24 hide-scrollbar">
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
                <img src={item.image} alt={item.name} />
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

export default Index;
