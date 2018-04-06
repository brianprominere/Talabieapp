import React, { Component } from "react";
import { View,ImageBackground } from "react-native";
import { Container,Text,Button,Icon,CheckBox,Body,Image } from "native-base";

import styles from "./styles";
 
const launchscreenBg = require("../../../assets/firstscreen-bg.png");
const launchscreenlogo = require("../../../assets/logo.png");

class CreatAccount extends Component {
 render() {
   return (
     
    <Container>
    <ImageBackground source={launchscreenBg} style={styles.imageContainer}>

    <View>

    <View style={styles.loginLink}>
    <Button transparent onPress={() => this.props.navigation.navigate('Login')}>
    <Text style={{color: '#fff'}}>Login</Text>
    </Button>
    </View>

    <ImageBackground source={launchscreenlogo} style={styles.imageLogo} />

    <View>
    <Button block rounded style={styles.CreateAccountBtn} onPress={() => this.props.navigation.navigate('Login')} >

    <Text style={{color: '#a9343a'}}>Create Account</Text>
    </Button>
   

    

<Button block bordered rounded iconLeft light style={styles.FbBtn} onPress={() => this.props.navigation.navigate('CreatSocial')} > 
            <Icon name='facebook-f' />
            <Text>Continue with FaceBook</Text>
          </Button>

    </View>

    
<View style={{width: "80%",alignSelf: "center",}}>
<Button transparent onPress={() => this.props.navigation.goBack()}>
    <Text style={{color: '#fff'}}>More Options</Text>
    </Button>
    </View>




     <View style={{width: "80%",alignSelf: "center",flexDirection: 'row'}}>
    <CheckBox checked={true} /><Text style={{marginLeft:'6%',color:'#fff'}}>I agree with terms and conditions</Text>
    </View>


    </View>


    

    

    

    

   
    </ImageBackground>
    </Container>
   
   );
 }
}

export default CreatAccount;