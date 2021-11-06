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

export const conversationIdGenerator = ( message ) => {
  return;
};
