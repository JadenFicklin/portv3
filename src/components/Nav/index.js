import React from 'react';
import { cn } from '../../utils/cn';

function Index({ tab, depths, segments }) {
  const scrollPadding = 75;

  const handleSegmentClick = (segment) => {
    window.scrollTo({
      top: depths[segment] - scrollPadding,
      behavior: 'smooth'
    });
  };

  return (
    <nav className="hidden mt-20 lg:block">
      {segments.map(({ name }) => (
        <div
          className="text-xs cursor-pointer w-max"
          onClick={() => handleSegmentClick(name)}>
          <div className="flex items-center py-3 group">
            <div
              className={cn(
                'h-[1px] duration-300 mr-4 group-hover:w-[60px] group-hover:bg-light ',
                tab === `${name}`
                  ? 'w-[60px] bg-light'
                  : 'w-[30px] bg-lightDarker'
              )}></div>
            <p
              className={cn(
                'font-semibold tracking-[1px] group-hover:text-medium select-none',
                tab === `${name}` ? 'text-medium' : 'text-lightDarker'
              )}>
              {name.toUpperCase()}
            </p>
          </div>
        </div>
      ))}
    </nav>
  );
}

export default Index;
