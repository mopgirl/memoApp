import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import CircleButton, { ICON_COLOR, ICON_NAME } from '../elements/CircleButton';
import { db, auth} from '../../firebase';
import {updateDoc, collection, Timestamp} from 'firebase/firestore';

class MemoEditScreen extends React.Component {
  state = {
    body: '',
    key: '',
  };

  private handlePress() {
    const { currentUser } = auth;
    const newDate = Timestamp.now();
    updateDoc(collection(db, `users/${currentUser.uid}/memos`),{ body: this.state.body, createdOn: newDate })
      .then(() => {
        const { navigation } = this.props;
        navigation.state.params.returnMemo({
          body: this.state.body,
          key: this.state.key,
          createdOn: newDate,
        });
        navigation.goBack();
      })
      .catch(error => {
        console.log(error);
      });
  }

  componentWillMount(): void {
    const params = this.props.navigation.state.params;
    console.log(params);
    this.setState({ body: params.body, key: params.key });
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.memoEditInput}
          multiline={true}
          value={this.state.body}
          onChangeText={text => this.setState({ body: text })}
        />

        <CircleButton
          icon={ICON_NAME.check}
          fontSize={20}
          color={ICON_COLOR.white}
          style={styles.icon}
          onPress={this.handlePress.bind(this)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  memoEditInput: {
    backgroundColor: '#ddd',
    flex: 1,
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
    fontSize: 16,
  },
  icon: {},
});

export default MemoEditScreen;
