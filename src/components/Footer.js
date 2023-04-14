import React from 'react';
import './styles/Footer.scss';
import Newsletter from '../assets/newsletter.png';
import { FaFacebook, FaInstagram, FaDiscord, FaTwitter, FaYoutube } from 'react-icons/fa'

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
          <div className="ft-container ">
            <div className='ft-navlinks first'>
              <h3>contact us</h3>
              <div className="ft-links">
                <p>demo store</p>
                <p>No. 1234 Russell, Munich, 11111 United states</p>
                <p>+234 7088899861</p>
                <p className='email'>codewithmide@gmail.com</p>
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
                    <FaYoutube  />
                  </div>
                </div>
              </div>
            </div>

            <div className='ft-navlinks second'>
              <h3>information</h3>
              <div className="ft-links">

              </div>
            </div>

            <div className='ft-navlinks third'>
              <h3>account</h3>
              <div className="ft-links">

              </div>
            </div>

            <div className='ft-navlinks fourth'>
              <h3>quick links</h3>
              <div className="ft-links">

              </div>
            </div>
            <div className='ft-navlinks fifth'>
              <h3>our app</h3>
              <div className="ft-links">

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