import React from 'react';
import styles from './title-line.module.css';

const TitleLine = ({ width, align, left, colorLine, title }) => {
  return (
    <div className={`container ${styles.containerTitleLine}`}>
      <h2
        className={`${styles.titleLine}`}
        style={{ width: `${width}%`, textAlign: align }}>
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
