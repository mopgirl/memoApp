import { StyleSheet, View, Text } from 'react-native';
import * as React from 'react';

class BodyText extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.container}>{this.props.children}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default BodyText;
