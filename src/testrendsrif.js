
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Button,Dimensions,
    Alert,
    Text,
} from 'react-native';
import Display from 'react-native-display';
import ProgressBarAnimated from 'react-native-progress-bar-animated';
export default class testrendsrif extends Component{
    constructor(props) {
        super(props);

        this.state = {enable: false,
            enable1: false,
            enable2: false,
            progress: 20,
            progressWithOnComplete: 0,
            progressCustomized: 0,};
    }

    toggleDisplay() {
        let toggle = !this.state.enable;
        this.setState({enable: toggle
        ,
            enable1: false
        ,enable2: false
        });
    }
    toggleDisplay1() {
        let toggle = !this.state.enable1;
        this.setState({enable1: toggle,
            enable: false
            ,enable2: false});
    }
    toggleDisplay2() {
        let toggle = !this.state.enable2;
        this.setState({enable2: toggle,
            enable1: false
            ,enable: false});
    }
    increase = (key, value) => {
        this.setState({
            [key]: this.state[key] + value,
        });
    }
    render() {
        const barWidth = Dimensions.get('screen').width - 30;
        const progressCustomStyles = {
            backgroundColor: 'red',
            borderRadius: 0,
            borderColor: 'orange',
        };
        return (
            <View>
                <View style={styles.button}><View style={styles.separator} />
                    <View>
                        <Text style={styles.label}>Bar with onComplete event</Text>
                        <ProgressBarAnimated
                            width={barWidth}
                            value={this.state.progressWithOnComplete}
                            onComplete={() => {
                                Alert.alert('Hey!', 'onComplete event fired!');
                            }}
                        />
                        <View style={styles.buttonContainer}>
                            <View style={styles.buttonInner}>
                                <Button
                                    title="Increase 50%"
                                    onPress={this.increase.bind(this, 'progressWithOnComplete', 20)}
                                />
                            </View>
                        </View>
                    </View>
                    <Button
                        onPress={this.toggleDisplay.bind(this)}
                        title="Toggle display"
                        color="#34495e"
                        accessibilityLabel="Toggle display for show/hide circles"
                    />
                    <Button
                        onPress={this.toggleDisplay1.bind(this)}
                        title="Toggle display"
                        color="#34495e"
                        accessibilityLabel="Toggle display for show/hide circles"
                    />
                    <Button
                        onPress={this.toggleDisplay2.bind(this)}
                        title="Toggle display"
                        color="#34495e"
                        accessibilityLabel="Toggle display for show/hide circles"
                    />

                </View>
                <View style={styles.center}>
                    <Display
                        enable={this.state.enable}
                        enterDuration={250}
                        exitDuration={250}
                        exit="fadeOutLeft"
                        enter="fadeInLeft"
                    >
                        <View style={[styles.circle, {backgroundColor: '#2ecc71'}]} />
                    </Display>

                    <Display enable={this.state.enable1}
                             enterDuration={50}
                             exitDuration={50}
                             exit="fadeOutLeft"
                             enter="fadeInLeft">
                        <Text style={{fontSize: 30}}> My custom components </Text>
                    </Display>

                    <Display
                        enable={this.state.enable2}
                        enterDuration={500}
                        exitDuration={250}
                        exit="fadeOutRight"
                        enter="fadeInRight"
                    >
                        <View style={[styles.circle, {backgroundColor: '#3498db'}]}   >

                        </View>
                    </Display>
                </View>
            </View>
        );
    }
}

const styles = {
    button: {
        padding: 10,
        margin: 15,
    },
    center: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    circle: {
        borderRadius: 50,
        height: 100,
        width: 100,
        margin: 15
    },buttonContainer: {
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
    buttonContainer : {
        marginTop : 15 ,
    } ,
}