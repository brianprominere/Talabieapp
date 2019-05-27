import React, { Component } from "react";
import { View, StatusBar,ImageBackground,Image } from "react-native";
import {Container,Header,Left,Button,Icon,Body,Title,List, ListItem, Content,Text,Form, Item, Input, Label, Right} from "native-base";

import { Col, Row, Grid } from "react-native-easy-grid";

import styles from "./styles";

const Img1 = require("../../../assets/food.jpeg");
const Img2 = require("../../../assets/profile.png");


class Accounts extends Component {
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
        <Text style={{color: '#fff',textAlign: 'center',paddingTop: 4}}>My Account</Text>
        </View>
        <View style={{width: '20%'}}>
        </View>
      </View>


     <Content>
      

     <View style={styles.headerContainer}>
        <ImageBackground
          style={styles.headerBackgroundImage}
          source={Img1}
>
<View style={styles.headerColumn}>

<Grid>
    <Col style={{ width: 100 }}><Image style={styles.userImage} source={Img2} /></Col>
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

 <List style={{paddingLeft: 10,paddingRight: 20}}>
            <ListItem style={{paddingTop:15, paddingBottom: 15}}>
              <Text style={{color: '#999'}}>Edit Account information</Text>
            </ListItem>
            <ListItem style={{paddingTop:15, paddingBottom: 15}}>
              <Text style={{color: '#999'}}>Add / Edit Payment</Text>
            </ListItem>
            <ListItem style={{paddingTop:15, paddingBottom: 15}}>
              <Text style={{color: '#999'}}>Settings</Text>
            </ListItem>
            <ListItem style={{paddingTop:15, paddingBottom: 15}}>
              <Text style={{color: '#999'}}>Share</Text>
            </ListItem>
            <ListItem style={{paddingTop:15, paddingBottom: 15}}>
              <Text style={{color: '#999'}}>Invite Friends</Text>
            </ListItem>
            <ListItem style={{paddingTop:15, paddingBottom: 15}}>
              <Text style={{color: '#999'}}>About</Text>
            </ListItem>
            <ListItem style={{paddingTop:15, paddingBottom: 15}}>
              <Text style={{color: '#999'}}>Help</Text>
            </ListItem>
          </List>

      </Content>
      </Container>
    );
  }
}

export default Accounts;