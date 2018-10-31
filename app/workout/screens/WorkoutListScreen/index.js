import React, { Component, Fragment } from 'react';
import {
  Container,
  Button,
  Text,
  Spinner,
  List,
  ListItem,
  Content,
  Left,
  Body,
  Right,
  Icon,
  View,
} from 'native-base';
import { Header, If } from 'app/common/components';
import { mapObjIndexed, flatten, values } from 'ramda';
import FooterInfo from 'app/workout/components/FooterInfo';
import sumTimes from 'app/workout/utils/sumTimes';
import Swipeout from 'react-native-swipeout';


class WorkoutListScreen extends Component {
  render() {
    const count = flatten(values(this.props.workouts)).length;
    return (
      <Container>
        <Header
          title="Workout Log"
          hasButton
          noLeft
          renderRight={() => (
            <Button onPress={this.props.onRequestCreate}>
              <Text>Novo</Text>
            </Button>
          )}
        />
        <If condition={this.props.isLoading}>
          {() => <Spinner />}
        </If>
        <If condition={!this.props.isLoading && !count}>
          {() => (
            <Container padder>
              <Text>Nenhum exercício cadastrado</Text>
            </Container>
          )}
        </If>
        <If condition={!this.props.isLoading && count}>
          {() => (
            <Fragment>
              <Content>
                <List>
                  {values(mapObjIndexed((workouts, date) => (
                    <Fragment>
                      <ListItem itemDivider>
                        <Text>{date}</Text>
                      </ListItem>
                      {workouts.map((workout, i) => (
                        <Swipeout
                          backgroundColor="transparent"
                          right={[{
                            onPress: () => this.props.onRequestDelete(workout._id),
                            component: (
                              <View
                                style={{
                                  backgroundColor: 'red',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  width: '100%',
                                  height: '100%',
                                  // TODO: transform this into a swipeout button component
                                }}
                              >
                                <Icon name="delete" style={{ color: '#FFF' }} />
                              </View>
                            ),
                          }]}
                        >
                          <ListItem icon last={i === workouts.length}>
                            <Left>
                              <Button>
                                <Text>{workout.exercise[0].toUpperCase()}</Text>
                              </Button>
                            </Left>
                            <Body>
                              <Text>{workout.exercise}</Text>
                            </Body>
                            <Right>
                              <Text>{workout.time}</Text>
                            </Right>
                          </ListItem>
                        </Swipeout>
                      ))}
                    </Fragment>
                  ), this.props.workouts))}
                </List>
              </Content>
              <FooterInfo
                total={count}
                time={sumTimes(this.props.workouts)}
              />
            </Fragment>
          )}
        </If>
      </Container>
    );
  }
}

export default WorkoutListScreen;
