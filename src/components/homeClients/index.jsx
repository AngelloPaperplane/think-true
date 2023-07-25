import React, { useEffect } from 'react';
import styles from './home-clients.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Clients = ({ dataContent }) => {
  const { title, subtitle, text, clients } = dataContent;
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className={`siteSection ${styles.clientsSection}`}>
      <div className={`container ${styles.clientsContainer}`}>
        <h2
          data-aos="fade-up"
          data-aos-duration="900"
          data-aous-delay="0"
          className={`${styles.clientsTitle} bold uppercase news`}
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <h3
          data-aos="fade-up"
          data-aos-duration="900"
          data-aous-delay="0"
          className={`${styles.subtitleClients} news`}
          dangerouslySetInnerHTML={{ __html: subtitle }}
        />
        <p
          data-aos="fade-up"
          data-aos-duration="900"
          data-aous-delay="0"
          className={styles.infoClients}
          dangerouslySetInnerHTML={{ __html: text }}
        />
      </div>
      <div className={styles.wrapperCollaborators}>
        <div
          className={`${styles.collaboratorsContainer} flex j-c a-c`}
          style={{
            width: `${clients.length * 16 > 100 ? clients.length * 16 : 100}vw`,
          }}>
          {clients.map((logo, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-duration="900"
              data-aous-delay="0"
              className={`bg-ct ${styles.collaboratorBox}`}
              style={{
                backgroundImage: `url(${logo.medium}})`,
                width: `${100 / clients.length}%`,
              }}
            />
          ))}
        </div>
        <div
          className={`${styles.collaboratorsContainer} flex j-c a-c`}
          style={{
            width: `${clients.length * 16 > 100 ? clients.length * 16 : 100}vw`,
            left: `${clients.length * 16 > 100 ? clients.length * 16 : 100}vw`,
          }}>
          {clients.map((logo, i) => (
            <div
              key={100 + i}
              data-aos="fade-up"
              data-aos-duration="900"
              data-aous-delay="0"
              className={`bg-ct ${styles.collaboratorBox}`}
              style={{
                backgroundImage: `url(${logo.medium}})`,
                width: `${100 / clients.length}%`,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
