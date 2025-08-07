import { ADD_TO_FAVOURITES } from "../actions";
import { REMOVE_JOB_FAVOURITE } from "../actions";

const initialState = {
  content: [],
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVOURITES:
      return {
        ...state,
        content: [...state.content, action.payload],
      };

    case REMOVE_JOB_FAVOURITE:
      return {
        ...state,
        content: state.content.filter((job) => {
          if (job._id === action.payload) {
            return false;
          } else {
            return true;
          }
        }),
      };

    default:
      return state;
  }
};

export default mainReducer;
