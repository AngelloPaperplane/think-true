import Metas from '@/components/metaDatas';
import AfterHero from '@/components/afterHero';
import FeaturesJobs from '@/components/featuresJobs';
import Footer from '@/components/footer';
import Hero from '@/components/hero';
import ImgText from '@/components/imgText';
import React from 'react';

const Jobs = ({ data }) => {
  const {
    meta,
    hero,
    description,
    features,
    sendusemail,
    formfooter,
    features_button_label,
    features_button_link,
    features_button_color,
    features_button_color_name,
    features_button_target,
  } = data;
  const linkBtn = {
    'link': features_button_link,
    'label': features_button_label,
    'color': features_button_color,
    'colorname': features_button_color_name,
    'target': features_button_target,
  };
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
          databtn={linkBtn}
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
