import { batch } from 'react-redux';
import chatApi from 'apis/chat';
// import {
//   generateNewTextMessageObj,
// } from 'utils/chat';
import { sortMessagesByRecentFirst } from 'utils/chat';

// ACTIONS
const prefix = 'chats';

const FETCH_MESSAGES_INIT = `${prefix}/FETCH_MESSAGES_INIT`;
const FETCH_MESSAGES_DONE = `${prefix}/FETCH_MESSAGES_DONE`;
const FETCH_MESSAGES_ERROR = `${prefix}/FETCH_MESSAGES_ERROR`;

const SEND_MESSAGES_INIT = `${prefix}/SEND_MESSAGES_INIT`;
const SEND_MESSAGES_DONE = `${prefix}/SEND_MESSAGES_DONE`;
const SEND_MESSAGES_ERROR = `${prefix}/SEND_MESSAGES_ERROR`;

// this is before sending on to the network
// message status will be changed when successfully sent onto the network
const ADD_MESSAGE_TO_CONVERSATION = `${prefix}/ADD_MESSAGE_TO_CONVERSATION`;

export const fetchMessages = ({ conversationId, from = (new Date()).toISOString() }) => {
  return async (dispatch) => {
    try {
      dispatch({ type: FETCH_MESSAGES_INIT });

      const response = await chatApi.fetchMessages({ conversationId, fromDateTime: from });

      batch(() => {
        dispatch({ type: FETCH_MESSAGES_DONE });
        dispatch(addMessagesToConversation({
          conversationId,
          messagesArray: response,
        }));
      });
    } catch (error) {
      dispatch({ type: FETCH_MESSAGES_ERROR, error });
    }
  };
};

export const sendMessage = ({ to, text, conversationId }) => {
  // return async (dispatch, getState) => {
  //   try {
  //     const userId = getState().user.userId;
  //     const messageObj = generateNewTextMessageObj({ from: userId, to, text });

  //     batch(() => {
  //       dispatch({ type: ADD_MESSAGE_TO_CONVERSATION, payload: messageObj });
  //       dispatch({ type: SEND_MESSAGES_INIT });
  //     });

  //     const response = await chatApi.sendMessage({ from: userId, to, text });

  //     dispatch({
  //       type: SEND_MESSAGES_DONE,
  //       payload: {
  //         conversationId: '',
  //         message: response,
  //       },
  //     });
  //   } catch (error) {
  //     dispatch({ type: SEND_MESSAGES_ERROR, error });
  //   }
  // };
};

export const addMessagesToConversation = ({ conversationId, messagesArray }) => {
  return async (dispatch) => {
    dispatch({
      type: ADD_MESSAGE_TO_CONVERSATION,
      payload: {
        conversationId,
        conversationMessages: messagesArray,
      },
    });
  };
};

/**
 * conversationId template
 * @return {resourceType/{resourceId}/receiverName/{user-id}} conversationId
 */

// INITIAL STATE
/**
 * conversationMessages {
    <conversation_id>: [
      {
        id: <int>,
        conversation_id: <int>
        receiver_id: <int>,
        sender_id: <int>,

        text: 'Shriman Narayan, Narayan, Hari Hari',
        status: <string>,

        created_on: <date-string>,
        sentOn: <date-string>,
        delivered_on: <date-string> / null,
        read_on: <date-string> / null
      }
    ]
  }
 */
const initialState = {
  isLoading: false,
  loadError: null,
  conversationMessages: {},
};


// REDUCER
export default (state = initialState, action) => {
  switch (action.type) {
  case ADD_MESSAGE_TO_CONVERSATION:
    return {
      ...state,
      conversationMessages: {
        ...state.conversationMessages,
        [action.payload.conversationId]: sortMessagesByRecentFirst([
          ...action.payload.conversationMessages,
          ...(state.conversationMessages[action.payload.conversationId] || []),
        ]),
      },
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
