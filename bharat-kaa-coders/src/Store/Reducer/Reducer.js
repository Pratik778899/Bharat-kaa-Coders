import { Action } from "../Action/Action";

const initialState = {
  data: [],
  isLogged: !!localStorage.getItem("loggedInUser"),
  logged_out: false,
  questionNo: 0,
  toast: null,
  toastOptions: {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  },
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
    case Action.LOGGED_OUT:
      return {
        ...state,
        isLogged: false,
      };
    case Action.DISPLAY_TOAST:
      return {
        ...state,
        toast: {
          message: action.payload.message,
          type: action.payload.type,
        },
      };

    default:
      return state;
  }
};
