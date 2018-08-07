import React, { Component } from 'react';
import {

  StyleSheet,
  Text,
  TextInput,
  View,
  Alert,
  Button,
  Image,
  ImageBackground

  } from 'react-native';
import  PageOne from  './login.js';
import PropTypes from 'prop-types';
import {createStackNavigator,StackNavigator} from 'react-navigation';
import { Actions,Scene, Router  } from 'react-native-router-flux';
import PageTwo from "./Home";

//class เรียกใช้ stast blinktext
class Myblinktext  extends Component{
  constructor(props, context){
    super(props, context)
    this.state ={isVisible: true};

    setInterval(() => {
      this.setState(oldState=>{
        return {isVisible:!oldState.isVisible}
      })
    }, this.props.iniervel)

  }

  render(){
    let display = this.state.isVisible ?this.props.mess :'';


    return(
<Text style={styles.welcome} >
{display}
</Text>
    );
  }
}
const AppNavigator = StackNavigator(
    {
        Loginuser: {screen: PageTwo},
    })

export default class get extends Component{
    constructor(props) {
        super(props);
      this.state ={text: ''};
    }


  render() {

      return (
        <ImageBackground
        source={require('./public/assets/image/374299-space-mix_up-purple-triangle-blurred-3D.jpg')}
        style={styles.imbg} >
      <View style={styles.container }  >
      <Text style={styles.header}>  H O M E </Text>
      <Image  resizeMode='center' style={{width: 150, height:150}}
          source={require('./public/assets/image/images.jpg')}
        />
      <Text style={{color:'black' , fontSize: 30}}>
          กรุณากรอกชื่อ User
        </Text>
      <TextInput  style={styles.foneinput}
        placeholder='ชื่อของคุณ'
        onChangeText={(text) => this.setState({text})} />

      <Text style={{fontSize:50}}>
      {this.state.text.split('a').map((get) =>  get && '').join(':p ')}
      </Text>
      <View style={{height: 100 , width:500, backgroundColor: 'black'}}>
      <Myblinktext mess='The Gravity' iniervel={1000}/>
        </View>
        <View style={{height: 100 , width:500, backgroundColor: 'yellow'}}>
        <Text style={styles.welcome}>
          Welcome Kak
        </Text>

        </View>
        <View style={{height: 100 , width:500, backgroundColor: 'blue'}}>
        <MyText mess='กมลพัชร์'  option='พิสุทธิกมล' />

        </View>




      </View>
      <Button  title='CLick'  onPress={ <AppNavigator/> }
        />
</ImageBackground>
    );
  }
}

//การส่งprops จะไม่สามารถเปลี่ยนค่าได้
//class เรียกใช้ props
class MyText extends Component{
  render(){
    return(
<Text style = {styles.instructions} >
{this.props.mess},{this.props.option}
</Text>
    );
  }
}



get.propTypes = {
    name: PropTypes.string
};



//ฟังก์ชั่นกำหนดรูปแบบ styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //set ตำแหน่ง justifyContent: '',
    alignItems: 'center',
    padding: 20,

  },
  welcome: {
    fontSize: 50,
    textAlign: 'center',
    color: 'red',
    margin: 10,
  },
  instructions: {
    fontSize: 40,
    textAlign: 'center',
    color: 'black',

  },
  foneinput: {
    fontSize: 20,
    textAlign: 'center',
    color: 'blue',
    height: 60,
    width: 300,

  },
  imbg: {
    flex: 1,
    height: '100%',
    width: '100%',

  },
  header: {
    color: '#fff',
    fontSize:30,
    borderColor: '#fff',
    borderWidth : 2,
    padding:20,
    paddingLeft:40,
    paddingRight:40,
   backgroundColor: 'rgba(255,235,175, .3)' ,

  },
  menuContainer: {
    height: '40%',
    flexDirection: 'row',
    flexWrap: 'wrap',

   },
});


