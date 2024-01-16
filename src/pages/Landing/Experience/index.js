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
                  'rotate-[-45deg] relative -bottom-2 left-1 group-hover:bottom-[-3px] group-hover:left-[8px] duration-300 group-hover:fill-green'
                )}
              />
            </p>
            <p className="text-lightDarker">{item.position}</p>
            <p className="my-2 text-sm">{item.description}</p>

            <div className="flex flex-wrap">
              {item.technologies.map((item) => (
                <Tags className="m-[2px] w-min font-medium">{item}</Tags>
              ))}
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}

export default Index;

// class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"
// absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg

// z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2
