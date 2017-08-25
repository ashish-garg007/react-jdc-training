// Action type

export const ProfileAction = {
  RECEIVE_PROFILE: 'RECEIVE_PROFILE',
  LOGOUT: 'LOGOUT'
};

//ACTION thunks

export function retrieveProfileFromToken(accessToken) {
  return (dispatch, store) => {
    dispatch({
      type: ProfileAction.RECEIVE_PROFILE,
      profile: {
        firstName: 'TODO: firstName',
        lastName: 'TODO: lastName',
        email: 'TODO: email'
      }
    });
  };
}

export function logout() {
  return {
    type: ProfileAction.LOGOUT
  };
}
