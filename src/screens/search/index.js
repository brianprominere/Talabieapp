import React, { Component } from "react";
import { View, StatusBar } from "react-native";
import {Container, Header, Content, Text, Body, Title} from "native-base";


import styles from "./styles";


class Search extends Component {
  render() {
    return (

    <Container>

    <Header>
    <Body>
            <Title>Search</Title>
          </Body>
    </Header>

      <Content>
      <Text>Search</Text>
      </Content>

      </Container>
    );
  }
}

export default Search;