import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Toast } from 'native-base';
import { WorkoutFormScreen } from 'app/workout/screens';
import { navigate } from 'app/services/navigator';
import Workout from 'app/workout/collections/workout';
import { list } from 'app/workout/actions';

class WorkoutCreateContainer extends Component {
  onSubmit = (values, actions) => {
    actions.setSubmitting(true);
    Workout.save(values)
      .then(() => {
        this.props.getWorkouts();
        navigate('WorkoutList');
        actions.setSubmitting(false);
        Toast.show({ text: 'Exercício criado com sucesso!', duration: 5000 });
      })
      .catch((error) => {
        console.error(error);
        actions.setSubmitting(false);
        Toast.show({ text: 'Ocorreu um erro ao criar este exercício. Tente novamente.', duration: 5000 });
      });
  }

  render() {
    return (
      <WorkoutFormScreen
        title="Novo"
        onSubmit={this.onSubmit}
      />
    );
  }
}

export default connect(() => ({}), { ...list })(WorkoutCreateContainer);
