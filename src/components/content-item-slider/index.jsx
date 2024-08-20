import React from 'react';
import styles from './content-item-slider.module.css';

const ContentItemSlider = ({
  title,
  subtitle,
  color,
  numchartitle,
  numchartext,
}) => {
  return (
    <div className={`news ${styles.contentProject}`}>
      <h2
        className={styles.titleProject}
        style={{
          fontSize: `${
            numchartitle < 8
              ? '6vw'
              : numchartitle < 13
              ? '6vw'
              : numchartitle < 20
              ? '5vw'
              : '4vw'
          }`,
        }}>
        {title}
      </h2>
      <h3
        className={`news ${styles.subtitleProject}`}
        style={{
          color,
          fontSize: `${
            numchartext < 15 ? '4vw' : numchartext < 25 ? '3vw' : '2vw'
          }`,
        }}>
        {subtitle}
      </h3>
      {/*
<p className={styles.infoProject}>{project.text}</p>
*/}
    </div>
  );
};

export default ContentItemSlider;
