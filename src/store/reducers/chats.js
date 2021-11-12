import { batch } from 'react-redux';
import chatApi from 'apis/chat';
import conversationsApi from 'apis/conversations';
import {
  conversationIdGenerator,
  generateNewConversationObj,
  generateNewTextMessageObj,
  tranformConversationsData,
  tranformMessagesData,
} from 'utils/chat';

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

      const response = await conversationsApi.fetchConversations({ userId });
      const transformedResponse = tranformConversationsData(response);

      dispatch({
        type: FETCH_CONVERSATIONS_DONE,
        payload: transformedResponse,
      });
    } catch (error) {
      dispatch({ type: FETCH_CONVERSATIONS_ERROR, error });
    }
  };
};

export const fetchMessages = ({ conversationId, from = (new Date()).toISOString() }) => {
  return async (dispatch, getState) => {
    try {
      dispatch({ type: FETCH_MESSAGES_INIT });
      const conversations = getState().chats.conversations;
      const conversation = conversations[conversationId];

      const response = await chatApi.fetchMessages({ conversation, from });
      const transformedResponse = tranformMessagesData(response);

      dispatch({
        type: FETCH_MESSAGES_DONE,
        payload: {
          conversationId: conversationId,
          messages: transformedResponse,
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
    const generatedConversationId = conversationIdGenerator({
      resourceId, resourceType, receiverName,
    });

    const conversationObj = conversations[generatedConversationId] && generateNewConversationObj({
      resourceId, resourceType, receiverName,
    });

    dispatch({ type: SELECT_OR_CREATE_CONVERSATION, payload: {
      conversation: conversationObj,
      currentConversationId: generatedConversationId,
    } });
  };
};


/**
 * conversationId template
 * @return {resourceType/{resourceId}/receiverName/{user-id}} conversationId
 */


// INITIAL STATE

/**
 * Message
 * <id>: {
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
    <conversationId>: {
      receiverName: <seller / support>
      resourceId: <(null / productId / customerProductId>
      resourceType: <null / product / customProduct>
      avatarUrl: <null / url string>
      messages: {}
    }
  ]
  currentConversationId:
    {resourceType}/{resourceId}/receiverName/{user-id}
 */
const initialState = {
  isLoading: false,
  loadError: null,
  currentConversationId: null,
  conversations: {},
};


// REDUCER
export default (state = initialState, action) => {
  switch (action.type) {
  case SELECT_OR_CREATE_CONVERSATION:
    return {
      ...state,
      conversations: action.payload.isNewConversation ? {
        ...state.conversations,
        [action.payload.currentConversationId]: action.payload.newConversation,
      } : state.conversations,
      currentConversationId: action.payload.currentConversationId,
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
      conversations: {
        ...state.conversations,
        ...action.payload,
      },
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
      conversations: {
        ...state.conversations,
        [action.payload.conversationId]: {
          ...state.conversations[action.payload.conversationId],
          messages: {
            ...action.payload.messages,
            ...state.conversations[action.payload.conversationId].messages,
          },
        },
      },
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
      conversations: {
        ...state.conversations,
        [action.payload.conversationId]: {
          ...state.conversations[action.payload.conversationId],
          messages: {
            ...action.payload.messages,
            ...state.conversations[action.payload.conversationId].messages,
          },
        },
      },
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
