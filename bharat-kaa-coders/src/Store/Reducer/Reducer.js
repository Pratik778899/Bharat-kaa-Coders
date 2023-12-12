import { Action } from "../Action/Action";

const initialState = {
  data: [],
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

    default:
      return state;
  }
};
