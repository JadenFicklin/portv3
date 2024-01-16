import React, { useEffect, useState } from 'react';
import About from '../About';
import Experience from '../Experience';
import Work from '../Work';
import Contact from '../Contact';
import Outro from '../Outro';

function Index({ tab, setTab }) {
  const [aboutPosition, setAboutPosition] = useState(0);
  const [experiencePosition, setExperiencePosition] = useState(0);
  const [workPosition, setWorkPosition] = useState(0);
  const [contactPosition, setContactPosition] = useState(0);

  const scrollPadding = 75;

  useEffect(() => {
    const tabs = {
      about: aboutPosition,
      experience: experiencePosition,
      work: workPosition,
      contact: contactPosition
    };

    window.scrollTo({
      top: tabs[tab] - scrollPadding,
      behavior: 'smooth'
    });
  }, [tab]);

  return (
    <div className="px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-24">
      <About setAboutPosition={setAboutPosition} />
      <Experience setExperiencePosition={setExperiencePosition} />
      <Work setWorkPosition={setWorkPosition} />
      <Contact setContactPosition={setContactPosition} />
      <Outro />
    </div>
  );
}

export default Index;
