import { useEffect, useState, useRef } from 'react';

export default function useOnScreen(options) {
  const containerRef = useRef();
  const [isVisible, setIsVisible] = useState(false);

  const intersectionCallback = (entries) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(intersectionCallback, {
      threshold: 0.5,
      ...options,
    });

    if (containerRef.current) observer.observe(containerRef?.current);

    return () => {
      if (containerRef.current) observer.disconnect();
    };
  }, [containerRef, options]);

  return { isVisible, containerRef };
}
