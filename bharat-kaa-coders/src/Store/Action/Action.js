export const Action = {
  SIGNUP: "SIGNUP",
  ISLOGGED: "ISLOGGED",
  QUESTION_NO: "QUESTION_NO",
};

export const signup = signupDetails => {
  return {
    type: Action.SIGNUP,
    signupDetails: signupDetails,
  };
};

export const isLogged = LoginDetails => {
  return {
    type: Action.ISLOGGED,
    loginDetails: LoginDetails,
  };
};

export const questionNo = questionNo => {
  return {
    type: Action.QUESTION_NO,
    questionNo: questionNo,
  };
};
