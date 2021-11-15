import { compareDateObjs } from 'utils/date';

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
  dateObj, currentDateObj = new Date(),
) => {
  const comparedDates = compareDateObjs(dateObj, currentDateObj);
  const agoOrFromNowString = dateObj < currentDateObj ? 'ago' : 'from now';

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

