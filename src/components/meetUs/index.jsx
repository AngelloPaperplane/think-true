/* eslint-disable quotes */
import Image from 'next/image';
import React, { useEffect } from 'react';
import styles from './meet-us.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const MeetUs = ({ setPopUpMember, membersData }) => {
  /*
  const members = [
    {
      img: '/images/alvin-1.jpg',
      color: '#4EB4C8',
      name: 'ALVIN STAFFORD',
      profession: 'CHIEF TRUE OFFICER',
      description:
        "<p>Our team members bring a wealth of knowledge and experience that allows us to create unique and multidimensional marketing experiences for our clients.</p> <br> <p>We believe that our multicultural approach to marketing is essential in today's globalized world and allows us to connect with audiences on a deeper level.</p>",
    },
    {
      img: '/images/alisha-1.jpg',
      color: '#FAA300',
      name: 'ALISHA BRYANT',
      profession: 'GROUP ACCOUNT DIRECTOR',
      description:
        "<p>Our team members bring a wealth of knowledge and experience that allows us to create unique and multidimensional marketing experiences for our clients.</p> <br> <p>We believe that our multicultural approach to marketing is essential in today's globalized world and allows us to connect with audiences on a deeper level.</p>",
    },
    {
      img: '/images/syreeta.jpg',
      color: '#00B099',
      name: 'SYREETA STAFFORD',
      profession: 'SENIOR PRODUCTION DIRECTOR',
      description:
        "<p>Our team members bring a wealth of knowledge and experience that allows us to create unique and multidimensional marketing experiences for our clients.</p> <br> <p>We believe that our multicultural approach to marketing is essential in today's globalized world and allows us to connect with audiences on a deeper level.</p>",
    },
    {
      img: '/images/carlos-1.jpg',
      color: '#D02E2A',
      name: 'CARLOS BARAHONA',
      profession: 'CREATIVE DIRECTOR',
      description:
        "<p>Our team members bring a wealth of knowledge and experience that allows us to create unique and multidimensional marketing experiences for our clients.</p> <br> <p>We believe that our multicultural approach to marketing is essential in today's globalized world and allows us to connect with audiences on a deeper level.</p>",
    },
    {
      img: '/images/briona-1.jpg',
      color: '#FAA300',
      name: 'BRIONNA SIMONS',
      profession: 'SENIOR ACCOUNT MANAGER',
      description:
        "<p>Our team members bring a wealth of knowledge and experience that allows us to create unique and multidimensional marketing experiences for our clients.</p> <br> <p>We believe that our multicultural approach to marketing is essential in today's globalized world and allows us to connect with audiences on a deeper level.</p>",
    },
    {
      img: '/images/librada-1.jpg',
      color: '#FAA300',
      name: 'LIBRADA CRUZ',
      profession: 'SENIOR ACCOUNT MANAGER',
      description:
        "<p>Our team members bring a wealth of knowledge and experience that allows us to create unique and multidimensional marketing experiences for our clients.</p> <br> <p>We believe that our multicultural approach to marketing is essential in today's globalized world and allows us to connect with audiences on a deeper level.</p>",
    },
    {
      img: '/images/monica-1.jpg',
      color: '#FAA300',
      name: 'MONICA GARDEN',
      profession: 'ACCOUNT MANAGER',
      description:
        "<p>Our team members bring a wealth of knowledge and experience that allows us to create unique and multidimensional marketing experiences for our clients.</p> <br> <p>We believe that our multicultural approach to marketing is essential in today's globalized world and allows us to connect with audiences on a deeper level.</p>",
    },
    {
      img: '/images/ashley-1.jpg',
      color: '#FAA300',
      name: 'ASHLEY LYLES',
      profession: 'ACCOUNT MANAGER',
      description:
        "<p>Our team members bring a wealth of knowledge and experience that allows us to create unique and multidimensional marketing experiences for our clients.</p> <br> <p>We believe that our multicultural approach to marketing is essential in today's globalized world and allows us to connect with audiences on a deeper level.</p>",
    },
    {
      img: '/images/drew-1.jpg',
      color: '#00B099',
      name: 'DREW BOOKMAN',
      profession: 'PRODUCTION MANAGER',
      description:
        "<p>Our team members bring a wealth of knowledge and experience that allows us to create unique and multidimensional marketing experiences for our clients.</p> <br> <p>We believe that our multicultural approach to marketing is essential in today's globalized world and allows us to connect with audiences on a deeper level.</p>",
    },
    {
      img: '/images/danelle-1.jpg',
      color: '#00B099',
      name: 'DANELLE WINFIELD',
      profession: 'PRODUCTION DIRECTOR',
      description:
        "<p>Our team members bring a wealth of knowledge and experience that allows us to create unique and multidimensional marketing experiences for our clients.</p> <br> <p>We believe that our multicultural approach to marketing is essential in today's globalized world and allows us to connect with audiences on a deeper level.</p>",
    },
    {
      img: '/images/eve.jpg',
      color: '#D02E2A',
      name: 'EVE HORBOL',
      profession: 'SENIOR STRATEGIST',
      description:
        "<p>Our team members bring a wealth of knowledge and experience that allows us to create unique and multidimensional marketing experiences for our clients.</p> <br> <p>We believe that our multicultural approach to marketing is essential in today's globalized world and allows us to connect with audiences on a deeper level.</p>",
    },
  ];
  */
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className={`siteSection ${styles.meetUsSection}`}>
      <div className={`container ${styles.meetUsContainer}`}>
        <h2
          className={`news uppercase bold ${styles.meetUsTitle}`}
          data-aos="fade-up"
          data-aos-duration="900"
          data-aous-delay="0">
          Meet us
        </h2>

        <div className={`${styles.wrapperTeam} flex j-s a-c`}>
          {membersData.map((member, i) => (
            <div
              key={
                typeof window !== 'undefined' ? window.crypto.randomUUID() : i
              }
              className={`${styles.wrapperMember}`}
              onClick={() => setPopUpMember(member)}
              data-aos="fade-down"
              data-aos-duration="900"
              data-aous-delay="0">
              <div className={styles.imgMember}>
                <Image
                  className={styles.innerImgMember}
                  src={member.img.medium}
                  fill
                  alt={member.img.alt ? member.img.alt : member.name}
                />
                <div
                  className={styles.lineColor}
                  style={{ borderColor: member.color }}>
                  <div
                    className={styles.innerLine}
                    style={{ backgroundColor: member.color }}>
                    <div
                      className={styles.ballLine}
                      style={{ backgroundColor: member.color }}></div>
                  </div>
                </div>
              </div>
              <h2 className={`news ${styles.memberName}`}>{member.name}</h2>
              <h3 className={`news ${styles.profession}`}>
                <p dangerouslySetInnerHTML={{ __html: member.profession }} />
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetUs;
