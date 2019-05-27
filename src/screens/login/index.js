import React, { Component } from "react";
import { View,ImageBackground,StatusBar} from "react-native";
import { Container,Text,Button,Icon,Form, Item, Input, Label, Content} from "native-base";

import styles from "./styles";

const launchscreenlogo = require("../../../assets/logo.png");
const nextbtn = require("../../../assets/nextbtn.png");

class Login extends Component {
 render() {
   return (
     
     <Container style={styles.BgContainer}>
     <StatusBar hidden={true} />
        <View style={styles.backLink}>
            <Button transparent onPress={() => this.props.navigation.goBack()}>   
              <Icon name='angle-left' style={{color: '#fff', fontSize: 30, fontWeight: 'normal'}}/> 
            </Button>
        </View>
            <ImageBackground source={launchscreenlogo} style={styles.imageLogo} />
        <View style={{width: '83%',alignSelf: 'center'}}>
            <Text style={{color: '#fff',fontSize: 24,marginBottom: 25}}>Log in</Text>
        </View>
        <View style={{width: '90%',alignSelf: 'center'}}>
            <Form>
                  <Item stackedLabel style={{marginBottom: 12}}>
                      <Label style={{color: '#ccc'}}>Email</Label>
                      <Input placeholder="" placeholderTextColor="#aaa" />
                  </Item>
                  <Item stackedLabel>
                      <Label style={{color: '#ccc'}}>Password</Label>
                      <Input placeholder="" placeholderTextColor="#aaa"/>
                 </Item>
            </Form>
        </View>
        
        <View style={styles.gobtn}>
              <Button transparent onPress={() => this.props.navigation.navigate('Main')}>
              <ImageBackground source={nextbtn} style={styles.imagenext} />
              </Button>
        </View>
    </Container>
   );
 }
}
export default Login;