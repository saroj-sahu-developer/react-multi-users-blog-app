let authenticationToken = '';
let currentUser = {};

const currentUserDataString = localStorage.getItem('current_user');

if (currentUserDataString) {
  const currentUserData = JSON.parse(currentUserDataString);

  authenticationToken = currentUserData.token;
  currentUser = currentUserData.user;
}

export { authenticationToken, currentUser };
