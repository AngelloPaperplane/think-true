import Metas from '@/components/metaDatas';
import AfterHero from '@/components/afterHero';
import Footer from '@/components/footer';
import Hero from '@/components/hero';
import React from 'react';

const Contact = ({ data }) => {
  const { meta, hero, contentContact, formfooter } = data;
  return (
    <>
      <Metas metadata={meta} />
      <Hero dataHero={hero} />
      <AfterHero mediaBlockContent={contentContact} />
      <Footer dataContent={formfooter} isContact={true} />
    </>
  );
};

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_ENDPOINT_CONTENT}thecontact`
  );
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}

export default Contact;
