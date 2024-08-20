import React from 'react';
import styles from './item-slider.module.css';
import Link from 'next/link';
import ContentItemSlider from '../content-item-slider';

const ItemSlider = ({ project, onlyImg }) => {
  return (
    <div
      className={`${styles.project} ${onlyImg ? styles.projectOnlyImg : ''}`}
      data-aos="fade-up"
      data-aos-duration="1900"
      data-aous-delay="0">
      <div
        className={`${
          onlyImg
            ? project.backgroundSize === 'cover'
              ? 'bg-cv'
              : 'bg-ct'
            : 'bg-cv'
        } ${styles.projectImg}`}
        style={{
          backgroundImage: `url(${project.imgProject.large})`,
        }}></div>
      {project.title && <ContentItemSlider {...project} />}
      {!onlyImg && (
        <Link
          className={styles.linkOtherProject}
          href={`${project.link}`}></Link>
      )}
    </div>
  );
};

export default ItemSlider;
