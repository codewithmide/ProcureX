import React, { useState, useEffect } from 'react';
import BannerOne from '../assets/banner-1.jpg';
import BannerTwo from '../assets/banner-2.jpg';
import BannerThree from '../assets/banner-3.jpg';
import BannerFour from '../assets/banner-4.jpg';
import './styles/Banner.scss';


const Banner = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const images = [
    BannerOne,
    BannerTwo,
    BannerThree,
    BannerFour
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImageIndex((activeImageIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [activeImageIndex, images.length]);

  return (
    <div className="banner" style={{ position: 'relative' }}>
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Banner ${index + 1}`}
          className='banner-image'
          style={{
            position: 'absolute',
            objectFit: 'cover',
            top: 0,
            left: 0,
            opacity: activeImageIndex === index ? 1 : 0,
            transition: 'opacity 1s ease-in-out',
            zIndex: activeImageIndex === index ? 0 : -1
          }}
        />
      ))}
    </div>
  );
};

export default Banner;
