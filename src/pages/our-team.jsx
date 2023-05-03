import AfterHero from "@/components/afterHero";
import Hero from "@/components/hero";
import Head from "next/head";
import React from "react";

const OurTeam = () => {
  const contentAfterHero = {
    text: [
      "Our team members bring a wealth of knowledge and experience that allows us to create unique and multidimensional marketing experiences for our clients.",
      "We believe that our multicultural approach to marketing is essential in today's globalized world and allows us to connect with audiences on a deeper level.",
    ],
    posterVideo: "/images/02-home.jpg",
    layout: "team",
    align: 'right'
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
        lineStyles={{ color: "#D02E2A", left: "70%" }}
        layout={'secondary'}
        align={'right'}
      />
      <AfterHero content={contentAfterHero} />
    </>
  );
};

export default OurTeam;
