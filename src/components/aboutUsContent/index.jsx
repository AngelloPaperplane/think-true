import React, { useEffect } from 'react';
import styles from './about-us-content.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';
import ImgTextB from '@/components/imgTextB';

const AboutUsContent = ({whatdo,whatdo_new}) => {
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
              dangerouslySetInnerHTML={{ __html: whatdo .title }}
            />
      <div 
        className={`${styles.contentContainer}`}
      >

          <div
                className={`${styles.imgPanel}`}
                style={{
                  backgroundImage: `${`url(${
                    whatdo.image ? whatdo.image['super-large']: ''
                  })`}`,
                }}
              />


<div className={`${styles.textContainer}`}
          dangerouslySetInnerHTML={{ __html: whatdo.sideText }}
        />
      </div>

      <div 
        className={`${styles.contentContainerLeft}`}
      >

          <div
                className={`${styles.imgPanelLeft}`}
                style={{
                  backgroundImage: `${`url(${
                    whatdo.image ? whatdo_new.image['super-large']: ''
                  })`}`,
                }}
              />

        <div className={`${styles.textContainerLeft}`}
          dangerouslySetInnerHTML={{ __html: whatdo_new.sideText }}
        />
        
      </div>

      <p className={`${styles.textDescription}`}></p>
    </div>
  );
};

export default AboutUsContent;
