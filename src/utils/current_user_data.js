const currentUserData = () => {
  const currentUserDataString = localStorage.getItem('current_user');

  return currentUserDataString ? JSON.parse(currentUserDataString) : null;
}

export const authenticationToken = () => {
  return currentUserData() ? currentUserData().token : null;
}

export const currentUser = () => {
  return currentUserData() ? currentUserData().user : null;
}

export const isSignedIn = () => {
  return authenticationToken() && currentUser();
};
