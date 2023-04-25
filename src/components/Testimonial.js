import React from 'react';
import './styles/Testimonial.scss';

const Testimonial = ({ name, quote, image }) => {
    return (
      <div className="testimonial">
        <img src={image} alt={image} />
        <blockquote>{quote}</blockquote>
        <cite>{name}</cite>
      </div>
    );
};
  
export default Testimonial;