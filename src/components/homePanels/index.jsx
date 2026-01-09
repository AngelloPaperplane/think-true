import React, { useEffect } from 'react';
import Image from 'next/image';
import styles from './home-panels.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';
import Button from '../button';

const FeaturesJobs = ({ dataContent }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className={`container ${styles.panelsContainer}`}>
      <h3
        className={`news ${styles.titlePanelSection} titleSection`}
        data-aos="fade-up"
        data-aos-duration="600"
        data-aous>
        OUR WORK
      </h3>
      <div className={`${styles.panelsIteratorContainer}`}>
        {dataContent.map((content, i) => (
          <Link
            key={i}
            href={`/work/${content.link}`}
            className={`${styles.cardContainer} `}
            data-aos="fade-up"
            data-aos-duration="600"
            data-aous-delay="0">
            <div
              key={i}
              className={`${styles.imgPanelContainer}`}
              data-aos="fade-up"
              data-aos-duration="600"
              data-aous-delay="0"
              data-aos-offset="-100">

                <Image
                  src={content.img.large ? content.img['super-large'] : ''}
                  alt={content.img.alt ? content.img.alt : ''}
                  fill
                  className={styles.imgPanel}
                />
            </div>
            <h2
              className={`news ${styles.titleCard}`}
              style={{
                width: `${content.titleWidth}`,
              }}
              dangerouslySetInnerHTML={{ __html: content.title }}
            />

            <h3
              className={` ${styles.subtitleCard}`}
              dangerouslySetInnerHTML={{ __html: content.subtitle }}
            />

            <p className={`${styles.descriptionCard}`}>{content.text}</p>

            <div
              className={`${
                i === 0 || i % 2 === 0 ? styles.ballLineLeft : ''
              } ${styles.lineContainer}`}>
              <div className={styles.ballLine}>
                <div className={styles.ball}></div>
              </div>
              <div className={`${styles.readMore}`}>READ MORE</div>
            </div>
          </Link>
        ))}
      </div>
      <p
        className={styles.textReadMore}
        data-aos="fade-up"
        data-aos-duration="600"
        data-aous-delay="0">
        <Button
          href={'/our-work'}
          link={true}
          label="READ MORE"
          color="#d02e2a"></Button>
      </p>
    </div>
  );
};

export default FeaturesJobs;
