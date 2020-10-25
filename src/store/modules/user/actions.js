export function saveUser(email, name, uid) {
  return {
    type: "@user/SAVE_USER",
    payload: { email, name, uid },
  };
}
