import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import PropTypes from 'prop-types';
import { Actions } from 'react-native-mobx'
import { observer } from 'mobx-react/native';
class MainApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        let textCount = this.state.count;
        return (

            <View style={styles.container}>
                <Text style={styles.ctext}>
                    Hello
                </Text>

            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
alignItems: 'center',
backgroundColor: '#F5FCFF',
},
ctext: {
    fontSize: 20,
        textAlign: 'center',
    margin: 10,
},
});
module.exports = MainApp