/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './styles/Footer.scss';
import Newsletter from '../assets/newsletter.png';
import { FaFacebook, FaInstagram, FaDiscord, FaTwitter, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
        <section className='ft-top-container'>
          <div className="ft-container news">
            <div className='newsletter'>
              <img src={Newsletter} alt="newsletter icon" />
              <h2>Subscribe to our newsletter</h2>
            </div>
            <div className='subscribe'>
              <input type="email" placeholder='Enter your email'/>
              <button>SUBSCRIBE</button>
            </div>
          </div>
        </section>

        <section className='ft-mid-container'>
          <div className="ft-container second-div">

            <div className='ft-navlinks first'>
              <h3>contact us</h3>
              <div className="ft-links">
                <p>demo store</p>
                <p className='long'>No. 1234 Russell, Munich, 11111 United states</p>
                <a href='tel:+234 7088899861'>+234 7088899861</a>
                <a href='malito:codewithmide@gmail.com' className='email'>codewithmide@gmail.com</a>
                <div className='social-links'>
                  <div className='social'>
                    <FaTwitter />
                  </div>
                  <div className='social'>
                    <FaFacebook />
                  </div>
                  <div className='social'>
                    <FaDiscord/>
                  </div>
                  <div className='social'>
                    <FaInstagram  />
                  </div>
                  <div className='social'>
                    <FaLinkedin  />
                  </div>
                </div>
              </div>
            </div>

            <div className='ft-navlinks second'>
              <h3>information</h3>
              <div className="ft-links">
                <p>Privacy policy</p>
                <p>Refund policy</p>
                <p>Shipping policy</p>
                <p>Term of service</p>
                <p>Blogs</p>
              </div>
            </div>

            <div className='ft-navlinks third'>
              <h3>account</h3>
              <div className="ft-links">
                <p>search</p>
                <p>about us</p>
                <p>faq</p>
                <p>contact</p>
                <p>size chart</p>
              </div>
            </div>

            <div className='ft-navlinks fourth'>
              <h3>quick links</h3>
              <div className="ft-links">
                <p>accessories</p>
                <p>Industries</p>
                <p>Office</p>
                <p>Home</p>
                <p>Automobile</p>
              </div>
            </div>

            <div className='ft-navlinks fifth'>
              <h3>our app</h3>
              <div className="ft-links">
                <p>
                  Download our App and get extra 15% discount on your first order.
                </p>
                <div className='store'>
                  <a href="#">
                    <img
                      src="https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png"
                      alt="Get it on Google Play"
                    />
                  </a>
                  <a href="#">
                    <img
                      src="https://linkmaker.itunes.apple.com/assets/shared/badges/en-us/appstore-lrg.svg"
                      alt="Download on the App Store"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='ft-bottom-container'>
          <div className="ft-container">
            <div className='copyright'>
              <p>
                &copy; {new Date().getFullYear()}: Copyright ProcureX
              </p>
            </div>
          </div>
        </section>
      </footer>
  )
}

export default Footer;