import React, { Component } from "react";
import { View,Dimensions,Image,ImageBackground } from "react-native";
import { Text, Button } from "native-base";

import styles from "./styles";

const launchscreenBg = require("../../../assets/firstscreen-bg.png");

class Home extends Component {

constructor(){
 
    super();
 
    this.state={
 
      isVisible : true,
 
    }
 
  }
 
  Hide_Splash_Screen=()=>{
 
    this.setState({ 
      isVisible : false 
 
    });
 
  }
 
  componentDidMount(){
 
    var that = this;
 
    setTimeout(function(){
 
      that.Hide_Splash_Screen();
      that.props.navigation.navigate('CreatAccount')
 
    }, 5000);
 
 
  
  }

 render() {
  let Splash_Screen = (

 <View>

        <Image source={launchscreenBg}  />
 

 
 
               
 
            
            </View> )
   return (



    <View>
     

                {
                  (this.state.isVisible === true) ? Splash_Screen : null
                }
    <Button block rounded danger style={{alignSelf: "center",marginBottom: 20,marginTop: 50 }} onPress={() => this.props.navigation.navigate('CreatAccount')} >
    <Text>Account Flow</Text>
    </Button>

    <Button block rounded danger style={{alignSelf: "center",marginBottom: 20 }} onPress={() => this.props.navigation.navigate('Main')} >
    <Text>main page</Text>
    </Button>

    <Button block rounded danger style={{alignSelf: "center",marginBottom: 20 }} onPress={() => this.props.navigation.navigate('RestaurantwithTime')} >
    <Text>Reservation flow</Text>
    </Button>

    <Button block rounded danger style={{alignSelf: "center",marginBottom: 20 }} onPress={() => this.props.navigation.navigate('RestaurantPage')} >
    <Text>Dine In and Pick Up flow</Text>
    </Button>
    
    </View>
     
   
   );
 }
}

export default Home;