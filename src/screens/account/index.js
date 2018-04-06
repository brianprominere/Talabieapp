import React, { Component } from "react";
import { View, StatusBar,ImageBackground,Image } from "react-native";
import {Container,Header,Left,Button,Icon,Body,Title,Content,Text,Form, Item, Input, Label} from "native-base";

import { Col, Row, Grid } from "react-native-easy-grid";

import styles from "./styles";

const Img1 = require("../../../assets/food.jpeg");

class Accounts extends Component {
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
            <Title>My Account</Title>
          </Body>
    </Header>
     <Content>
      

     <View style={styles.headerContainer}>
        <ImageBackground
          style={styles.headerBackgroundImage}
          blurRadius={10}
          source={Img1}
>
<View style={styles.headerColumn}>

<Grid>
    <Col style={{ width: 100 }}><Image style={styles.userImage} source={Img1} /></Col>
    <Col>
<View style={{padding: 15}}>
           <Text style={{color: '#fff',fontSize: 20}}>Taylor Swift</Text>
           <Text style={{color: '#008000',fontSize: 14}}>Edit photo</Text>
           </View>
    </Col>
</Grid>
</View>
</ImageBackground>
</View>

<Form style={styles.formbottom}>
            <Item stackedLabel>
              <Label>Edit Account Information</Label>
              <Input />
            </Item>
            <Item stackedLabel>
              <Label>Add or Edit Payment</Label>
              <Input />
            </Item>

            <Item stackedLabel>
              <Label>Settings</Label>
              <Input />
            </Item>
            <Item stackedLabel>
              <Label>Share</Label>
              <Input />
            </Item>

            <Item stackedLabel>
              <Label>Invite Friends</Label>
              <Input />
            </Item>
            <Item stackedLabel>
              <Label>About</Label>
              <Input />
            </Item>
            <Item stackedLabel>
              <Label>Help</Label>
              <Input />
            </Item>

          </Form>





      </Content>
      </Container>
    );
  }
}

export default Accounts;