// import DOMPurify from 'dompurify';
import Image from 'next/image';
import React from 'react';
import styles from './pop-up-member.module.css';

const PopUpMember = ({ popUpMember, setPopUpMember }) => {
  // const closePopUp = () => {
  //   setPopUpMember({});
  // };
  return (
    <div className={styles.popUpMember}>
      <div
        className={styles.bgPopUpMember}
        onClick={() => setPopUpMember({})}></div>
      <div className={`flex j-c a-c ${styles.wrapperPopUpMember}`}>
        <div
          className={`${styles.closePopUp} bg-ct`}
          onClick={() => setPopUpMember({})}></div>
        <div className={styles.wrapperImgMember}>
          <Image
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
          <h3 style={{color:popUpMember.name_color}} className={`news ${styles.nameMember}`}>{popUpMember.name}</h3>
          <h4 style={{color:popUpMember.profession_color}} className={`news ${styles.professionMember}`}>
            {popUpMember.profession}
          </h4>
          <div
            style={{color:popUpMember.description_color}}
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
