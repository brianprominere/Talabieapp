import React, { Component } from "react";
import { View, StatusBar } from "react-native";
import {Container,Header,Left,Button,Icon,Body,Title,Content,Text,Tabs,Tab, Right} from "native-base";

import styles from "./styles";
import Tab1 from './tabOne';
import Tab2 from './tabTwo';


class Favorite extends Component {
  render() {
    return (
    	<Container>

      <View style={{width: '100%',backgroundColor: '#A5363D', flexDirection: 'row', height: 30 }}>
        <View style={{width: '20%'}}>
        <Button small transparent onPress={() => this.props.navigation.navigate('HomePage')}>
                <Icon name='angle-left' style={{color: '#fff'}}/>
            </Button>
        </View>
        <View style={{width: '60%'}}>
        <Text style={{color: '#fff',textAlign: 'center',paddingTop: 4}}>Favourite</Text>
        </View>
        <View style={{width: '20%'}}>
        </View>
      </View>


         <Content>
      
      <Tabs initialPage={0}>
          <Tab heading="Favourite Restaurants">
            <Tab1 />
          </Tab>
          <Tab heading="Favourite Items">
            <Tab2 />
          </Tab>
        </Tabs>



      </Content>
      </Container>
    );
  }
}

export default Favorite;