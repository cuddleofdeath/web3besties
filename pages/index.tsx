import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='bg-gray-300 min-h-screen flex flex-col'>
        <header className='bg-red-500 py-8'>
          <h1 className='text-2xl text-white font-bold mx-auto max-w-md'>
            Web3Besties - Learn web3 with us!
          </h1>
        </header>

        {/* Create a section for the newsletter */}
        <div className='bg-gray-100 py-8'>
          <h2 className='text-2xl text-gray-800 font-bold mx-auto max-w-md'>
            About
          </h2>
          <p className='text-lg text-gray-800 mx-auto max-w-md'>
            Web3Besties is currently being built from the ground up. Courses
            launching in 2023. Newsletter is already live!
          </p>

          {/* italic text */}
          <p className='text-lg text-gray-800 mx-auto max-w-md italic mt-6 '>
            <ul>
              <li className=''>
                👱🏾‍♀️ Coming soon: Resources placeholder text. Check back later!
              </li>
              <li className='mt-2'>
                🌎 Coming soon: Placeholder text. Check back later!
              </li>
            </ul>
          </p>
        </div>
        <div className='bg-gray-100 py-8'>
          <h2 className='text-2xl text-gray-800 font-bold mx-auto max-w-md'>
            Newsletter
          </h2>
          <p className='text-lg text-gray-800 mx-auto max-w-md'>
            Sign up for our free weekly newsletter to get the latest news and
            developments in the Web3 space.
          </p>
        </div>
        {/* Create a section for the courses */}
        <div className='bg-gray-100 py-8'>
          <h2 className='text-2xl text-gray-800 font-bold mx-auto max-w-md'>
            Courses
          </h2>
          <p className='text-lg text-gray-800 mx-auto max-w-md'>
            We are currently working on a series of courses to help you get up
            to speed with Web3. Stay tuned!
          </p>
        </div>

        <div className='mx-auto max-w-md py-8'>
          <Link href='https://web3besties.substack.com'>
            <button className='bg-orange-500 text-white font-bold py-2 px-4 rounded-full hover:text-gray-300 hover:bg-orange-900 '>
              Subscribe
            </button>
          </Link>
        </div>
        <footer className='bg-gray-800 py-4 text-white text-center'>
          <p>
            Made with ❤️ from{' '}
            <a href='https://www.twitter.com/cuddleofdeath'>Cuddleofdeath</a>{' '}
            2023
          </p>
        </footer>
      </div>
    </>
  );
}
