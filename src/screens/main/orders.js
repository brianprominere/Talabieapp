import React, { Component } from "react";
import { View, StatusBar } from "react-native";
import {Container,Header,Title,Content, List, ListItem, Left, Body, Right, Thumbnail, Text,Button,Icon} from "native-base";

import styles from "./styles";

const Img1 = require("../../../assets/banner1.jpg");
const Img2 = require("../../../assets/banner2.jpg");
const Img3 = require("../../../assets/banner3.jpg");

class Orders extends Component {
  render() {
    return (

    	<Container>

      <View style={{width: '100%',backgroundColor: '#A5363D', flexDirection: 'row', height: 40 }}>
        <View style={{width: '20%'}}>
        <Button small transparent onPress={() => this.props.navigation.navigate('HomePage')}>
                <Icon name='angle-left' style={{color: '#fff'}}/>
            </Button>
        </View>
        <View style={{width: '60%'}}>
        <Text style={{color: '#fff',textAlign: 'center',paddingTop: 10}}>My Orders</Text>
        </View>
        <View style={{width: '20%'}}>
        </View>
      </View>

      

       <Content>
       <List>
            <ListItem onPress={() => this.props.navigation.navigate('FoodItem')} style={{flexDirection: 'row',padding: 0, margin:0}}>
              <View style={{marginRight: 10}}><Thumbnail style={{width: 40, height: 40, borderRadius: 40/2}}source={Img1} /></View>
              <View><Text>Costa Grill {'\n'}<Text style={{fontSize: 12}}>Sliced chicken with onions, sweet {'\n'}10/102018    6:36 PM{'\n'}Credit Cart</Text></Text></View>
              <Right style={{alignItems: 'flex-end',flex: 1}}><Text>$200</Text></Right>
            </ListItem>
            <ListItem onPress={() => this.props.navigation.navigate('FoodItem')} style={{flexDirection: 'row',padding: 0, margin:0}}>
              <View style={{marginRight: 10}}><Thumbnail style={{width: 40, height: 40, borderRadius: 40/2}}source={Img2} /></View>
              <View><Text>Mc Donald's {'\n'}<Text style={{fontSize: 12}}>Sliced chicken with onions, sweet {'\n'}10/102018    6:36 PM{'\n'}Credit Cart</Text></Text></View>
              <Right style={{alignItems: 'flex-end',flex: 1}}><Text>$200</Text></Right>
            </ListItem>
            <ListItem onPress={() => this.props.navigation.navigate('FoodItem')} style={{flexDirection: 'row',padding: 0, margin:0}}>
              <View style={{marginRight: 10}}><Thumbnail style={{width: 40, height: 40, borderRadius: 40/2}}source={Img3} /></View>
              <View><Text>Rk Grand {'\n'}<Text style={{fontSize: 12}}>Sliced chicken with onions, sweet {'\n'}10/102018    6:36 PM{'\n'}Credit Cart</Text></Text></View>
              <Right style={{alignItems: 'flex-end',flex: 1}}><Text>$200</Text></Right>
            </ListItem><ListItem onPress={() => this.props.navigation.navigate('FoodItem')} style={{flexDirection: 'row',padding: 0, margin:0}}>
              <View style={{marginRight: 10}}><Thumbnail style={{width: 40, height: 40, borderRadius: 40/2}}source={Img1} /></View>
              <View><Text>GRT Grand {'\n'}<Text style={{fontSize: 12}}>Sliced chicken with onions, sweet {'\n'}10/102018    6:36 PM{'\n'}Credit Cart</Text></Text></View>
              <Right style={{alignItems: 'flex-end',flex: 1}}><Text>$200</Text></Right>
            </ListItem>
            <ListItem onPress={() => this.props.navigation.navigate('FoodItem')} style={{flexDirection: 'row',padding: 0, margin:0}}>
              <View style={{marginRight: 10}}><Thumbnail style={{width: 40, height: 40, borderRadius: 40/2}}source={Img2} /></View>
              <View><Text>Costa Grill {'\n'}<Text style={{fontSize: 12}}>Sliced chicken with onions, sweet {'\n'}10/102018    6:36 PM{'\n'}Credit Cart</Text></Text></View>
              <Right style={{alignItems: 'flex-end',flex: 1}}><Text>$200</Text></Right>
            </ListItem>
            <ListItem onPress={() => this.props.navigation.navigate('FoodItem')} style={{flexDirection: 'row',padding: 0, margin:0}}>
              <View style={{marginRight: 10}}><Thumbnail style={{width: 40, height: 40, borderRadius: 40/2}}source={Img3} /></View>
              <View><Text>Mc Donald's {'\n'}<Text style={{fontSize: 12}}>Sliced chicken with onions, sweet {'\n'}10/102018    6:36 PM{'\n'}Credit Cart</Text></Text></View>
              <Right style={{alignItems: 'flex-end',flex: 1}}><Text>$200</Text></Right>
            </ListItem>
            <ListItem onPress={() => this.props.navigation.navigate('FoodItem')} style={{flexDirection: 'row',padding: 0, margin:0}}>
              <View style={{marginRight: 10}}><Thumbnail style={{width: 40, height: 40, borderRadius: 40/2}}source={Img1} /></View>
              <View><Text>GRT Grand {'\n'}<Text style={{fontSize: 12}}>Sliced chicken with onions, sweet {'\n'}10/102018    6:36 PM{'\n'}Credit Cart</Text></Text></View>
              <Right style={{alignItems: 'flex-end',flex: 1}}><Text>$200</Text></Right>
            </ListItem>
            

            



            
          </List>







          
        </Content>
        </Container>
    );
  }
}

export default Orders;