import { IMAGES_PENDING, IMAGES_FETCHED } from "../actions/types";

const initialState = {
  images: [],
  loading: false
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case IMAGES_PENDING:
      return {
        ...state,
        loading: true
      }
    case IMAGES_FETCHED:
      return {
        ...state,
        loading: false,
        images: payload
      }
    default:
      return state;
  }
}