import React from 'react';

function Index() {
  return (
    <div className="pb-32 lg:pb-10 text-sm font-medium pt-24 lg:pt-44 text-lightDarker max-w-[90%]">
      Loosely designed in{' '}
      <a
        href="https://www.figma.com/"
        target="_blank"
        rel="noreferrer"
        className="font-semibold text-light hover:text-green">
        Figma
      </a>{' '}
      and coded in{' '}
      <a
        href="https://code.visualstudio.com/"
        target="_blank"
        rel="noreferrer"
        className="font-semibold text-light hover:text-green">
        Visual Studio Code
      </a>
      . Built with{' '}
      <a
        href="https://react.dev/"
        target="_blank"
        rel="noreferrer"
        className="font-semibold text-light hover:text-green">
        React.js
      </a>{' '}
      and{' '}
      <a
        href="https://tailwindcss.com/"
        target="_blank"
        rel="noreferrer"
        className="font-semibold text-light hover:text-green">
        Tailwind CSS
      </a>
      , deployed with{' '}
      <a
        href="https://firebase.google.com/"
        target="_blank"
        rel="noreferrer"
        className="font-semibold text-light hover:text-green">
        Firebase
      </a>
      . All text is set in the{' '}
      <a
        href="https://rsms.me/inter/"
        target="_blank"
        rel="noreferrer"
        className="font-semibold text-light hover:text-green">
        Inter
      </a>{' '}
      typeface.
    </div>
  );
}

export default Index;
