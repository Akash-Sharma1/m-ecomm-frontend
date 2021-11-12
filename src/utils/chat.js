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

export const generateNewConversationObj = ({
  receiverName,
  resourceId,
  resourceType,
  avatarUrl,
  messages=[],
}) => {
  return {
    receiverName,
    resourceId,
    resourceType,
    avatarUrl,
    messages,
  };
};

export const conversationIdGenerator = ({ resourceType, resourceId, receiverName }) => {
  return `${resourceType}/${resourceId}/receiverId/${receiverName}`;
};

export const tranformConversationsData = (conversationsArray) => {
  const conversationsMap = {};

  conversationsArray.map((conversation) => {
    const conversationId = conversationIdGenerator(conversation);
    conversationsMap[conversationId] = {
      conversationId,
      ...conversation,
      messages: tranformMessagesData(conversation.messages),
    };
  });

  return conversationsMap;
};

export const tranformMessagesData = (messagesArray) => {
  const messagesMap = {};

  messagesArray.map((message) => {
    messagesMap[message.id] = message;
  });

  return messagesMap;
};
