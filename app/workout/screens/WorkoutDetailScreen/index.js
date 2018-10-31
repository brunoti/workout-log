import React, { Component } from 'react';
import { Container, Button, Text } from 'native-base';
import { Header } from 'app/common/components';

class WorkoutCreateScreen extends Component {
  render() {
    return (
      <Container>
        <Header
          title="Novo"
          hasButton
          renderRight={() => (
            <Button>
              <Text>Salvar</Text>
            </Button>
          )}
        />
      </Container>
    );
  }
}

export default WorkoutCreateScreen;
