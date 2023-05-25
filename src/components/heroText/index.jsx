import React, { useEffect } from 'react';
import styles from './hero-text.module.css';
import { gsap } from 'gsap';
import SplitType from 'split-type';

const HeroText = ({ content }) => {
  useEffect(() => {
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

    const tl = gsap.timeline({});
    tl.from(`.${styles.titleHeroText}`, {
      opacity: 0,
      duration: 1,
    });
  }, []);
  return (
    <section className={`siteSection ${styles.heroText}`}>
      <div className={`container ${styles.heroTextContainer}`}>
        <h2 className={`news splitText ${styles.titleHeroText}`}>
          {content.title}
        </h2>
        <h3 className={`news splitText ${styles.subtitleHeroText}`}>
          {content.subtitle}
        </h3>
      </div>
    </section>
  );
};

export default HeroText;
