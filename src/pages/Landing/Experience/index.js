import React from 'react';
import { ExperienceArray } from '../../../data/Experience';
import Tags from '../../../components/Tags';
import { IoMdArrowForward } from 'react-icons/io';
import { cn } from '../../../utils/cn';

function Index() {
  return (
    <div className="mt-32">
      {ExperienceArray.map((item) => (
        <a
          href={item.link}
          target="_blank"
          rel="noreferrer"
          className="group my-5 hover:bg-[#555b6325] cursor-pointer rounded hover:drop-shadow-2xl w-full left-0 lg:w-[114%] hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] relative lg:-left-[6%] flex p-5">
          <div className=" w-min">
            <p className="mt-1 text-xs font-semibold tracking-wider w-max text-lightDarker">
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
