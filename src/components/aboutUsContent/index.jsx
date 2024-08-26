import React, { useEffect } from 'react';
import styles from './about-us-content.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';
import ImgTextB from '@/components/imgTextB';

const AboutUsContent = ({ whatdo, whatdo_new }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  console.log('whatdo', whatdo);
  console.log('whatdo_new', whatdo_new);

  return (
    <div className={`container ${styles.aboutContainer}`}>
      <h2
        data-aos="fade-up"
        data-aos-duration="600"
        data-aos-delay="0"
        className={` ${styles.titleSection}`}
        dangerouslySetInnerHTML={{ __html: whatdo.title }}
      />

      {whatdo && whatdo.sideText !== '' && (
        <div
          className={`${styles.contentContainer}`}
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="0">
          <div
            className={`${styles.imgPanel}`}
            style={{
              backgroundImage: `${`url(${
                whatdo.image ? whatdo.image['super-large'] : ''
              })`}`,
            }}
          />

          <div
            className={`${styles.textContainer}`}
            dangerouslySetInnerHTML={{ __html: whatdo.sideText }}
          />
        </div>
      )}

      {whatdo_new && whatdo_new.sideText !== '' && (
        <div
          className={`${styles.contentContainerLeft}`}
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="0">
          <div
            className={`${styles.imgPanelLeft}`}
            style={{
              backgroundImage: `${`url(${
                whatdo.image ? whatdo_new.image['super-large'] : ''
              })`}`,
            }}
          />

          <div
            className={`${styles.textContainerLeft}`}
            dangerouslySetInnerHTML={{ __html: whatdo_new.sideText }}
          />
        </div>
      )}
    </div>
  );
};

export default AboutUsContent;
