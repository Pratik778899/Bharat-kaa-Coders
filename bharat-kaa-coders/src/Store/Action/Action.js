export const Action = {
  SIGNUP: "SIGNUP",
};

export const signup = (signupDetails) => {
  return {
    type: Action.SIGNUP,
    signupDetails: signupDetails,
  };
};
