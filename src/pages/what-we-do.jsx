import Metas from '@/components/metaDatas';
import Footer from '@/components/footer';
import Hero from '@/components/hero';
import HorizontalSection from '@/components/horizontalSection';
import React from 'react';

const WhatWeDo = ({ data }) => {
  const { meta, hero, horizontalcontent, formfooter } = data;
  
  return (
    <>
      <Metas metadata={meta} />
      <Hero dataHero={hero} />
      <HorizontalSection
        blocksToIterate={horizontalcontent}
        classParent="01"
        type="whatWeDo"
      />
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
