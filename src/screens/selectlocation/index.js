import React, { Component } from "react";
import { View,ImageBackground,StatusBar } from "react-native";
import { Container,Text,Button,Icon,Form, Item, Input, Label,InputGroup } from "native-base";

import styles from "./styles";

const launchscreenlogo = require("../../../assets/logo.png");
const nextbtn = require("../../../assets/nextbtn.png");
const mapicon = require("../../../assets/locationmap.png");
class SelectLoc extends Component {
 render() {
   return (
     
     <Container style={styles.BgContainer}>
     <StatusBar hidden={true} />     
     <View style={styles.backLink}>
    <Button transparent onPress={() => this.props.navigation.navigate('RegTwo')}>
    
    <Icon name='angle-left' style={{color: '#fff', fontSize: 30, fontWeight: 'normal'}}/>

    </Button>
    </View>
    <ImageBackground source={launchscreenlogo} style={styles.imageLogo} />

    <View style={{width: '83%',alignSelf: 'center'}}>
    
<Text style={{color: '#fff',fontSize: 20,marginBottom: 25}}>Oops, last thing!</Text>

    </View>
    <View style={{width: '90%',alignSelf: 'center'}}>
      <Form>
      
      <InputGroup>
        <Input placeholder="Type your address" placeholderTextColor="#aaa" />
                        <Icon name='crosshairs' style={{color:'#fff',fontSize: 18}}/>
     </InputGroup>


      
      </Form>
    </View>
    <ImageBackground source={mapicon} style={styles.mapicon} />
    <View>
    </View>
    <View style={styles.gobtn}>
    <Button transparent onPress={() => this.props.navigation.navigate('SelectCat')}>
    
    <ImageBackground source={nextbtn} style={styles.imagenext} />

    </Button>
    </View>
    </Container>
   
   );
 }
}

export default SelectLoc;