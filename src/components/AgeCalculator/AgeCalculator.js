import React from 'react';
import styles from './AgeCalculator.module.css';
import Inputs from '../Inputs/Inputs';
import Results from '../Results';

function AgeCalculator() {

  const [days, setDays] = React.useState('');
  const [months, setMonths] = React.useState('');
  const [years, setYears] = React.useState('');
  return (
    <main className={`${styles.AgeCalculator}`}>
      <Inputs
        days={days}
        setDays={setDays}
        months={months}
        setMonths={setMonths}
        years={years}
        setYears={setYears}
      />
      <Results
        days={days}
        months={months}
        years={years}
      />
    </main>
  );
}

export default AgeCalculator;
