import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import styles from './title-line.module.css';

const TitleLine = ({ width, align, left, colorLine, title, featuredText }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  if (featuredText) {
    const { title, colorLine, left, align, width } = featuredText;
    return (
      <div className={`container ${styles.containerTitleLine}`}>
        <h2
          className={`${styles.titleLine}`}
          style={{ width: `${width}%`, textAlign: align }}
          data-aos="fade-down"
          data-aos-duration="800"
          data-aous-delay="0">
          {title}
          <span
            className={styles.lineTitle}
            style={{ backgroundColor: `${colorLine}`, left: `${left}%` }}>
            <span
              className={styles.ballLine}
              style={{ backgroundColor: `${colorLine}` }}></span>
          </span>
        </h2>
      </div>
    );
  }
  return (
    <div className={`container ${styles.containerTitleLine}`}>
      <h2
        className={`${styles.titleLine}`}
        style={{ width: `${width}%`, textAlign: align }}
        data-aos="fade-down"
        data-aos-duration="800"
        data-aous-delay="0">
        {title}
        <span
          className={styles.lineTitle}
          style={{ backgroundColor: `${colorLine}`, left: `${left}%` }}>
          <span
            className={styles.ballLine}
            style={{ backgroundColor: `${colorLine}` }}></span>
        </span>
      </h2>
    </div>
  );
};

export default TitleLine;
