import Link from 'next/link';
import React from 'react';
import Slider from 'react-slick';
import styles from './slider.module.css';

const SiteSlider = ({ title, projects }) => {
  console.log(projects);
  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  return (
    <section className={`siteSection ${styles.sliderSection}`}>
      <div
        className={`container ohterProjectsSlider ${styles.sliderContainer}`}>
        {title && <h2 className={`news ${styles.titleSlider}`}>{title}</h2>}
        <Slider {...settings}>
          {projects.map((project, i) => (
            <div
              key={
                typeof window !== 'undefined' ? window.crypto.randomUUID() : i
              }
              className={styles.project}>
              <div
                className={styles.projectImg}
                style={{ backgroundImage: `url(${project.imgProject})` }}></div>
              <div className={`news ${styles.contentProject}`}>
                <h2 className={styles.titleProject}>{project.title}</h2>
                <h3
                  className={`news ${styles.subtitleProject}`}
                  style={{ color: project.color }}>
                  {project.subtitle}
                </h3>
                <p className={styles.infoProject}>{project.text}</p>
              </div>
              <Link className={styles.linkOtherProject} href="/work/2"></Link>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default SiteSlider;
