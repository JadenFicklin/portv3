import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { MdContactPage } from 'react-icons/md';
import HoverImage from '../customComponents/HoverImage';

import Github from './images/github.png';
import Linkedin from './images/linkedin.png';
import Resume from './images/resume.png';

function index() {
  const iconClass = 'w-6 h-6 mr-5 duration-200 hover:fill-medium';

  const iconsArray = [
    {
      icon: <FaGithub className={iconClass} />,
      link: 'https://github.com/JadenFicklin',
      image: Github,
      width: '270px',
      height: '138px',
      offsetX: -135,
      offsetY: -170
    },
    {
      icon: <FaLinkedin className={iconClass} />,
      link: 'https://www.linkedin.com/in/jaden-ficklin-b1686a21a/',
      image: Linkedin,
      width: '270px',
      height: '138px',
      offsetX: -135,
      offsetY: -170
    },
    {
      icon: <MdContactPage className={iconClass} />,
      link: 'https://docs.google.com/document/d/1QVo9-KNAfNvJGrWKi83bLLg9VnD8pmwkMbX9GV65tzc/edit?usp=sharing',
      image: Resume,
      width: '220px',
      height: '300px',
      offsetX: -110,
      offsetY: -320
    }
  ];

  return (
    <div className="flex items-center self-start mt-8 lg:mt-0 ">
      {iconsArray.map((item) => (
        <HoverImage
          image={item.image}
          width={item.width}
          height={item.height}
          offsetX={item.offsetX}
          offsetY={item.offsetY}>
          <a
            href={item.link}
            target="_blank"
            rel="noreferrer"
            className="w-6 h-6 mr-5 cursor-pointer">
            {item.icon}
          </a>
        </HoverImage>
      ))}
    </div>
  );
}

export default index;
