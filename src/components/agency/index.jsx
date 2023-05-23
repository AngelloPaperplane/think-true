import React, { useEffect } from 'react';
import styles from './agency.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Agency = ({ image }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section
      className={`siteSection bg-cv ${styles.agencySection}`}
      style={{ backgroundImage: `url(${image})` }}>
      <div className={`${styles.agencyContainer} container`}>
        <h2
          data-aos="fade-up"
          data-aos-duration="900"
          data-aous-delay="0"
          className={`${styles.titleAgency} news`}>
          AGENCY{' '}
        </h2>
        <h3
          data-aos="fade-up"
          data-aos-duration="900"
          data-aous-delay="0"
          className={`news ${styles.subtitleAgency}`}>
          OUR TEAM
        </h3>

        <div className={styles.floatInfoAgency}>
          <p
            data-aos="fade-up"
            data-aos-duration="900"
            data-aous-delay="0"
            className={styles.infoAgency}>
            We pride ourselves on having a mighty, nimble, and fierce team
            comprised of individuals from diverse backgrounds and perspectives.
          </p>
          <p
            data-aos="fade-up"
            data-aos-duration="900"
            data-aous-delay="0"
            className={styles.infoAgency}>
            Our team is passionate about delivering results and exceeding our
            partners expectations. We are committed to excellence and constantly
            striving to innovate and evolve our approach to marketing.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Agency;
