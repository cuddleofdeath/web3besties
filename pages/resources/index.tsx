/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function Resources() {
  return (
    <>
      <Navbar />
      <div className='flex w-full bg-base-100 place-items-center justify-center py-6 z-10'>
        <div className='card w-96 bg-base-100 shadow-xl image-full'>
          <figure>
            <img src='/resourceduck.png' alt='resource duck' />
          </figure>
          <div className='card-body'>
            <h2 className='card-title'>Free Places to Learn Web3</h2>
            <p>Coming soon!</p>
            <div className='card-actions justify-end'>
              <button className='btn btn-primary'>View Guide</button>
            </div>
          </div>
        </div>

        <div className='divider divider-horizontal '></div>

        <div className='card w-96 bg-base-100 shadow-xl image-full'>
          <figure>
            <img src='/resourcecat.png' alt='Lens' />
          </figure>
          <div className='card-body'>
            <div className='card-title '>Web3 Grant Resources</div>
            <p>Learn about all the different grant opportunities available.</p>
            <div className='card-actions justify-end'>
              <Link href='/resources/grantresources'>
                <button className='btn btn-primary'>
                  View Grant Resources
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
