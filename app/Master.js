import React, { Component } from 'react';
import { Root, StyleProvider, Container } from 'native-base';
import { Provider } from 'react-redux';
import { MenuProvider } from 'react-native-popup-menu';
import Router from 'app/navigation';
import getTheme from 'app/style/theme/components';
import workoutLog from 'app/style/theme/variables/workout-log';
import store from 'app/store';

console.disableYellowBox = true;

class Master extends Component {
  render() {
    return (
      <Provider store={store}>
        <StyleProvider style={getTheme(workoutLog)}>
          <MenuProvider
            customStyles={{
              backdrop: {
                backgroundColor: '#000',
                opacity: 0.5,
              },
            }}
          >
            <Root>
              <Container>
                <Router />
              </Container>
            </Root>
          </MenuProvider>
        </StyleProvider>
      </Provider>
    );
  }
}

export default Master;
