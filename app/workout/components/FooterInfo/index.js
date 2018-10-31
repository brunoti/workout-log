import React, { Component } from 'react';
import { View } from 'react-native';
import { Left, Right, Title, Subtitle, Text } from 'native-base';
import connectStyle from 'app/utils/connectStyle';
import computeProps from 'app/utils/computeProps';

import styles from './styles';

class FooterInfo extends Component {
  render() {
    const { style } = computeProps(this.props);
    return (
      <View style={style}>
        <Left>
          <Title>TOTAL</Title>
          <Subtitle>{this.props.total} exercícios</Subtitle>
        </Left>
        <Right>
          <Text>
            {this.props.time}
          </Text>
        </Right>
      </View>
    );
  }
}

export default connectStyle('Workout.FoterInfo', styles, FooterInfo);
