import React from 'react';

function index() {
  const navOptions = ['about', 'experience', 'work', 'contact'];

  return (
    <nav>
      {navOptions.map((item) => (
        <p>{item}</p>
      ))}
    </nav>
  );
}

export default index;
