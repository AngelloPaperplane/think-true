import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
// import { useSpring, animated } from 'react-spring';
import styles from './our-numbers.module.css';

const OurNumbers = () => {
  const numbers = [
    {
      number: 310,
      type: 'K',
      info: 'PEOPLE HAD VIEWING ACCESS TO THE EXPERIENCE',
    },
    {
      number: 73,
      type: '%',
      info: 'OF IN STORE PURCHASERS CHOSE VISA',
    },
    {
      number: 14,
      type: 'K',
      info: 'PEOPLE WALKED AWAY WITH VISA BRANDED SWAG',
    },
    {
      number: '2,050',
      type: '',
      info: 'PARTICIPANTS EXPERIENCED EXCLUSIVE 3D HOLOGRAM CONTENT',
    },
    {
      number: '$118,77',
      type: '',
      info: 'AVERAGE PRICE PER TRANSACTION IN-STORE',
    },
    {
      number: '$224',
      type: 'k',
      info: 'OF PRODUCT',
    },
    {
      number: '2,050',
      type: '',
      info: 'TRANSACTIONS MADE IN-STORE DURING THE DRAFT EXPERIENCE',
    },
  ];

  //   const IncrementNumber = ({n}) => {
  //     const { number } = useSpring({
  //       from: { number: 0 },
  //       number: n,
  //       delay: 200,
  //       config: { mass: 1, tension: 20, friction: 10 },
  //     });
  //     return <animated.span>{number.to((n) => n.toFixed(0))}</animated.span>;
  //   };

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
          data-aous-delay="0">
          OUR <br /> NUMBERS
        </h2>

        <div className={`flex j-b a-s ${styles.wrapperOurNumbers}`}>
          {numbers.map((number, i) => (
            <div
              key={
                typeof window !== 'undefined' ? window.crypto.randomUUID() : i
              }
              className={styles.itemNumber}
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-delay={i * 200}>
              <p className={`news ${styles.bigNumber}`}>
                {number.number}
                {/* <IncrementNumber n={number.number} /> */}
                <span className={styles.typeNumber}>{number.type}</span>
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
