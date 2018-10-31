import { Toast } from 'native-base';
import { valueMirror } from 'ramda-extension';
import { groupBy, prop, sortBy } from 'ramda';
import moment from 'moment';

import Workout from '../collections/workout';

const types = valueMirror([
  'WORKOUT_FETCH_ALL',
  'WORKOUT_FETCH_ALL_SUCCESS',
  'WORKOUT_FETCH_ALL_FAIL',
  'WORKOUT_REMOVE',
  'WORKOUT_REMOVE_SUCCESS',
  'WORKOUT_REMOVE_FAIL',
]);

export { types };

export function getWorkouts() {
  return (dispatch) => {
    dispatch({ type: types.WORKOUT_FETCH_ALL });
    return Workout.find()
      .then(workouts => dispatch({
        type: types.WORKOUT_FETCH_ALL_SUCCESS,
        workouts: groupBy(prop('date'), sortBy(({ date }) => +moment(date, 'DD/MM/YYYY'), workouts)),
      }))
      .catch((error) => {
        dispatch({
          type: types.WORKOUT_FETCH_ALL_FAIL,
          error,
        });
        Toast.show({
          text: 'Ocorreu um erro ao listar os exercícios.',
          duration: 5000,
        });
      });
  };
}

export function removeWorkout(id) {
  return (dispatch) => {
    dispatch({ type: types.WORKOUT_REMOVE });
    return Workout.erase({ _id: id })
      .then(() => dispatch(getWorkouts()))
      .then(() => {
        dispatch({
          type: types.WORKOUT_REMOVE_SUCCESS,
        });
        Toast.show({
          text: 'Exercício removido com sucesso!',
          duration: 5000,
        });
      })
      .catch((error) => {
        dispatch({
          type: types.WORKOUT_REMOVE_FAIL,
          error,
        });
        Toast.show({
          text: 'Ocorreu um erro ao remover o exercício.',
          duration: 5000,
        });
      });
  };
}
