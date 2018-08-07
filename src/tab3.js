import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,TouchableHighlight
} from 'react-native';
import Display from 'react-native-display';
export default class K extends Component{
    constructor(props){
        super(props);
        this.state = {
            onClicked_b1: true,
            onClicked_b2: false,
            onClicked_b3: false,
                  enable: true
        }
    }
FALSE=()=>{
          this.setState({
              onClicked_b1:false,
              onClicked_b2:false,
              onClicked_b3:false,
          });
  }
    handlerButtonOnClick1=()=>{
        let toggle = !this.state.enable;
      this.FALSE();
        this.setState({
            onClicked_b1: true,
           enable: toggle,

        });
    }
    handlerButtonOnClick2=()=>{
        let toggle = !this.state.enable;
        this.FALSE();
        this.setState({
            onClicked_b2: true,
            enable: toggle,
        });
    }
    handlerButtonOnClick3=()=>{
        let toggle = !this.state.enable;
        this.FALSE();
        this.setState({
            onClicked_b3: true,
            enable: toggle,
        });
    }


    render() {
        var style1,style2,style3;
        if(this.state.onClicked_b1){
            style1 = styles.stylesEn
        }else{
            style1 = styles.stylesdi
        }
        if (this.state.onClicked_b2){
            style2 = styles.stylesEn
        }
        else{
            style2 = styles.stylesdi
        }
        if (this.state.onClicked_b3){
            style3 = styles.stylesEn
        }
        else{
            style3 = styles.stylesdi
        }
      return(
          <View style={{flex: 1,paddingTop:10}}>
                <View style={styles.container}>
              <TouchableHighlight style={[style1,styles.stylesAll]} underlayColor={'grray'}
                                                       onPress={this.handlerButtonOnClick1}>
                <Text style={styles.welcome}>Click1</Text>
              </TouchableHighlight>

              <TouchableHighlight style={[style2,styles.stylesAll]} underlayColor={'grray'}
                                  onPress={this.handlerButtonOnClick2}>
                  <Text style={styles.welcome}>Click2</Text>
              </TouchableHighlight>
              <TouchableHighlight style={[style3,styles.stylesAll]} underlayColor={'grray'}
                                  onPress={this.handlerButtonOnClick3}>
                  <Text style={styles.welcome}>Click3</Text>
              </TouchableHighlight>
                </View>

              <View style={{flex: 1,paddingTop:10}}>
                  <Display enable={this.state.enable}>
                      <Text> My custom components </Text>
                  </Display>
                  <Display
                      enable={this.state.enable}
                      enterDuration={500}
                      exitDuration={250}
                      exit="fadeOutRight"
                      enter="fadeInRight"
                  >
                      <View style={[styles.circle, {backgroundColor: '#3498db'}]}  >

                      </View>
                  </Display>
                  <Display
                      enable={this.state.enable}
                      enterDuration={500}
                      exitDuration={250}
                      exit="fadeOutRight"
                      enter="fadeInRight"
                  >
                      <View style={[styles.circle, {backgroundColor: '#3498db'}]}  >

                      </View>
                  </Display>
              </View>
              </View>

      );
   }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
      justifyContent: 'space-between',
      flexDirection: 'row',
    backgroundColor: '#F5FCFF',
      paddingTop:10
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
      color: '#F5FCFF',
    margin: 10,
  },
    stylesAll:{
        borderWidth:1,
        borderColor:'rgba(0,0,0,0.2)',
        //alignItems:'center',
        justifyContent:'center',
        width:100,
        height:100,
        borderRadius:100, },

    stylesEn:{
        backgroundColor:'#636363',
    },
    stylesdi:{
        backgroundColor:'#bdbdbd',
    },
    circle: {
        borderRadius: 50,
        height: 100,
        width: 100,
        margin: 15
    },
});
