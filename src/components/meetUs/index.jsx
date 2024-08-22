/* eslint-disable quotes */
import Image from 'next/image';
import React, { useEffect, useMemo, useState } from 'react';
import styles from './meet-us.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import PopUpMember from '../popUpMember';

const MeetUs = ({ membersData }) => {
  const [popUpMember, setPopUpMember] = useState({});
  // useEffect(() => {
  //   AOS.init();
  // }, []);
  const MeetUsSection = useMemo(
    () => (
      <section className={`siteSection ${styles.meetUsSection}`}>
        <div className={`container ${styles.meetUsContainer}`}>
          <div className={`${styles.wrapperTeam} flex j-s a-c`}>
            {membersData.map((member, i) => (
              <div
                key={
                  typeof window !== 'undefined' ? window.crypto.randomUUID() : i
                }
                className={`${styles.wrapperMember}`}
                onClick={() => setPopUpMember(member)}
                data-aos="fade-down"
                data-aos-duration="800"
                data-aous-delay="0">
                <div className={styles.imgMember}>
                  <Image
                    className={styles.innerImgMember}
                    src={member.img.medium}
                    fill
                    alt={member.img.alt ? member.img.alt : member.name}
                  />
                  <div
                    className={styles.lineColor}
                    style={{ borderColor: member.color }}>
                    <div
                      className={styles.innerLine}
                      style={{ backgroundColor: member.color }}>
                      <div
                        className={styles.ballLine}
                        style={{ backgroundColor: member.color }}></div>
                    </div>
                  </div>
                </div>
                <h2 className={`news ${styles.memberName}`}>{member.name}</h2>
                <h3 className={`news ${styles.profession}`}>
                  <p dangerouslySetInnerHTML={{ __html: member.profession }} />
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    ),
    []
  );
  return (
    <>
      {MeetUsSection}
      <PopUpMember popUpMember={popUpMember} setPopUpMember={setPopUpMember} />
    </>
  );
};

export default MeetUs;
