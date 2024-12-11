import React from "react";

const DateFormatter = ({ date }) => {
  const getOrdinalSuffix = (day) => {
    const j = day % 10;
    const k = day % 100;
    if (j === 1 && k !== 11) {
      return `${day}st`;
    } else if (j === 2 && k !== 12) {
      return `${day}nd`;
    } else if (j === 3 && k !== 13) {
      return `${day}rd`;
    } else {
      return `${day}th`;
    }
  };

  const parsedDate = new Date(date);

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayOfWeek = daysOfWeek[parsedDate.getDay()];

  const dayOfMonth = parsedDate.getDate();

  const monthsOfYear = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month = monthsOfYear[parsedDate.getMonth()];

  const year = parsedDate.getFullYear();

  const ordinalDay = getOrdinalSuffix(dayOfMonth);

  const superscriptStyle = {
    fontSize: "0.7em",
    verticalAlign: "super",
  };

  return (
    <>
      {dayOfWeek}, {dayOfMonth}
      <sup style={superscriptStyle}>{ordinalDay.slice(-2)}</sup> {month} {year}
    </>
  );
};

export default DateFormatter;
