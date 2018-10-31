import React, { Component } from 'react';
import { connect } from 'react-redux';
import { list } from 'app/workout/actions';
import { WorkoutListScreen } from 'app/workout/screens';
import alert from 'app/utils/alert';

class WorkoutListContainer extends Component {
  handleRequestCreate = () => {
    this.props.navigation.navigate('WorkoutCreate');
  }

  handleRequestDelete = (id) => {
    alert({
      title: 'Workout Log',
      text: 'Remover exercício?',
      yesOrNo: true,
      yes: () => this.props.removeWorkout(id),
    });
  }

  componentDidMount() {
    this.props.getWorkouts();
  }

  render() {
    return (
      <WorkoutListScreen
        isLoading={this.props.isLoading}
        onRequestCreate={this.handleRequestCreate}
        onRequestDelete={this.handleRequestDelete}
        workouts={this.props.workouts}
      />
    );
  }
}

const mapStateToProps = ({ workout }) => ({
  isLoading: workout.list.isLoading,
  workouts: workout.list.workouts,
});

const mapActionsToProps = {
  ...list,
};

export default connect(mapStateToProps, mapActionsToProps)(WorkoutListContainer);
