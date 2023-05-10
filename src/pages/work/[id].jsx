import AfterHero from '@/components/afterHero';
import Hero from '@/components/hero';
import React from 'react';

const DetailWork = () => {
  const contentAfterHero = {
    text: [
      'RISE is a national nonprofit that educates and empowers the sports community to end racism, champion social justice and improve race relations.',
    ],
    title: { text: 'RISE Develops Champions of Change Amongst Sports Fans', position: 'left' },
    layout: 'team',
  };
  return (
    <>
      <Hero
        image="/images/01-detail.jpg"
        lineStyles={{ color: '#D02E2A', left: '17%' }}
        layout={'poster'}
        align={'left'}
        bgColor={'#00B099'}
      />
      <AfterHero content={contentAfterHero} />
    </>
  );
};

export default DetailWork;
