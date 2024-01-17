import React, { useState } from 'react';
import { ExperienceArray } from '../../../data/Experience';
import Tags from '../../../components/Tags';
import { IoMdArrowForward } from 'react-icons/io';
import { cn } from '../../../utils/cn';

function Index() {
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnter = (itemName) => {
    setHoveredItem(itemName);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <div className="mt-24 lg:mt-32">
      <div className="sticky top-0 z-20 w-screen px-6 py-5 mb-4 -mx-6 bg-slate-900/75 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0 lg:hidden">
        <h2 className="font-semibold text-medium lg:hidden">EXPERIENCE</h2>
      </div>
      {ExperienceArray.map((item) => (
        <a
          href={item.link}
          target="_blank"
          rel="noreferrer"
          onMouseEnter={() => handleMouseEnter(item.name)}
          onMouseLeave={handleMouseLeave}
          style={{
            opacity: hoveredItem ? (hoveredItem === item.name ? 1 : 0.4) : 1
          }}
          className="group my-10 block w-[110%] relative -left-[5%] lg:hover:bg-[#555b6325] cursor-pointer rounded lg:hover:drop-shadow-2xl lg:w-[114%] lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:relative lg:-left-[6%] lg:flex lg:p-5 transition-opacity duration-300">
          <div className=" w-min mx-[5%] lg:mx-0">
            <p className="mt-1 text-xs font-semibold tracking-wider lg:ml-0 w-max text-lightDarker">
              {item.timeframe}
            </p>
          </div>
          <div className="mx-[5%] ">
            <p className="relative flex mb-1 text-base font-medium text-medium group-hover:text-green">
              {item.name}{' '}
              <IoMdArrowForward
                className={cn(
                  'rotate-[-45deg] relative -bottom-[6px] left-1 group-hover:bottom-[-3px] group-hover:left-[8px] duration-300 group-hover:fill-green'
                )}
              />
            </p>
            <p className="text-lightDarker">{item.position}</p>
            <p className="my-2 text-sm">{item.description}</p>

            <div className="flex flex-wrap">
              {item.technologies.map((item) => (
                <Tags className="m-[2px] w-max font-medium">{item}</Tags>
              ))}
            </div>
          </div>
        </a>
      ))}

      <a
        href="https://docs.google.com/document/d/1QVo9-KNAfNvJGrWKi83bLLg9VnD8pmwkMbX9GV65tzc/edit?usp=sharing"
        target="_blank"
        rel="noreferrer"
        className="relative flex mb-1 text-base font-medium cursor-pointer text-medium group hover:text-green">
        View Full Resume
        <IoMdArrowForward
          className={cn(
            'rotate-[-45deg] relative -bottom-[6px] left-1 group-hover:bottom-[-3px] group-hover:left-[8px] duration-300 group-hover:fill-green'
          )}
        />
      </a>
    </div>
  );
}

export default Index;
