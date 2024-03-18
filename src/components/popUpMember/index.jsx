// import DOMPurify from 'dompurify';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import styles from './pop-up-member.module.css';

const PopUpMember = ({ popUpMember, setPopUpMember }) => {
  // const closePopUp = () => {
  //   setPopUpMember({});
  // };
  const [animate, setAnimate] = useState(false);
  const placeHolderImage = useRef(null);

  useEffect(() => {
    if (Object.entries(popUpMember).length > 0) {
      setTimeout(() => {
        setAnimate(true);
      }, 50);
    }
  }, [popUpMember]);

  const addClassToLoader = () => {
    placeHolderImage.current.classList.remove(styles.show);
  };

  if (!Object.entries(popUpMember).length > 0) {
    return <></>;
  }
  return (
    <div
      className={`${styles.popUpMember} ${animate ? styles.activePopUp : ''}`}>
      <div
        className={styles.bgPopUpMember}
        onClick={() => {
          setTimeout(() => {
            setPopUpMember({});
          }, 500);
          setAnimate(false);
        }}></div>
      <div
        className={`flex j-c a-c ${styles.wrapperPopUpMember}`}
        style={{ backgroundColor: `${popUpMember.color}` }}>
        <div
          className={`${styles.closePopUp} bg-ct`}
          onClick={() => {
            setTimeout(() => {
              setPopUpMember({});
            }, 500);
            setAnimate(false);
          }}></div>
        <div
          ref={placeHolderImage}
          className={`${styles.show} ${styles.wrapperImgMember}`}>
          <div className={`${styles.placeHolderImage} `}></div>
          <Image
            onLoad={addClassToLoader}
            className={styles.imgMember}
            src={popUpMember.imgfull.large}
            fill
            alt={`${
              popUpMember.imgfull.alt
                ? popUpMember.imgfull.alt
                : popUpMember.name.toLowerCase()
            } image`}
          />
        </div>
        <div
          className={styles.infoMember}
          style={{ backgroundColor: `${popUpMember.color}` }}>
          <h3
            style={{ color: popUpMember.name_color }}
            className={`news ${styles.nameMember}`}>
            {popUpMember.name}
          </h3>
          <h4
            style={{ color: popUpMember.profession_color }}
            className={`news ${styles.professionMember}`}>
            {popUpMember.profession}
          </h4>
          <div
            style={{ color: popUpMember.description_color }}
            className={styles.descriptionMember}
            dangerouslySetInnerHTML={{
              __html: popUpMember.description,
            }}></div>
        </div>
      </div>
    </div>
  );
};

export default PopUpMember;
