import React from 'react';
import PropTypes from 'prop-types';
import { BsCart2 } from 'react-icons/bs';
import favorite from '../assets/wish.svg';
import './styles/Product.scss'

const Product = ({ name, price, isFavorite, discount, image }) => {
  const handleFavoriteClick = () => {
    // handle click to add/remove from favorites
  };

  return (
    <div className="product">
      <div className="product-image">
        <img src={image} alt={name} />
      </div>
      <div className="product-details">
        <h2>{name}</h2>
        <div>$<span className="price">{price}</span></div>
        {discount && <div className="discount">{discount}% off</div>}
        <div className='action-btn'>
          <button className='add2cart'>
            Add to cart
            <BsCart2 />
          </button>
          <button className={`favorite ${isFavorite ? 'active' : ''} fav-btn`} onClick={handleFavoriteClick}>
          <img src={favorite} alt="favorite" />
          </button>
        </div>
      </div>
    </div>
  );
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  isFavorite: PropTypes.bool,
  discount: PropTypes.number,
  image: PropTypes.string.isRequired,
};

export default Product;
