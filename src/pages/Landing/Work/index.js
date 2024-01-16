import React, { useState } from 'react';
import { WorkArray } from '../../../data/Work';
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
    <>
      <div className="mt-32">
        <h2 className="mb-5 font-semibold text-medium lg:hidden">WORK</h2>

        {WorkArray.map((item) => (
          <a
            href={item.link}
            target="_blank"
            rel="noreferrer"
            onMouseEnter={() => handleMouseEnter(item.name)}
            onMouseLeave={handleMouseLeave}
            style={{
              opacity: hoveredItem ? (hoveredItem === item.name ? 1 : 0.4) : 1
            }}
            className="group block my-5 w-[110%] relative -left-[5%] lg:hover:bg-[#555b6325] cursor-pointer rounded lg:hover:drop-shadow-2xl  lg:w-[114%] lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:relative lg:-left-[6%] lg:flex lg:p-5 transition-opacity duration-300">
            <div className="max-w-[200px] lg:max-w-[125px] hidden lg:block">
              <img src={item.image} alt={item.name} className="" />
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
            <div className="max-w-[200px] lg:max-w-[125px] mx-[5%] mt-5 lg:hidden">
              <img src={item.image} alt={item.name} className="" />
            </div>
          </a>
        ))}

        <p className="relative flex text-base font-medium cursor-pointer text-medium group hover:text-green">
          View Full Project Archive
          <IoMdArrowForward
            className={cn(
              'rotate-[-45deg] relative -bottom-[6px] left-1 group-hover:bottom-[-3px] group-hover:left-[8px] duration-300 group-hover:fill-green'
            )}
          />
        </p>
      </div>
    </>
  );
}

export default Index;
