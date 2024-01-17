import { useEffect, useRef } from 'react';

function Index({ segments, setDepths }) {
  return (
    <div className="px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-24">
      {segments.map((props) => (
        <Segment key={props.name} {...props} setDepths={setDepths} />
      ))}
    </div>
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
