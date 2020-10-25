import produce from "immer";

const INITIAL_STATE = {
  token: null,
  signed: false,
  signing: false,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case "@auth/SIGN_IN_REQUEST":
      case "@auth/SIGN_UP_REQUEST": {
        draft.signing = true;
        break;
      }

      case "@auth/SIGN_IN_SUCCESS": {
        const { token } = action.payload;
        draft.token = token;
        draft.signed = true;
        draft.signing = false;
        break;
      }

      case "@auth/SIGN_UP_SUCCESS": {
        draft.signing = false;
        break;
      }

      case "@auth/SIGN_IN_FAILURE":
      case "@auth/SIGN_UP_FAILURE": {
        draft.signing = false;
        break;
      }

      case "@auth/SIGN_OUT": {
        draft.token = null;
        draft.signed = false;
        draft.signing = false;
        break;
      }

      default:
    }
  });
}
