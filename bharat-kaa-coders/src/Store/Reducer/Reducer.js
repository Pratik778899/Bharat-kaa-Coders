import { Action } from "../Action/Action";

const initialState = {
  data: [],
  isLogged: !!localStorage.getItem("loggedInUser"),
  questionNo: 0,
};

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case Action.SIGNUP:
      const newUser = action.signupDetails;
      const updatedData = [...state.data, newUser];
      localStorage.setItem("userDatabase", JSON.stringify(updatedData));

      return {
        ...state,
        data: updatedData,
      };
    case Action.ISLOGGED:
      localStorage.getItem("loggedInUser");
      return {
        ...state,
        isLogged: true,
      };
    case Action.QUESTION_NO:
      return {
        ...state,
        questionNo: action.questionNo,
      };

    default:
      return state;
  }
};
