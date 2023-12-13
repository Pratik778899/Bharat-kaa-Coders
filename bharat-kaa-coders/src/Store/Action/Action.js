export const Action = {
  SIGNUP: "SIGNUP",
  LOGIN: "LOGIN",
};

export const signup = signupDetails => {
  return {
    type: Action.SIGNUP,
    signupDetails: signupDetails,
  };
};
