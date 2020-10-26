export function saveUser(email, name, uid) {
  return {
    type: "@user/SAVE_USER",
    payload: { email, name, uid },
  };
}

export function updateUser(email, name, image) {
  return {
    type: "@user/UPDATE_USER",
    payload: { email, name, image },
  };
}
