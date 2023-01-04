/* eslint-disable @next/next/no-img-element */
import React from 'react';

import Link from 'next/link';

const GrantResources = () => {
  const grantResources = [
    {
      id: 1,
      name: 'Aave',
      url: 'https://aavegrants.org/',
      desc: 'Aave Grants DAO is a community-led grants program funding ideas submitted by the community.',
      logo: 'https://pbs.twimg.com/profile_images/1608494513454043156/MYwRL_5P_400x400.jpg',
    },
    {
      id: 2,
      name: 'Alchemy',
      url: 'https://compound.finance/',
      desc: 'Offering up to $50,000 in grant funding with WAGBI Program',
      logo: 'https://pbs.twimg.com/profile_images/1592585812650008579/8JavCOnE_400x400.png',
    },
    {
      id: 3,
      name: 'Avalanche',
      url: 'https://support.avax.network/en/articles/6128565-grants-how-do-i-get-involved-with-avalanche',
      desc: 'Recently launched the Avalanche Multiverse incentive program!',
      logo: 'https://pbs.twimg.com/profile_images/1605605053901021184/9LNylZAA_400x400.png',
    },
    {
      id: 4,
      name: 'Chainlink',
      url: 'https://chain.link/community/grants',
      desc: 'The Chainlink grant program deploys substantial resources toward the creation of critical developer tooling, the addition of high-quality data, and the launching of key services around the Chainlink Network.',
      logo: 'https://pbs.twimg.com/profile_images/1030475757892579334/qvSHhRyC_400x400.jpg',
    },
    {
      id: 5,
      name: 'ConsenSys',
      url: 'https://consensys.net/grants/',
      desc: 'ConsenSys Grants funds blockchain technology projects that meet the needs of a rapidly-accelerating Ethereum ecosystem.',
      logo: 'https://pbs.twimg.com/profile_images/1278725018445213697/H5uc3PPj_400x400.jpg',
    },
    {
      id: 6,
      name: 'dYdX',
      url: 'https://www.dydxgrants.com/',
      desc: 'The dYdX Grants Program provides funding to community-driven projects dedicated to growing the dYdX Protocol.',
      logo: 'https://pbs.twimg.com/profile_images/1364590285255290882/hjnIm9bV_400x400.jpg',
    },
    {
      id: 7,
      name: 'Ethereum Foundation',
      url: 'https://esp.ethereum.foundation/applicants',
      desc: 'Ethereum Foundation has the Ecosystem Support Program which provides funding and other forms of support to eligible projects working to improve Ethereum.',
      logo: 'https://pbs.twimg.com/profile_images/1084788308595617793/DOnqq1OM_400x400.jpg',
    },
    {
      id: 10,
      name: 'Fantom',
      url: 'https://fantom.foundation/blog/new-335m-ftm-incentive-program-with-gitcoin-grants/',
      desc: 'The FTM Incentive Program has already previously dispersed over 35 million $FTM to grow the Fantom ecosystem. The new 335 FTM Incentive Program (in partnership with GitCoin Grants) will allow ALL Fantom projects to apply for matched incentive rewards using their Quadratic Funding mechanism.',
      logo: 'https://pbs.twimg.com/profile_images/1292932673384714241/_BSnTr5s_400x400.png',
    },
    {
      id: 11,
      name: 'Gitcoin',
      url: 'https://gitcoin.co/grants/',
      desc: 'Gitcoin grants sustain web3 projects with quadratic funding.',
      logo: 'https://pbs.twimg.com/profile_images/1582410082993717248/p9IT-wEV_400x400.jpg',
    },
    {
      id: 12,
      name: 'Lens Protocol',
      url: 'https://aave.notion.site/Grants-Application-eec79f59fbad4e34b51acc3c936073a2',
      desc: 'Lens Protocol grants are available. Lens Protocol is an open-source, public protocol supporting projects that generate public goods for the community and give ecosystem participants the opportunity to learn from and build on eachother.',
      logo: 'https://pbs.twimg.com/profile_images/1606312563628773378/qhxSunIG_400x400.jpg',
    },
    {
      id: 13,
      name: 'Open Web Foundry',
      url: 'https://www.arweave.org/get-involved/investment-funding',
      desc: 'The Open Web Foundry is a combination of incubator and accelerator programmes, specially tailored to support both brand new and experienced founders in building the new, decentralized web. The Foundry’s goal is to support the expansion of the permaweb ecosystem, helping founders and builders create, launch, and grow their profit sharing communities and permaweb apps.',
      logo: 'https://pbs.twimg.com/profile_images/1235596780047339521/oRt6SiEN_400x400.jpg',
    },
    {
      id: 14,
      name: 'Polygon',
      url: 'https://polygon.technology/funds',
      desc: 'Polygon supports builders creating projects on Ethereum and Polygon. Apply for a grant and give wings to your dreams!',
      logo: 'https://pbs.twimg.com/profile_images/1576842830424969216/2wIojcdX_400x400.jpg',
    },
    {
      id: 15,
      name: 'Solana',
      url: 'https://solana.org/grants',
      desc: 'The Solana Foundation Grants Program provides milestone-based funding to support initiatives aimed at decentralizing, growing, and securing the Solana network.',
      logo: 'https://pbs.twimg.com/profile_images/1468225297703223311/QRZZdxtn_400x400.jpg',
    },
    {
      id: 16,
      name: 'Substrate',
      url: 'https://substrate.io/ecosystem/substrate-builders-program/',
      desc: 'The Substrate Builders Program identifies, supports, and mentors current and potential Substrate-related projects.',
      logo: 'https://pbs.twimg.com/profile_images/1245305170218692608/PbjK0yPQ_400x400.jpg',
    },
    {
      id: 17,
      name: 'The Graph',
      url: 'https://thegraph.com/ecosystem/grants/',
      desc: 'The Graph grants program is a gateway for contributing to web3. Grants are awarded for protocol, tooling, subgraph and dapp development, and growth initiatives. Check out past efforts funded by the community treasury.',
      logo: 'https://pbs.twimg.com/profile_images/1341100720943054848/C4RKAej-_400x400.jpg',
    },
    {
      id: 18,
      name: 'Web3 Foundation',
      url: 'https://web3.foundation/grants/',
      desc: 'Web3 Foundation grants program funds software development and research in the field of decentralized software protocols.',
      logo: 'https://pbs.twimg.com/profile_images/1162751266432442369/cjjjE5un_400x400.png',
    },
  ];

  const sortedGrantResources = grantResources.sort((a, b) => a.id - b.id);

  return (
    <>
      <div className='  bg-base-300  grid grid-rows-4 grid-flow-col gap-4'>
        {sortedGrantResources.map((grantResource) => (
          <div
            key={grantResource.id}
            className='
        card
        bg-base-100
        rounded-box
        shadow-lg
        overflow-hidden
        hover:shadow-2xl
        transition-shadow
        duration-300
        ease-in-out
        mb-4
        mx-4
        mt-4
        '
            style={{ width: '25rem' }}
          >
            <a href={grantResource.url}>
              <img
                src={grantResource.logo}
                style={{
                  objectFit: 'fill',
                  width: '25rem',
                  height: '25rem',
                }}
                alt='text'
              />
              <div className='pt-4 pb-2 justify-center justify-items-center self-center'>
                <div className='font-bold text-3xl mb-2 mx-2 '>
                  {grantResource.name}
                </div>
                <div className='text-gray-700 mx-2 text-md my-6 '>
                  {grantResource.desc}
                </div>
                <a href={grantResource.url} target='blank'>
                  <button className='btn btn-primary  w-[25em] mx-[5%] '>
                    Visit
                  </button>
                </a>
              </div>
            </a>
          </div>
        ))}
      </div>
    </>
  );
};

export default GrantResources;
