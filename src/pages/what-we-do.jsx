import Metas from '@/components/metaDatas';
import Footer from '@/components/footer';
import Hero from '@/components/hero';
import HorizontalSection from '@/components/horizontalSection';
import React from 'react';

const WhatWeDo = ({ data }) => {
  const { meta, hero, horizontalcontent, formfooter } = data;
  /*
  const horizontalBlocks = [
    {
      title: 'BRAND CONSULTING',
      titleWidth: '50%',
      colorText: '#363233',
      pattern: 'plus',
      color: '#00B099',
      text: 'We understand the power of brands, of uniqueness and standing out. We will help you to customize a visual center, brand strategy, and all the assets for all your physical and digital activations needs.',
    },
    {
      title: 'AUDIENCE INSIGHTS',
      titleWidth: '50%',
      colorText: '#363233',
      pattern: 'arrows',
      color: '#D02E2A',
      // eslint-disable-next-line quotes
      text: "We craft effective and creative multicultural marketing by understanding and profiling target personas. Your success lies in our ability to capture and hold people's attention by understanding what makes them tick.",
    },
    {
      title: 'TALENT MANAGEMENT',
      titleWidth: '70%',
      colorText: '#363233',
      pattern: 'circles',
      color: '#FAA300',
      text: 'From strategic talent casting, to campaign development, through execution, delivering on joint objectives are key to a successful partnership.',
    },
    {
      title: 'PR CONSULTATION & ISSUE MARKETIG',
      titleWidth: '80%',
      colorText: '#363233',
      pattern: 'circles',
      color: '#4EB4C8',
      text: 'Consulting with brands regarding how to close “gaps” between what their stakeholders expect and how their businesses are actually operating.',
    },
    {
      title: 'GRASSROOTS MARKETING & COMMUNITY ENGAGEMENT',
      titleWidth: '90%',
      colorText: '#F2F0EB',
      pattern: 'circles',
      color: '#CDB74E',
      text: 'Leveraging members of diverse communities to help develop marketing strategies and test ideas to ensure authenticity and resonance.',
    },
    {
      title: 'CREATIVE TECHNOLOGY',
      titleWidth: '50%',
      colorText: '#F2F0EB',
      pattern: 'circles',
      color: '#F54D4F',
      text: 'Think True uses creative technology to craft unforgettable experiences that captivate diverse communities. We take a non-traditional approach to experiential marketing, immersing people in a world of innovation and multiculturalism.',
    },
    {
      title: 'DIGITAL CAMPAIGNS & STRATEGY',
      titleWidth: '95%',
      colorText: '#363233',
      pattern: 'circles',
      color: '#D9AEA7',
      // eslint-disable-next-line quotes
      text: "Our digital strategy expertise specializes in creating a unique brand perspective in digital channels. We'll help you connect with your target audience through tailored content and build a sustainable ecosystem for your brand.",
    },
  ];
  */
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
      {/*
      <Hero
        title="WHAT WE DO"
        image="/images/services.jpg"
        colorTitle="#F2F0EB"
        lineStyles={{ color: '#D02E2A', left: '30%' }}
        layout={'secondary'}
      />
      <HorizontalSection
        blocksToIterate={horizontalBlocks}
        classParent="01"
        type="whatWeDo"
      />
      */}
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
