import React from 'react';
import styles from './Inputs.module.css';
import Icon from '../../assets/Frame29.svg';

function Inputs({ setDays, setMonths, setYears }) {
  const [dayError, setDayError] = React.useState('');
  const [monthError, setMonthError] = React.useState('');
  const [yearError, setYearError] = React.useState('');
  const [day, setDay] = React.useState('');
  const [month, setMonth] = React.useState('');
  const [year, setYear] = React.useState('');

  const dayFunc = (event) => {
    const value = event.target.value;
    let value2 = String(value).split('');
    setDay(value);

    if (value2[0] <= 3 && value <= 31 && value > 0) {
      setDayError('');
    } else {
      setDayError('Must be a valid day');
    }
  };
  const monthFunc = (event) => {
    const value = event.target.value;
    setMonth(value);

    if (value <= 12 && value > 0) {
      setMonthError('');
    } else {
      setMonthError('Must be a valid month');
    }
  };
  const yearFunc = (event) => {
    const value = event.target.value;
    let value2 = String(value).split('');
    setYear(value);

    if (Number(value2[0]) <= 2 && value > 0) {
      setYearError('');
    } else {
      setYearError('Must be a valid month');
    }
  };

  const dayStyle = {
    display: dayError.length === 0 ? 'none' : 'block',
  };
  const dayColor = {
    color: dayError.length === 0 ? '#716f6f' : '#ff5959',
  };
  const dayBackground = {
    borderColor: dayError.length === 0 ? '#dcdcdc' : '#ff5959',
    caretColor: dayError.length === 0 ? '#854dffed' : '#ff5959',
    outline: dayError.length === 0 ? '#854dffed' : '#ff5959',
  };
  const monthStyle = {
    display: monthError.length === 0 ? 'none' : 'block',
  };
  const monthColor = {
    color: monthError.length === 0 ? '#716f6f' : '#ff5959',
  };
  const monthBackground = {
    borderColor: monthError.length === 0 ? '#dcdcdc' : '#ff5959',
    caretColor: monthError.length === 0 ? '#854dffed' : '#ff5959',
    outline: monthError.length === 0 ? '#854dffed' : '#ff5959',
  };
  const yearStyle = {
    display: yearError.length === 0 ? 'none' : 'block',
  };
  const yearColor = {
    color: yearError.length === 0 ? '#716f6f' : '#ff5959',
  };
  const yearBackground = {
    borderColor: yearError.length === 0 ? '#dcdcdc' : '#ff5959',
    caretColor: yearError.length === 0 ? '#854dffed' : '#ff5959',
    outline: yearError.length === 0 ? '#854dffed' : '#ff5959',
  };

  function isValidDate(date, year, month, day) {
    const lastDayOfMonth = new Date(Number(year), Number(month), 0).getDate();

    return (
      date.getFullYear() === Number(year) &&
      date.getMonth() === month - 1 &&
      day >= 1 &&
      day <= lastDayOfMonth
    );
  }
  const calculateAge = (e) => {
    e.preventDefault();
    const today = new Date();
    const birthdate = new Date(year, month - 1, day);
    if (!isValidDate(birthdate, year, month, day)) {
      setDayError('The date is invalid');
    }

    let ageYears = today.getFullYear() - year;
    let ageMonths = today.getMonth() + 1 - month;
    let ageDays = today.getDate() - day;

    if (ageDays < 0) {
      ageMonths--;
      const lastMonthDays = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
      ageDays += lastMonthDays;
    }

    if (ageMonths < 0) {
      ageYears--;
      ageMonths += 12;
    }

    if (
      isValidDate(birthdate, year, month, day) &&
      day.length > 0 &&
      month.length > 0 &&
      year.length > 0
    ) {
      setDays(String(ageDays));
      setMonths(String(ageMonths));
      setYears(String(ageYears));
      setDayError('');
      setMonthError('');
      setYearError('');
    } else if (
      !isValidDate(birthdate, year, month, day) &&
      day.length > 0 &&
      month.length > 0 &&
      year.length > 0
    ) {
      setDayError('The date is invalid');
    }
    if (year > Number(today.getFullYear())) {
      setYearError('Must be in the past');
    }

    if (day.length <= 0) {
      setDayError('This field is required');
    }
    if (month.length <= 0) {
      setMonthError('This field is required');
    }
    if (year.length <= 0) {
      setYearError('This field is required');
    }
  };

  return (
    <div>
      <form onSubmit={calculateAge}>
        <div className={`${styles.InputsWrapper}`}>
          <span className={`${styles.InputWrapper}`}>
            <label htmlFor="day" style={dayColor}>
              DAY
            </label>
            <input
              id="day"
              type="text"
              className={`${styles.Input}`}
              placeholder="DD"
              inputMode="numeric"
              autoComplete="cc-number"
              maxLength="2"
              pattern="[0-9]*"
              onChange={dayFunc}
              value={day}
              style={dayBackground}
            />
            <p className={`${styles.ErrorMessage}`} style={dayStyle}>
              {dayError}
            </p>
          </span>
          <span className={`${styles.InputWrapper}`}>
            <label htmlFor="month" style={monthColor}>
              MONTH
            </label>
            <input
              id="month"
              type="text"
              className={`${styles.Input}`}
              placeholder="MM"
              inputMode="numeric"
              autoComplete="cc-number"
              maxLength="2"
              pattern="[0-9]*"
              onChange={monthFunc}
              value={month}
              style={monthBackground}
            />
            <p className={`${styles.ErrorMessage}`} style={monthStyle}>
              {monthError}
            </p>
          </span>
          <span className={`${styles.InputWrapper}`}>
            <label htmlFor="year" style={yearColor}>
              YEAR
            </label>
            <input
              id="year"
              type="text"
              className={`${styles.Input}`}
              placeholder="YYYY"
              inputMode="numeric"
              autoComplete="cc-number"
              maxLength="4"
              pattern="[0-9]*"
              onChange={yearFunc}
              value={year}
              style={yearBackground}
            />
            <p className={`${styles.ErrorMessage}`} style={yearStyle}>
              {yearError}
            </p>
          </span>
        </div>
        <div className={`${styles.ButtonWrapper}`}>
          <div></div>
          <button type="submit">
            <img src={Icon} alt="arrow icon" />
          </button>
        </div>
      </form>
    </div>
  );
}

export default Inputs;
