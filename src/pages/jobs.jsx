import Metas from '@/components/metaDatas';
import AfterHero from '@/components/afterHero';
import FeaturesJobs from '@/components/featuresJobs';
import Footer from '@/components/footer';
import Hero from '@/components/hero';
import ImgText from '@/components/imgText';
import React from 'react';

const Jobs = ({ data }) => {
  const { meta, hero, description, features, sendusemail, formfooter } = data;
  /*
  const contentAfterHero = {
    title: { text: 'OUR CULTURE', position: 'left' },
    text: [
      // eslint-disable-next-line quotes
      'We believe in embracing multicultural perspectives and celebrating diversity. ',
      // eslint-disable-next-line quotes
      "We're flexible and always ready to adapt to changing needs, making the journey fun and enjoyable. Our positive attitude and determination are infused with laughter and grit, this is not a job, is a way of living. ",
    ],
    posterVideo: '/images/02-home.jpg',
    layout: 'team',
    align: 'right',
  };
  
  const contentFeatures = [
    {
      index: '01',
      title: 'CREATIVE',
      features:
        '<p>Freelance Senior UX Designer</p> <br> <p>Senior UI Designer</p>',
    },
    {
      index: '02',
      title: 'PRODUCTION',
      features: '<p>Creative</p> <br> <p>Freelance Creative</p>',
    },
    {
      index: '03',
      title: 'ACCOUNT MANAGMENT',
      features:
        '<p>Freelance Senior UX Designer</p> <br> <p>Senior UI Designer</p>',
    },
  ];

  const contentImgText = {
    order: 'textImg',
    text: '<p>Sometimes you just need an opportunity: If you are looking for an <span>internship</span> opportunity reach out. </p>',
    img: '/images/02-jobs.jpg',
  };
*/
  return (
    <>
      <Metas metadata={meta} />
      <Hero dataHero={hero} />
      <AfterHero mediaBlockContent={description} />
      {features.map((feature, i) => (
        <FeaturesJobs
          key={typeof window !== 'undefined' ? window.crypto.randomUUID() : i}
          contentFeaturesJobs={feature}
          last={i === features.length - 1 ?? false}
        />
      ))}
      <ImgText content={sendusemail} />
      <Footer dataContent={formfooter} />
    </>
  );
};

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`${process.env.NEXT_PUBLIC_ENDPOINT_CONTENT}jobs`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}
export default Jobs;
