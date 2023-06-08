import Link from 'next/link';
import React, { useEffect } from 'react';
import Slider from 'react-slick';
import styles from './slider.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const SiteSlider = ({ title, projects }) => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className={`siteSection ${styles.sliderSection}`}>
      <div
        className={`container ohterProjectsSlider ${styles.sliderContainer}`}>
        {title && (
          <h2
            className={`news ${styles.titleSlider}`}
            data-aos="fade-up"
            data-aos-duration="1900"
            data-aous-delay="0">
            {title}
          </h2>
        )}
        <Slider {...settings}>
          {projects.map((project, i) => (
            <div
              key={
                typeof window !== 'undefined' ? window.crypto.randomUUID() : i
              }
              className={styles.project}
              data-aos="fade-up"
              data-aos-duration="1900"
              data-aous-delay="0">
              <div
                className={`bg-cv ${styles.projectImg}`}
                style={{
                  backgroundImage: `url(${project.imgProject.medium})`,
                }}></div>
              <div className={`news ${styles.contentProject}`}>
                <h2
                  className={styles.titleProject}
                  style={{
                    fontSize: `${
                      project.numchartitle < 8
                        ? '7vw'
                        : project.numchartitle < 13
                        ? '6vw'
                        : project.numchartitle < 20
                        ? '5vw'
                        : '4vw'
                    }`,
                  }}>
                  {project.title}
                </h2>
                <h3
                  className={`news ${styles.subtitleProject}`}
                  style={{
                    color: project.color,
                    fontSize: `${
                      project.numchartext < 15
                        ? '4vw'
                        : project.numchartext < 25
                        ? '3vw'
                        : '2vw'
                    }`,
                  }}>
                  {project.subtitle}
                </h3>
                <p className={styles.infoProject}>{project.text}</p>
              </div>
              <Link
                className={styles.linkOtherProject}
                href={`${project.link}`}></Link>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default SiteSlider;
