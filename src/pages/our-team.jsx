import Metas from '@/components/metaDatas';
import AfterHero from '@/components/afterHero';
import Footer from '@/components/footer';
import Hero from '@/components/hero';
import Masonry from '@/components/masonry';
import MeetUs from '@/components/meetUs';
import PopUpMember from '@/components/popUpMember';
import TitleLine from '@/components/titleLine';
import React, { useState } from 'react';

const OurTeam = ({ data }) => {
  const { meta, hero, description, members, featuredtext, grid, formfooter } =
    data;

  console.log(description);
  return (
    <>
      <Metas metadata={meta} />
      <Hero dataHero={hero} />

      {description.text && <AfterHero mediaBlockContent={description} />}

      <MeetUs membersData={members} />
      {/* <TitleLine featuredText={featuredtext} /> */}
      {/* {Object.entries(popUpMember).length === 0 && ( */}
      {/* <Masonry columns={3} gridPictures={grid} /> */}
      {/* )} */}

      <Footer dataContent={formfooter} />
    </>
  );
};
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`${process.env.NEXT_PUBLIC_ENDPOINT_CONTENT}team`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}
export default OurTeam;
