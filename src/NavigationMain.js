
import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import  PageOne from  './Home.js';
import  PageTwo from  './get.js';
export default class NavigationMain extends React.Component {


    render() {


        return (
            <Router hideNavBar= "true">
                <Scene key="root">
                    <Scene key="pageTwo" component={PageTwo} title="PageOne" initial={true} />
                    <Scene key="pageOne" component={PageOne} title="PageTwo" />
                </Scene>
            </Router>
        );
    }
}

