import React, { PureComponent } from 'react';
import { omit } from 'ramda';
import {
  Header as NBHeader,
  Left,
  Button,
  Body,
  Right,
  Title,
  Subtitle,
  Icon,
} from 'native-base';

import { If } from 'app/common/components';
import { back } from 'app/services/navigator';
import connectStyle from 'app/utils/connectStyle';
import computeProps from 'app/utils/computeProps';
import styles from './styles';

const onlyHeaderProps = omit([
  'onPressLeft',
  'onPressRight',
  'leftIcon',
  'rightIcon',
]);

class Header extends PureComponent {
  static defaultProps = {
    noShadow: true,
    onPressLeft: () => back(),
    leftIcon: 'arrow-left',
    noLeft: false,
  };

  render() {
    const props = computeProps(this.props);

    return (
      <NBHeader
        style={props.style}
        {...onlyHeaderProps(props)}
        transparent
        normal
        iosBarStyle="light-content"
      >
        <If condition={!this.props.noLeft}>
          {() => (
            <Left>
              {this.props.onPressLeft &&
                this.props.leftIcon && (
                  <Button onPress={props.onPressLeft} transparent>
                    <Icon name={props.leftIcon} />
                  </Button>
                )}
            </Left>
          )}
        </If>
        <Body>
          <Title>{props.title}</Title>
          {props.subtitle ? (
            <Subtitle numberOfLines={1}>{props.subtitle}</Subtitle>
          ) : null}
        </Body>
        {(props.onPressRight && props.rightIcon) || props.renderRight ? (
          <Right>
            {props.renderRight ? (
              props.renderRight()
            ) : (
              <Button onPress={props.onPressRight} transparent>
                <Icon name={props.rightIcon} />
              </Button>
            )}
          </Right>
        ) : (
          <Right />
        )}
      </NBHeader>
    );
  }
}

const StyledHeader = connectStyle('Workout.Header', styles, Header);

export default StyledHeader;
