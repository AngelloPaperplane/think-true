import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';
import styles from './footer.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = ({ dataContent, isContact }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  if (dataContent) {
    const {
      title,
      text,
      image,
      locations,
      itemsmenu,
      privacy_link,
      privacy_label,
      terms_label,
      terms_link,
    } = dataContent;

    const sendDataForm = async (event) => {
      event.preventDefault();
      const name = event.target.querySelector('#f_name').value;
      const email = event.target.querySelector('#f_email').value;
      const message = event.target.querySelector('#f_message').value;

      if (!name) {
        alert('Please enter your name.');
        return false;
      }

      if (!email) {
        alert('Please enter your Email.');
        return false;
      }

      if (!message) {
        alert('Please enter your Message.');
        return false;
      }

      const formData = {
        'fname': name,
        'femail': email,
        'fmessage': message,
      };

      // const endpoint = `${process.env.NEXT_PUBLIC_ENDPOINT_CONTENT}colombian-app/v2/contact-footer-full`;
      const endpoint = '/api/send-form';

      const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      };

      const response = await fetch(endpoint, options);

      const result = await response.json();

      const errorDiv = event.target.querySelector('#messageForm');
      errorDiv.innerHTML = result.status;
      event.target.reset();
      setTimeout(() => {
        errorDiv.innerHTML = '';
      }, 3000);

      // alert(result.status);
      console.log('Success:', result.status);
      return false;
    };

    return (
      <>
        <section className={`siteSection ${styles.formSection}`}>
          <div className={`bg-ct ${styles.patternForm}`}></div>
          <div className={`container ${styles.formContainer}`}>
            {!isContact && (
              <>
                <h2
                  data-aos="fade-up"
                  data-aos-duration="900"
                  data-aous-delay="0"
                  className={`titleSec news ${styles.formTitle}`}
                  dangerouslySetInnerHTML={{ __html: title }}
                />
                <p
                  data-aos="fade-up"
                  data-aos-duration="900"
                  data-aous-delay="0"
                  className={styles.infoForm}
                  dangerouslySetInnerHTML={{ __html: text }}
                />
              </>
            )}
            <div className={`${styles.wrapperForm} flex j-b a-s`}>
              <form
                onSubmit={sendDataForm}
                className={`${styles.siteForm} flex j-b a-c`}>
                <input
                  data-aos="fade-up"
                  data-aos-duration="900"
                  data-aous-delay="0"
                  type="text"
                  placeholder="Full name"
                  name=""
                  id="f_name"
                  className={styles.inputForm}
                />
                <input
                  data-aos="fade-up"
                  data-aos-duration="900"
                  data-aous-delay="0"
                  type="email"
                  placeholder="Email"
                  name=""
                  id="f_email"
                  className={styles.inputForm}
                />
                <textarea
                  data-aos="fade-up"
                  data-aos-duration="900"
                  data-aous-delay="0"
                  className={styles.inputForm}
                  name=""
                  id="f_message"
                  placeholder="Message"></textarea>
                <p id="messageForm"></p>
                <div
                  className={styles.redLine}
                  data-aos="fade-up"
                  data-aos-duration="900"
                  data-aous-delay="0">
                  <div className={styles.ballRedLine}></div>
                </div>
                <div className={styles.wrapperSendBtnForm}>
                  <button
                    data-aos="fade-up"
                    data-aos-duration="900"
                    data-aous-delay="0"
                    className={`news ${styles.sendBtnForm}`}>
                    SEND
                  </button>
                </div>
              </form>
              <div className={`flex j-s a-s ${styles.contactBlock}`}>
                {locations.map((location, i) => (
                  <div key={i} className={styles.directionGroup}>
                    <div
                      data-aos="fade-up"
                      data-aos-duration="900"
                      data-aous-delay="0"
                      className={`${styles.pinIcon} bg-ct`}></div>
                    <h3
                      data-aos="fade-up"
                      data-aos-duration="900"
                      data-aous-delay="0"
                      className={`bold ${styles.cityName}`}
                      dangerouslySetInnerHTML={{ __html: location.name }}
                    />
                    <p
                      data-aos="fade-up"
                      data-aos-duration="900"
                      data-aous-delay="0"
                      className={styles.infoUbication}
                      dangerouslySetInnerHTML={{ __html: location.info }}
                    />
                  </div>
                ))}
                <div
                  data-aos="fade"
                  data-aos-duration="900"
                  data-aous-delay="0"
                  className={`${styles.imgSiteFooter}`}>
                  <Image src={image.large} fill alt={image.alt} />
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer className={`siteSection ${styles.siteFooter}`}>
          <div className={`container ${styles.container}`}>
            <div className={`bg-ct ${styles.footerLogo}`}></div>
            <div className={`flex j-b a-s ${styles.footerItems}`}>
              <div className={styles.socialWrapper}>
                <p className={`news ${styles.followText}`}>FOLLOW US</p>
                <a
                  href="https://www.instagram.com/thinktrue_/?hl=en"
                  rel="noreferrer"
                  target="_blank"
                  className={`bg-ct ${styles.socialIcon} ${styles.ins}`}></a>
                <a
                  href="https://www.linkedin.com/company/think-true/"
                  rel="noreferrer"
                  target="_blank"
                  className={`bg-ct ${styles.socialIcon} ${styles.in}`}></a>
              </div>
              <ul className={styles.footerMenu}>
                {itemsmenu.map((item, i) => (
                  <li key={100 + i} className={styles.itemFooterMenu}>
                    <Link href={item.link}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <p className={`flex j-c a-c ${styles.legacyText}`}>
              © 2023 Think-True /{' '}
              {privacy_link && privacy_link !== '' && (
                <Link href={privacy_link}>{privacy_label}</Link>
              )}
              /{' '}
              {terms_link && terms_link !== '' && (
                <Link href={terms_link}>{terms_label}</Link>
              )}
            </p>
            <p className={styles.paperplaneText}>
              Designed by:{' '}
              <a
                href="https://paperplane.com.co"
                target="_blank"
                rel="noreferer">
                paperplane.co
              </a>
            </p>
          </div>
        </footer>
      </>
    );
  }

  return (
    <>
      <section className={`siteSection ${styles.formSection}`}>
        <div className={`bg-ct ${styles.patternForm}`}></div>
        <div className={`container ${styles.formContainer}`}>
          <h2
            data-aos="fade-up"
            data-aos-duration="900"
            data-aous-delay="0"
            className={`titleSec news ${styles.formTitle}`}>
            LET’S MEET
          </h2>
          <p
            data-aos="fade-up"
            data-aos-duration="900"
            data-aous-delay="0"
            className={styles.infoForm}>
            We are more than this website and REAL people. Let’s meet to create
            a plan to capture the key performance indicators (KPIs) to
            materialize impact for your brand.
          </p>
          <div className={`${styles.wrapperForm} flex j-b a-s`}>
            <form className={`${styles.siteForm} flex j-b a-c`}>
              <input
                data-aos="fade-up"
                data-aos-duration="900"
                data-aous-delay="0"
                type="text"
                placeholder="Full name"
                className={styles.inputForm}
              />
              <input
                data-aos="fade-up"
                data-aos-duration="900"
                data-aous-delay="0"
                type="email"
                placeholder="Email"
                className={styles.inputForm}
              />
              <textarea
                data-aos="fade-up"
                data-aos-duration="900"
                data-aous-delay="0"
                className={styles.inputForm}
                placeholder="Message"></textarea>
              <div
                className={styles.redLine}
                data-aos="fade-up"
                data-aos-duration="900"
                data-aous-delay="0">
                <div className={styles.ballRedLine}></div>
              </div>
              <div className={styles.wrapperSendBtnForm}>
                <button className={styles.sendBtnForm}>SEND</button>
              </div>
            </form>
            <div className={`flex j-s a-s ${styles.contactBlock}`}>
              <div className={styles.directionGroup}>
                <div
                  data-aos="fade-up"
                  data-aos-duration="900"
                  data-aous-delay="0"
                  className={`${styles.pinIcon} bg-ct`}></div>
                <h3
                  data-aos="fade-up"
                  data-aos-duration="900"
                  data-aous-delay="0"
                  className={`bold ${styles.cityName}`}>
                  Los Angeles
                </h3>
                <p
                  data-aos="fade-up"
                  data-aos-duration="900"
                  data-aous-delay="0"
                  className={styles.infoUbication}>
                  <span>A.</span> 5220 Pacific Concourse{' '}
                </p>
                <p
                  data-aos="fade-up"
                  data-aos-duration="900"
                  data-aous-delay="0"
                  className={styles.infoUbication}>
                  Dr. #190 - 90045
                </p>
                <p
                  data-aos="fade-up"
                  data-aos-duration="900"
                  data-aous-delay="0"
                  className={styles.infoUbication}>
                  <span>P.</span> 310.558.0425{' '}
                </p>
              </div>
              <div className={styles.directionGroup}>
                <div
                  data-aos="fade-up"
                  data-aos-duration="900"
                  data-aous-delay="0"
                  className={`${styles.pinIcon} bg-ct`}></div>
                <h3
                  data-aos="fade-up"
                  data-aos-duration="900"
                  data-aous-delay="0"
                  className={`bold ${styles.cityName}`}>
                  New York <br /> (Partner hub)
                </h3>
                <p
                  data-aos="fade-up"
                  data-aos-duration="900"
                  data-aous-delay="0"
                  className={styles.infoUbication}>
                  <span>A.</span> 18 W. 27th St 2nd{' '}
                </p>
                <p
                  data-aos="fade-up"
                  data-aos-duration="900"
                  data-aous-delay="0"
                  className={styles.infoUbication}>
                  Floor - 10001 CA
                </p>
                <p
                  data-aos="fade-up"
                  data-aos-duration="900"
                  data-aous-delay="0"
                  className={styles.infoUbication}>
                  <span>P.</span> 917.342.0010{' '}
                </p>
              </div>
              <div className={styles.directionGroup}>
                <div
                  data-aos="fade-up"
                  data-aos-duration="900"
                  data-aous-delay="0"
                  className={`${styles.pinIcon} bg-ct`}></div>
                <h3
                  data-aos="fade-up"
                  data-aos-duration="900"
                  data-aous-delay="0"
                  className={`bold ${styles.cityName}`}>
                  Francisco <br /> (Partner hub)
                </h3>
                <p
                  data-aos="fade-up"
                  data-aos-duration="900"
                  data-aous-delay="0"
                  className={styles.infoUbication}>
                  <span>A.</span> 100 Shoreline Hwy Suite
                </p>
                <p
                  data-aos="fade-up"
                  data-aos-duration="900"
                  data-aous-delay="0"
                  className={styles.infoUbication}>
                  295B, Mill Valley - 94941
                </p>
                <p
                  data-aos="fade-up"
                  data-aos-duration="900"
                  data-aous-delay="0"
                  className={styles.infoUbication}>
                  <span>P.</span> 415.331.4789{' '}
                </p>
              </div>
              <div
                data-aos="fade"
                data-aos-duration="900"
                data-aous-delay="0"
                className={`${styles.imgSiteFooter}`}>
                <Image src={'/images/footer.jpg'} fill alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className={`siteSection ${styles.siteFooter}`}>
        <div className={`container ${styles.container}`}>
          <div className={`bg-ct ${styles.footerLogo}`}></div>
          <div className={`flex j-b a-s ${styles.footerItems}`}>
            <div className={styles.socialWrapper}>
              <p className={`news ${styles.followText}`}>FOLLOW US</p>
              <a
                href="https://www.instagram.com/thinktrue_/?hl=en"
                rel="noreferrer"
                target="_blank"
                className={`bg-ct ${styles.socialIcon} ${styles.ins}`}></a>
              <a
                href="https://www.linkedin.com/company/think-true/"
                rel="noreferrer"
                target="_blank"
                className={`bg-ct ${styles.socialIcon} ${styles.in}`}></a>
            </div>
            <ul className={styles.footerMenu}>
              <li key="AgencyFooter-1" className={styles.itemFooterMenu}>
                Agency
              </li>
              <li key="AgencyFooter-2" className={styles.itemFooterMenu}>
                Our Work
              </li>
              {/* <li className={styles.itemFooterMenu}>News</li> */}
              <li key="AgencyFooter-3" className={styles.itemFooterMenu}>
                Contact
              </li>
            </ul>
          </div>
          <p className={`flex j-c a-c ${styles.legacyText}`}>
            © 2023 Think-True / All Rights Reserved /{' '}
            <Link href="/privacy-policy">Terms & Conditions</Link>
          </p>
          <p className={styles.paperplaneText}>
            Designed by:{' '}
            <a href="https://paperplane.com.co" target="_blank" rel="noreferer">
              paperplane.co
            </a>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
