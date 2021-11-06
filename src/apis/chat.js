const sendMessage = async () => {
  return null;
};

const fetchConversations = async () => {
  return [
    {
      receiverName: 'seller seller seller seller',
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
      receiverName: 'support support support support',
      resourceType: null,
      resourceId: null,
      messages: [
        {
          status: 'pending',
          text: 'Shriman Narayan, Narayan, Hari Hari Shriman Narayan, Narayan, Hari Hari Shriman Narayan, Narayan, Hari Hari',
        },
      ],
    },
  ];
};

const fetchMessages = async () => {
  return null;
};


export default {
  sendMessage,
  fetchConversations,
  fetchMessages,
};
