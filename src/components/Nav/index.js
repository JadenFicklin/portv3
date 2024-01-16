import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../../utils/cn';

function Index() {
  const [activeLink, setActiveLink] = useState('ABOUT');

  const navOptions = [
    {
      name: 'ABOUT',
      route: '/about',
      inFrame: false
    },
    {
      name: 'EXPERIENCE',
      route: '/experience',
      inFrame: false
    },
    {
      name: 'WORK',
      route: '/work',
      inFrame: false
    },
    {
      name: 'CONTACT',
      route: '/contact',
      inFrame: false
    }
  ];

  return (
    <nav className="hidden mt-20 lg:block">
      {navOptions.map((item) => (
        <div className="text-xs w-max">
          <Link
            onClick={() => setActiveLink(item.name)}
            className="flex items-center py-3 group">
            <div
              className={cn(
                'h-[1px] duration-300 mr-4 group-hover:w-[60px] group-hover:bg-light',
                activeLink === `${item.name}`
                  ? 'w-[60px] bg-light'
                  : 'w-[30px] bg-lightDarker'
              )}></div>
            <p
              className={cn(
                'font-semibold tracking-[1px] group-hover:text-medium',
                activeLink === `${item.name}`
                  ? 'text-medium'
                  : 'text-lightDarker'
              )}>
              {item.name}
            </p>
          </Link>
        </div>
      ))}
    </nav>
  );
}

export default Index;
