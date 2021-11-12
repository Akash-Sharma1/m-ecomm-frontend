/**
 *
 * @returns {conversations}
 *  in format of
[
  {
    receiverName: <string>,
    resourceType: <null / string>,
    resourceId: <null / id>,
    messages: [
      // only last message
      {
        status: <string>,
        sentOn: <date-string>,
        text: 'Shriman Narayan, Narayan, Hari Hari',
      },
    ],
  },
]
 */
const fetchConversations = async () => {
  return [
    {
      receiverName: 'seller',
      resourceType: null,
      resourceId: null,
      messages: [
        {
          status: 'sent',
          sentOn: (new Date()).toISOString(),
          text: 'Shriman Narayan, Narayan, Hari Hari',
        },
      ],
    },
    {
      receiverName: 'support',
      resourceType: null,
      resourceId: null,
      messages: [
        {
          status: 'pending',
          // eslint-disable-next-line max-len
          text: 'Shriman Narayan, Narayan, Hari Hari Shriman Narayan, Narayan, Hari Hari Shriman Narayan, Narayan, Hari Hari',
        },
      ],
    },
  ];
};

export default {
  fetchConversations,
};
