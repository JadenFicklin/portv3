import React from 'react';
import HoverImage from '../../../components/customComponents/HoverImage';

import FigmaImg from './images/figma.png';
import VisualStudioImg from './images/visualstudio.png';
import ReactImg from './images/react.png';
import TailwindImg from './images/tailwind.png';
import FirebaseImg from './images/firebase.png';
import InterImg from './images/inter.png';

function Index() {
  return (
    <div className="pb-32 lg:pb-10 text-sm font-medium pt-24 lg:pt-44 text-lightDarker max-w-[90%]">
      Loosely designed in{' '}
      <HoverImage
        image={FigmaImg}
        width="270px"
        height="138px"
        offsetX={-135}
        offsetY={-155}>
        <a
          href="https://www.figma.com/"
          target="_blank"
          rel="noreferrer"
          className="font-semibold text-light hover:text-green">
          Figma
        </a>
      </HoverImage>{' '}
      and coded in{' '}
      <HoverImage
        image={VisualStudioImg}
        width="270px"
        height="138px"
        offsetX={-135}
        offsetY={-155}>
        <a
          href="https://code.visualstudio.com/"
          target="_blank"
          rel="noreferrer"
          className="font-semibold text-light hover:text-green">
          Visual Studio Code
        </a>
      </HoverImage>
      . Built with{' '}
      <HoverImage
        image={ReactImg}
        width="270px"
        height="138px"
        offsetX={-135}
        offsetY={-155}>
        <a
          href="https://react.dev/"
          target="_blank"
          rel="noreferrer"
          className="font-semibold text-light hover:text-green">
          React.js
        </a>
      </HoverImage>{' '}
      and{' '}
      <HoverImage
        image={TailwindImg}
        width="270px"
        height="138px"
        offsetX={-135}
        offsetY={-155}>
        <a
          href="https://tailwindcss.com/"
          target="_blank"
          rel="noreferrer"
          className="font-semibold text-light hover:text-green">
          Tailwind CSS
        </a>
      </HoverImage>
      , deployed with{' '}
      <HoverImage
        image={FirebaseImg}
        width="270px"
        height="138px"
        offsetX={-135}
        offsetY={-155}>
        <a
          href="https://firebase.google.com/"
          target="_blank"
          rel="noreferrer"
          className="font-semibold text-light hover:text-green">
          Firebase
        </a>
      </HoverImage>
      . All text is set in the{' '}
      <HoverImage
        image={InterImg}
        width="270px"
        height="138px"
        offsetX={-135}
        offsetY={-155}>
        <a
          href="https://rsms.me/inter/"
          target="_blank"
          rel="noreferrer"
          className="font-semibold text-light hover:text-green">
          Inter
        </a>
      </HoverImage>{' '}
      typeface.
    </div>
  );
}

export default Index;
