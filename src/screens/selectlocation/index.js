import React, { Component } from "react";
import { View,ImageBackground } from "react-native";
import { Container,Text,Button,Icon,CheckBox,Body,Image,Form, Item, Input, Label } from "native-base";

import styles from "./styles";

const launchscreenlogo = require("../../../assets/logo.png");

class RegTwo extends Component {
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
    
<Text style={{color: '#fff',fontSize: 20,marginBottom: 10}}>Oops, last thing!</Text>

    </View>
    <View style={{width: '90%',alignSelf: 'center'}}>
      <Form>
      <Item>
      <Input placeholder='Type your address' style={{color: '#fff'}}/>
      <Icon active name='map-marker' style={{color:'#fff'}} />
      </Item>
      </Form>
    </View>
    <Icon active name='map-marker' style={{ alignSelf: 'center',marginTop: 25, color:'#fff'}} />
    <View>
    </View>
    <View style={styles.gobtn}>
    <Button transparent onPress={() => this.props.navigation.navigate('SelectCat')}>
    
    <Icon name='chevron-circle-right' style={{color: '#fff',fontSize: 40 }}/>

    </Button>
    </View>
    </Container>
   
   );
 }
}

export default RegTwo;