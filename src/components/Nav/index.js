import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import c from 'classnames';

function Index() {
  const [activeLink, setActiveLink] = useState(null);

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
    <nav className="mt-10">
      {navOptions.map((item) => (
        <div className="text-xs">
          <Link
            onClick={() => setActiveLink(item.name)}
            className="flex items-center py-3">
            <div
              className={c(
                'h-[1px] duration-300 mr-4',
                activeLink === `${item.name}`
                  ? 'w-[60px] bg-light'
                  : 'w-[30px] bg-lightDarker'
              )}></div>
            <p
              className={c(
                'font-semibold tracking-[1px]',
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
