import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { MdContactPage } from 'react-icons/md';

function index() {
  const iconClass = 'w-full h-full duration-200 hover:fill-medium';

  const iconsArray = [
    {
      icon: <FaGithub className={iconClass} />,
      link: 'https://github.com/JadenFicklin',
      display: 'abc'
    },
    {
      icon: <FaLinkedin className={iconClass} />,
      link: 'https://www.linkedin.com/in/jaden-ficklin-b1686a21a/',
      display: 'abc'
    },
    {
      icon: <MdContactPage className={iconClass} />,
      link: 'https://docs.google.com/document/d/1QVo9-KNAfNvJGrWKi83bLLg9VnD8pmwkMbX9GV65tzc/edit?usp=sharing',
      display: 'abc'
    }
  ];

  return (
    <div className="flex items-center self-start mt-8 lg:mt-0">
      {iconsArray.map((item) => (
        <a
          href={item.link}
          target="_blank"
          rel="noreferrer"
          className="w-6 h-6 mr-5 cursor-pointer">
          {item.icon}
        </a>
      ))}
    </div>
  );
}

export default index;
