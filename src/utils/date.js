/**
 * @param {date object} date
 * @param {date object} currentDateObj
 * @return {string}
 * eg: 16:30
 * eg: yesterday
 * eg: 2 days ago
 * eg a month ago
 * eg an year ago
 * eg: 2 days from now
 */
export const convertDateTimeToRealtiveCasualLanguage = (
  dateObj, currentDateObj = new Date(), fromNowString = 'fromNow',
) => {
  const comparedDates = compareDateObjs(dateObj, currentDateObj);
  const agoOrFromNowString = dateObj < currentDateObj ? 'ago' : fromNowString;

  if (comparedDates.isSameMinute) {
    return `${comparedDates.secondsInBetween} seconds ${agoOrFromNowString}`;
  } else if (comparedDates.isSameHour) {
    return `${comparedDates.minutesInBetween} minutes ${agoOrFromNowString}`;
  } else if (comparedDates.isSameDate) {
    return `${comparedDates.hoursInBetween} hours ${agoOrFromNowString}`;
  } else if (comparedDates.isSameMonth) {
    return `${comparedDates.daysInBetween} days ${agoOrFromNowString}`;
  } else if (comparedDates.isSameYear) {
    return `${comparedDates.monthsInBetween} months ${agoOrFromNowString}`;
  } else if (comparedDates.isSameYear) {
    return `${comparedDates.yearsInBetween} years ${agoOrFromNowString}`;
  }
};


/**
 *
 * @param {date object`} dateObj1
 * @param {date object} dateObj2
 * date2 > date1 in every case
 * @returns
 */
export const compareDateObjs = (dateObj1, dateObj2) => {
  const timeDifference = dateObj1.getTime() - dateObj2.getTime();
  // eslint-disable-next-line max-len
  const { date: date1, month: month1, fullYear: fullYear1, hour: hour1, minutes: minutes1 } = extractFromDate(dateObj1);
  // eslint-disable-next-line max-len
  const { date: date2, month: month2, fullYear: fullYear2, hour: hour2, minutes: minutes2 } = extractFromDate(dateObj2);

  let monthsInBetween;
  monthsInBetween = (dateObj2.getFullYear() - dateObj1.getFullYear()) * 12;
  monthsInBetween -= dateObj1.getMonth();
  monthsInBetween += dateObj2.getMonth();

  return {
    // eslint-disable-next-line max-len
    isSameMinute: (minutes1 === minutes2 && hour1 === hour2 && date1 === date2 && month1 === month2 && fullYear1 === fullYear2),
    // eslint-disable-next-line max-len
    isSameHour: (hour1 === hour2 && date1 === date2 && month1 === month2 && fullYear1 === fullYear2),
    isSameDate: (date1 === date2 && month1 === month2 && fullYear1 === fullYear2),
    isSameMonth: (month1 === month2 && fullYear1 === fullYear2),
    isSameYear: (fullYear1 === fullYear2),
    millisecondsInBetween: timeDifference,
    secondsInBetween: Math.abs(Math.floor(timeDifference / 1000)),
    minutesInBetween: Math.abs(Math.floor(timeDifference / (1000 / 60))),
    hoursInBetween: Math.abs(Math.floor(timeDifference / (1000 / 60 / 60))),
    daysInBetween: Math.abs(Math.floor(timeDifference / (1000 / 60 / 60 / 24))),
    monthsInBetween: Math.abs(Math.floor(monthsInBetween)),
    yearsInBetween: Math.abs(Math.floor(dateObj1.getFullYear() - dateObj2.getFullYear())),
  };
};

/**
 *
 * @param {ISO string} dateString
 * @returns {date object}
 */
export const convertDateStringToObject = (dateString) => {
  return new Date(dateString);
};

/**
 *
 * @param {date object} dateobject
 * @returns {ISO string}
 */
export const convertDateObjectToString = (dateobject) => {
  return dateobject.toISOString();
};


export const extractFromDate = (date) => {
  let dateProperties = {
    date: date.getDate(),
    year: date.getYear(),
    fullYear: date.getFullYear(),
    month: date.getMonth(),
    monthName: MONTH_NAMES[date.getMonth()],
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds(),
    milliseconds: date.getMilliseconds(),
    day: date.getDay(),
    dayName: DAY_NAMES[date.getDay()],
    dateString: date.toLocaleDateString(),
    totalMilliseconds: date.getTime(),
  };

  dateProperties = {
    ...dateProperties,
    timeStrig: `${dateProperties.hours}:${dateProperties.minutes}`,
  };

  return dateProperties;
};

export const MONTH_NAMES = [
  'Monday', 'Tuesday', ' Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday',
];
export const DAY_NAMES = [
  'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday',
];
