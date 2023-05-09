import React from 'react';
import styles from './hero.module.css';

const Hero = ({ image, title, colorTitle, lineStyles, layout, align }) => {
  return (
    <section
      className={`${styles.heroSection} bg-cv ${
        align === 'right' ? styles.alignRight : ''
      }`}
      style={{ backgroundImage: `url(${image})` }}>
      <div className={`container ${styles.heroContainer} flex j-c a-e`}>
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
      </div>
    </section>
  );
};

export default Hero;
