
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import { Container,  Content, Accordion } from 'native-base';
const dataArray = [
    { title: "รายละเอียด", content: '{this.props.Tab1}' },
];
export default class Home extends Component{
    render(){
        return(

                <View style={{paddingTop:40}}>

                    <View   style={{alignItems:'center'}}>
                        <Text style={styles.fonts}>น.ส. เข้างานเช้า สแกนทันเสมอ</Text>
                        <Text style={styles.fonts}>Kaonganchao scantunsmor</Text>
                        <Text style={styles.fonts}></Text>
                        <Text style={styles.fonts}>3P_P001</Text>
                        <Text style={styles.fonts}></Text>
                        <Text style={styles.fonts}>หญิง</Text>
                        <Text style={styles.fonts}></Text>
                        <Text style={styles.fonts}>Kaonganchao@3P.com</Text>
                        <Text style={styles.fonts}></Text>
                        <Text style={styles.fonts}>083-234-5678</Text>
                        <Text style={styles.fonts}></Text>





                    </View>
                    <View style={{height:200 ,paddingTop:30}}s>
                        <Container>

                            <Content padder>
                                <Accordion dataArray={dataArray} />
                            </Content>
                        </Container>
                    </View>

                </View>


        );
    }

}


const  styles = StyleSheet.create({
    fonts: {
        fontSize: 20
    },

});
