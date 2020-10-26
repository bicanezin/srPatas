const INITIAL_STATE = {
  name: "",
  email: "",
  image: "",
  uid: "",
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case "@user/SAVE_USER":
      return {
        ...state,
        email: action.payload.email,
        name: action.payload.name,
        uid: action.payload.uid,
        image: null
      };

    case "@user/UPDATE_USER":
      return {
        ...state,
        email: action.payload.email,
        name: action.payload.name,
        image: action.payload.image,
        uid: action.payload.uid,
      };

    default:
      return state;
  }
}
