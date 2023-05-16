import React, { useEffect } from 'react';
import styles from './after-hero.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AfterHero = ({ content }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className={`siteSection ${styles.afterHeroSection}`}>
      <div className={`container ${styles.afterHeroContainer}`}>
        {content && content.layout === 'home' && (
          <>
            {content.posterVideo && content.video && (
              <div
                data-aos="fade-up"
                data-aos-duration="900"
                data-aous-delay="0"
                className={`${styles.bigCircle}`}></div>
            )}

            <div className={styles.wrapperAfterHeroHome}>
              {content.text &&
                content.text.map((text, i) => (
                  <p
                    data-aos="fade-up"
                    data-aos-duration="900"
                    data-aous-delay="0"
                    key={
                      typeof window !== 'undefined'
                        ? window.crypto.randomUUID()
                        : i
                    }
                    className={styles.textAfterHero}>
                    {text}
                  </p>
                ))}
              {content.posterVideo && content.video && (
                <div
                  data-aos="fade-up"
                  data-aos-duration="900"
                  data-aous-delay="0"
                  className={`${styles.videoContainer} bg-cv`}
                  style={{ backgroundImage: `url(${content.posterVideo})` }}>
                  <div className={`bg-ct ${styles.playVideo}`}></div>
                </div>
              )}
            </div>
          </>
        )}
        {content && content.layout === 'team' && (
          <>
            <div
              className={`${
                content.align === 'right' ? styles.alignRight : ''
              } ${styles.wrapperAfterHeroTeam}`}>
              {content.title && content.title.text && (
                <h2
                  data-aos="fade-up"
                  data-aos-duration="900"
                  data-aous-delay="0"
                  className={`${styles.titleAfterHero} ${
                    styles[content.title.position]
                  }`}>
                  {content.title.text}
                </h2>
              )}
              {content.text &&
                content.text.map((text, i) => (
                  <p
                    data-aos="fade-up"
                    data-aos-duration="900"
                    data-aous-delay="0"
                    key={
                      typeof window !== 'undefined'
                        ? window.crypto.randomUUID()
                        : i
                    }
                    className={styles.textAfterHero}>
                    {text}
                  </p>
                ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default AfterHero;
