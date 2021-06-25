import { useEffect, useState } from 'react';

export default function useOnScreen(ref, rootMargin = '0px') {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const { current } = ref;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting);
      },
      {
        rootMargin,
      },
    );
    if (ref.current) {
      observer.observe(current);
    }
    return () => {
      observer.unobserve(current);
    };
  }, [rootMargin, ref]);

  return isIntersecting;
}
