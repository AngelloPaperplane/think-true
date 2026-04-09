/* eslint-disable quotes */
import Metas from '@/components/metaDatas';
import Footer from '@/components/footer';
import Hero from '@/components/hero';
import AfterHero from '@/components/afterHero';
import AboutUsContent from '@/components/aboutUsContent';
import React, { useContext, useEffect } from 'react';
import { ThinkTrue } from '@/context/ThinkTrueContext';

const AboutTemplate = ({ data }) => {

  const { setPageLoaded } = useContext(ThinkTrue);

  useEffect(() => {
    if (data) {
      const timer = setTimeout(() => {
        setPageLoaded(true);
      }, 1600);
      return () => clearTimeout(timer);
    }
  }, [data, setPageLoaded]);

  if (!data) {
    return null;
  }

  const {
    meta,
    hero,
    formfooter,
    mediablock,
    whatdo,
    whatdo_new,
  } = data;

  return (
    <>
      <Metas metadata={meta} />
      <Hero dataHero={hero} />
      <AfterHero mediaBlockContent={mediablock} />
      <AboutUsContent whatdo={whatdo} whatdo_new={whatdo_new} />
      <Footer dataContent={formfooter} />
    </>
  );
};

export default AboutTemplate;