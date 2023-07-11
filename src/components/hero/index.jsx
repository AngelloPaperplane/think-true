import React, { useEffect, useRef, useState } from 'react';
import styles from './hero.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { gsap } from 'gsap';
import SplitType from 'split-type';
import { useRouter } from 'next/router';

const Hero = ({
  image,
  title,
  colorTitle,
  lineStyles,
  layout,
  align,
  bgColor,
  dataHero, // es el ultimo que va a quedar...
}) => {
  const router = useRouter();
  const { pathname } = router;
  const heroSection = useRef(null);
  const [isActiveSound, setIsActiveSound] = useState(false);

  const loadImage = (entries, observer) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      entry.target.style.backgroundImage = `url(${entry.target.dataset.image})`;
      observer.unobserve(entry.target);
    }
  };

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 1.0,
  };

  useEffect(() => {
    if (
      pathname !== '/' &&
      pathname !== '/about-us' &&
      pathname !== '/work/[id]'
    ) {
      const observer = new IntersectionObserver(loadImage, options);
      const currentSect = heroSection.current;
      if (currentSect) {
        observer.observe(currentSect);
      }
      return () => {
        observer.unobserve(currentSect);
      };
    }
  }, []);

  useEffect(() => {
    AOS.init();
    if (document) {
      document.querySelectorAll('.splitText').forEach((splitText) => {
        const text = new SplitType(splitText, { types: 'words, chars' });
        gsap.from(text.chars, {
          opacity: 0,
          y: 50,
          duration: 1.5,
          stagger: { amount: 1 },
        });
      });
    }

    // const tl = gsap.timeline({});
    // tl.from(`.${styles.titleHeroText}`, {
    //   opacity: 0,
    //   duration: 1,
    // });
  }, []);
  if (dataHero) {
    console.log(dataHero);
    // es el que va a quedar...
    const {
      title,
      title_color,
      text,
      text_color,
      text_position,
      line_position,
      line_color,
      image,
      image_mobile,
      layout,
      align,
      bg_color,
      data_info,
      videoUrl,
    } = dataHero;
    const logoShow = layout === 'principal';
    return (
      <>
        {image['super-large'] && videoUrl && videoUrl !== '' && (
          <div
            className={`container ${styles.heroContainer} ${styles.heroContainerBefore} flex j-s a-e bg-cv`}>
            <img
              className={`${styles.imgLogo} `}
              alt="Logo ThinkTrue"
              src={image['super-large']}
            />
          </div>
        )}
        <section
          ref={heroSection}
          data-image={image['super-large']}
          className={`${styles.heroSection} bg-cv ${
            align === 'right' ? styles.alignRight : ''
          } ${layout === 'poster' ? styles.posterHero : ''} ${
            pathname === '/' || pathname === '/about-us'
              ? styles.videoHeroSection
              : ''
          }`}
          style={{
            backgroundColor: layout !== 'poster' ? 'transparent' : bg_color,
          }}>
          {/* (pathname === '/' || pathname === '/about-us') && (*/}
          {videoUrl && videoUrl !== '' && (
            <div className={styles.videoContainer}>
              <button
                className={`${styles.activeSound} ${
                  isActiveSound ? styles.hideButton : ''
                }`}
                onClick={() => setIsActiveSound(true)}>
                <span className={`bg-ct ${styles.iconPlaySound}`}></span>
                <span className={styles.textActiveSound}>PLAY WITH SOUND</span>
              </button>
              <video
                className={styles.homeVideo}
                playsInline
                loop
                muted={!isActiveSound}
                preload=""
                autoPlay
                controls={isActiveSound}>
                <source src={videoUrl} />
              </video>
            </div>
          )}
          {pathname !== '/' && image_mobile['super-large'] && (
            <div
              className={`${styles.mobileImageHero} bg-cv`}
              style={{
                backgroundImage: `url(${image_mobile['super-large']})`,
              }}></div>
          )}

          <div
            className={`container ${styles.heroContainer} flex j-c a-e bg-cv`}
            style={{
              backgroundImage:
                layout === 'poster' ? `url(${image['super-large']})` : 'none',
            }}>
            {title && !logoShow && layout !== 'poster' && (
              <h1
                className={`news splitText ${styles.titleHero}`}
                style={{ color: title_color ?? '#fff' }}
                dangerouslySetInnerHTML={{
                  __html:
                    text_position === 'before'
                      ? `<span style='color:${text_color}'>${text}</span>${title}`
                      : title,
                }}
              />
            )}
            {/* {logoShow && (
              <img
                className={styles.imgLogo}
                alt=""
                src={'/icons/logo-hero.png'}
              />
            )} */}
            {line_color && (
              <div
                className={`${styles.lineHero} bg-complete`}
                style={{
                  backgroundColor: `${line_color}`,
                  left: `${line_position}%`,
                }}>
                <div
                  className={styles.ballLine}
                  style={{ backgroundColor: line_color }}></div>
              </div>
            )}
          </div>
          {layout === 'poster' && data_info && data_info.length > 0 && (
            <div className={`container ${styles.infoClientContainer}`}>
              {data_info.map((info, i) => (
                <p key={`infoproject${i}`}>
                  {info.label}
                  <span>{info.value}</span>
                </p>
              ))}
            </div>
          )}
        </section>
      </>
    );
  }
  return (
    <section
      className={`${styles.heroSection} bg-cv ${
        align === 'right' ? styles.alignRight : ''
      } ${layout === 'poster' ? styles.posterHero : ''}`}
      style={{
        backgroundImage: layout !== 'poster' ? `url(${image})` : 'url()',
        backgroundColor: layout !== 'poster' ? 'transparent' : bgColor,
      }}>
      <div
        className={`container ${styles.heroContainer} flex j-c a-e bg-cv`}
        style={{
          backgroundImage: layout === 'poster' ? `url(${image})` : '',
        }}
        data-aos="fade-up"
        data-aos-duration="900"
        data-aous-delay="0">
        {title && layout !== 'poster' && (
          <h2
            className={`news splitText ${styles.titleHero}`}
            style={{ color: colorTitle ?? '#fff' }}>
            {layout === 'principal' && (
              <img
                src
                className={`${styles.imgLogo} splitText uppercase`}
                alt=""
              />
            )}

            {layout !== 'principal' && title}
            {lineStyles && (
              <div
                data-aos="fade-down"
                data-aos-duration="900"
                data-aos-delay="900"
                data-aos-offset="0"
                className={`${styles.lineHero} bg-complete`}
                style={{
                  backgroundColor: `${lineStyles.color}`,
                  left: `${lineStyles.left}`,
                }}>
                <div
                  className={styles.ballLine}
                  style={{ backgroundColor: lineStyles.color }}></div>
              </div>
            )}
          </h2>
        )}

        {layout === 'poster' && (
          <div
            className={`${styles.lineHero} bg-complete`}
            style={{
              backgroundColor: `${lineStyles.color}`,
              left: `${lineStyles.left}`,
            }}>
            <div
              className={styles.ballLine}
              style={{ backgroundColor: lineStyles.color }}></div>
          </div>
        )}
      </div>
      {layout === 'poster' && (
        <div
          className={`container ${styles.infoClientContainer}`}
          data-aos="fade-up"
          data-aos-duration="900"
          data-aous-delay="0">
          <p>
            Client: <span>Rise</span>
          </p>
          <p>
            Location: <span>Los Angeles</span>
          </p>
          <p>
            Date: <span>November 2022</span>
          </p>
        </div>
      )}
    </section>
  );
};

export default Hero;
