import React, { useEffect } from 'react';
import styles from './after-hero.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AfterHero = ({ content, mediaBlockContent, afterhero }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  // const playVideo = () => {
  //   document.querySelector('.iframeVideo').src += '&autoplay=1';
  // };
  if (mediaBlockContent) {
    return (
      <section className={`siteSection ${styles.afterHeroSection}`}>
        <div
          className={`container ${styles.afterHeroContainer} ${
            afterhero ? styles.noPadding : ''
          }`}>
          {(mediaBlockContent.layout === 'home' ||
            mediaBlockContent.layout === 'team') && (
            <>
              {mediaBlockContent.image && (
                <div
                  className={`${styles.bigCircle}`}
                  data-aos="zoom-in"
                  data-aos-duration="1900"
                  data-aous-delay="0"></div>
              )}

              <div className={styles.wrapperAfterHeroHome}>
                {mediaBlockContent.title && mediaBlockContent.title.text && (
                  <h2
                    className={`${styles.titleAfterHero} ${
                      styles[mediaBlockContent.title.position]
                    }`}>
                    {mediaBlockContent.title.text}
                  </h2>
                )}
                {mediaBlockContent.text && (
                  <p
                    className={styles.textAfterHero}
                    dangerouslySetInnerHTML={{ __html: mediaBlockContent.text }}
                    data-aos="fade-up"
                    data-aos-duration="1900"
                    data-aous-delay="0"
                  />
                )}
                {mediaBlockContent.image && mediaBlockContent.image.medium && (
                  <div
                    className={`${styles.videoContainer} bg-cv`}
                    data-aos="zoom-out"
                    data-aos-duration="1500"
                    data-aous-delay="0"
                    style={{
                      backgroundImage: `url(${mediaBlockContent.image.medium})`,
                    }}>
                    {mediaBlockContent.video && (
                      <>
                        {/* <iframe
                          src="https://player.vimeo.com/video/783453809?autoplay=1"
                          frameBorder="0"
                          allow="autoplay"
                          allowFullScreen
                          className={styles.iframeVideo}></iframe> */}
                        <iframe
                          src={mediaBlockContent.video}
                          frameBorder="0"
                          allow="autoplay; fullscreen; picture-in-picture"
                          className={`iframeVideo ${styles.iframeVideo}`}></iframe>
                        {/* <div className={`bg-ct ${styles.playVideo}`} onClick={playVideo}></div> */}
                      </>
                    )}
                  </div>
                )}
              </div>
            </>
          )}
          {/*
          mediaBlockContent && mediaBlockContent.layout === 'team' && (
            <>
              <div
                className={`${
                  mediaBlockContent.align === 'right' ? styles.alignRight : ''
                } ${styles.wrapperAfterHeroTeam}`}>
                {mediaBlockContent.title && mediaBlockContent.title.text && (
                  <h2
                    className={`${styles.titleAfterHero} ${
                      styles[mediaBlockContent.title.position]
                    }`}>
                    {mediaBlockContent.title.text}
                  </h2>
                )}
                {mediaBlockContent.text && (
                  <p
                    className={styles.textAfterHero}
                    dangerouslySetInnerHTML={{ __html: mediaBlockContent.text }}
                  />
                )}
                { (
                  <div
                    className={`${styles.videoContainer} bg-cv`}
                    data-aos="zoom-out"
                    data-aos-duration="1500"
                    data-aous-delay="0"
                    style={{
                      backgroundImage: `url(${mediaBlockContent.image.medium})`,
                    }}>
                    {mediaBlockContent.video && (
                      <>
                        {/* <iframe
                          src="https://player.vimeo.com/video/783453809?autoplay=1"
                          frameBorder="0"
                          allow="autoplay"
                          allowFullScreen
                          className={styles.iframeVideo}></iframe> }
                        <iframe
                          src={mediaBlockContent.video}
                          frameBorder="0"
                          allow="autoplay; fullscreen; picture-in-picture"
                          className={`iframeVideo ${styles.iframeVideo}`}></iframe>
                        {/* <div className={`bg-ct ${styles.playVideo}`} onClick={playVideo}></div> }
                      </>
                    )}
                  </div>
                )}
              </div>
            </>
          )
          */}
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
