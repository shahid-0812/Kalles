import React, { useEffect, useState } from 'react';

const ScrollToTopSquare = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / docHeight) * 100;
    setScrollProgress(progress);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const squareLength = 4 * 36; // 144
  const offset = squareLength - (squareLength * scrollProgress) / 100;

  return (
    <div
      className="fixed bottom-15 right-12 w-12 h-12 bg-white shadow-md flex items-center justify-center cursor-pointer z-50"
      onClick={scrollToTop}
    >
      <svg className="absolute w-20 h-20" viewBox="0 0 60 60">
        <rect
          x="12"
          y="12"
          width="36"
          height="36"
          stroke="#878787"
          strokeWidth="2"
          fill="none"
        />
        <rect
          x="12"
          y="12"
          width="36"
          height="36"
          stroke="#000"
          strokeWidth="2"
          fill="none"
          strokeDasharray={144}
          strokeDashoffset={offset}
        />
      </svg>
      <span className="z-10 text-xs text-[#000] font-bold">
        <i className='bi bi-chevron-up'></i>
      </span>
    </div>
  );
};

export default ScrollToTopSquare;
