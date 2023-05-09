import AfterHero from '@/components/afterHero';
import Hero from '@/components/hero';
import React from 'react';

const Jobs = () => {
  const contentAfterHero = {
    title: { text: 'Hustle, fun, and diverse', position: 'left' },
    text: [
      'Our team members bring a wealth of knowledge and experience that allows us to create unique and multidimensional marketing experiences for our clients.',
      // eslint-disable-next-line quotes
      "We believe that our multicultural approach to marketing is essential in today's globalized world and allows us to connect with audiences on a deeper level.",
    ],
    posterVideo: '/images/02-home.jpg',
    layout: 'team',
    align: 'right',
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
      <AfterHero contentAfterHero={contentAfterHero} />
    </>
  );
};

export default Jobs;
