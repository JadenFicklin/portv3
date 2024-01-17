import React, { useState } from 'react';
import Hero from './Hero';
import Nav from '../../components/Nav';
import ScrollTabs from './ScrollTabs';
import Icons from '../../components/Icons';
import clsx from 'clsx';

function Index() {
  const [tab, setTab] = useState('about');
  const navOptions = ['about', 'experience', 'work', 'contact'];

  const navClasses = clsx(
    'flex flex-col justify-between h-screen lg:fixed w-full lg:w-[500px]',
    'px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-24'
  );

  return (
    <>
      <div className="w-full bg-background">
        <div className="max-w-screen-xl mx-auto lg:grid lg:gap-4 lg:grid-cols-2">
          {/* Left section */}
          <div className="h-screen w-[500px] hidden lg:block" />
          <div className={navClasses}>
            <div>
              <Hero />
              <Nav tab={tab} setTab={setTab} navOptions={navOptions} />
            </div>
            <Icons />
          </div>
          {/* Right section */}
          <ScrollTabs />
        </div>
      </div>
    </>
  );
}

export default Index;
