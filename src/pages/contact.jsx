import AfterHero from '@/components/afterHero';
import Footer from '@/components/footer';
import Hero from '@/components/hero';
import React from 'react';

const Contact = () => {
  const contentAfterHero = {
    text: [
      'We want to meet, develop a plan with you, and create impact work to shake multicultural marketing.',
      // eslint-disable-next-line quotes
      'Here is our email: hello@think-true.com to learn more about our capabilities, projects, and open positions?',
    ],
    posterVideo: '/images/02-home.jpg',
    layout: 'team',
    align: 'left',
  };
  return (
    <>
      <Hero
        title="LET’S TALK"
        image="/images/contact.jpg"
        colorTitle="#F2F0EB"
        lineStyles={{ color: '#FAA300', left: '20%' }}
        layout={'secondary'}
      />
      <AfterHero content={contentAfterHero} />
      <Footer />
    </>
  );
};

export default Contact;
