import React from 'react';
import styles from './Results.module.css'

function Results({days, months, years}) {
  return (
    <div className={`${styles.ResultsWrapper}`}>
      <span className={`${styles.TextWrapper}`}>
        <p className={`${styles.Result}`}>{years ? years : '---'}</p>
        <p className={`${styles.Label}`}>years</p>
      </span>
      <span className={`${styles.TextWrapper}`}>
        <p className={`${styles.Result}`}>{months ? months : '---'}</p>
        <p className={`${styles.Label}`}>months</p>
      </span>
      <span className={`${styles.TextWrapper}`}>
        <p className={`${styles.Result}`}>{days ? days : '---'}</p>
        <p className={`${styles.Label}`}>days</p>
      </span>
    </div>
  );
}

export default Results;
