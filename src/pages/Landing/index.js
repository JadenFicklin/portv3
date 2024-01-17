import React from 'react';
import Hero from './Hero';
import Nav from '../../components/Nav';
import Content from './Content';
import Icons from '../../components/Icons';
import clsx from 'clsx';
import useScrollTabs from '../../hooks/useScrollTabs';
import About from './About';
import Experience from './Experience';
import Work from './Work';
import Contact from './Contact';
import { cn } from '../../utils/cn';
import CursorLight from '../../components/customComponents/CursorLight';
import Wave from './Wave/Wave';

function Index() {
  const segments = [
    {
      name: 'about',
      Component: About
    },
    {
      name: 'experience',
      Component: Experience
    },
    {
      name: 'work',
      Component: Work
    },
    {
      name: 'contact',
      Component: Contact
    }
  ];

  const { tab, depths, setDepths } = useScrollTabs(segments);

  const navClasses = clsx(
    'flex flex-col justify-between h-screen lg:fixed w-full lg:w-[500px]',
    'px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-24'
  );

  return (
    <>
      <div className="w-full bg-background -z-10 ">
        <CursorLight />
        <Wave />
        <div className="z-10 max-w-screen-xl mx-auto lg:grid lg:gap-4 lg:grid-cols-2 ">
          {/* Left section */}
          <div className="h-screen w-[500px] hidden lg:block " />
          <div className={cn(navClasses, 'h-max lg:h-screen')}>
            <div>
              <Hero />
              <Nav tab={tab} depths={depths} segments={segments} />
            </div>
            <Icons />
          </div>
          {/* Right section */}
          <Content segments={segments} setDepths={setDepths} />
        </div>
      </div>
    </>
  );
}

export default Index;
