import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View,Image,Alert,TouchableOpacity
} from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
import PopupDialog, {
    DialogTitle,
    DialogButton,
    ScaleAnimation,
} from 'react-native-popup-dialog';

const scaleAnimation = new ScaleAnimation();




export default class App extends Component {
    state = {
        dialogShow: false,
    };

    showScaleAnimationDialog = () => {
        this.scaleAnimationDialog.show();
    }
    showScaleAnimationDialog1 = () => {
        console.log('zzxz');
    }


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.container}>


                    <Button style={styles.ins}>
                        <Image style={styles.containerimg} source={require('./pulic/icon.png')}/>
                        <Text style={styles.fontstyle}>เวลาเข้า</Text>
                    </Button>
                    <Button style={styles.ins} onPress={this.showScaleAnimationDialog}>
                        <Image style={styles.containerimg} source={require('./pulic/icon.png')}/>
                        <Text style={styles.fontstyle}>เวลาออก</Text>
                    </Button>
                </View>
                <PopupDialog
                    ref={(popupDialog) => {
                        this.scaleAnimationDialog = popupDialog;
                    }}
                    dialogAnimation={scaleAnimation}
                    dialogTitle={<DialogTitle title="เลือกวิธีเข้างาน" />}
                    actions={[
                        <Text style={{width:'100%',fontSize: 20, textAlign: 'center',marginTop:40}}>_____________________________________________</Text>,
                        <DialogButton style={{fontSize:25 , alignItems:'center'}}
                            text="ปิด"
                            onPress={this.showFadeAnimationDialog}
                        />
                    ]}
                >
                    <View style={{paddingTop: 10,alignItems: 'center',}}>
                    <View style={{paddingTop: 10,alignItems: 'center',}}>
                        <Button style={styles.insbtn} onPress={this.showScaleAnimationDialog1}>
                            <Text style={styles.welcome}>ลงเวลาด้วย QR Code</Text>
                        </Button>
                        <View style={{paddingTop: 20,alignItems: 'center',}}>
                        <Button  style={styles.insbtn} onPress={() => this.props.navigation.navigate("MyAPI")}>
                            <Text style={styles.welcome}>ลงเวลาด้วยสถานที่</Text>
                        </Button>
                    </View>
                    </View>
                    </View>
                </PopupDialog>

            </View>
        );

    }
    popupDialog = () => {
        this.popupDialog.show();
}

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
      flexDirection: 'row',
    backgroundColor: '#F5FCFF',
  },


  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
    ins: {
        width: '50%',

    },
    insbtn: {
        width: 240,
        justifyContent: 'center',
        alignItems: 'center',

    },
    containerimg: {
        marginLeft:30 ,
        padding: 20 ,
        width: 31,
        height: 31,

    },
fontstyle: {
    fontSize:20,
    paddingRight:30
},
stt: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    },
});
