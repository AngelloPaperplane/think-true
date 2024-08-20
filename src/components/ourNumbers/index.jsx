import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import styles from './our-numbers.module.css';

const OurNumbers = ({ data }) => {
  const { title, numbers } = data;

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className={`siteSection ${styles.ourNumbersSection}`}>
      <div className={`container ${styles.ourNumbersContainer}`}>
        <h2
          className={`news ${styles.ourNumbersTitle}`}
          data-aos="fade-up"
          data-aos-duration="900"
          data-aous-delay="0"
          dangerouslySetInnerHTML={{ __html: title }}
        />

        <div className={`flex j-c a-s ${styles.wrapperOurNumbers}`}>
          {numbers.map((number, i) => (
            <div
              key={
                typeof window !== 'undefined' ? window.crypto.randomUUID() : i
              }
              className={styles.itemNumber}
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-delay={i * 200}>
              {number.title !== '' && (
                <p className={`news ${styles.textBeforeNumber}`}>
                  {number.title}
                </p>
              )}
              <p className={`news ${styles.bigNumber}`}>
                {number.prepend}
                {/* <IncrementNumber n={parseFloat(number.number)} />*/}
                {number.number}
                <span className={styles.typeNumber}>{number.append}</span>
              </p>
              <p className={`news ${styles.infoNumber}`}>{number.info}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurNumbers;
