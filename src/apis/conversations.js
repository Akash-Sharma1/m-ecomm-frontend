/**
 * This functions returns all the conversation for given user
 * @param {userId} [integer]
 * @return {conversation_id}
 *  in format of
[
  {
    id: <int>
    resourceType: <null / string>,
    resourceId: <null / id>,
    startedOn: <datetime>
    participants: []
    lastMessage: {// only last message
      id: <int>
      conversationId: <int>
      status: <string>,
      sentOn: <date-string>,
      content: 'Shriman Narayan, Narayan, Hari Hari',
    },
  },
]
 */
const fetchConversations = async ({ userId }) => {
  return [
    {
      id: 0,
      resourceType: null,
      resourceId: null,
      participants: [
        'Seller',
        123,
      ],
      lastMessage: {
        conversationId: 0,
        id: 10,
        status: 'sent',
        sentOn: (new Date()).toISOString(),
        // eslint-disable-next-line max-len
        content: 'Shriman Narayan, Narayan, Hari Hari Shriman Narayan, Narayan, Hari Hari Shriman Narayan, Narayan, Hari Hari',
      },
    },
    {
      id: 1,
      resourceType: null,
      resourceId: null,
      participants: [
        'Seller',
        123,
      ],
      lastMessage: {
        id: 11,
        conversationId: 1,
        status: 'pending',
        sentOn: (new Date()).toISOString(),
        // eslint-disable-next-line max-len
        content: 'Shriman Narayan, Narayan, Hari Hari Shriman Narayan, Narayan, Hari Hari Shriman Narayan, Narayan, Hari Hari',
      },
    },
  ];
};

export default {
  fetchConversations,
};
