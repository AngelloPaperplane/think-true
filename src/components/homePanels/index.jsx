import React, { useEffect } from 'react';
import Image from 'next/image';
import styles from './home-panels.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';

const FeaturesJobs = ({ dataContent }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  console.log('dataContent', dataContent);
  return (
    <div className={`container ${styles.panelsContainer}`}>
      <h3
        className={`news ${styles.titlePanelSection}`}
        data-aos="fade-up"
        data-aos-duration="900"
        data-aous>
        OUR WORK
      </h3>
      <div className={`${styles.panelsIteratorContainer}`}>
        {dataContent.map((content, i) => (
          <div
            key={i}
            className={`${styles.cardContainer} `}
            data-aos="fade-up"
            data-aos-duration="900"
            data-aous-delay="0">
            <div
              className={`${styles.imgPanel}`}
              style={{
                backgroundImage: `${`url(${
                  content.img.large ? content.img['super-large'] : ''
                })`}`,
              }}
            />
            <h2
              className={`news ${styles.titleCard}`}
              style={{
                width: `${content.titleWidth}`,
              }}>
              {content.title}
            </h2>

            <h3 className={` ${styles.subtitleCard}`}>{content.subtitle}</h3>

            <p className={`${styles.descriptionCard}`}>{content.text}</p>

            <div
              className={`${
                i === 0 || i % 2 === 0 ? styles.ballLineLeft : ''
              } ${styles.lineContainer}`}>
              <div className={styles.ballLine}>
                <div className={styles.ball}></div>
              </div>
              <Link href={'/our-work'} className={`${styles.readMore}`}>
                READ MORE
              </Link>
            </div>
          </div>
        ))}
      </div>
      <p
        className={styles.textReadMore}
        data-aos="fade-up"
        data-aos-duration="1900"
        data-aous-delay="0">
        <Link
          href={'/our-work'}
          style={{
            backgroundImage: 'url(/icons/brick.png)',
          }}>
          READ MORE
        </Link>
      </p>
    </div>
  );
};

export default FeaturesJobs;
