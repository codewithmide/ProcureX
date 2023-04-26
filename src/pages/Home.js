import React from 'react';
import Marquee from "react-fast-marquee";
import Banner from '../components/Banner';
import Product from '../components/Product';
import './styles/Home.scss';
import shippingIcon from '../assets/service.png';
import GiftIcon from '../assets/service-02.png';
import supportIcon from '../assets/service-03.png';
import settingsIcon from '../assets/service-04.png';
import paymentIcon from '../assets/service-05.png';
import test from '../assets/Industrial equipment and machinery.jpg';
import ABB from '../assets/abb.png';
import Siemens from '../assets/siemens.png';
import Schneider from '../assets/Schneider_Electric.png';
import Atlas from '../assets/Atlas-Copco-Logo.png';
import KSB from '../assets/ksb.png';
import Dunlop from '../assets/dunlop.jpg';
import Bosch from '../assets/bosch.png';
import Bahco from '../assets/Bahco.png';
import Omron from '../assets/omron.png';
import allen from '../assets/allen.png';
import Testimonial from '../components/Testimonial';
import John from '../assets/john.jpg';
import Maria from '../assets/maria.jpg';
import David from '../assets/david.jpg';

const Home = () => {
  return (
    <main>
      <section>
        <Banner />
      </section>
      
      <section className='wrapper-2'>
        <div className='wrapper-2-container'>
          <div className="icon-n-text">
            <div>
              <img src={shippingIcon} alt="shipping icon" />
            </div>
            <div>
              <h4>Free Shipping</h4>
              <p>from all orders over $100</p>
            </div>
          </div>
          <div className="icon-n-text">
            <div>
              <img src={GiftIcon} alt="gift icon" />
            </div>
            <div>
              <h4>Daily Surprise Offer</h4>
              <p>Save upto 25% off</p>
            </div>
          </div>
          <div className="icon-n-text">
            <div>
              <img src={supportIcon} alt="support icon" />
            </div>
            <div>
              <h4>Support 24/7</h4>
              <p>shop with an expert</p>
            </div>
          </div>
          <div className="icon-n-text">
            <div>
              <img src={settingsIcon} alt="settings icon" />
            </div>
            <div>
              <h4>Affordable Prices</h4>
              <p>Get prices directly from OEM</p>
            </div>
          </div>
          <div className="icon-n-text">
            <div>
              <img src={paymentIcon} alt="payment icon" />
            </div>
            <div>
              <h4>Secure Payment</h4>
              <p>100% protected payment</p>
            </div>
          </div>
        </div>
        <div className="categories">
          <div className='item-categories'>
            <p>Hardware and tools</p>
          </div>
          <div className='item-categories'>
            <p>Industrial equipments</p>
          </div>
          <div className='item-categories'>
            <p>Office supplies</p>
          </div>
          <div className='item-categories'>
            <p>Automation spares</p>
          </div>
          <div className='item-categories'>
            <p>Safety products</p>
          </div>
        </div>
      </section>

      <section className='products'>
        <h1>Featured products</h1>
        <div className='products-container'>
        <Product
          key={1}
          name='product 1'
          price={12}
          isFavorite
          image={test}
        />
        <Product
          key={2}
          name='product 1'
          price={10}
          isFavorite
          image={test}
        />
        <Product
          key={3}
          name='product 1'
          price={12}
          isFavorite
          image={test}
        />
        <Product
          key={4}
          name='product 1'
          price={12}
          isFavorite
          image={test}
        />
        <Product
          key={5}
          name='product 1'
          price={12}
          isFavorite
          image={test}
        />
        <Product
          key={6}
          name='product 1'
          price={12}
          isFavorite
          image={test}
        />
        <Product
          key={7}
          name='product 1'
          price={12}
          isFavorite
          image={test}
        />
        <Product
          key={8}
          name='product 1'
          price={12}
          isFavorite
          image={test}
        />
        <Product
          key={9}
          name='product 1'
          price={12}
          isFavorite
          image={test}
        />
        <Product
          key={10}
          name='product 1'
          price={12}
          isFavorite
          image={test}
        />
        <Product
          key={11}
          name='product 1'
          price={12}
          isFavorite
          image={test}
        />
        <Product
          key={12}
          name='product 1'
          price={12}
          isFavorite
          image={test}
        />
        <Product
          key={13}
          name='product 1'
          price={12}
          isFavorite
          image={test}
        />
        <Product
          key={14}
          name='product 1'
          price={12}
          isFavorite
          image={test}
        />
        <Product
          key={15}
          name='product 1'
          price={12}
          isFavorite
          image={test}
        />
        </div>
      </section>

      <section className='brands'>
        <Marquee>
          <div className='brands-container'>
              <img src={ABB} alt="abb" />
              <img src={Siemens} alt="siemens" />
              <img src={Schneider} alt="schneider" />
              <img src={Bahco} alt="bahco" />
              <img src={Bosch} alt="bosch" />
              <img src={Dunlop} alt="dunlop" />
              <img src={KSB} alt="ksb" />
              <img src={Atlas} alt="atlas" />
              <img src={Omron} alt="omron" />
              <img src={allen} alt="allen" />
          </div>
        </Marquee>
      </section>

      <section className='testimonial-container'>
        <Testimonial name='David P.' quote="As a procurement professional, I'm always looking for ways to streamline my processes and save time. This platform has been a game-changer for me. It's user-friendly and has all the features I need to manage my projects efficiently. I highly recommend it to anyone in the industry." image={David}/>
        <Testimonial name='Maria L.' quote="I was hesitant to switch to a new procurement platform, but after trying this one, I'm so glad I did. It's so much more intuitive than my old system, and I can easily track my orders and invoices in real-time. Plus, the customer support is top-notch!" image={Maria}/>
        <Testimonial name='John C.' quote="This platform has revolutionized the way we do procurement. It's helped us cut costs and streamline our processes, making us more efficient and competitive in the market. Our team loves it and we've already seen a significant return on investment. Thank you for such a great product!" image={John}/>
      </section>
    </main>
  )
}

export default Home;