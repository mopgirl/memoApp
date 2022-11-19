import { StyleSheet, View, Text, TouchableHighlight, FlatList, TouchableOpacity, SafeAreaView } from 'react-native';
import Utils from '../utils/Utils';
import { SwipeListView } from 'react-native-swipe-list-view';
import React from 'react';

class MemoList extends React.Component {
    props = {
        memoList: [],
    };

    dateString(createdOn): string {
        return Utils.dateString(createdOn);
    }

    renderMemo({ item }) {
        return (
            <TouchableHighlight onPress={() => {
                this.props.navigation.navigate('MemoDetail', { memo: item });
            }}>
                <View style={styles.memoListItem}>
                    <Text style={styles.memoTitle}>{item.body.substr(0, 10)}</Text>
                    <Text style={styles.memoDate}>{this.dateString(item.createdOn)}</Text>
                </View>
            </TouchableHighlight>
        );
    }

    render() {
        return (
            <View style={styles.memoList}>
                <SwipeListView
                    data={this.props.memoList}
                    renderItem={this.renderMemo.bind(this)}
                    renderHiddenItem={(data, rowMap) => (
                        <View>
                            <TouchableOpacity
                                style={{
                                    alignSelf: 'flex-end',
                                    width: 75,
                                    height: 80,
                                    backgroundColor: '#CC3333',
                                }}>
                                <View style={styles.deleteTextBox}>
                                    <Text>削除</Text>
                                </View>
                            </TouchableOpacity>
                        </View>)}
                    rightOpenValue={-75}
                    disableRightSwipe={true}
                ></SwipeListView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    memoList: {
        width: '100%',
        flex: 1,
    },
    memoListItem: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        backgroundColor: '#fff',
    },
    memoTitle: {
        fontSize: 18,
        marginBottom: 4,
    },
    memoDate: {
        fontSize: 12,
        color: '#a2a2a2',
    },
    deleteTextBox: {
        fontWeight: 'bold',
        color: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default MemoList;
