import { getInitialData } from "../utils/api";
import { receiveQuestions } from "./questions";
import { receiveUsers } from "./users";
import { setLoggedInUser } from "./loggedInUser";

const loggedInUser = 'johndoe'

export function handleInitialData() {
  return (dispatch) => {
    return getInitialData().then(({ users, questions }) => {
      dispatch(setLoggedInUser(loggedInUser));
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
    });
  };
}
