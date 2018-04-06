import React, { Component } from "react";
import { View,ImageBackground } from "react-native";
import { Container,Text,Button,Icon,CheckBox,Body,Image } from "native-base";

import styles from "./styles";

const launchscreenlogo = require("../../../assets/logo.png");

class CreatSocial extends Component {
 render() {
   return (
     
     <Container style={styles.BgContainer}>
    <View style={styles.backLink}>
    <Button transparent onPress={() => this.props.navigation.goBack()}>
    
    <Icon name='angle-left' style={{color: '#fff'}}/>

    </Button>
    </View>
    <ImageBackground source={launchscreenlogo} style={styles.imageLogo} />

    <View>
    
    

<Button block rounded iconLeft light style={styles.FbBtn} onPress={() => this.props.navigation.navigate('CreatSocial')} > 
            <Icon name='facebook-f' style={{color: '#a9343a'}} />
            <Text style={{color: '#a9343a'}}>Continue with FaceBook</Text>
          </Button>

          <Button block rounded iconLeft light style={styles.FbBtn} onPress={() => this.props.navigation.navigate('CreatSocial')} > 
            <Icon name='google-plus' style={{color: '#a9343a'}} />
            <Text style={{color: '#a9343a'}}>Continue with GooglePlus</Text>
          </Button>

          <Button block bordered rounded style={{width: '80%',alignSelf: "center",}} light onPress={() => this.props.navigation.navigate('CreatSocial')} > 
  
            <Text>Create Account</Text>
          </Button>

    </View>
    </Container>
   
   );
 }
}

export default CreatSocial;