import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import CircleButton, { ICON_COLOR, ICON_NAME } from '../elements/CircleButton';
import { auth, db } from '../../firebase';
import { addDoc, collection } from 'firebase/firestore';

class MemoCreateScreen extends React.Component {
  state = {
    body: '',
  };

  private handleSave() {
    const { currentUser } = auth;
    const dbPath = `users/${currentUser.uid}/memos`;
    addDoc(collection(db, dbPath),
           {
        body: this.state.body,
        createdOn: new Date(),
      })
      .then(docRef => {
        this.props.navigation.goBack();
      })
      .catch(error => {
        console.error('Error adding document: ', error);
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.memoEditInput}
          multiline
          onChangeText={text => {
            this.setState({ body: text });
          }}
          value={this.state.body}
        />

        <CircleButton
          icon={ICON_NAME.check}
          fontSize={20}
          color={ICON_COLOR.white}
          style={styles.icon}
          onPress={this.handleSave.bind(this)}
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

export default MemoCreateScreen;
