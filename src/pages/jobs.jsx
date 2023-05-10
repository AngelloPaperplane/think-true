import AfterHero from '@/components/afterHero';
import FeaturesJobs from '@/components/featuresJobs';
import Hero from '@/components/hero';
import ImgText from '@/components/imgText';
import React from 'react';

const Jobs = () => {
  const contentAfterHero = {
    title: { text: 'Hustle, fun, and diverse', position: 'left' },
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
  return (
    <>
      <Hero
        title="WELCOME TO THE FAMILY"
        image="/images/07-team.jpg"
        colorTitle="#F2F0EB"
        lineStyles={{ color: '#D02E2A', left: '20%' }}
        layout={'secondary'}
      />
      <AfterHero content={contentAfterHero} />
      {contentFeatures.map((feature, i) => (
        <FeaturesJobs
          key={typeof window !== 'undefined' ? window.crypto.randomUUID() : i}
          contentFeaturesJobs={feature}
          last={i === contentFeatures.length - 1 ?? false}
        />
      ))}
      <ImgText content={contentImgText} />
    </>
  );
};

export default Jobs;
