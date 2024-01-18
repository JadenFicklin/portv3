import { useEffect, useState } from 'react';

const useScrollTabs = (segments) => {
  const [tab, setTab] = useState('about');
  const [depths, setDepths] = useState({});

  const isLoaded = Object.keys(depths).length === segments.length;
  const lastSegment = segments[segments.length - 1];
  const scrollPadding = 75;

  const isScrolledToBottom = () => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    return scrollTop + windowHeight >= documentHeight;
  };

  useEffect(() => {
    if (!isLoaded) return;

    const handleScroll = () => {
      const currentDepth = window.scrollY;
      const defaultSegment = segments[0].name;
      let activeSegment = defaultSegment;

      segments.forEach(({ name }) => {
        const segmentDepth = depths[name];
        const withinDepth = currentDepth >= segmentDepth - scrollPadding;
        if (withinDepth) activeSegment = name;
        if (isScrolledToBottom()) activeSegment = lastSegment.name;
      });

      setTab(activeSegment);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [depths, isLoaded, lastSegment.name, segments]);

  return { tab, setTab, depths, setDepths, segments };
};

export default useScrollTabs;
