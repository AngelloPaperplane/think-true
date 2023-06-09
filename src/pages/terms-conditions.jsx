import Footer from '@/components/footer';
import Hero from '@/components/hero';
import React from 'react';
import styles from '../styles/Privacy-policy.module.css';
import Metas from '@/components/metaDatas';

const TermsConditions = ({ data }) => {
  const { meta, hero, content, formfooter } = data;
  return (
    <>
      <Metas metadata={meta} />
      <Hero dataHero={hero} />
      <div
        className={`container ${styles.legalContent}`}
        dangerouslySetInnerHTML={{ __html: content }}></div>
      <Footer dataContent={formfooter} />
    </>
  );
};

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_ENDPOINT_CONTENT}terms-conditions`
  );
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}

export default TermsConditions;
