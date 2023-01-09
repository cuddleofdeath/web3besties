/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function Guides() {
  return (
    <>
      <Navbar />

      <div className='flex w-full bg-base-100 place-items-center justify-center py-6 z-10'>
        <div className='card w-96 bg-base-100 shadow-xl image-full'>
          <figure>
            <img src='/leafcreature.png' alt='Lens' />
          </figure>
          <div className='card-body'>
            <h2 className='card-title'>Lens Protocol</h2>
            <p>Find out what Lens Protocol has to offer.</p>
            <div className='card-actions justify-end'>
              <button className='btn btn-primary'>View Guide</button>
            </div>
          </div>
        </div>

        <div className='divider divider-horizontal '></div>

        <div className='card w-96 bg-base-100 shadow-xl image-full'>
          <figure>
            <img src='/boxctopus.png' alt='Lens' />
          </figure>
          <div className='card-body'>
            <h2 className='card-title'>Web3.Storage</h2>
            <p>Find out how to store data on several different chains.</p>
            <div className='card-actions justify-end'>
              <button className='btn btn-primary'>View Guide</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
