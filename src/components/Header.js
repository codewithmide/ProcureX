import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
import Logo from './Logo';
import './styles/Header.scss';
import Compare from '../assets/compare.svg';
import Wishlist from '../assets/wishlist.svg';
import User from '../assets/user.svg';
import Cart from '../assets/cart.svg';
import DropdownMenu from './dropdown';



const Header = () => {
  return (
    <>
      <header>
        <div className='header-container'>
          <section className='top-container'>
            <div className='container'>
              <div className='left'>
                <p>
                  Free delivery on orders over $100 and free returns
                </p>
              </div>
              <div className='right'>
                <p>
                  Telephone: <a href='tel:+234 7088899861'>+2347088899861</a>
                </p>
              </div>
            </div>
          </section>
          
          <section className='mid-container'>
            <div className='container'>
              <div className='logo-container'>
                <Link>
                  <Logo />
                </Link>
              </div>

              <div className='mobile'>
                
              </div>

              <div className='form-input'>
                <form>
                  <input type="text" id="search" name="search" placeholder="Search product here" aria-label="Search"  />
                  <button type="submit" className='search-btn'><BsSearch /></button>
                </form>
              </div>

              <div className='links desktop'>
                <div>
                  <Link>
                    <div className='link-container'>
                      <img src={Compare} alt='compare'/>
                      <p>Compare<br />Products</p>
                    </div>
                  </Link>
                </div>
                <div>
                  <Link>
                    <div className='link-container'>
                        <img src={Wishlist} alt='wishlist'/>
                        <p>Favorite<br />Wishlist</p>
                    </div>                  
                  </Link>
                </div>
                <div>
                  <Link>
                    <div className='link-container'>
                        <img src={User} alt='user'/>
                        <p>Login<br />My Account</p>
                    </div>  
                  </Link>
                </div>
                <div>
                  <Link>
                    <div className='link-container'>
                        <img src={Cart} alt='cart'/>
                        <div className='cart'>
                          <div className='cart-count'>0</div>
                          <p>$<span className='cart-value'>0.00</span></p>
                        </div>
                    </div>
                  </Link>
                </div>
              </div>

            </div>
          </section>

          <section className='bottom-container'>
            <div className='container-three'>
              <div className='menu'>
                <DropdownMenu />
              </div>
              <nav className='navigation desktop'>
                <NavLink to='/' activeClassName="active-link">HOME</NavLink>
                <NavLink to='/store' activeClassName="active-link">STORE</NavLink>
                <NavLink to='/blogs' activeClassName="active-link">BLOGS</NavLink>
                <NavLink to='/contact' activeClassName="active-link">CONTACT</NavLink>
              </nav>
            </div>
          </section>
        </div>
      </header>
    </>
  )
}

export default Header