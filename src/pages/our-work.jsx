import Metas from '@/components/metaDatas';
import Footer from '@/components/footer';
import HeroText from '@/components/heroText';
import Hero from '@/components/hero';
import Masonry from '@/components/masonry';
import React from 'react';

const OurWork = ({ data }) => {
  const { meta, hero, works, formfooter } = data;
  
  return (
    <>
      <Metas metadata={meta} />
      {hero.image.large ? (
        <Hero dataHero={hero} />
      ) : (
        <HeroText content={hero} />
      )}
      <Masonry
        layout="ourWork"
        heightColumn={65}
        columns={2}
        gridPictures={works}
      />
      <Footer dataContent={formfooter} />
    </>
  );
};

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`${process.env.NEXT_PUBLIC_ENDPOINT_CONTENT}work`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}
export default OurWork;
