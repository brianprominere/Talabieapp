import React, { Component } from "react";
import { View,ImageBackground,StatusBar } from "react-native";
import { Container,Text,Button,Icon,Content } from "native-base";

import styles from "./styles";

const launchscreenlogo = require("../../../assets/logo.png");

class CreatSocial extends Component {
 render() {
   return (
     
     <Container style={styles.BgContainer}>
      <StatusBar hidden={true} />
        <Content>
            <View style={styles.backLink}>
               <Button transparent onPress={() => this.props.navigation.goBack()}>   
                  <Icon name='angle-left' style={{color: '#fff'}}/>
              </Button>
            </View>
                <ImageBackground source={launchscreenlogo} style={styles.imageLogo} />
            <View>
                <Button block rounded iconLeft light style={styles.FbBtn} onPress={() => this.props.navigation.navigate('CreatSocial')} > 
                  <Icon name='facebook-f' style={{color: '#a9343a'}} />
                  <Text uppercase={false} style={{color: '#a9343a', fontWeight: 'bold', fontSize: 16}}>Continue with Facebook</Text>
                </Button>
                <Button block rounded iconLeft light style={styles.FbBtn} onPress={() => this.props.navigation.navigate('CreatSocial')} > 
                  <Icon name='google-plus' style={{color: '#a9343a'}} />
                  <Text uppercase={false} style={{color: '#a9343a', fontWeight: 'bold', fontSize: 16}}>Continue with Google+</Text>
                </Button>
                <Button block bordered rounded style={{width: '80%',alignSelf: "center",}} light onPress={() => this.props.navigation.navigate('RegOne')} > 
                  <Text uppercase={false} style={{fontWeight: 'bold', fontSize: 16}}>Create Account</Text>
                </Button>
            </View>
        </Content>
    </Container>
   );
 }
}
export default CreatSocial;