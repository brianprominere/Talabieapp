import React, { Component } from "react";
import { View,ImageBackground, StatusBar} from "react-native";
import { Container,Text,Button,Icon,CheckBox,Body,Image,Form, Item, Input, Label } from "native-base";

import styles from "./styles";

const launchscreenlogo = require("../../../assets/logo.png");
const thankyou = require("../../../assets/thankyou.png");

class ThankYou extends Component {
 render() {
   return (
     
     <Container style={styles.BgContainer}>
     <StatusBar hidden={true} />
     
     <View style={styles.backLink}>
    <Button transparent onPress={() => this.props.navigation.navigate('HomePage')}>
    
    <Icon name='angle-left' style={{color: '#fff'}}/>

    </Button>
    </View>
    <ImageBackground source={launchscreenlogo} style={styles.imageLogo} />

      <ImageBackground source={thankyou} style={styles.imageThankyou} />



    <View style={{width: '100%',alignItems: 'center'}}>
    
<Text style={{color: '#fff',fontSize: 24, marginBottom: 10,alignItems: 'center',fontWeight: 'bold'}}>Thank You</Text>

    </View>
    <View style={{width: '100%',alignItems: 'center'}}>
    
<Text style={{color: '#fff',fontSize: 14, marginBottom: 15,alignItems: 'center',fontWeight: 'normal'}}>Your order has been placed!{'\n'}We will get your food shortly.</Text>

    </View>
    <View style={{width: '100%',alignItems: 'center',marginTop: 35}}>
    <Button success style={{alignSelf: 'center', width: '50%'}}><Text style={{width: '100%',textAlign: 'center', fontSize: 16}}> INVITE FRIENDS </Text></Button>
    </View>
    

    </Container>
   
   );
 }
}

export default ThankYou;