import React, { useEffect } from 'react';
import styles from './features-jobs.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';
import Button from '../button';

const FeaturesJobs = ({ contentFeaturesJobs, last, databtn }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className={`container ${styles.featureBlock}`}>
      <div className={`flex j-s a-e ${styles.contentFeature}`}>
        <h3
          className={styles.titleFeatureJobIndex}
          data-aos="fade-right"
          data-aos-duration="600"
          data-aous-delay="0">
          {contentFeaturesJobs.index}
        </h3>
        <div className={`${styles.contentTextFeature}`}>
          <h2
            className={`news ${styles.titleFeatureJob}`}
            data-aos="fade-down"
            data-aos-duration="600"
            data-aous-delay="0">
            {contentFeaturesJobs.title}
          </h2>
          {/* <div
            className={styles.featuresJob}
            dangerouslySetInnerHTML={{
              __html: contentFeaturesJobs.features,
            }}
            data-aos="fade-up"
            data-aos-duration="600"
            data-aous-delay="0"></div> */}
        </div>
      </div>
      {last && databtn.label && databtn.link && (
        <div className={styles.growWrapper}>
          <div
            style={{ backgroundColor: `${databtn.color}` }}
            className={styles.line}
            data-aos="fade-up"
            data-aos-duration="600"
            data-aous-delay="0">
            <div
              className={styles.ball}
              style={{ backgroundColor: `${databtn.color}` }}></div>
          </div>
          <Button
            label={databtn.label}
            color={'#faa300'}
            link={true}
            href={databtn.link}
            className={styles.growText}
            target={databtn.target }
          />
          {/* <Link
            style={{ backgroundImage: `url(/icons/${databtn.colorname}.png)` }}
            href={databtn.link}
            target={databtn.target}
            className={styles.growText}
            data-aos="fade-up"
            data-aos-duration="600"
            data-aous-delay="0">
            {databtn.label}
          </Link> */}
        </div>
      )}
    </div>
  );
};

export default FeaturesJobs;
