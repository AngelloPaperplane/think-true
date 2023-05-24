import React, { useEffect } from 'react';
import styles from './hero.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import SplitType from 'split-type';

const Hero = ({
  image,
  title,
  colorTitle,
  lineStyles,
  layout,
  align,
  bgColor,
  dataHero,
  noAos // es el ultimo que va a quedar...
}) => {
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
      layout,
      align,
    } = dataHero;
    return (
      <section
        className={`${styles.heroSection} bg-cv ${
          align === 'right' ? styles.alignRight : ''
        } ${layout === 'poster' ? styles.posterHero : ''}`}
        style={{
          backgroundImage:
            layout !== 'poster' ? `url(${image['super-large']})` : '',
          backgroundColor: layout !== 'poster' ? 'transparent' : bgColor,
        }}>
        <div
          className={`container ${styles.heroContainer} flex j-c a-e bg-cv`}
          style={{
            backgroundImage:
              layout === 'poster' ? `url(${image['super-large']})` : '',
          }}>
          {title && (
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
        {layout === 'poster' && (
          <div className={`container ${styles.infoClientContainer}`}>
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
        {title && (

          <h2
            className={`news splitText ${styles.titleHero}`}
            style={{ color: colorTitle ?? '#fff' }}>
            {layout === 'principal' && (
              <span className={`${styles.weAreText} splitText uppercase`}>
                WE ARE
              </span>
            )}

            {title}
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
