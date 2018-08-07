
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
    Image,
    ScrollView
} from 'react-native';
import { Container, Tab, Tabs } from 'native-base';
import  Tab1 from './tabone';
import  Tab2 from './tabtwo';
import  Tab3 from './tabt';





export default class Home extends Component{

    render(){
        return(

            <View style={{flex:1,backgroundColor: '#ffffff' ,padding:10}}>
                <ScrollView>
                <View style={styles.stylevieimage}>
                    <Image  source={require('./public/assets/image/user.png')}  style={{width: 150, height: 150}}/>
                </View>
                <View   style={styles.styleviewname}>
                <Text style={{ fontSize: 25}}> </Text>

                <Text style={{ fontSize: 25}}>เข้างานเช้า </Text>
                <Text style={{fontSize: 25}}>ทันเสมอ </Text>
                </View>
                <View   style={styles.styleviewoff}>
                    <Text style={{ fontSize: 18}}>บริษัท สามพี โปรเฟซชันนัล จำัด</Text>
                </View>
                <View style={{flex:1,alignItems:'stretch',flexDirection:'row',
                    justifyContent: 'space-between'}}>
                    <Container >
                        <Tabs  >
                            <Tab  heading="ข้อมูลพนักงาน" >
                                <Tab1  />
                            </Tab>
                            <Tab heading="สิทธิการลา">
                                <Tab2 />
                            </Tab>
                            <Tab heading="การลาเพิ่มเติม">
                                <Tab3 />
                            </Tab>
                        </Tabs>
                    </Container>
                </View>
                </ScrollView>
            </View>

        );
    }

}

const  styles = StyleSheet.create({
   fonts: {
       fontSize: 25
   },
    styleviewname: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    stylevieimage: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
            },
    styleviewoff: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

    },
    styleviewon: {
      width: 200,
        height: 200,

    },
    Headertab: {
        backgroundColor:'#fff',
        height:500 ,

    },
});
