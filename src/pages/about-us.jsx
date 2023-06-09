/* eslint-disable quotes */
import Metas from '@/components/metaDatas';
import Footer from '@/components/footer';
import HorizontalSection from '@/components/horizontalSection';
import React, { useContext, useEffect } from 'react';
import { ThinkTrue } from '@/context/ThinkTrueContext';
import Hero from '@/components/hero';
import AfterHero from '@/components/afterHero';
import ImgTextB from '@/components/imgTextB';
import Agency from '@/components/agency';

const AboutUs = ({ data }) => {
  const {
    meta,
    hero,
    formfooter,
    blocks,
    mediablock,
    whatdo,
    team,
    whatdo_new,
  } = data;
  console.log(hero);
  const { setPageLoaded } = useContext(ThinkTrue);
  useEffect(() => {
    setTimeout(() => {
      setPageLoaded(true);
    }, 1600);
  }, []);

  return (
    <>
      <Metas metadata={meta} />
      <Hero dataHero={hero} />
      <AfterHero mediaBlockContent={mediablock} />
      <ImgTextB contentData={whatdo} />
      <ImgTextB contentData={whatdo_new} />
      {
        // <Agency dataContent={team} />
      }
      <HorizontalSection
        blocksToIterate={blocks[0]}
        classParent="01"
        type="about-1"
      />
      <Footer dataContent={formfooter} />
    </>
  );
};

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`${process.env.NEXT_PUBLIC_ENDPOINT_CONTENT}about`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}

export default AboutUs;
