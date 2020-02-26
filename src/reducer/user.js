import { USER_CREATED, LOGIN_SUCCESS } from "../actions/user";

const initialState = { userId: null, userCreated: false, token: null };

export default (state = initialState, action = {}) => {
  // console.log("ACTION:??, guessing sucks", action);
  switch (action.type) {
    case USER_CREATED:
      return { ...state, userCreated: true };

    case LOGIN_SUCCESS:
      console.log("What is the user action.payload", action.payload);
      return {
        ...state,
        userId: action.payload.userId,
        token: action.payload.token
        // currentUserId: action.payload.currentUserId
      };
    default:
      return state;
  }
};
