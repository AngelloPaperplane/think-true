import Metas from '@/components/metaDatas';
import AfterHero from '@/components/afterHero';
import Footer from '@/components/footer';
import Hero from '@/components/hero';
import Masonry from '@/components/masonry';
import MeetUs from '@/components/meetUs';
import PopUpMember from '@/components/popUpMember';
import TitleLine from '@/components/titleLine';
import Head from 'next/head';
import React, { useState } from 'react';

const OurTeam = ({ data }) => {
  const [popUpMember, setPopUpMember] = useState({});

  const { meta, hero, description, members, featuredtext, grid, formfooter } =
    data;
  /*
  const contentAfterHero = {
    text: [
      'Our team members bring a wealth of knowledge and experience that allows us to create unique and multidimensional marketing experiences for our clients.',
      // eslint-disable-next-line quotes
      "We believe that our multicultural approach to marketing is essential in today's globalized world and allows us to connect with audiences on a deeper level.",
    ],
    posterVideo: '/images/02-home.jpg',
    layout: 'team',
    align: 'right',
  };
  */
  /*
  const gridPictures = [
    { img: '/images/01-team.jpg', spaceRow: '1/2', spaceColumn: '1/2' },
    { img: '/images/02-team.jpg', spaceRow: '1/3', spaceColumn: '2/3' },
    { img: '/images/03-team.jpg', spaceRow: '1/2', spaceColumn: '3/4' },
    { img: '/images/04-team.jpg', spaceRow: '2/4', spaceColumn: '1/2' },
    { img: '/images/05-team.jpg', spaceRow: '3/6', spaceColumn: '2/3' },
    { img: '/images/10-team.png', spaceRow: '2/4', spaceColumn: '3/4' },
    { img: '/images/08-team.jpg', spaceRow: '4/6', spaceColumn: '1/2' },
    { img: '/images/06-team.jpg', spaceRow: '4/6', spaceColumn: '3/4' },
    { img: '/images/footer.jpg', spaceRow: '6/8', spaceColumn: '1/2' },
    { img: '/images/07-team.jpg', spaceRow: '6/8', spaceColumn: '2/4' },
  ];
  */
  return (
    <>
      <Metas metadata={meta} />
      <Hero dataHero={hero} />
      <AfterHero mediaBlockContent={description} />
      <MeetUs membersData={members} setPopUpMember={setPopUpMember} />
      <TitleLine featuredText={featuredtext} />
      <Masonry columns={3} gridPictures={grid} />
      {Object.entries(popUpMember).length > 0 && (
        <PopUpMember
          popUpMember={popUpMember}
          setPopUpMember={setPopUpMember}
        />
      )}
      <Footer dataContent={formfooter} />
      {/*
      <Hero 
        title="OUR TEAM"
        image="/images/team.jpg"
        colorTitle="#F2F0EB"
        lineStyles={{ color: '#D02E2A', left: '70%' }}
        layout={'secondary'}
        align={'right'}
      />
      <TitleLine
        width={70}
        align={'left'}
        left={27}
        title={'Chemistry that goes beyond everything'}
        colorLine="#D02E2A"
      />
      <Masonry columns={3} gridPictures={gridPictures} />
      */}
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
