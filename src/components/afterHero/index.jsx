import React, { useEffect } from 'react';
import styles from './after-hero.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Button from '../button';

const AfterHero = ({ content, mediaBlockContent, afterhero }) => {
  const router = useRouter();
  const { pathname } = router;
  const isMp4 = mediaBlockContent.video
    ? mediaBlockContent.video.split('.').pop() === 'mp4'
    : false;
  useEffect(() => {
    AOS.init();
  }, []);
  // const playVideo = () => {
  //   document.querySelector('.iframeVideo').src += '&autoplay=1';
  // };
  if (mediaBlockContent) {
    return (
      <section
        className={`siteSection ${styles.afterHeroSection} ${
          pathname === '/about-us' && styles.afterHeroAbout
        }`}>
        <div
          className={`container ${styles.afterHeroContainer}  ${
            afterhero ? styles.noPadding : ''
          }`}>
          {(mediaBlockContent.layout === 'home' ||
            mediaBlockContent.layout === 'team') && (
            <>
              {/* {mediaBlockContent.image && pathname !== '/about-us' && (
                <div
                  className={`${styles.bigCircle}`}
                  data-aos="zoom-in"
                  data-aos-duration="600"
                  data-aous-delay="0"></div>
              )} */}

              <div className={styles.wrapperAfterHeroHome}>
                {mediaBlockContent.title && mediaBlockContent.title.text && (
                  <h2
                    data-aos="fade-up"
                    data-aos-duration="600"
                    data-aous-delay="0"
                    className={`${styles.titleAfterHero} ${
                      pathname === '/about-us' ? 'news' : ''
                    } ${styles[mediaBlockContent.title.position]}`}>
                    {mediaBlockContent.title.text}
                  </h2>
                )}
                {mediaBlockContent.subtitle &&
                  mediaBlockContent.subtitle.text && (
                    <h3
                      data-aos="fade-up"
                      data-aos-duration="600"
                      data-aous-delay="0"
                      className={`${styles.subTitleAfterHero} ${
                        pathname === '/about-us' ? 'news' : ''
                      } ${styles[mediaBlockContent.title.position]}`}>
                      {mediaBlockContent.title.text}
                    </h3>
                  )}
                {mediaBlockContent.text && (
                  <div
                    className={`${styles.textAfterHero} ${
                      pathname === '/about-us' ? styles.aboutText : ''
                    }`}
                    dangerouslySetInnerHTML={{ __html: mediaBlockContent.text }}
                    data-aos="fade-up"
                    data-aos-duration="600"
                    data-aous-delay="0"
                  />
                )}
                {mediaBlockContent.buttonlabel &&
                  mediaBlockContent.buttonlabel !== '' &&
                  mediaBlockContent.buttonlink !== '' && (
                    <p
                      className={styles.textAfterHero}
                      data-aos="fade-up"
                      data-aos-duration="600"
                      data-aous-delay="0">
                      <Button
                        href={'/our-work'}
                        link={true}
                        label={mediaBlockContent.buttonlabel}
                        color="#d02e2a"></Button>
                    </p>
                  )}
                {mediaBlockContent.video && pathname !== '/' && (
                  <div
                    className={`${styles.videoContainer} ${
                      pathname === '/work/[id]'
                        ? styles.videoContainerDetail
                        : ''
                    } bg-cv`}
                    data-aos="zoom-out"
                    data-aos-duration="600"
                    data-aous-delay="0">
                    {mediaBlockContent.video && !isMp4 && (
                      <iframe
                        src={mediaBlockContent.video}
                        frameBorder="0"
                        allow=" fullscreen; picture-in-picture"
                        className={`iframeVideo ${styles.iframeVideo}`}></iframe>
                    )}
                    {mediaBlockContent.video && isMp4 && (
                      <video
                        loop
                        playsInline
                        controls
                        preload="true"
                        src={mediaBlockContent.video}
                        style={{ width: '100%', height: '100%' }}></video>
                    )}
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </section>
    );
  }

  return (
    <section className={`siteSection ${styles.afterHeroSection}`}>
      <div className={`container ${styles.afterHeroContainer}`}>
        {content && content.layout === 'home' && (
          <>
            {content.posterVideo && content.video && (
              <div
                data-aos="fade-up"
                data-aos-duration="600"
                data-aous-delay="0"
                className={`${styles.bigCircle}`}></div>
            )}

            <div className={styles.wrapperAfterHeroHome}>
              {content.text &&
                content.text.map((text, i) => (
                  <p
                    data-aos="fade-up"
                    data-aos-duration="600"
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
                  data-aos-duration="600"
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
                  data-aos-duration="600"
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
                    data-aos-duration="600"
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
