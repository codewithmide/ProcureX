import React from 'react';
import './styles/Header.scss';

const Header = () => {
  return (
    <>
      <header>
        <div className='header-container'>
          <div className='top-container'>
            <div className='left'>
              <p>
                free delivery on orders over $100 and free returns
              </p>
            </div>
            <div className='right'>
              <p>
                Telephone: <a href='tel:+234 7088899861'>+2347088899861</a>
              </p>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header