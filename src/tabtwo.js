
import React, { Component } from 'react';
import {
    View,TouchableHighlight

} from 'react-native';

import { Container,  Content, Accordion } from 'native-base';
const dataArray  = [
    { title: "สิทธิทั้งหมดต่อปี", content:
        'ลากิจ                                                                               7 วัน' +"\n\n"+
        'ลาป่วย                                                                           30 วัน'+"\n\n"+
        'ลาพักร้อน                                                                        6 วัน'+"\n\n"+
        'ลาคลอด                                                                       90 วัน'+"\n\n"+
        'ลาบวช                                                                          15 วัน'+"\n\n"+
        'ลาทำหมัน                                                                        0 วัน'} ,
    { title: "ข้อมูลการลาคงเหลือ", content: <this.data/> +"\n"+"\n"+
        'asdsad'+"\n\n"+
        'asdsad'+"\n\n"+
        'asdsad'+"\n\n"+
        'asdsad'+"\n\n"+
        'asdsad'}

];


export default class Home extends Component{
    render(){
        return(

            <View style={{paddingTop:10}}>
                <View style={{height:800}}>
                    <Container>

                        <Content padder>
                            <Accordion dataArray={dataArray}  />
                        </Content>
                    </Container>
                </View>

            </View>


        );
    }

}

