import React, { Component } from 'react';
import { connect } from 'react-redux';
import { list } from 'app/workout/actions';
import { WorkoutFormScreen } from 'app/workout/screens';

class WorkoutFormContainer extends Component {
  onSubmit = (values) => {
    console.log(values);
  }

  render() {
    return (
      <WorkoutFormScreen
        isLoading={this.props.isLoading}
        onSubmit={this.onSubmit}
      />
    );
  }
}

export default WorkoutFormContainer;

// const mapStateToProps = ({ workout }) => ({
//   isLoading: workout.create.isLoading,
// });

// const mapActionsToProps = {
//   ...create,
// };

// export default connect(mapStateToProps, mapActionsToProps)(WorkoutFormContainer);
