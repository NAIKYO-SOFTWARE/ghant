import PropTypes from 'prop-types';
import React from 'react';
import Layout from './Layout';
import './calendar.css';


function Calendar({ date, day }) {
  let currentDay = new Date().getDate()
  return (
    <Layout>
      <div className={date === currentDay ? "calendar-button current-day" : "calendar-button"}>
        <div className="day">{day}</div>
        <div className="date">{date}</div>
      </div>
    </Layout>
  );
}

Calendar.propTypes = {
  date: PropTypes.date,
  day: PropTypes.string
}

export default Calendar
