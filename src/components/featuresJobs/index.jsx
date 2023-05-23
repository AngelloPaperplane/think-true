import React, { useEffect } from 'react';
import styles from './features-jobs.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const FeaturesJobs = ({ contentFeaturesJobs, last }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className={`container ${styles.featureBlock}`}>
      <div className={`flex j-s a-e ${styles.contentFeature}`}>
        <h3
          className={styles.titleFeatureJobIndex}
          data-aos="fade-right"
          data-aos-duration="900"
          data-aous-delay="0">
          {contentFeaturesJobs.index}
        </h3>
        <div className={`${styles.contentTextFeature}`}>
          <h2
            className={`news ${styles.titleFeatureJob}`}
            data-aos="fade-down"
            data-aos-duration="900"
            data-aous-delay="0">
            {contentFeaturesJobs.title}
          </h2>
          <div
            className={styles.featuresJob}
            dangerouslySetInnerHTML={{
              __html: contentFeaturesJobs.features,
            }}
            data-aos="fade-up"
            data-aos-duration="900"
            data-aous-delay="0"></div>
        </div>
      </div>
      {last && (
        <div className={styles.growWrapper}>
          <div
            className={styles.line}
            data-aos="fade-up"
            data-aos-duration="900"
            data-aous-delay="0">
            <div className={styles.ball}></div>
          </div>
          <p
            className={styles.growText}
            data-aos="fade-up"
            data-aos-duration="900"
            data-aous-delay="0">
            GROW WITH US
          </p>
        </div>
      )}
    </div>
  );
};

export default FeaturesJobs;
