import React, { useEffect, useState } from 'react'

import { ArrowUp2 } from 'iconsax-react';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleScroll = () => {
    setIsVisible(window.scrollY > 500); // Adjust the scroll threshold as needed
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-4 right-4 p-2 bg-gray-800 text-white ${isVisible ? 'visible z-30' : 'invisible'}`}
    >
      <ArrowUp2 size="16" variant="TwoTone" color="white"/>
    </button>
  )
}

export default BackToTopButton