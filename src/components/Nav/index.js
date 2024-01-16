import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../../utils/cn';

function Index({ tab, setTab, navOptions }) {
  return (
    <nav className="hidden mt-20 lg:block">
      {navOptions.map((item) => (
        <div className="text-xs w-max">
          <Link
            onClick={() => setTab(item)}
            className="flex items-center py-3 group">
            <div
              className={cn(
                'h-[1px] duration-300 mr-4 group-hover:w-[60px] group-hover:bg-light',
                tab === `${item}`
                  ? 'w-[60px] bg-light'
                  : 'w-[30px] bg-lightDarker'
              )}></div>
            <p
              className={cn(
                'font-semibold tracking-[1px] group-hover:text-medium',
                tab === `${item}` ? 'text-medium' : 'text-lightDarker'
              )}>
              {item.toUpperCase()}
            </p>
          </Link>
        </div>
      ))}
    </nav>
  );
}

export default Index;
