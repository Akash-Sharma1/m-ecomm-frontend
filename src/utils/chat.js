import {
  compareDateObjs,
  convertDateStringToObject,
  dateFromDateObj,
  extractDateProperties,
} from './date';

export const CHAT_MESSAGE_STATUSES = {
  PENDING: 'pending',
  SENT: 'sent',
  DELIVERED: 'delivered',
  READ: 'read',
  ERROR_SENDING: 'error_sending',
};

export const CHAT_MESSAGE_RESOURCE_TYPES = {
  GENERAL: 'general',
  PRODUCT: 'product',
  CUSTOM_PRODUCT: 'custom_product',
};

export const CHAT_MESSAGE_TEMPALTE_TYPES = {
  CUSTOM_REQUEST: 'custom_request',
};

export const generateNewTextMessageObj = ({
  id, from, to, text, status = CHAT_MESSAGE_STATUSES.PENDING,
}) => {
  return {
    id,
    from,
    to,
    text,
    status,
    createdOn: new Date(),
    sentOn: null,
    deliveredOn: null,
    readOn: null,
  };
};

/**
 * Takes messagesMap and returns list of messageIds
 * in order of recent first
 * @param {object} messagesMap
 * @return {messageIds} sorted by recent first
 */
export const sortMessagesByRecentFirst = (messagesArray = []) => {
  messagesArray.sort((a, b) => {
    return (convertDateStringToObject(b.sentOn || b.createdOn) -
    convertDateStringToObject(a.sentOn || a.createdOn));
  });

  return [...messagesArray];
};

export const getLastMessage = (messagesArray = []) => {
  return messagesArray && messagesArray[0];
};

export const getOtherParticipantInConversation = (participants = [], userId) => {
  return participants.find((participant) => participant !== userId);
};

export const getChatDateString = (messageDateTimeString) => {
  const dateObj = convertDateStringToObject(messageDateTimeString);
  const currentDateObj = new Date();
  const { date: givenDate } = extractDateProperties(dateObj);
  const { date: currentDate } = extractDateProperties(currentDateObj);

  const comapredProperties = compareDateObjs(dateObj, currentDateObj);

  if (comapredProperties.isSameDate) {
    return 'Today';
  } else if (comapredProperties.isSameMonth && currentDate - givenDate === 1) {
    return 'Yesterday';
  } else {
    return dateFromDateObj(dateObj, true);
  }
};

export const hasDateChangedInNextMessage = (currentMessageString, nextMessageString) => {
  const dateObj1 = convertDateStringToObject(currentMessageString);
  const dateObj2 = convertDateStringToObject(nextMessageString);

  const { isSameDate } = compareDateObjs(dateObj1, dateObj2);

  return !isSameDate;
};
