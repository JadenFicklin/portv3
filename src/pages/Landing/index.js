import React from 'react';
import About from './About';
import Hero from './Hero';
import Nav from '../../components/Nav';

function index() {
  return (
    <>
      <div className="w-full min-h-screen bg-background">
        <div className="lg:grid max-w-screen-xl min-h-screen mx-auto bg-blue-500 lg:grid-cols-2">
          <div className="bg-red-500">
            <Hero />
            <Nav />
          </div>
          <div className="bg-purple-500">
            <About />
          </div>
        </div>
      </div>
    </>
  );
}

export default index;
