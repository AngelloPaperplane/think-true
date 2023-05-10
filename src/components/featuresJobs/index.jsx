import React from 'react';
import styles from './features-jobs.module.css';

const FeaturesJobs = ({ contentFeaturesJobs, last }) => {
  console.log(contentFeaturesJobs);
  return (
    <div className={`container ${styles.featureBlock}`}>
      <div className={`flex j-s a-e ${styles.contentFeature}`}>
        <h3 className={styles.titleFeatureJobIndex}>
          {contentFeaturesJobs.index}
        </h3>
        <div className={`${styles.contentTextFeature}`}>
          <h2 className={`news ${styles.titleFeatureJob}`}>
            {contentFeaturesJobs.title}
          </h2>
          <div
            className={styles.featuresJob}
            dangerouslySetInnerHTML={{
              __html: contentFeaturesJobs.features,
            }}></div>
        </div>
      </div>
      {last && (
        <div className={styles.growWrapper}>
          <div className={styles.line}>
            <div className={styles.ball}></div>
          </div>
          <p className={styles.growText}>GROW WITH US</p>
        </div>
      )}
    </div>
  );
};

export default FeaturesJobs;
