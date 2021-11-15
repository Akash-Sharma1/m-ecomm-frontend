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

/**
 *
 * @param {date object} dateObj1
 * @param {date object} dateObj2
 * date2 > date1 in every case
 * @returns
 */
export const compareDateObjs = (dateObj1, dateObj2) => {
  const timeDifference = Math.abs(dateObj2.getTime() - dateObj1.getTime());
  // eslint-disable-next-line max-len
  const { date: date1, month: month1, fullYear: fullYear1, hour: hour1, minutes: minutes1 } = extractDateProperties(dateObj1);
  // eslint-disable-next-line max-len
  const { date: date2, month: month2, fullYear: fullYear2, hour: hour2, minutes: minutes2 } = extractDateProperties(dateObj2);

  let monthsInBetween;
  monthsInBetween = (dateObj2.getFullYear() - dateObj1.getFullYear()) * 12;
  monthsInBetween -= dateObj1.getMonth();
  monthsInBetween += dateObj2.getMonth();
  monthsInBetween = Math.abs(monthsInBetween);

  return {
    // eslint-disable-next-line max-len
    isSameMinute: (minutes1 === minutes2 && hour1 === hour2 && date1 === date2 && month1 === month2 && fullYear1 === fullYear2),
    // eslint-disable-next-line max-len
    isSameHour: (hour1 === hour2 && date1 === date2 && month1 === month2 && fullYear1 === fullYear2),
    isSameDate: (date1 === date2 && month1 === month2 && fullYear1 === fullYear2),
    isSameMonth: (month1 === month2 && fullYear1 === fullYear2),
    isSameYear: (fullYear1 === fullYear2),
    millisecondsInBetween: timeDifference,
    secondsInBetween: Math.floor(timeDifference / 1000),
    minutesInBetween: Math.floor(timeDifference / (1000 * 60)),
    hoursInBetween: Math.floor(timeDifference / (1000 * 60 * 60)),
    daysInBetween: Math.floor(timeDifference / (1000 * 60 * 60 * 24)),
    monthsInBetween: Math.floor(monthsInBetween),
    yearsInBetween: Math.abs(Math.floor(dateObj1.getFullYear() - dateObj2.getFullYear())),
  };
};


export const extractDateProperties = (dateObj) => {
  let dateProperties = {
    date: dateObj.getDate(),
    year: dateObj.getYear(),
    fullYear: dateObj.getFullYear(),
    month: dateObj.getMonth(),
    monthName: MONTH_NAMES[dateObj.getMonth()],
    hours: dateObj.getHours(),
    minutes: dateObj.getMinutes(),
    seconds: dateObj.getSeconds(),
    milliseconds: dateObj.getMilliseconds(),
    day: dateObj.getDay(),
    dayName: DAY_NAMES[dateObj.getDay()],
    dateString: dateObj.toLocaleDateString(),
    totalMilliseconds: dateObj.getTime(),
  };

  dateProperties = {
    ...dateProperties,
    timeStrig: `${dateProperties.hours}:${dateProperties.minutes}`,
  };

  return dateProperties;
};

export const timeFromDateObj = (dateObj) => {
  const { hours, minutes } = extractDateProperties(dateObj);

  return `${hours}:${minutes}`;
};

export const dateFromDateObj = (dateObj, monthInWords = false) => {
  const { date, month, fullYear } = extractDateProperties(dateObj);

  if (monthInWords) {
    return `${date}, ${MONTH_NAMES[month]}, ${fullYear}`;
  } else {
    return `${date}/${month}/${fullYear}`;
  }
};

export const MONTH_NAMES = [
  'January', 'February', 'March',
  'April', 'May', 'June', 'July',
  'August', 'September', 'October',
  'November', 'December',
];
export const DAY_NAMES = [
  'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday',
];
