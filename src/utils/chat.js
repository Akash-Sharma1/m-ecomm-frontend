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
    return ((a.sentOn || a.createdOn) - (b.sentOn || b.createdOn));
  });

  return [...messagesArray];
};

export const getLastMessage = (messagesArray = []) => {
  return messagesArray && messagesArray[0];
};

export const getOtherParticipantInConversation = (participants = [], userId) => {
  return participants.find((participant) => participant !== userId);
};
