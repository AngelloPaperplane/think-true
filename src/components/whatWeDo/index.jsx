import React from 'react';
import styles from './what-we-do.module.css';

const WhatWeDo = () => {
  return (
    <section className={`siteSection ${styles.whatWeDoSection}`}>
      <div className={`container ${styles.whatWeDoCo}`}>
        <h2 className={`titleSec ${styles.titleSection} news`}>WHAT WE DO</h2>
        <h3 className={`news ${styles.subtitleSection}`}>True Offerings</h3>
        <p className={`${styles.infoSection}`}>
          We commit to honor and celebrate our diverse, culture-creating
          communities through brand initiatives that center around inclusive and
          authentic marketing.
        </p>

        <div className={`flex j-c  ${styles.detailsSec}`}>
          <div className={`bg-cv ${styles.imgSection}`}>
            <div className={styles.redLine}>
              <div className={styles.ballRedLine}></div>
            </div>
          </div>
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
              <p className={styles.textFeature}>DIGITAL CAMPAIGNS & STRATEGY</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
