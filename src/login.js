import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
    Dimensions
} from 'react-native';
import IconA from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';
export default  class login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
        password: ''
    };
    }
    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.bg}  />
                <View style={styles.header}>
                    <Image style={styles.mark} resizeMode={Image.resizeMode.contain} />
                        </View>
                        <View style={styles.inputs}>
                        <View style={styles.inputContainer}>
                        <IconA name="md-person" size={20} color="#FFF" style={styles.inputUsername} />
                        <TextInput
                        style={[styles.input, styles.whiteFont]}
                        placeholder="Username"
                        placeholderTextColor="#FFF"
                        value={this.state.username}
                        onChangeText={(text) => this.setState({ username: text })}
                        />
                        </View>
                        <View style={styles.inputContainer}>
                        <IconA name="md-lock" size={20} color="#FFF" style={styles.inputPassword} />
                        <TextInput
                        password={true}
                        style={[styles.input, styles.whiteFont]}
                        placeholder="Pasword"
                        placeholderTextColor="#FFF"
                        value={this.state.password}
                        onChangeText={(text) => this.setState({ password: text })}
                        />
                        </View>
                        <View style={styles.forgotContainer}>
                        <Text style={styles.greyFont}>Forgot Password</Text>
                        </View>
                        </View>
                        <View style={styles.signin}>
                        <Text style={styles.whiteFont}>Sign In</Text>
                        </View>
                        <View style={styles.signup}>
                        <Text style={styles.greyFont}>Don't have an account?<Text style={styles.whiteFont}> Sign Up</Text></Text>
                        </View>
                        </View>
                        );
                        }
                        }
                           let DisplaySize = Dimensions.get('window');
                    const styles = StyleSheet.create({
                    container: {
                    flexDirection: 'column',
                    flex: 1,
                    backgroundColor: 'transparent'
                },
                    bg: {
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    width: DisplaySize.width,
                    height: DisplaySize.height
                },
                    header: {
                    justifyContent: 'center',
                    alignItems: 'center',
                    flex: .5,
                    backgroundColor: 'transparent'
                },
                    mark: {
                    width: 150,
                    height: 150
                },
                    signin: {
                    backgroundColor: '#FF3366',
                    padding: 20,
                    alignItems: 'center'
                },
                    signup: {
                    justifyContent: 'center',
                    alignItems: 'center',
                    flex: .15
                },
                    inputs: {
                    marginTop: 10,
                    marginBottom: 10,
                    flex: .25
                },
                    inputPassword: {
                    marginLeft: 15,
                    width: 20,
                    height: 21
                },
                    inputUsername: {
                    marginLeft: 15,
                    width: 20,
                    height: 20
                },
                    inputContainer: {
                    padding: 10,
                    borderWidth: 1,
                    borderBottomColor: '#CCC',
                    borderColor: 'transparent'
                },
                    input: {
                    position: 'absolute',
                    left: 61,
                    top: 12,
                    right: 0,
                    height: 20,
                    fontSize: 14
                },
                    forgotContainer: {
                    alignItems: 'flex-end',
                    padding: 15,
                },
                    greyFont: {
                    color: '#D8D8D8'
                },
                    whiteFont: {
                    color: '#FFF'
                }
                });
                    module.exports = login