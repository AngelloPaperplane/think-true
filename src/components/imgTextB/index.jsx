import React from 'react';
import styles from './what-we-do.module.css';

const ImgTextB = ({
  title,
  subtitle,
  color,
  topText,
  image,
  withList,
  sideText,
}) => {
  return (
    <section className={`siteSection ${styles.whatWeDoSection}`}>
      <div className={`container ${styles.whatWeDoCo}`}>
        {title && (
          <h2 className={`titleSec ${styles.titleSection} news`}>{title}</h2>
        )}

        {subtitle && (
          <h3 className={`news ${styles.subtitleSection}`} style={{ color }}>
            {subtitle}
          </h3>
        )}

        {topText && <p className={`${styles.infoSection}`}>{topText}</p>}

        <div className={`flex j-b  ${styles.detailsSec}`}>
          <div
            className={`bg-cv ${styles.imgSection}`}
            style={{ backgroundImage: `url(${image})` }}>
            <div className={styles.redLine}>
              <div className={styles.ballRedLine}></div>
            </div>
          </div>
          {withList && (
            <ul className={`${styles.detailsWhatWeDo}`}>
              <li className={`flex j-s a-c ${styles.itemWhatWeDo}`}>
                <div className={`bg-ct ${styles.line}`}>
                  <div className={`bg-ct ${styles.ballLine}`}></div>
                </div>
                <p className={styles.textFeature}>BRAND CONSULTING</p>
              </li>
              <li className={`flex j-s a-c ${styles.itemWhatWeDo}`}>
                <div className={`bg-ct ${styles.line}`}>
                  <div className={`bg-ct ${styles.ballLine}`}></div>
                </div>
                <p className={styles.textFeature}>AUDIENCE INSIGHTS</p>
              </li>
              <li className={`flex j-s a-c ${styles.itemWhatWeDo}`}>
                <div className={`bg-ct ${styles.line}`}>
                  <div className={`bg-ct ${styles.ballLine}`}></div>
                </div>
                <p className={styles.textFeature}>TALENT MANAGEMENT</p>
              </li>
              <li className={`flex j-s a-c ${styles.itemWhatWeDo}`}>
                <div className={`bg-ct ${styles.line}`}>
                  <div className={`bg-ct ${styles.ballLine}`}></div>
                </div>
                <p className={styles.textFeature}>
                  PR CONSULTATION & ISSUE MARKETIG
                </p>
              </li>
              <li className={`flex j-s a-c ${styles.itemWhatWeDo}`}>
                <div className={`bg-ct ${styles.line}`}>
                  <div className={`bg-ct ${styles.ballLine}`}></div>
                </div>
                <p className={styles.textFeature}>
                  GRASSROOTS MARKETING & COMMUNITY ENGAGEMENT
                </p>
              </li>
              <li className={`flex j-s a-c ${styles.itemWhatWeDo}`}>
                <div className={`bg-ct ${styles.line}`}>
                  <div className={`bg-ct ${styles.ballLine}`}></div>
                </div>
                <p className={styles.textFeature}>CREATIVE TECHNOLOGY</p>
              </li>
              <li className={`flex j-s a-c ${styles.itemWhatWeDo}`}>
                <div className={`bg-ct ${styles.line}`}>
                  <div className={`bg-ct ${styles.ballLine}`}></div>
                </div>
                <p className={styles.textFeature}>
                  DIGITAL CAMPAIGNS & STRATEGY
                </p>
              </li>
            </ul>
          )}
          {!withList && sideText && (
            <div
              className={styles.sideText}
              dangerouslySetInnerHTML={{ __html: sideText }}></div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ImgTextB;
