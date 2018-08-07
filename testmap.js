import React, { Component } from 'react';
import {
    StyleSheet,
    View,Text
} from 'react-native';
import MapView, { PROVIDER_GOOGLE,Marker  } from 'react-native-maps';
import getDirections from "react-native-google-maps-directions";

export default class testmap extends Component {
    constructor(props){
super(props)

        this.state ={
    inittialPosition:{
        latitude:0,
        longitude: 0,
        latitudeDelta: 0,
        longitudeDelta: 0,

    },
           markePosition:{
               latitude: 0,
               longitude: 0,
           }
        }
    }
    watchID: ?number = null

    componentDidMount(){
        navigator.geolocation.getCurrentPosition((position) => {
            var lat = parseFloat(position.coords.latitude)
            var long = parseFloat(position.coords.longitude)
            var initialRegion = {
                latitude: lat,
                longitude: long,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }
            this.setState({inittialPosition : initialRegion })
            this.setState({markePosition : initialRegion })
            })
    }
    componentWillUnmount(){
        navigator.geolocation.clearWatch(this.watchID)
    }
    handleGetDirections = () => {

        const data = {
            source: {
                latitude: 37.78825,
                longitude: -122.4324
            },
            destination: {
                latitude:  this.state.lat,
                longitude: this.state.long ,
            },
            params: [
                {
                    key: "travelmode",
                    value: "driving"        // may be "walking", "bicycling" or "transit" as well
                },
                {
                    key: "dir_action",
                    value: "navigate"       // this instantly initializes navigation using the given travel mode
                }
            ]
        }

        getDirections(data)
    }


    render() {

        return (
            <View style={styles.container}>
                <View style={{width: 400,height:300}}>
                    <MapView
                        style={styles.map}
                        region={
                           this.state.inittialPosition}>
                        <Marker  onPress={this.handleGetDirections}
                            coordinate={
                                this.state.markePosition
                            }
                            title={"intbizth"}
                            description={"จะเอ๋"}
                        />
                        <Marker
                            coordinate={{
                                latitude: 13.7859,
                                longitude: 100.6976,
                            }}
                            title={"intbizthxd"}
                            description={"จะเอ๋zxc"}
                        />
                    </MapView>
                </View>
            </View>
      );
        }
        }


                const styles = StyleSheet.create({
                container: {
                flex:1,
                position: 'absolute',
                top: 0,
                left:0,
                bottom:0,
                right:0,
                alignItems:'center',
            },map: {
                position: 'absolute',
                top: 0,
                left:0,
                bottom:0,
                right:0,
            },

            });
