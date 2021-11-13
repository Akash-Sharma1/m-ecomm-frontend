import conversationsApi from 'apis/conversations';
import { batch } from 'react-redux';
import { mapArrayObjectsByIndexes } from 'utils/dataManipulators';
import { addMessagesToConversation } from './chats';

// ACTIONS
const prefix = 'conversations';

const FETCH_CONVERSATIONS_INIT = `${prefix}/FETCH_CONVERSATIONS_INIT`;
const FETCH_CONVERSATIONS_DONE = `${prefix}/FETCH_CONVERSATIONS_DONE`;
const FETCH_CONVERSATIONS_ERROR = `${prefix}/FETCH_CONVERSATIONS_ERROR`;

const SET_NEW_CONVERSATION_RESOURCES = `${prefix}/SET_NEW_CONVERSATION_RESOURCES`;
const SELECT_CONVERSATION = `${prefix}/SELECT_CONVERSATION`;

// DISPATCHERS
export const fetchConversations = () => {
  return async (dispatch, getState) => {
    try {
      const userId = getState().user.userId;
      dispatch({ type: FETCH_CONVERSATIONS_INIT });

      const response = await conversationsApi.fetchConversations({ userId });
      const transformedResponse = mapArrayObjectsByIndexes(response);

      batch(() => {
        dispatch({
          type: FETCH_CONVERSATIONS_DONE,
          payload: transformedResponse,
        });

        // Adding last message to chat store
        response.forEach((conversation) => {
          dispatch(addMessagesToConversation({
            conversationId: conversation.id,
            messagesArray: [conversation.lastMessage],
          }));
        });
      });
    } catch (error) {
      dispatch({ type: FETCH_CONVERSATIONS_ERROR, error });
    }
  };
};

export const selectConversation = ({ conversationId }) => {
  return (dispatch) => {
    dispatch({ type: SELECT_CONVERSATION, payload: conversationId });
  };
};


export const setNewConversationResource = ({
  resourceId,
  resourceType,
  receiverId,
}) => {
  return (dispatch) => {
    dispatch({ type: SET_NEW_CONVERSATION_RESOURCES, payload: {
      resourceId,
      resourceType,
      receiverId,
    } });
  };
};


// INITIAL STATE
/**
  conversations: [
    <conversationId>: {
      id: <int>
      resourceId: <(null / productId / customerProductId>
      resourceType: <null / product / customProduct>
      participants: [<int>]
    }
  ]
  currentConversationId: <int>
  newConversationResources: {
    resourceId: <int>
    resourceType: <string>
    receiverId: <int>
  }
 */
const initialState = {
  isLoading: false,
  loadError: null,
  currentConversationId: null,
  newConversationResources: null,
  conversations: {},
};


// REDUCER
export default (state = initialState, action) => {
  switch (action.type) {
  case SELECT_CONVERSATION:
    return {
      ...state,
      currentConversationId: action.payload,
    };
  case SET_NEW_CONVERSATION_RESOURCES:
    return {
      ...state,
      newConversationResources: action.payload,
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
  default:
    return state;
  }
};
