import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

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
        const {style, color} = this.props;
        let bgColor = '#E31676';
        let textColor = '#fff';
        if (color === 'deeppink') {
            bgColor = '#fff';
            textColor = '#E31676';
        }
        return <View style={ [styles.circleButton, style, {backgroundColor: bgColor}] }>
            {
                <Icon name={this.props.icon} size={this.props.fontSize ? this.props.fontSize:50} color={color} ></Icon>
            }
        </View>;
    }
}

const styles = StyleSheet.create({
    circleButton: {
        position: 'absolute',
        bottom: 32,
        right: 32,
        width: 48,
        height: 48,
        borderRadius: 24,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
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
