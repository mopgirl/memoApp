import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CircleButton from '../elements/CircleButton';
import MemoList from '../components/MemoList';
import { db } from '../../firebase';
import {collection, onSnapshot} from 'firebase/firestore';
import { getAuth } from 'firebase/auth';


class MemoListScreen extends React.Component {
  state = {
    memoList: [],
  };

  componentWillMount(): void {
    const { currentUser } = getAuth();
    const dbPath = `users/${currentUser.uid}/memos`;
    onSnapshot(collection(db, dbPath), snapshot => {
      const memoList: [] = [];
      snapshot.forEach(doc => {
        memoList.push({ ...doc.data(), key: doc.id });
      });
      this.setState({ memoList });
    });
  }

  private handlePress() {
    this.props.navigation.navigate('MemoCreate');
  }

  render() {
    return (
      <View style={styles.container}>
        <MemoList
          memoList={this.state.memoList}
          navigation={this.props.navigation}
        />
        <CircleButton
          icon={'plus'}
          color={'white'}
          fontSize={25}
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
});

export default MemoListScreen;
