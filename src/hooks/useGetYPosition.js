import { useEffect } from 'react';

function useGetYPosition({ set, ref }) {
  useEffect(() => {
    if (!ref.current) return;
    const position = ref.current.getBoundingClientRect().top + window.scrollY;
    set(position);
  }, [ref.current]);
}

export default useGetYPosition;
