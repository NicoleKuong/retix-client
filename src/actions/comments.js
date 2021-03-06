import request from "superagent";
import databaseUrl from "../constants";

export const ALL_COMMENTS = "ALL_COMMENTS";
export const NEW_COMMENT = "NEW_COMMENT";

//get comment of one ticket
function allComments(payload) {
  return {
    type: ALL_COMMENTS,
    payload,
  };
}

export const getComments = (ticketId) => (dispatch, getState) => {
  request(`${databaseUrl}/tickets/${ticketId}/comments`)
    .then((response) => {
      // console.log("response test", response);
      const action = allComments(response.body);
      dispatch(action);
    })
    .catch(console.error);
};

//create comment
function newComment(payload) {
  return {
    type: NEW_COMMENT,
    payload,
  };
}

export const createComment = (content, ticketId) => (dispatch, getState) => {
  console.log("getstate in comment", getState());
  const token = getState().user.token;
  const userId = getState().user.userId;

  request
    .post(`${databaseUrl}/comments`)
    .set("Authorization", `Bearer ${token}`)
    .send({ content, ticketId, userId })
    .then((response) => {
      console.log("createcomment", response);
      const action = newComment(response.body);
      dispatch(action);
    })
    .catch(console.error);
};
