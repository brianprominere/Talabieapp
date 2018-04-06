import React, { Component } from "react";
import { View, StatusBar } from "react-native";
import {Container,Header,Left,Button,Icon,Body,Title,Content,Text,Tabs,Tab} from "native-base";

import styles from "./styles";
import Tab1 from './tabOne';
import Tab2 from './tabTwo';


class Favorite extends Component {
  render() {
    return (
    	<Container>
      <Header>
      <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
    
    <Icon name='angle-left' style={{color: '#fff'}}/>

    </Button>
          </Left>
    <Body>
            <Title>Favourite</Title>
          </Body>
    </Header>

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