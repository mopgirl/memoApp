import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CircleButton from '../elements/CircleButton';
import MemoList from '../components/MemoList';

class MemoListScreen extends React.Component {
    private handlePress() {
        const {params} = this.props.navigation.state;
        this.props.navigation.navigate('MemoCreate', {currentUser: params.currentUser});
    }

    render() {
        return (
            <View style={ styles.container }>
                <MemoList navigation={ this.props.navigation }/>
                <CircleButton
                    icon={ 'plus' }
                    color={ 'white' }
                    fontSize={ 25 }
                    onPress={ this.handlePress.bind(this) }
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%'
    }
});

export default MemoListScreen;
