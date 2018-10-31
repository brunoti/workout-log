import { values, flatten } from 'ramda';

export default (workouts) => {
  const sum = flatten(values(workouts))
    .map(workout => workout.time.match(/(\d{2})h (\d{2})m (\d{2})s/).slice(1).map(Number))
    .reduce((sum, time) => [
      sum[0] + time[0],
      sum[1] + time[1],
      sum[2] + time[2],
    ], [0, 0, 0]);

  console.log(sum);


  sum[1] += Math.floor(sum[2] / 60);
  sum[0] += Math.floor(sum[1] / 60);
  sum[2] = sum[2] % 60;
  sum[1] = sum[1] % 60;

  return `${sum[0]}h ${sum[1]}m ${sum[2]}s`;
};
