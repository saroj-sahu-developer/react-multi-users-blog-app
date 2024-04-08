const currentUserData = JSON.parse(localStorage.getItem('current_user'));

export const authenticationToken = currentUserData.token;

export const currentUser = currentUserData.user;