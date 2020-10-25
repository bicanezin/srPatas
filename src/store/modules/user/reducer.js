const INITIAL_STATE = {
  name: "",
  email: "",
  uid: ""
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case "@user/SAVE_USER":
      return {
        ...state,
        email: action.payload.email,
        name: action.payload.name,
        uid: action.payload.uid
      };

    default:
      return state;
  }
}
