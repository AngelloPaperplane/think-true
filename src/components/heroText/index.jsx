import React from 'react';
import styles from './hero-text.module.css';

const HeroText = ({ content }) => {
  return (
    <section className={`siteSection ${styles.heroText}`}>
      <div className={`container ${styles.heroTextContainer}`}>
        <h2 className={`news ${styles.titleHeroText}`}>{content.title}</h2>
        <h3 className={`news ${styles.subtitleHeroText}`}>
          {content.subtitle}
        </h3>
      </div>
    </section>
  );
};

export default HeroText;
