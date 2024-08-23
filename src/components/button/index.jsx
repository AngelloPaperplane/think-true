import Link from 'next/link';
import React from 'react';
import styles from './button.module.css';

const Button = ({ label, link, href, onClick, color, className }) => {
  return (
    <>
      {link && (
        <Link href={href} className={className}>
          <span className={styles.wrapperText}>
            <span className={styles.textButton}>{label}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 500 150"
              preserveAspectRatio="none">
              <path stroke={color} d="M 484 18 C 392 -41 192 -38 90 2 C 21 33 4.6 54.6 5.6 77.6 c 1.4 32.4 43.4 60.4 134.4 69.4 c 87 4 160 8 271 -23 C 463 109 507 71 453 34 C 426 16 331 -8 289 -1"></path>
            </svg>
          </span>
        </Link>
      )}
      {!link && (
        <button onClick={onClick} className={className}>
          <span className={styles.wrapperText}>
          <span className={styles.textButton}>{label}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 500 150"
              preserveAspectRatio="none">
              <path stroke={color} d="M 484 18 C 392 -41 192 -38 90 2 C 21 33 4.6 54.6 5.6 77.6 c 1.4 32.4 43.4 60.4 134.4 69.4 c 87 4 160 8 271 -23 C 463 109 507 71 453 34 C 426 16 331 -8 289 -1"></path>
            </svg>
          </span>
        </button>
      )}
    </>
  );
};

export default Button;
