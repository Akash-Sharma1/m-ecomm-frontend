const sendMessage = async () => {
  return null;
};


/**
 * This function takes last loaded message's sent time and loads
 * last X number of messages
 * @param {fromDateTime} <date-string>
 * @param {receiverId} <int>
 * @param {resourceType} <null / string>
 * @param {resourceId} <null / int>
 *
 * @return {messages}
  [
    {
      id: <int>,
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
  receiverId,
  resourceType,
  resourceId,
}) => {
  return [...Array(5)].map((_, index) => (
    {
      id: index,
      status: 'sent',
      text: 'Shriman Narayan, Narayan, Hari Hari',
      created_on: (new Date()).toISOString(),
      sentOn: (new Date()).toISOString(),
      delivered_on: (new Date()).toISOString(),
      read_on: (new Date()).toISOString(),
    }
  ));
};


export default {
  sendMessage,
  fetchMessages,
};
