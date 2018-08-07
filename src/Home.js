import React from 'react';
import {
    View,
    StyleSheet,
    Button,
    Text,
} from 'react-native';
import  Loading from './Loading';
import {  Tab , Spinner} from 'native-base';

import  App from  './App';
export default class Home extends React.Component {
state = {
    loaded : false
}
constructor(){
    super ();
    Loading.load(v => this.setState({loaded: true}));
}

    render() {


        return (
            <View style={styles.container}>
                {this.state.loaded ?
                    <Tab> <App/> </Tab> :
                    <Spinner color='blue' />}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',


    },
    buttonContainer: {
        marginTop: 15,
    },
    separator: {
        marginVertical: 30,
        borderWidth: 0.5,
        borderColor: '#DCDCDC',
    },
    label: {
        color: '#999',
        fontSize: 14,
        fontWeight: '500',
        marginBottom: 10,
    },
});
/*const RootStack = StackNavigator({
    Home: { screen: App },

});*/