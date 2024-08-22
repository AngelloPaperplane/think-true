import React, { useEffect } from 'react';
import styles from './services-list.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';

const FeaturesJobs = ({ dataContent }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className={`container ${styles.servicesContainer}`}>
      {dataContent.map((content, i) => (
        <div
          key={i}
          className={`${styles.cardContainer} `}
          style={{
            backgroundColor: `${content.color}`,
          }}
          data-aos="fade-up"
          data-aos-duration="800"
          data-aous-delay="0">
          <h2
            className={`news ${styles.titleCard}`}
            style={{
              width: `${content.titleWidth}`,
            }}>
            {content.title}
          </h2>

          <p className={`${styles.descriptionCard}`}>{content.text}</p>
          <div className={`news ${styles.indexBlock}`}>
            {i + 1 < 10 ? `0${i + 1}` : i + 1}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturesJobs;
