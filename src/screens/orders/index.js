import React, { Component } from "react";
import { View, StatusBar } from "react-native";
import {Container,Header,Title,Content, List, ListItem, Left, Body, Right, Thumbnail, Text,Button,Icon} from "native-base";

import styles from "./styles";

const Img1 = require("../../../assets/food.jpeg");

class Orders extends Component {
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
            <Title>My Orders</Title>
          </Body>
    </Header>
     <Content>
          <List>
            <ListItem avatar>
              <Left>
                <Thumbnail source={Img1} />
              </Left>
              <Body>
                <Text>Kumar Pratik</Text>
                <Text note>Doing what you like will...</Text>
                <Text note>10/03/2017 6:36 PM</Text>
                <Text note>Cash on delivery</Text>
              </Body>
              <Right>
                <Text style={{fontWeight: 'bold',textAlignVertical:'center',alignSelf: 'center',lineHeight: 75  }}>$200</Text>
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail source={Img1} />
              </Left>
              <Body>
                <Text>Kumar Pratik</Text>
                <Text note>Doing what you like will...</Text>
                <Text note>10/03/2017 6:36 PM</Text>
                <Text note>Cash on delivery</Text>
              </Body>
              <Right>
                <Text style={{fontWeight: 'bold',textAlignVertical:'center',alignSelf: 'center',lineHeight: 75  }}>$200</Text>
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail source={Img1} />
              </Left>
              <Body>
                <Text>Kumar Pratik</Text>
                <Text note>Doing what you like will...</Text>
                <Text note>10/03/2017 6:36 PM</Text>
                <Text note>Cash on delivery</Text>
              </Body>
              <Right>
                <Text style={{fontWeight: 'bold',textAlignVertical:'center',alignSelf: 'center',lineHeight: 75  }}>$200</Text>
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail source={Img1} />
              </Left>
              <Body>
                <Text>Kumar Pratik</Text>
                <Text note>Doing what you like will...</Text>
                <Text note>10/03/2017 6:36 PM</Text>
                <Text note>Cash on delivery</Text>
              </Body>
              <Right>
                <Text style={{fontWeight: 'bold',textAlignVertical:'center',alignSelf: 'center',lineHeight: 75  }}>$200</Text>
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail source={Img1} />
              </Left>
              <Body>
                <Text>Kumar Pratik</Text>
                <Text note>Doing what you like will...</Text>
                <Text note>10/03/2017 6:36 PM</Text>
                <Text note>Cash on delivery</Text>
              </Body>
              <Right>
                <Text style={{fontWeight: 'bold',textAlignVertical:'center',alignSelf: 'center',lineHeight: 75  }}>$200</Text>
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail source={Img1} />
              </Left>
              <Body>
                <Text>Kumar Pratik</Text>
                <Text note>Doing what you like will...</Text>
                <Text note>10/03/2017 6:36 PM</Text>
                <Text note>Cash on delivery</Text>
              </Body>
              <Right>
                <Text style={{fontWeight: 'bold',textAlignVertical:'center',alignSelf: 'center',lineHeight: 75  }}>$200</Text>
              </Right>
            </ListItem>
            
          </List>
        </Content>
        </Container>
    );
  }
}

export default Orders;