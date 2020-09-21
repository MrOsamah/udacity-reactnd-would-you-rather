import { saveQuestion, saveQuestionAnswer } from "../utils/api";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";
export const ADD_ANSWER = "ADD_ANSWER";

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  };
}

function addAnswer(authedUser, qid, answer) {
  return {
    type: ADD_ANSWER,
    authedUser,
    qid,
    answer,
  };
}

export function handleAddQuestion(optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { loggedInUser } = getState();

    return saveQuestion({
      optionOneText,
      optionTwoText,
      author: loggedInUser,
    }).then((question) => dispatch(addQuestion(question)));
  };
}

export function handleSaveAnswer(id, answer, loggedInUser) {
  return (dispatch) => {
    return saveQuestionAnswer({
      authedUser:loggedInUser,
      qid:id,
      answer,
    }).then((answer) => dispatch(addAnswer(loggedInUser, id, answer)));
  };
}
