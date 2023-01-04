import { Herr_Von_Muellerhoff } from '@next/font/google';
import React, { useState } from 'react';

const Hero = () => {
  return (
    <div
      className='hero min-h-screen z-10'
      style={{ backgroundImage: 'url(/hero.png)' }}
    >
      <div className='hero-overlay bg-opacity-40'></div>
      <div className='hero-content text-center text-neutral-content'>
        <div className='max-w-md'>
          <h1 className='mb-5 text-5xl font-bold text-white '>
            Learn web3 with us!
          </h1>
          <div className='mb-5 text-white'>
            Web3Besties is currently being built from the ground up. Courses
            launching in 2023. Newsletter is already live!
          </div>
          <a href='https://web3besties.substack.com'>
            <button className='btn btn-primary'>View Newsletter</button>
          </a>
          <button className='btn btn-secondary ml-5'>View Roadmap</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
