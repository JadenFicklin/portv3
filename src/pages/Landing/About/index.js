import React from 'react';
import HoverImage from '../../../components/customComponents/HoverImage';

import devmountain from './images/devmountain.JPG';
import devmountainCertificate from './images/devmountainCertificate.JPG';

function Index() {
  return (
    <div className=" lg:mt-0 tracking-[.5px]">
      <div className="sticky top-0 z-20 w-screen px-6 py-5 mb-4 -mx-6 bg-slate-900/75 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0 lg:hidden">
        <h2 className="font-semibold text-medium lg:hidden">ABOUT</h2>
      </div>
      <p className="mb-4">
        Back in 2021, I searched heavily for a career I would feel passionate
        about. I really enjoy creative thinking and solving complex problems so
        when I tried my hand at website development it was a perfect fit.
      </p>
      <p className="mb-4">
        As a dedicated{' '}
        <HoverImage
          image={devmountain}
          width="270px"
          height="138px"
          offsetX={-135}
          offsetY={-155}>
          <a
            href="https://devmountain.com/"
            target="_blank"
            rel="noreferrer"
            className="font-medium cursor-pointer text-medium hover:text-green">
            Devmountain
          </a>{' '}
        </HoverImage>{' '}
        <HoverImage
          image={devmountainCertificate}
          width="270px"
          height="200px"
          offsetX={-135}
          offsetY={-215}>
          <a
            href="https://www.linkedin.com/feed/update/urn:li:activity:6918308644237312000/"
            target="_blank"
            rel="noreferrer"
            className="font-medium cursor-pointer text-medium hover:text-green">
            graduate
          </a>{' '}
        </HoverImage>
        with a deep-seated passion for the front-end I thrive in supporting my
        team members in achieving our shared professional goals.
      </p>
      <p>
        My main focus now is to continuously upgrade my{' '}
        <span className="font-medium cursor-pointer text-medium hover:text-green">
          skills
        </span>{' '}
        and understanding of development. When I’m not at the computer, I’m
        usually reading, drawing, or running around Hyrule searching for{' '}
        <span className="font-medium cursor-pointer text-medium hover:text-green">
          Korok seeds
        </span>
        .
      </p>
    </div>
  );
}

export default Index;
