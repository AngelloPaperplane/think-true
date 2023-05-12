import Head from 'next/head';
// import styles from '@/styles/Home.module.css';
import Hero from '@/components/hero';
import AfterHero from '@/components/afterHero';
import HorizontalSection from '@/components/horizontalSection';
import ImgTextB from '@/components/imgTextB';
import Agency from '@/components/agency';
import Clients from '@/components/homeClients';
import Footer from '@/components/footer';

export default function Home() {
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
      <Hero
        title="Think true"
        image="/images/01-home.jpg"
        colorTitle="#FAA300"
        lineStyles={{ color: '#D02E2A', left: '14%' }}
        layout={'principal'}
        align={'left'}
      />
      <AfterHero content={contentAfterHero} />
      <HorizontalSection blocksToIterate={horizontalBlocks} classParent="01" />
      <ImgTextB
        title="WHAT WE DO"
        subtitle="TRUE OFFERINGS"
        color="#faa300"
        image='images/04-home.jpg'
        topText="We commit to honor and celebrate our diverse, culture-creating communities through brand initiatives that center around inclusive and authentic marketing."
        withList={true}
      />
      <Agency image={'/images/05-home.jpg'} />
      <Clients />
      <Footer />
    </>
  );
}
