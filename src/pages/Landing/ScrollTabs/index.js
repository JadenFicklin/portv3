import { useEffect, useRef, useState } from 'react';
import About from '../About';
import Experience from '../Experience';
import Work from '../Work';
import Contact from '../Contact';

function Index({ children }) {
  const [tab, setTab] = useState('about');
  const [depths, setDepths] = useState({});

  const segments = [
    {
      name: 'about',
      Component: About
    },
    {
      name: 'experience',
      Component: Experience
    },
    {
      name: 'work',
      Component: Work
    },
    {
      name: 'contact',
      Component: Contact
    }
  ];

  const isLoaded = Object.keys(depths).length === segments.length;

  useEffect(() => {
    if (!isLoaded) return;

    const handleScroll = () => {
      const currentDepth = window.scrollY;
      const defaultSegment = segments[0].name;
      let activeSegment = defaultSegment;

      segments.forEach(({ name }) => {
        const segmentDepth = depths[name];
        const withinDepth = currentDepth >= segmentDepth;
        if (withinDepth) activeSegment = name;
      });

      setTab(activeSegment);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [depths, isLoaded]);

  return (
    <>
      {children}
      <div className="px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-24">
        {segments.map((props) => (
          <Segment key={props.name} {...props} setDepths={setDepths} />
        ))}
      </div>
    </>
  );
}

function Segment({ name, setDepths, Component }) {
  const segmentRef = useRef(null);

  useEffect(() => {
    if (!segmentRef.current) return;
    const topOfRef = segmentRef.current.getBoundingClientRect().top;
    const position = topOfRef + window.scrollY;
    setDepths((prevDepths) => ({ ...prevDepths, [name]: position }));
  }, [segmentRef.current]);

  return (
    <div ref={segmentRef}>
      <Component />
    </div>
  );
}

export default Index;
