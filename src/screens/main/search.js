import React, { Component } from "react";
import { View, StatusBar } from "react-native";
import {Container, Header, Content, Text, Body, Title, Button,Icon, Left, Right, Item, Input} from "native-base";


import styles from "./styles";


class Search extends Component {
  render() {
    return (

    <Container>

    <Header>
    <Body style={{alignItems: 'center'}}>
    <Text style={{color: '#fff'}}>Search</Text>
    </Body>
    </Header>

     <Content>
  <View searchBar rounded>
          <Item>
            <Input placeholder="I'm looking for..." />
            <Icon name="search" />
          </Item>
        </View>


   </Content>

    
      </Container>
    );
  }
}

export default Search;