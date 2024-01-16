import React, { useEffect, useRef } from 'react';
import About from './About';
import Hero from './Hero';
import Experience from './Experience';
import Work from './Work';
import Nav from '../../components/Nav';
import Icons from '../../components/Icons';
import { cn } from '../../utils/cn';

function Index() {
  const rightSectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = (event) => {
      // Check if the cursor is over the right section
      if (
        rightSectionRef.current &&
        !rightSectionRef.current.contains(event.target)
      ) {
        rightSectionRef.current.scrollBy(0, event.deltaY);
      }
    };

    window.addEventListener('wheel', handleScroll, { passive: true });

    return () => window.removeEventListener('wheel', handleScroll);
  }, []);

  const padding = 'px-6 py-12 md:px-12 md:py-20 lg:px-24';

  return (
    <>
      <div className="w-full h-screen bg-background">
        <div className="h-screen max-w-screen-xl mx-auto lg:grid lg:gap-4 lg:grid-cols-2">
          {/* Left section */}
          <div
            className={cn('flex flex-col justify-between lg:py-24', padding)}>
            <div>
              <Hero />
              <Nav />
            </div>
            <Icons />
          </div>
          {/* Right section */}
          <div
            ref={rightSectionRef}
            className={cn(
              'h-screen lg:overflow-auto lg:py-24 hide-scrollbar',
              padding
            )}>
            <About />
            <Experience />
            <Work />
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
