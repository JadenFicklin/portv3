import React, { useEffect, useRef } from 'react';
import About from './About';
import Hero from './Hero';
import Experience from './Experience';
import Work from './Work';
import Contact from './Contact';
import Outro from './Outro';
import Nav from '../../components/Nav';
import Icons from '../../components/Icons';
import { cn } from '../../utils/cn';

function Index() {
  const padding = 'px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-24';

  return (
    <>
      <div className="w-full bg-background">
        <div className="max-w-screen-xl mx-auto lg:grid lg:gap-4 lg:grid-cols-2">
          {/* Left section */}
          <div className="h-screen w-[500px] hidden lg:block" />
          <div
            className={cn(
              'flex flex-col justify-between h-screen lg:fixed w-full lg:w-[500px]',
              padding
            )}>
            <div>
              <Hero />
              <Nav />
            </div>
            <Icons />
          </div>
          {/* Right section */}
          <div className={cn(padding)}>
            <About />
            <Experience />
            <Work />
            <Contact />
            <Outro />
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
