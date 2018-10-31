import React from 'react';
import { createStackNavigator } from 'react-navigation';
import * as Navigator from 'app/services/navigator';
import * as workout from 'app/workout';

const TheRouter = createStackNavigator(
  {
    WorkoutList: {
      screen: workout.WorkoutListContainer,
    },
    WorkoutDetail: {
      screen: workout.WorkoutDetailContainer,
    },
    WorkoutCreate: {
      screen: workout.WorkoutCreateContainer,
    },
    WorkoutUpdate: {
      screen: workout.WorkoutUpdateContainer,
    },
  },
  {
    initialRouteName: 'WorkoutList',
    navigationOptions: {
      header: null,
    },
  },
);

const Router = () => (
  <TheRouter
    ref={Navigator.setContainer}
    onNavigationStateChange={(prevState, currentState) => {
      const currentScreen = Navigator.getRouteNameFromState(currentState);
      const prevScreen = Navigator.getRouteNameFromState(prevState);
      if (prevScreen !== currentScreen) {
        console.log(`[NAVIGATOR] navigated from ${prevScreen} to ${currentScreen}.`);
      }
    }}
  />
);

export default Router;
