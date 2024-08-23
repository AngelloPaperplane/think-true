import React, { useEffect } from 'react';
import styles from './about-us-content.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';
import ImgTextB from '@/components/imgTextB';

const AboutUsContent = ({ block }) => {
  console.log(block);
  useEffect(() => {
    AOS.init();
  }, []);

  const dataContent = {
    title: 'What we do prueba',
    subtitle:
      'We are an experiential marketing agency that specializes in brand initiatives that center around engaging diverse communities.',
    text: [
      'We don’t want our employees to fit in, we want to grow with our people. We ask everyone to bring 100% of their true selves to work, because authenticity is never a compromise.',
      'Everything we do, we do to better our communities and beyond. Our experiences and every decision we make along the way are to create an impact we can reflect on with pride.',
    ],
    image: '/images/02-home.jpg',
    layout: 'home',

    blocks: [
      {
        imgSize: '35%',
        height: '45vh',
        text: [
          'We don’t want our employees to fit in, we want to grow with our people. We ask everyone to bring 100% of their true selves to work, because authenticity is never a compromise.',
          'Everything we do, we do to better our communities and beyond. Our experiences and every decision we make along the way are to create an impact we can reflect on with pride.',
        ],
        image: '/images/02-home.jpg',
        layout: 'home',
      },
      {
        imgSize: '35%',
        imgHeight: '45vh',
        textWidth: '60%',
        flexDirection: 'row',
        text: [
          'We don’t want our employees to fit in, we want to grow with our people. We ask everyone to bring 100% of their true selves to work, because authenticity is never a compromise.',
          'Everything we do, we do to better our communities and beyond. Our experiences and every decision we make along the way are to create an impact we can reflect on with pride.',
        ],
        image: '/images/02-home.jpg',
        layout: 'home',
      },
    ],
  };
  return (
    <div className={`container ${styles.aboutContainer}`}>
      <h2
        data-aos="fade-up"
        data-aos-duration="600"
        data-aos-delay="0"
        className={` ${styles.titleSection}`}
        dangerouslySetInnerHTML={{ __html: dataContent.title }}
      />
      <div
        className={`container ${styles.contentContainer}`}
        style={{ flexDirection: 'row' }}>
        <div
          className={`${styles.imgPanel}`}
          style={{
            backgroundImage: `${`url(${
              dataContent.image ? dataContent.image : ''
            })`}`,
            width: '30%',
          }}
        />
        <div
          className={`${styles.textContainer}`}
          style={{
            width: 'calc(60%)',
          }}>
          <div className={`${styles.blockContainer}`}>
            <h3
              className={`${styles.textTitle}`}
              dangerouslySetInnerHTML={{ __html: dataContent.title }}
            />
            <p
              className={`${styles.textDescription}`}
              dangerouslySetInnerHTML={{ __html: dataContent.text[0] }}
            />
          </div>

          <div className={`${styles.blockContainer}`}>
            <h3
              className={`${styles.textTitle}`}
              dangerouslySetInnerHTML={{ __html: dataContent.title }}
            />
            <p
              className={`${styles.textDescription}`}
              dangerouslySetInnerHTML={{ __html: dataContent.text[1] }}
            />
          </div>
        </div>
      </div>

      <div
        className={`container ${styles.contentContainer}`}
        style={{ flexDirection: 'row-reverse' }}>
        <div
          className={`${styles.imgPanel}`}
          style={{
            backgroundImage: `${`url(${
              dataContent.image ? dataContent.image : ''
            })`}`,
            height: '30vh',
            width: '45%',
          }}
        />
        <div
          className={`${styles.textContainerLeft}`}
          style={{
            width: 'calc(55%)',
          }}>
          <div className={`${styles.blockContainer}`}>
            <h3
              className={`${styles.textTitle}`}
              dangerouslySetInnerHTML={{ __html: dataContent.title }}
            />
            <p
              className={`${styles.textDescription}`}
              dangerouslySetInnerHTML={{ __html: dataContent.text[0] }}
            />
          </div>
        </div>
      </div>

      <p className={`${styles.textDescription}`}></p>
    </div>
  );
};

export default AboutUsContent;
