import DOMPurify from 'dompurify';
import Image from 'next/image';
import React from 'react';
import styles from './pop-up-member.module.css';

const PopUpMember = ({ popUpMember, setPopUpMember }) => {
  const closePopUp = () => {
    setPopUpMember({});
  };
  return (
    <div className={styles.popUpMember}>
      <div className={styles.bgPopUpMember} onClick={() => setPopUpMember({})}></div>
      <div className={`flex j-c a-c ${styles.wrapperPopUpMember}`}>
        <div className={`${styles.closePopUp} bg-ct`} onClick={() => setPopUpMember({})}></div>
        <div className={styles.wrapperImgMember}>
          <Image
            className={styles.imgMember}
            src={popUpMember.img}
            fill
            alt={`${popUpMember.name.toLowerCase()} image`}
          />
        </div>
        <div className={styles.infoMember} style={{backgroundColor: `${popUpMember.color}`}}>
          <h3 className={`news ${styles.nameMember}`}>{popUpMember.name}</h3>
          <h4 className={`news ${styles.professionMember}`}>{popUpMember.profession}</h4>
          <div
            className={styles.descriptionMember}
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(popUpMember.description),
            }}></div>
        </div>
      </div>
    </div>
  );
};

export default PopUpMember;
