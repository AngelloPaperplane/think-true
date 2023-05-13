import Head from 'next/head';
// import styles from '@/styles/Home.module.css';
import Hero from '@/components/hero';
import AfterHero from '@/components/afterHero';
import HorizontalSection from '@/components/horizontalSection';
import WhatWeDo from '@/components/whatWeDo';
import Agency from '@/components/agency';
import Clients from '@/components/homeClients';

function Home({data}) {
  const {hero} = data;
  console.log(data);
  const contentAfterHero = {
    text: [
      'We are an experiential marketing agency that specializes in brand initiatives that center around engaging diverse communities.',
      'Think True aims to celebrate cultural movements within these communities along with leaders who set the tone.',
    ],
    video: 'asdf',
    posterVideo: '/images/02-home.jpg',
    layout: 'home',
  };
  const horizontalBlocks = [
    {
      title: 'NIKE DREW LEAGUE',
      subtitle: 'STRENGTHENING A COMMUNITY THROUGH SPORT',
      pattern: 'plus',
      color: '#4EB4C8',
      img: '/images/03-home.jpg',
      text: 'Bringing signature athletes, local legends, Hollywood stars, and thousands of fans to South Central to create a destination for high-caliber basketball within a resilient community.',
    },
    {
      title: 'NIKE DREW LEAGUE',
      subtitle: 'STRENGTHENING A COMMUNITY THROUGH SPORT',
      pattern: 'arrows',
      color: '#D02E2A',
      img: '/images/03-home.jpg',
      text: 'Bringing signature athletes, local legends, Hollywood stars, and thousands of fans to South Central to create a destination for high-caliber basketball within a resilient community.',
    },
    {
      title: 'NIKE DREW LEAGUE',
      subtitle: 'STRENGTHENING A COMMUNITY THROUGH SPORT',
      pattern: 'circles',
      color: '#FAA300',
      img: '/images/03-home.jpg',
      text: 'Bringing signature athletes, local legends, Hollywood stars, and thousands of fans to South Central to create a destination for high-caliber basketball within a resilient community.',
    },
  ];
  return (
    <>
      <Head>
        <title>Think True</title>
        <meta name="description" content="Think True" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero dataHero={hero} />
      <AfterHero content={contentAfterHero} />
      <HorizontalSection blocksToIterate={horizontalBlocks} classParent="01" />
      <WhatWeDo />
      <Agency image={'/images/05-home.jpg'} />
      <Clients />
    </>
  );
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://paperplane.com.co/dev/thinktrue/wp-json/thinktrue-api/v1/home`);
  const data = await res.json();
 
  // Pass data to the page via props
  return { props: { data } };
}

export default Home;
