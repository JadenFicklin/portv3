import React from 'react';
import { Link } from 'react-router-dom';
import { GoArrowLeft } from 'react-icons/go';
import { allProjectsArray } from '../../data/AllProjects';

import Tags from '../../components/Tags';
import { IoMdArrowForward } from 'react-icons/io';
import { cn } from '../../utils/cn';

function Index() {
  return (
    <div className="max-w-screen-xl min-h-screen px-6 py-12 mx-auto font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="lg:py-24">
        <Link to="/" className="flex py-2 group">
          <GoArrowLeft className="relative left-0 mt-1 duration-200 fill-green group-hover:-left-3" />
          <p className="ml-1 font-medium text-green">Jaden Ficklin</p>
        </Link>
        <h2 className="text-4xl font-bold sm:text-5xl text-medium">
          All Projects
        </h2>

        <table className="w-full mt-12 text-left border-collapse">
          <thead className="sticky top-0 z-10 px-6 py-5 border-b border-slate-300/10 bg-slate-900/75 backdrop-blur">
            <th className="py-4 pr-8 text-sm font-semibold text-slate-200">
              Year
            </th>
            <th className="py-4 pr-8 text-sm font-semibold text-slate-200">
              Project
            </th>
            <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 lg:table-cell">
              Made at
            </th>
            <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 lg:table-cell">
              Built with
            </th>
            <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 sm:table-cell">
              Link
            </th>
          </thead>
          <tbody>
            {allProjectsArray.map((item) => (
              <tr className="border-b border-slate-300/10 last:border-none">
                <td className="py-4 pr-4 text-sm align-top">
                  <div className="translate-y-px">{item.year}</div>
                </td>
                <td className="py-4 pr-4 font-semibold leading-snug align-top">
                  <p className="hidden text-base font-medium leading-tight sm:block text-slate-200">
                    {item.project}
                  </p>
                  <a
                    className="inline-flex items-baseline sm:hidden group"
                    href={item.link}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Emerson Collective (opens in a new tab)">
                    <span className="flex text-base font-medium leading-tight hover:text-green text-slate-200">
                      {item.project}
                      <IoMdArrowForward
                        className={cn(
                          '-translate-y-[2px] rotate-[-45deg] relative -bottom-[6px] left-1 group-hover:bottom-[-3px] group-hover:left-[8px] duration-300 group-hover:fill-green'
                        )}
                      />
                    </span>
                  </a>
                </td>
                <td className="hidden py-4 pr-4 text-sm align-top lg:table-cell">
                  {item.madeAt}
                </td>
                <td className="hidden py-4 pr-4 align-top lg:table-cell">
                  <ul className="flex -translate-y-1.5 flex-wrap">
                    {item.builtWith.map((item) => (
                      <Tags className="my-1 mr-1.5">{item}</Tags>
                    ))}
                  </ul>
                </td>
                <td className="hidden py-4 align-top cursor-pointer sm:table-cell group">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="relative flex mb-1 text-base font-medium text-light group-hover:text-green">
                    {item.link}{' '}
                    <IoMdArrowForward
                      className={cn(
                        'rotate-[-45deg] relative -bottom-[6px] left-1 group-hover:bottom-[-3px] group-hover:left-[8px] duration-300 group-hover:fill-green'
                      )}
                    />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Index;
