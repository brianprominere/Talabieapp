import React, { Component } from "react";
import { View,ImageBackground } from "react-native";
import { Container,Text,Button,Icon,CheckBox,Body,Image,Form, Item, Input, Label } from "native-base";

import styles from "./styles";

const launchscreenlogo = require("../../../assets/logo.png");

class Login extends Component {
 render() {
   return (
     
     <Container style={styles.BgContainer}>
     
     <View style={styles.backLink}>
    <Button transparent onPress={() => this.props.navigation.goBack()}>
    
    <Icon name='angle-left' style={{color: '#fff'}}/>

    </Button>
    </View>
    <ImageBackground source={launchscreenlogo} style={styles.imageLogo} />

    <View style={{width: '83%',alignSelf: 'center'}}>
    
<Text style={{color: '#fff',fontSize: 20,marginBottom: 10}}>Login</Text>

    </View>
    <View style={{width: '90%',alignSelf: 'center'}}>
      <Form>
      <Item stackedLabel>
      <Label style={{color: '#fff'}}>Email</Label>
      <Input/>
      </Item>
      <Item stackedLabel>
      <Label style={{color: '#fff'}}>Password</Label>
      <Input/>
      </Item>
      </Form>
    </View>
    <View style={styles.gobtn}>
    <Button transparent onPress={() => this.props.navigation.navigate('RegOne')}>
    
    <Icon name='chevron-circle-right' style={{color: '#fff',fontSize: 40 }}/>

    </Button>
    </View>
    </Container>
   
   );
 }
}

export default Login;