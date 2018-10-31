import { types } from 'app/workout/actions/list';

const INITIAL_STATE = {
  isLoading: true,
  workouts: [],
};

function reducer(state = INITIAL_STATE, { type, ...action }) {
  if (types.WORKOUT_FETCH_ALL === type) {
    return {
      ...state,
      isLoading: true,
    };
  }

  if (types.WORKOUT_FETCH_ALL_SUCCESS === type) {
    return {
      ...state,
      isLoading: false,
      workouts: action.workouts,
    };
  }

  if (types.WORKOUT_FETCH_ALL_ERROR === type) {
    return {
      ...state,
      isLoading: false,
    };
  }

  if (types.WORKOUT_REMOVE === type) {
    return {
      ...state,
      isLoading: true,
    };
  }

  if (types.WORKOUT_REMOVE_SUCCESS === type) {
    return {
      ...state,
      isLoading: false,
    };
  }

  if (types.WORKOUT_REMOVE_ERROR === type) {
    return {
      ...state,
      isLoading: false,
    };
  }

  return state;
}

export default reducer;
