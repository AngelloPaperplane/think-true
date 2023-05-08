import AfterHero from '@/components/afterHero';
import Hero from '@/components/hero';
import Masonry from '@/components/masonry';
import MeetUs from '@/components/meetUs';
import PopUpMember from '@/components/popUpMember';
import TitleLine from '@/components/titleLine';
import Head from 'next/head';
import React, { useState } from 'react';

const OurTeam = () => {
  const [popUpMember, setPopUpMember] = useState({});
  const contentAfterHero = {
    text: [
      'Our team members bring a wealth of knowledge and experience that allows us to create unique and multidimensional marketing experiences for our clients.',
      "We believe that our multicultural approach to marketing is essential in today's globalized world and allows us to connect with audiences on a deeper level.",
    ],
    posterVideo: '/images/02-home.jpg',
    layout: 'team',
    align: 'right',
  };
  return (
    <>
      <Head>
        <title>Think True</title>
        <meta name="description" content="Think True" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero
        title="OUR TEAM"
        image="/images/team.jpg"
        colorTitle="#F2F0EB"
        lineStyles={{ color: '#D02E2A', left: '70%' }}
        layout={'secondary'}
        align={'right'}
      />
      <AfterHero content={contentAfterHero} />
      <MeetUs setPopUpMember={setPopUpMember} />
      <TitleLine
        width={70}
        align={'left'}
        left={27}
        title={'Chemistry that goes beyond everything'}
        colorLine="#D02E2A"
      />
      <Masonry columns={3} />
      {Object.entries(popUpMember).length > 0 && <PopUpMember popUpMember={popUpMember} setPopUpMember={setPopUpMember}/>}
    </>
  );
};

export default OurTeam;
