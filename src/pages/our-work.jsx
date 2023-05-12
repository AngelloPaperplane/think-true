import Footer from '@/components/footer';
import HeroText from '@/components/heroText';
import Masonry from '@/components/masonry';
import React from 'react';

const OurWork = () => {
  const contentHeroText = {
    title: 'OUR WORK',
    subtitle: 'FULL PRODUCTION & FULL FLEXIBILITY',
  };
  const gridPictures = [
    {
      img: '/images/01-detail.jpg',
      spaceRow: '1/3',
      spaceColumn: '1/2',
      content: {
        title: 'VISA',
        subtitle: 'ANOTHER DIMENSION',
        color: '#00B099',
        link: '1',
      },
    },
    {
      img: '/images/nike-1.jpg',
      spaceRow: '1/2',
      spaceColumn: '2/3',
      content: {
        title: 'NIKE',
        subtitle: 'EMPLOYEE EMPOWERMENT',
        color: '#D02E2A',
        link: '1',
      },
    },
    {
      img: '/images/jpmc-1.jpg',
      spaceRow: '2/3',
      spaceColumn: '2/3',
      content: {
        title: 'JPMC',
        subtitle: 'BACK TO THE YARD',
        color: '#FAA300',
        link: '1',
      },
    },
    {
      img: '/images/03-home.jpg',
      spaceRow: '3/4',
      spaceColumn: '1/3',
      content: {
        title: 'NIKE N7',
        subtitle: 'NATIVE AMERICAN & INDIGENOUS COMMUNITIES',
        color: '#4EB4C8',
        link: '1',
      },
    },
    {
      img: '/images/01-detail.jpg',
      spaceRow: '4/5',
      spaceColumn: '1/2',
      content: {
        title: 'NBA 2K LEAGUE',
        subtitle: 'AN ALL STAR EXPERIENCE',
        color: '#D02E2A',
        link: '1',
      },
    },
    {
      img: '/images/nike-1.jpg',
      spaceRow: '4/5',
      spaceColumn: '2/3',
      content: {
        title: 'NIKE STRENGTHENING',
        subtitle: 'A COMMUNITY THROUGH SPORT',
        color: '#FAA300',
        link: '1',
      },
    },
    {
      img: '/images/jpmc-1.jpg',
      spaceRow: '5/6',
      spaceColumn: '1/2',
      content: {
        title: 'UBS',
        subtitle: 'A NEW ERA OF WEALTH MANAGEMENT',
        color: '#4EB4C8',
        link: '1',
      },
    },
    {
      img: '/images/06-team.jpg',
      spaceRow: '5/7',
      spaceColumn: '2/3',
      content: {
        title: 'RISE',
        subtitle: 'DEVELOPS CHAMPIONS OF CHANGE AMONGST SPORTS FANS',
        color: '#00B099',
        link: '1',
      },
    },
    {
      img: '/images/footer.jpg',
      spaceRow: '6/7',
      spaceColumn: '1/2',
      content: {
        title: 'NIKE UNITE',
        subtitle: 'A CURATED GRAND OPENING EXPERIENCE',
        color: '#FAA300',
        link: '1',
      },
    },
    {
      img: '/images/07-team.jpg',
      spaceRow: '7/8',
      spaceColumn: '1/3',
      content: {
        title: 'CHASE',
        subtitle: '#SHOWMEYOURWALK',
        color: '#D02E2A',
        link: '1',
      },
    },
    {
      img: '/images/nike-1.jpg',
      spaceRow: '8/9',
      spaceColumn: '1/2',
      content: {
        title: 'JPMC',
        subtitle: 'CLOSING THE RACIAL WEALTH GAP',
        color: '#4EB4C8',
        link: '1',
      },
    },
  ];
  return (
    <>
      <HeroText content={contentHeroText} />
      <Masonry
        layout="ourWork"
        heightColumn={65}
        columns={2}
        gridPictures={gridPictures}
      />
      <Footer />
    </>
  );
};

export default OurWork;
