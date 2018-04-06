import React, { Component } from "react";
import { View, StatusBar } from "react-native";
import {Container, Header, Content, Text, Body, Title,Left,Button,Icon,} from "native-base";





class DineIn extends Component {
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
            <Title>DineIn</Title>
          </Body>
    </Header>

      <Content>
      <Text>Dine In</Text>
      
      </Content>

      </Container>
    );
  }
}

export default DineIn;