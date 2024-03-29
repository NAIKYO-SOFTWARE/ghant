import React from 'react';
import './calendar.css';
import Layout from './Layout';

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

export default Calendar
