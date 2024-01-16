import React from 'react';
import { WorkArray } from '../../../data/Work';
import Tags from '../../../components/Tags';
import { IoMdArrowForward } from 'react-icons/io';
import { cn } from '../../../utils/cn';

function Index() {
  return (
    <>
      <div className="mt-32">
        {WorkArray.map((item) => (
          <a
            href={item.link}
            target="_blank"
            rel="noreferrer"
            className="group my-5 hover:bg-[#555b6325] cursor-pointer rounded hover:drop-shadow-2xl w-full left-0 lg:w-[114%] hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] relative lg:-left-[6%] flex p-5">
            <div className="max-w-[200px] lg:max-w-[125px]">
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
          </a>
        ))}

        <p className="relative flex mb-1 text-base font-medium cursor-pointer text-medium group hover:text-green">
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
