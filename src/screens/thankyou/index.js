import React, { Component } from "react";
import { View,ImageBackground } from "react-native";
import { Container,Text,Button,Icon,CheckBox,Body,Image,Form, Item, Input, Label } from "native-base";

import styles from "./styles";

const launchscreenlogo = require("../../../assets/logo.png");
const thankyou = require("../../../assets/thankyou.png");

class ThankYou extends Component {
 render() {
   return (
     
     <Container style={styles.BgContainer}>
     
     <View style={styles.backLink}>
    <Button transparent onPress={() => this.props.navigation.goBack()}>
    
    <Icon name='angle-left' style={{color: '#fff'}}/>

    </Button>
    </View>
    <ImageBackground source={launchscreenlogo} style={styles.imageLogo} />

      <ImageBackground source={thankyou} style={styles.imageThankyou} />



    <View style={{width: '100%',alignItems: 'center'}}>
    
<Text style={{color: '#fff',fontSize: 24, marginBottom: 10,alignItems: 'center',fontWeight: 'bold'}}>Thank You</Text>

    </View>
    <View style={{width: '100%',alignItems: 'center'}}>
    
<Text style={{color: '#fff',fontSize: 14, marginBottom: 15,alignItems: 'center',fontWeight: 'normal'}}>Your order has been placed!</Text>

<Text style={{color: '#fff',fontSize: 14, marginBottom: 5,alignItems: 'center',fontWeight: 'normal'}}>We will get your food shortly.</Text>

    </View>
    <View style={{width: '100%',alignItems: 'center'}}>
    <Button success style={{alignSelf: 'center' }}><Text> INVITE FRIENDS </Text></Button>
    </View>
    

    </Container>
   
   );
 }
}

export default ThankYou;