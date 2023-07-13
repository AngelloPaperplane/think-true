import Metas from '@/components/metaDatas';
import AfterHero from '@/components/afterHero';
import BigImage from '@/components/bigIMage';
import Footer from '@/components/footer';
import Hero from '@/components/hero';
import ImgTextB from '@/components/imgTextB';
import SiteSlider from '@/components/slider';
import YellowTextImg from '@/components/yellowTextImg';
import React from 'react';
import OurNumbers from '@/components/ourNumbers';

const DetailWork = ({ data }) => {
  const { meta, hero, blocks, moreprojects, formfooter } = data;
  
  function get_block_content(block, index) {
    switch (block.block_name) {
      case 'text_block':
        return (
          <AfterHero
            key={index}
            mediaBlockContent={block}
            afterhero={index > 0}
          />
        );
      case 'image_block':
        return <BigImage key={index} dataImage={block} />;
      case 'analytics_block':
        return <OurNumbers key={index} data={block} />;
      case 'split_block':
        if (block.layout === 'full') {
          return <ImgTextB key={index} contentData={block} />;
        }
        return <YellowTextImg key={index} contentData={block} />;
    }
  }

  return (
    <>
      <Metas metadata={meta} />
      <Hero dataHero={hero} />

      {blocks.map((block, i) => get_block_content(block, i))}
      <SiteSlider {...moreprojects} />
      <Footer dataContent={formfooter} />
    </>
  );
};
export async function getServerSideProps(req) {
  const id = req.params.id;
  const resData = await fetch(
    `${process.env.NEXT_PUBLIC_ENDPOINT_CONTENT}workdetail?datawork=${id}`
  );
  const data = await resData.json();

  return { props: { data } };
}
export default DetailWork;
