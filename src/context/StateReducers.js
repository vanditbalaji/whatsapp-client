export const initialState = {
  userInfo: undefined,
  newUser: false,
  allContacts: false,
  currentUser: undefined,
  socket: undefined,
  message: [],
  messageSearch: false,
  userContacts: [],
  onlineUsers: [],
  contactSearch: undefined,
  filteredContacts: [],
  videoCall: undefined,
  voiceCall: undefined,
  incomingVoiceCall: undefined,
  incomingVideoCall: undefined,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "USER_INFO":
      return { ...state, userInfo: action.userInfo };
    case "NEW_USER_INFO":
      return { ...state, newUser: action.newUser };
    case "ALL_CONTACTS_PAGE":
      return { ...state, allContacts: !state.allContacts };
    case "CHANGE_CURRENT_USER":
      return { ...state, currentUser: action.user };
    case "SET_MESSAGE":
      return { ...state, message: action.message };
    case "SET_SOCKET":
      return { ...state, socket: action.socket };
    case "ADD_MESSAGE":
      return { ...state, message: [...state.message, action.newMessage] };
    case "SET_MESSAGE_SEARCH":
      return { ...state, messageSearch: !state.messageSearch };
    case "SET_USERS_CONTACTS":
      return { ...state, userContacts: action.userContacts };
    case "SET_ONLINE_USERS":
      return { ...state, onlineUsers: action.onlineUsers };
    case "SET_CONTACT_SEARCH": {
      const filteredContacts = state.userContacts.filter((contact) =>
        contact.name.toLowerCase().includes(action.contactSearch.toLowerCase())
      );
      return {
        ...state,
        contactSearch: action.contactSearch,
        filteredContacts,
      };
    }
    case "SET_VIDEO_CALL": {
      return { ...state, videoCall: action.videoCall };
    }
    case "SET_VOICE_CALL": {
      return { ...state, voiceCall: action.voiceCall };
    }
    case "SET_INCOMING_VIDEO_CALL": {
      return { ...state, incomingVideoCall: action.incomingVideoCall };
    }
    case "SET_INCOMING_VOICE_CALL": {
      return { ...state, incomingVoiceCall: action.incomingVoiceCall };
    }
    case "END_CALL": {
      return {
        ...state,
        voiceCall: undefined,
        videoCall: undefined,
        incomingVideoCall: undefined,
        incomingVoiceCall: undefined,
      };
    }
    default:
      return state;
  }
};

export default reducer;
