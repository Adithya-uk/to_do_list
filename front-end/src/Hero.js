import React from 'react';
import phoneImg from './images/phone.png';
import { useGlobalContext } from './context';

const Hero = () => {
  const { closeSubmenu } = useGlobalContext();
  return (
    <section className='hero' onMouseOver={closeSubmenu}>
      <div className='hero-center'>
        <article className='hero-info'>
          <h1>
            Welcome
          </h1>
          <p>
           A task manager you can trust ...
          </p>
          {/* <button className='btn'>Start now</button> */}
        </article>
        <article className='hero-images'>
          <img src={phoneImg} className='phone-img' alt='phone' />
        </article>
      </div>
    </section>
  );
};

export default Hero;