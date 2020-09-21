import { Component } from 'react';
import { StyleSheet, TouchableHighlight, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class CircleButton extends Component {
  //
  // state = {
  //     fontLoaded: false,
  // };
  //
  // async componentWillMount() {
  //     await Font.loadAsync({
  //         FontAweSome: fontAweSome,
  //     });
  //     this.setState({fontLoaded: true});
  // }

  render() {
    const { style, color, onPress } = this.props;
    let bgColor = '#E31676';
    let textColor = '#fff';
    if (color === 'deeppink') {
      bgColor = '#fff';
      textColor = '#E31676';
    }
    return (
      <TouchableHighlight
        style={[styles.container, style]}
        onPress={onPress}
        underlayColor={'transparent'}
      >
        <View style={[styles.circleButton, { backgroundColor: bgColor }]}>
          {
            <Icon
              name={this.props.icon}
              size={this.props.fontSize ? this.props.fontSize : 50}
              color={color}
            ></Icon>
          }
        </View>
      </TouchableHighlight>
    );
  }
}

export const ICON_NAME = {
  pencil: 'pencil',
  plus: 'plus',
  check: 'check',
};
export const ICON_COLOR = {
  pink: 'deeppink',
  white: 'white',
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 32,
    right: 32,
    width: 48,
    height: 48,
  },
  circleButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  circleButtonTitle: {
    fontFamily: 'FontAweSome',
    fontSize: 32,
    color: '#FFF',
    lineHeight: 32,
  },
});

export default CircleButton;
