import React, { useEffect } from 'react';
import styles from './agency.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Agency = ({ image, dataContent }) => {
  const router = useRouter();
  const { pathname } = router;
  useEffect(() => {
    AOS.init();
  }, []);
  if (dataContent) {
    const {
      title,
      subtitle,
      text,
      image,
      image_mobile,
      buttonlink,
      buttoncolor,
      buttonlabel,
    } = dataContent;
    return (
      <>
        <section
          className={`siteSection bg-cv ${styles.agencySection} ${
            pathname === '/about-us' ? styles.agencyAbout : ''
          }`}
          style={{ backgroundImage: `url(${image['super-large']})` }}>
          <div
            className={`${styles.mobileImageHero} bg-cv`}
            style={{
              backgroundImage: `url(${image_mobile['super-large']})`,
            }}></div>
          <div className={`${styles.agencyContainer} container`}>
            {title && (
              <h2
                data-aos="fade-up"
                data-aos-duration="900"
                data-aous-delay="0"
                className={`${styles.titleAgency} ${
                  pathname === '/about-us' ? 'aleo' : 'news'
                } ${pathname === '/about-us' ? styles.aboutTitle : ''}`}
                dangerouslySetInnerHTML={{ __html: title }}
              />
            )}

            {subtitle && pathname !== '/about-us' && (
              <h3
                data-aos="fade-up"
                data-aos-duration="900"
                data-aous-delay="0"
                className={`news ${styles.subtitleAgency}`}
                dangerouslySetInnerHTML={{ __html: subtitle }}
              />
            )}
          </div>
        </section>
        <div className={styles.floatInfoAgency}>
          {buttonlabel !== '' && buttonlink !== '' && (
            <div
              className={styles.redLine}
              data-aos="fade-up"
              data-aos-duration="900"
              data-aous-delay="0">
              <div className={styles.ballRedLine}>
                <Link
                  href={buttonlink}
                  style={{
                    backgroundImage: 'url(/icons/brick.png)',
                  }}
                  className={`news ${styles.linkBallRedLine}`}>
                  {buttonlabel}
                </Link>
              </div>
            </div>
          )}
          <p
            data-aos="fade-up"
            data-aos-duration="900"
            data-aous-delay="0"
            className={styles.infoAgency}
            dangerouslySetInnerHTML={{ __html: text }}></p>
        </div>
      </>
    );
  }
  return (
    <section
      className={`siteSection bg-cv ${styles.agencySection} ${
        pathname === '/about-us' ? styles.agencySectAbout : ''
      }`}
      style={{ backgroundImage: `url(${image})` }}>
      <div className={`${styles.agencyContainer} container`}>
        <h2
          data-aos="fade-up"
          data-aos-duration="900"
          data-aous-delay="0"
          className={`${styles.titleAgency} news ${
            pathname === '/about-us' ? styles.aboutTitle : ''
          }`}>
          Impact is our bottom line
        </h2>

        {pathname !== '/about-us' && (
          <h3
            data-aos="fade-up"
            data-aos-duration="900"
            data-aous-delay="0"
            className={`news ${styles.subtitleAgency}`}>
            {' '}
            OUR TEAM
          </h3>
        )}

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
