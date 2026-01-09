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
          data-aos-duration="600"
          data-aous-delay="0"
          className={`${styles.clientsTitle} bold uppercase news`}
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <h3
          data-aos="fade-up"
          data-aos-duration="600"
          data-aous-delay="0"
          className={`${styles.subtitleClients} news`}
          dangerouslySetInnerHTML={{ __html: subtitle }}
        />
        <p
          data-aos="fade-up"
          data-aos-duration="600"
          data-aous-delay="0"
          className={styles.infoClients}
          dangerouslySetInnerHTML={{ __html: text }}
        />
      </div>
      <div className={styles.wrapperCollaborators}>
        <div
          className={`${styles.collaboratorsContainer} flex j-c a-c`}
          style={{
            width: `${clients.length * clients.length * 2}vw`,
            '--totalClients': clients.length,
          }}>
          {clients.map((logo, i) => (
            <div
              key={i}
              className={`bg-ct collaboratorBox ${styles.collaboratorBox}`}
              style={{
                backgroundImage: `url(${logo.medium})`,
                width: `${100 / (clients.length * 2)}%`,
              }}
            />
          ))}
          {clients.map((logo, i) => (
            <div
              key={i}
              className={`bg-ct collaboratorBox ${styles.collaboratorBox}`}
              style={{
                backgroundImage: `url(${logo.medium})`,
                width: `${100 / (clients.length * 2)}%`,
              }}
            />
          ))}
        </div>
        {/* <div
          className={`${styles.collaboratorsContainer} flex j-c a-c`}
          style={{
            // width: `${clients.length * 15 > 100 ? clients.length * 15 : 100}vw`,
            width: `${clients.length * 15 * 2}vw`,
            transform: `translateX(${
              clients.length * 15 > 100 ? clients.length * 15 + 100 : 100
            }vw)`,
            '--initialTranslate': `${
              clients.length * 15 > 100 ? clients.length * 15 + 100 : 100
            }vw`,
            '--translateAnimation': `${
              clients.length * 15 > 100 ? -clients.length * 15 - 100 : -100
            }vw`,
          }}>
          {clients.map((logo, i) => (
            <div
              key={100 + i}
              className={`bg-ct collaboratorBox ${styles.collaboratorBox}`}
              style={{
                backgroundImage: `url(${logo.medium})`,
                width: `${100 / clients.length}%`,
              }}
            />
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default Clients;
