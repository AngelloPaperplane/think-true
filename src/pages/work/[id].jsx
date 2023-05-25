import Metas from '@/components/metaDatas';
import AfterHero from '@/components/afterHero';
import BigImage from '@/components/bigIMage';
import Footer from '@/components/footer';
import Hero from '@/components/hero';
import ImgTextB from '@/components/imgTextB';
import SiteSlider from '@/components/slider';
import YellowTextImg from '@/components/yellowTextImg';
import React from 'react';

const DetailWork = ({ data }) => {
  const { meta, hero, formfooter } = data;

  const contentAfterHero = {
    text: [
      'RISE is a national nonprofit that educates and empowers the sports community to end racism, champion social justice and improve race relations.',
    ],
    title: {
      text: 'RISE Develops Champions of Change Amongst Sports Fans',
      position: 'left',
    },
    layout: 'team',
  };

  const otherProjects = {
    title: 'MORE PROJECTS',
    projects: [
      {
        title: 'VISA',
        subtitle: 'NFL',
        color: '#D02E2A',
        text: 'Brand Consulting',
        imgProject: '/images/nike-1.jpg',
      },
      {
        title: 'SED UT',
        subtitle: 'PERSPICIATIS',
        color: '#FAA300',
        text: 'Brand Consulting',
        imgProject: '/images/jpmc-1.jpg',
      },
      {
        title: 'VISA',
        subtitle: 'NFL',
        color: '#D02E2A',
        text: 'Brand Consulting',
        imgProject: '/images/nike-1.jpg',
      },
    ],
  };
  return (
    <>
      <Metas metadata={meta} />
      <Hero dataHero={hero} />
      {/*
      <Hero
        image="/images/01-detail.jpg"
        lineStyles={{ color: '#D02E2A', left: '17%' }}
        layout={'poster'}
        align={'left'}
        bgColor={'#00B099'}
      />
      */}
      <AfterHero content={contentAfterHero} />
      <BigImage
        image="/images/02-detail.jpg"
        text="Champions of Change - RISE’s umbrella campaign that celebrates individuals who have led the way in the quest for racial equality and social justice"
      />
      <YellowTextImg
        text="is an innovative fan experience that is typically hosted in-person at the Super Bowl, NCAA Championships and other major sporting events. "
        image="/images/03-detail.jpg"
        yellowText="The 360-experience takes fans on a multi-sensory journey designed to educate, evoke empathy and inspire action, while highlighting the impact sports have on inspiring social change."
      />
      <ImgTextB
        title="THINK TRUE OWNED"
        subtitle="SINCE 2020"
        color="#00B099"
        image="/images/04-detail.jpg"
        sideText="<p>A 360 rebrand of Champions of Change​</p> <p>Onsite production in addition to physical and digital assets for activation enhancements, such as self-reflection booths for fans to share their stories, a check-in process, and KPI development and reporting. ​</p> <p>Digital strategy of the Champions of Change virtual experience, along with athlete content capture and video production. ​</p> <p>Launch of a virtual reality experience and digital game to further reach sports fans in the digital space. ​</p> <p>With the influx of partnership requests for RISE, we expect to see even more brand presence for Champions of Change as we move into 2024.​</p>"
      />
      <SiteSlider {...otherProjects} />
      <Footer dataContent={formfooter} />
    </>
  );
};
export async function getServerSideProps(req) {
  const id = req.params.id;
  const resData = await fetch(
    `${process.env.NEXT_PUBLIC_ENDPOINT_CONTENT}workdetail?datawork=${id}`
  );
  const data = await resData.json();

  return { props: { data } };
}
export default DetailWork;
