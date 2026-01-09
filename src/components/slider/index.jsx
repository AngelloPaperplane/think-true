import Link from 'next/link';
import React, { useEffect } from 'react';
import Slider from 'react-slick';
import styles from './slider.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ItemSlider from '../item-slider';

const SiteSlider = ({ title, text, projects, settings, onlyImg }) => {
  // const settings = {
  //   dots: false,
  //   arrows: true,
  //   infinite: false,
  //   speed: 500,
  //   slidesToShow: 2,
  //   slidesToScroll: 1,
  //   responsive: [
  //     {
  //       breakpoint: 769,
  //       settings: {
  //         speed: 500,
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  // };
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section
      className={`siteSection ${styles.sliderSection}  ${
        text && text !== '' ? 'withTextSlider' : ''
      } ${onlyImg ? `onlyImageSection ${styles.onlyImageSliderSec}` : ''}`}>
      <div
        className={`container ohterProjectsSlider  ${styles.sliderContainer}`}>
        {title && title !== '' && (
          <h2
            className={`news ${styles.titleSlider}`}
            data-aos="fade-up"
            data-aos-duration="600"
            data-aous-delay="0"
            dangerouslySetInnerHTML={{ __html: title }}
          />
        )}
        {/* {text && text !== '' && (
          <h4
            className={`news ${styles.textSlider}`}
            data-aos="fade-up"
            data-aos-duration="600"
            data-aous-delay="0"
            dangerouslySetInnerHTML={{ __html: text }}
          />
        )} */}

        <Slider {...settings}>
          {projects.map((project, i) => (
            <ItemSlider
              onlyImg={onlyImg}
              key={
                typeof window !== 'undefined' ? window.crypto.randomUUID() : i
              }
              project={project}
            />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default SiteSlider;
