import Metas from '@/components/metaDatas';
import Hero from '@/components/hero';
import AfterHero from '@/components/afterHero';
import HorizontalSection from '@/components/horizontalSection';
import ImgTextB from '@/components/imgTextB';
import Agency from '@/components/agency';
import Clients from '@/components/homeClients';
import Footer from '@/components/footer';
import { useContext, useEffect } from 'react';
import { ThinkTrue } from '@/context/ThinkTrueContext';

function Home({ data }) {
  const { meta, hero, mediablock, work, whatdo, team, clients, formfooter } =
    data;
  const { setPageLoaded } = useContext(ThinkTrue);
  const contentAfterHero = {
    text: [
      'We are an experiential marketing agency that specializes in brand initiatives that center around engaging diverse communities.',
      'Think True aims to celebrate cultural movements within these communities along with leaders who set the tone.',
    ],
    video: 'asdf',
    posterVideo: '/images/02-home.jpg',
    layout: 'home',
  };
  return (
    <>
      <Metas metadata={meta} />
      <Hero dataHero={hero} />
      <AfterHero content={contentAfterHero} mediaBlockContent={mediablock} />
      <HorizontalSection blocksToIterate={work} type="home" classParent="01" />
      <ImgTextB contentData={whatdo} />
      <Agency dataContent={team} image={'/images/05-home.jpg'} />
      <Clients dataContent={clients} />
      <Footer dataContent={formfooter} />
    </>
  );
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`${process.env.NEXT_PUBLIC_ENDPOINT_CONTENT}home`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}

export default Home;
