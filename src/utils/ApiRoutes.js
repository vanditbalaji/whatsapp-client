export const HOST = "http://localhost:8080";

const API_ROUTE = `${HOST}/api/auth`;
const MESSAGE_ROUTE = `${HOST}/api/messages`;

export const CHECK_USER = `${API_ROUTE}/check-user`;
export const ONBOARD_USER = `${API_ROUTE}/onboard-user`;
export const GET_ALL_USERS = `${API_ROUTE}/get-all-users`;
export const GET_CALL_TOKEN = `${API_ROUTE}/generate-token`;

export const ADD_MESSAGE = `${MESSAGE_ROUTE}/add-message`;
export const GET_MESSAGE = `${MESSAGE_ROUTE}/get-message`;
export const ADD_IMAGE_MESSAGE = `${MESSAGE_ROUTE}/add-image-message`;
export const ADD_AUDIO_MESSAGE_ROUTE = `${MESSAGE_ROUTE}/add-audio-message`;
export const GET_INITIAL_CONTACTS_ROUTES = `${MESSAGE_ROUTE}/get-initial-contacts`;


