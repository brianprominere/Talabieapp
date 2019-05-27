import React, { Component } from "react";
import { View,ImageBackground,StatusBar } from "react-native";
import { Container,Text,Button,Icon,Form, Item, Input, Label} from "native-base";

import styles from "./styles";

const launchscreenlogo = require("../../../assets/logo.png");
const nextbtn = require("../../../assets/nextbtn.png");

class RegOne extends Component {
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
              <Text style={{color: '#fff',fontSize: 20,marginBottom: 25}}>Create Account</Text>
          </View>
          <View style={{width: '90%',alignSelf: 'center'}}>
              <Form>
                <Item stackedLabel style={{marginBottom: 12}}>
                    <Label style={{color: '#ccc'}}>What is your full name?</Label>
                    <Input placeholder="" placeholderTextColor="#aaa"/>
                </Item>
                <Item stackedLabel>
                    <Label style={{color: '#ccc'}}>What is your Phone #?</Label>
                    <Input placeholder="" placeholderTextColor="#aaa"/>
                </Item>
              </Form>
          </View>
          <View style={styles.gobtn}>
              <Button transparent onPress={() => this.props.navigation.navigate('RegTwo')}>
              <ImageBackground source={nextbtn} style={styles.imagenext} />
              </Button>
          </View>
        
    </Container>
   );
 }
}
export default RegOne;