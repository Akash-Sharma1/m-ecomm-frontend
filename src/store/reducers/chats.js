import { generateNewConversationObj, generateNewTextMessageObj } from 'utils/chat';
import { batch } from 'react-redux';
import chatApi from 'apis/chat';

// ACTIONS
const prefix = 'products';

const FETCH_CONVERSATIONS_INIT = `${prefix}/FETCH_CONVERSATIONS_INIT`;
const FETCH_CONVERSATIONS_DONE = `${prefix}/FETCH_CONVERSATIONS_DONE`;
const FETCH_CONVERSATIONS_ERROR = `${prefix}/FETCH_CONVERSATIONS_ERROR`;

const FETCH_MESSAGES_INIT = `${prefix}/FETCH_MESSAGES_INIT`;
const FETCH_MESSAGES_DONE = `${prefix}/FETCH_MESSAGES_DONE`;
const FETCH_MESSAGES_ERROR = `${prefix}/FETCH_MESSAGES_ERROR`;

const SEND_MESSAGES_INIT = `${prefix}/SEND_MESSAGES_INIT`;
const SEND_MESSAGES_DONE = `${prefix}/SEND_MESSAGES_DONE`;
const SEND_MESSAGES_ERROR = `${prefix}/SEND_MESSAGES_ERROR`;

// this is before sending on to the network
// message status will be changed when successfully sent onto the network
const ADD_MESSAGE_TO_CONVERSATION = `${prefix}/ADD_MESSAGE_TO_CONVERSATION`;

const SELECT_OR_CREATE_CONVERSATION = `${prefix}/SELECT_OR_CREATE_CONVERSATION`;

// DISPATCHERS
export const fetchConversations = () => {
  return async (dispatch, getState) => {
    try {
      const userId = getState().user.userId;
      dispatch({ type: FETCH_CONVERSATIONS_INIT });

      const response = await chatApi.fetchConversations({ userId });

      dispatch({
        type: FETCH_CONVERSATIONS_DONE,
        payload: response,
      });
    } catch (error) {
      dispatch({ type: FETCH_CONVERSATIONS_ERROR, error });
    }
  };
};

export const fetchMessages = ({ conversationId, from }) => {
  return async (dispatch) => {
    try {
      dispatch({ type: FETCH_MESSAGES_INIT });

      const response = await chatApi.fetchMessage({ conversationId, from });

      dispatch({
        type: FETCH_MESSAGES_DONE,
        payload: {
          conversationId,
          messages: response,
        },
      });
    } catch (error) {
      dispatch({ type: FETCH_MESSAGES_ERROR, error });
    }
  };
};

export const sendMessage = ({ to, text, conversationId }) => {
  return async (dispatch, getState) => {
    try {
      const userId = getState().user.userId;
      const messageObj = generateNewTextMessageObj({ from: userId, to, text });

      batch(() => {
        dispatch({ type: ADD_MESSAGE_TO_CONVERSATION, payload: messageObj });
        dispatch({ type: SEND_MESSAGES_INIT });
      });

      const response = await chatApi.sendMessage({ from: userId, to, text });

      dispatch({
        type: SEND_MESSAGES_DONE,
        payload: {
          conversationId: '',
          message: response,
        },
      });
    } catch (error) {
      dispatch({ type: SEND_MESSAGES_ERROR, error });
    }
  };
};

export const selectOrCreateConversation = ({ resourceId, resourceType, receiverName }) => {
  return (dispatch, getState) => {
    const conversations = getState().chats.conversations;
    const isNewConversation = conversations.find((conversation) => (
      conversation.resourceId === resourceId &&
      conversation.resourceType === resourceType &&
      conversation.receiverName === receiverName
    ));

    dispatch({ type: SELECT_OR_CREATE_CONVERSATION, payload: {
      isNewConversation,
      newConversation: generateNewConversationObj({
        resourceId, resourceType, receiverName,
      }),
      currentConversationResouces: {
        resourceId, resourceType, receiverName,
      },
    } });
  };
};


/**
 * For new product:
 * @return {product/{productId}/user/{user-id}} conversationId
 * For new custom product:
 * @return {customProduct/{customProductId}/user/{user-id}} conversationId
 * For general conversations:
 * @return {general/{seller / support}/user/{user-id}} conversationId
 */


// INITIAL STATE

/**
 * Message
 * {
 *  id: <string>
 *  from: <user_id>
 *  to: <'seller' / 'support'>
 *  body: <string>
 *  status: <pending / sent / delivered / read>
 *  createdOn: <dateTime>
 *  sentOn: <dateTime>
 *  deliveredOn: <dateTime>
 *  readOn: <dateTime>
 * }
 */

/**
  conversations: [
    {
      receiverName: <seller / support>
      resourceId: <(null / productId / customerProductId>
      resourceType: <null / product / customProduct>
      avatarUrl: <null / url string>
      messages: []
    }
  ]
 */
const initialState = {
  isLoading: false,
  loadError: null,
  currentConversation: null,
  conversations: [],
};


// REDUCER
export default (state = initialState, action) => {
  switch (action.type) {
  case SELECT_OR_CREATE_CONVERSATION:
    return {
      ...state,
      conversations: action.payload.isNewConversation ? [
        ...state.conversations,
        action.payload.newConversation,
      ] : state.conversations,
      currentConversation: action.payload.currentConversationResouces,
    };
  case FETCH_CONVERSATIONS_INIT:
    return {
      ...state,
      isLoading: true,
      loadError: null,
    };
  case FETCH_CONVERSATIONS_DONE:
    return {
      ...state,
      isLoading: false,
      loadError: null,
      conversations: [
        ...state.conversations,
        ...action.payload,
      ],
    };
  case FETCH_CONVERSATIONS_ERROR:
    return {
      ...state,
      isLoading: false,
      loadError: action.error,
    };
  case FETCH_MESSAGES_INIT:
    return {
      ...state,
      isLoading: true,
      loadError: null,
    };
  case FETCH_MESSAGES_DONE:
    return {
      ...state,
      isLoading: false,
      loadError: null,
      conversations: state.conversations.map((conversation) => {
        if (conversation.id === action.payload.conversationId) {
          return {
            ...conversation,
            messages: [
              ...action.payload.messages,
              ...conversation.messages,
            ],
          };
        } else return conversation;
      }),
    };
  case FETCH_MESSAGES_ERROR:
    return {
      ...state,
      isLoading: false,
      loadError: action.error,
    };
  case SEND_MESSAGES_INIT:
    return {
      ...state,
      isLoading: true,
      loadError: null,
    };
  case SEND_MESSAGES_DONE:
    return {
      ...state,
      isLoading: false,
      loadError: null,
      conversations: state.conversations.map((conversation) => {
        if (conversation.id === action.payload.conversationId) {
          return {
            ...conversation,
            messages: [
              ...conversation.messages,
              action.payload.message,
            ],
          };
        } else return conversation;
      }),
    };
  case SEND_MESSAGES_ERROR:
    return {
      ...state,
      isLoading: false,
      loadError: action.error,
    };
  default:
    return state;
  }
};
