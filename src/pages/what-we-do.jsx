import Metas from '@/components/metaDatas';
import Footer from '@/components/footer';
import Hero from '@/components/hero';
import HorizontalSection from '@/components/horizontalSection';
import ServicesList from '@/components/servicesList';
import React from 'react';

const WhatWeDo = ({ data }) => {
  const { meta, hero, horizontalcontent, formfooter } = data;

  console.log('horizontalcontent: ', horizontalcontent);

  return (
    <>
      <Metas metadata={meta} />
      <Hero dataHero={hero} />
      <ServicesList dataContent={horizontalcontent} />
      <Footer dataContent={formfooter} />
    </>
  );
};

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_ENDPOINT_CONTENT}services`
  );
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}

export default WhatWeDo;
