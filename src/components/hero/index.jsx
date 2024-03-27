import React, { useEffect, useRef, useState } from 'react';
import styles from './hero.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { gsap } from 'gsap';
import SplitType from 'split-type';
import { useRouter } from 'next/router';

const Hero = ({ dataHero }) => {
  const router = useRouter();
  const { pathname } = router;
  const heroSection = useRef(null);
  const videoHero = useRef(null);
  const [isActiveSound, setIsActiveSound] = useState(false);

  let buttonSoundActivated = false;

  const loadImage = (entries, observer) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      entry.target.style.backgroundImage = `url(${entry.target.dataset.image})`;
      observer.unobserve(entry.target);
    }
  };
  const toggleSoundVideo = (entries) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      // entry.target.setAttribute('muted', false);
      if (buttonSoundActivated) {
        setIsActiveSound(true);
      }
    } else {
      // entry.target.setAttribute('muted', true);
      setIsActiveSound(false);
    }
  };

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 1.0,
  };
  const optionsVideo = {
    root: null,
    rootMargin: '0px',
    threshold: 0,
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

    if (pathname === '/' || pathname === '/about-us') {
      // console.log('entro');
      const currentVideo = videoHero.current;
      // console.log(currentVideo);
      const observerVideo = new IntersectionObserver(
        toggleSoundVideo,
        optionsVideo
      );
      if (currentVideo) {
        observerVideo.observe(currentVideo);
      }
      return () => {
        observerVideo.unobserve(currentVideo);
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
      have_sound,
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
            videoUrl && videoUrl !== '' ? styles.videoHeroSection : ''
          }`}
          style={{
            backgroundColor: layout !== 'poster' ? 'transparent' : bg_color,
          }}>
          {videoUrl && videoUrl !== '' && (
            <div className={styles.videoContainer}>
              <button
                style={{ display: `${have_sound ? 'flex' : 'none'}` }}
                className={`${styles.activeSound} ${
                  isActiveSound ? styles.hideButton : ''
                }`}
                onClick={() => {
                  setIsActiveSound(true);
                  buttonSoundActivated = true;
                }}>
                <span className={`bg-ct ${styles.iconPlaySound}`}></span>
                <span className={styles.textActiveSound}>PLAY WITH SOUND</span>
              </button>
              <video
                className={styles.homeVideo}
                playsInline
                loop
                ref={videoHero}
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
  return <></>;
};

export default Hero;
