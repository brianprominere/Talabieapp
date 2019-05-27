import React, { Component } from "react";
import { View,ImageBackground, StatusBar } from "react-native";
import { Container,Text,Button,Icon,CheckBox,Content } from "native-base";

import styles from "./styles";
 
const launchscreenlogo = require("../../../assets/logo.png");

class Home extends Component {
 render() {
   return (
     
    <Container style={styles.BgContainer}>   
      <StatusBar hidden={true} />
      <Content>
         <View>
            <View style={styles.loginLink}>
                <Button transparent onPress={() => this.props.navigation.navigate('Login')}>
                  <Text style={{color: '#fff',fontSize: 16}} uppercase={false}>Log in</Text></Button>
            </View>  
                 <ImageBackground source={launchscreenlogo} style={styles.imageLogo} />
            <View>
                <Button block rounded style={styles.CreateAccountBtn} onPress={() => this.props.navigation.navigate('RegOne')} >
                  <Text uppercase={false} style={{color: '#a9343a', fontWeight: 'bold', fontSize: 16}}>Create Account</Text>
                </Button>
                <Button block bordered rounded iconLeft light style={styles.FbBtn} onPress={() => this.props.navigation.navigate('CreatSocial')} > 
                  <Icon name='facebook' />
                  <Text uppercase={false} style={{fontWeight: 'bold', fontSize: 16}}>Continue with Facebook</Text>
                </Button>
           </View>
            <View style={{width: "80%",alignSelf: "center", marginBottom: 15}}>
                <Button transparent onPress={() => this.props.navigation.navigate('CreatSocial')}>
                  <Text style={{color: '#fff',textDecorationLine: 'underline'}} uppercase={false}>More Options</Text>
                </Button>
            </View>
            <View style={{width: "80%",alignSelf: "center",flexDirection: 'row'}}>
                <CheckBox checked={true} color= '#fff' checkedColor="#000" /><Text style={{marginLeft:'6%',color:'#fff'}}>I agree with terms and conditions</Text>
            </View>
        </View>
      </Content>
    </Container>
   
   );
 }
}
export default Home;