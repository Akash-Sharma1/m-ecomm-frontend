const sendMessageToNewConversation = async ({
  resourceId,
  resourceType,
  receiverId,
  senderId,
  createdOn,
  content,
}) => {
  return {
    id: (Math.random() * 100),
    conversationId: (Math.random() * 100),
    status: 'sent',
    content,
    receiverId,
    senderId,
    createdOn,
  };
};

const sendMessageToExistingConversation = async ({
  conversationId,
  receiverId,
  senderId,
  createdOn,
  content,
}) => {
  return {
    id: (Math.random() * 100),
    status: 'sent',
    content: content,
    conversationId,
    receiverId,
    senderId,
    createdOn,
    sentOn: (new Date()).toISOString(),
  };
};


/**
 * This function takes last loaded message's sent time and loads
 * last X number of messages
 * @param {fromDateTime} <date-string>
 * @param {conversationId} <int>
 *
 * @return {messages}
  [
    {
      id: <int>,
      conversation_id: <int>,
      sender_id: <int>,
      receiver_id: <int>,

      text: 'Shriman Narayan, Narayan, Hari Hari',
      status: <string>,

      created_on: <date-string>,
      sentOn: <date-string>,
      delivered_on: <date-string> / null,
      read_on: <date-string> / null
    },
  ],
 */
const fetchMessages = async ({
  fromDateTime,
  conversationId,
}) => {
  return [...Array(10)].map((_, index) => (
    {
      id: Math.random() * 1000,
      status: 'sent',
      conversationId,
      senderId: index % 2 ? 'Seller' : '123',
      recieverId: index % 2 ? 123 : 'Seller',
      content: 'Shriman Narayan, Narayan, Hari Hari',
      createdOn: (new Date(2021, 10, 16 - index/2)).toISOString(),
      sentOn: (new Date(2021, 10, 16 - index/2)).toISOString(),
      deliveredOn: (new Date(2021, 10, 16 - index/2)).toISOString(),
      readOn: (new Date(2021, 10, 16 - index)).toISOString(),
    }
  ));
};


export default {
  sendMessageToExistingConversation,
  sendMessageToNewConversation,
  fetchMessages,
};
