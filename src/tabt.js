import React, { Component } from 'react';
import { Image,TouchableHighlight,StyleSheet} from 'react-native';
import { Tab, Tabs,Card, CardItem, Thumbnail,Container, Header,
    Title, Content, Footer, FooterTab, Button, Left, Right,
    Body, Icon, Text,View,Col, Row, Grid} from "native-base";

export default class tabTree extends Component {

    constructor() {
        super();
        this.state = {
            pressedBtn1: true,  /* ค่าแรกเริ่ม ให้กดปุ่ม ลากิจไว้*/
            pressedBtn2: false, /* ยังไม่กด*/
            pressedBtn3: false, /* ยังไม่กด*/
            Title : "ลากิจ",
            DetailOfTitle1 : '- อนุญาติให้ลาเป็นชั่วโมงได้\n\n- ได้สิทธิ์เมื่อเริ่มทำงาน\n\n- ไม่ยกยอดสะสมวันลาที่เหลืออยู่ ณ ปลายปี',
            DetailOfTitle2 : 'ลาป่วย',
            DetailOfTitle3 : 'พักร้อน'
        }
    }

    changeTitle1 = () =>{   /* เปลี่ยนค่า Title เป็น ลากิจ*/
        this.setState({Title : 'ลากิจ'})
    }
    changeTitle2 = () =>{   /* เปลี่ยนค่า Title เป็น ลาป่วย*/
        this.setState({Title : 'ลาป่วย'})
    }
    changeTitle3 = () =>{   /* เปลี่ยนค่า Title เป็น พักร้อน*/
        this.setState({Title : 'พักร้อน'})
    }

    /*SelectDetail (){
            let Detail;
            if (this.state.Title == 'ลากิจ') {
                return (Detail =
                    <Text>{'- อนุญาติให้ลาเป็นชั่วโมงได้\n\n- ได้สิทธิ์เมื่อเริ่มทำงาน\n\n- ไม่ยกยอดสะสมวันลาที่เหลืออยู่ ณ ปลายปี'}</Text>
                );
            } else if(this.state.Title == 'ลาป่วย'){
                return ( Detail =
                    <Text>{'ลาป่วย'}</Text>
                );
            }else {
                return ( Detail =
                    <Text>{'พักร้อน'}</Text>
                );
            }
        } */

    render() {

        let Detail;
        if (this.state.Title == 'ลากิจ') {
            Detail =
          <Text>{'- อนุญาติให้ลาเป็นชั่วโมงได้\n\n- ได้สิทธิ์เมื่อเริ่มทำงาน\n\n- ไม่ยกยอดสะสมวันลาที่เหลืออยู่ ณ ปลายปี'}</Text>

        } else if(this.state.Title == 'ลาป่วย'){
            Detail =
                <Text>{'ลาป่วย'}</Text>

        }else {
            Detail =
                <Text>{'พักร้อน'}</Text>
        }

        return (
            <Container style={{height:'100%',marginTop:20}}>
                <View style={{
                    flex:0,
                    flexDirection:'row',
                    justifyContent:'space-around',
                    alignItems:'stretch',
                }}>
                    <TouchableHighlight
                        onPress={this.changeTitle1}
                        style={[styles.button, this.state.pressedBtn1 ? {backgroundColor:'#808080'} : {}]}
                        onShowUnderlay={()=>{this.setState({pressedBtn1: true})}}
                        onHideUnderlay={()=>{this.setState({pressedBtn2: false,pressedBtn3: false})}}
                    >
                        <View style={{alignItems:'center'}}>
                            <Text style={{fontWeight:'300',fontSize:18}}>ลากิจ</Text>
                        </View>
                    </TouchableHighlight>


                    <TouchableHighlight
                        onPress={this.changeTitle2}
                        style={[styles.button, this.state.pressedBtn2 ? {backgroundColor:'#808080'} : {}]}
                        onShowUnderlay={()=>{this.setState({pressedBtn2: true})}}
                        onHideUnderlay={()=>{this.setState({pressedBtn1: false,pressedBtn3: false})}}
                        >
                        <View style={{alignItems:'center'}}>
                            <Text style={{fontWeight:'300',fontSize:18}}>ลาป่วย</Text>
                        </View>
                    </TouchableHighlight>

                    <TouchableHighlight
                        onPress={this.changeTitle3}
                        style={[styles.button, this.state.pressedBtn3 ? {backgroundColor:'#808080'} : {}]}
                        onShowUnderlay={()=>{this.setState({pressedBtn3: true})}}
                        onHideUnderlay={()=>{this.setState({pressedBtn1: false,pressedBtn2: false})}}
                    >
                        <View style={{alignItems:'center'}}>
                            <Text style={{fontWeight:'300',fontSize:18}}>พักร้อน</Text>
                        </View>
                    </TouchableHighlight>
                </View>

                <Grid style={{marginTop:10}}>
                    <Col style={{ backgroundColor: '#DCDCDC', height:'100%'}}>
                        <View style={{flexDirection:'row',justifyContent:'flex-start',margin:40}}>
                            <Text style={styles.ColText}>{Detail}</Text>
                            {/*<Text style={styles.ColText}>{this.SelectDetail ()</Text>}*/}
                        </View>
                    </Col>
                </Grid>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        justifyContent:'center',
        height: 90,
        width: 90,
        borderRadius:100,
        backgroundColor:'#DCDCDC'
    },
    ColText : {
      fontWeight:'400',
      fontSize:18,
    },
});