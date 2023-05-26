import Metas from '@/components/metaDatas';
import AfterHero from '@/components/afterHero';
import Footer from '@/components/footer';
import Hero from '@/components/hero';
import React from 'react';

const Contact = ({ data }) => {
  const { meta, hero, contentContact, formfooter } = data;
  /*
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
  */
  return (
    <>
      <Metas metadata={meta} />
      <Hero dataHero={hero} />
      <AfterHero mediaBlockContent={contentContact} />
      <Footer dataContent={formfooter} />
    </>
  );
};

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`${process.env.NEXT_PUBLIC_ENDPOINT_CONTENT}contact`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}
export default Contact;
