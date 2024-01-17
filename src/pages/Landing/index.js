import React, { useEffect } from 'react';
import Hero from './Hero';
import Nav from '../../components/Nav';
import Content from './Content';
import Icons from '../../components/Icons';
import clsx from 'clsx';
import useScrollTabs from '../../hooks/useScrollTabs';
import Svg from '../../components/customComponents/Svg';
import About from './About';
import Experience from './Experience';
import Work from './Work';
import Contact from './Contact';
import { cn } from '../../utils/cn';
import CursorLight from '../../components/customComponents/CursorLight';

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
        path.style.strokeWidth = '.75';
      });
    };

    const interval = setInterval(applyRandomHoverEffect, 400);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="w-full bg-background -z-10 ">
        <CursorLight />
        <Svg
          src={require('../../data/SVGs/wave.svg').default}
          className="hidden lg:block lg:fixed wave"
        />
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
