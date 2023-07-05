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
  const { meta, hero, formfooter, blocks } = data;
  console.log(hero);
  const { setPageLoaded } = useContext(ThinkTrue);
  useEffect(() => {
    setTimeout(() => {
      setPageLoaded(true);
    }, 1600);
  }, []);
  /*
  const horizontalBlocks1 = [
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
      text: "Our digital strategy expertise specializes in creating a unique brand perspective in digital channels. We'll help you connect with your target audience through tailored content and build a sustainable ecosystem for your brand.",
    },
  ];
  const horizontalBlocks2 = [
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
      text: "Our digital strategy expertise specializes in creating a unique brand perspective in digital channels. We'll help you connect with your target audience through tailored content and build a sustainable ecosystem for your brand.",
    },
  ];
  const horizontalBlocks3 = [
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
      text: "Our digital strategy expertise specializes in creating a unique brand perspective in digital channels. We'll help you connect with your target audience through tailored content and build a sustainable ecosystem for your brand.",
    },
  ];
  */
  return (
    <>
      <Metas metadata={meta} />
      <Hero dataHero={hero} />
      <AfterHero />
      <ImgTextB />
      <Agency />
      {
        <HorizontalSection
          dataHero={hero}
          blocksToIterate={blocks[0]}
          classParent="01"
          type="about-1"
        />
      }
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
