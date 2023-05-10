import React from 'react';
import styles from './hero.module.css';

const Hero = ({
  image,
  title,
  colorTitle,
  lineStyles,
  layout,
  align,
  bgColor,
}) => {
  return (
    <section
      className={`${styles.heroSection} bg-cv ${
        align === 'right' ? styles.alignRight : ''
      } ${layout === 'poster' ? styles.posterHero : ''}`}
      style={{
        backgroundImage: layout !== 'poster' ? `url(${image})` : '',
        backgroundColor: layout !== 'poster' ? 'transparent' : bgColor,
      }}>
      <div
        className={`container ${styles.heroContainer} flex j-c a-e bg-cv`}
        style={{
          backgroundImage: layout === 'poster' ? `url(${image})` : '',
        }}>
        {title && (
          <h2
            className={`news ${styles.titleHero}`}
            style={{ color: colorTitle ?? '#fff' }}>
            {layout === 'principal' && (
              <span className={`${styles.weAreText} uppercase`}>WE ARE</span>
            )}

            {title}
            {lineStyles && (
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
        <div className={`container ${styles.infoClientContainer}`}>
          <p>Client: <span>Rise</span></p>
          <p>Location: <span>Los Angeles</span></p>
          <p>Date: <span>November 2022</span></p>
        </div>
      )}
    </section>
  );
};

export default Hero;
