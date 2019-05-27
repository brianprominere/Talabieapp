import React, { Component } from "react";
import {Container,Header,Text,List, ListItem, Left, Body, Right, Thumbnail,Icon} from "native-base";
import { View } from "react-native";

const Img1 = require("../../../assets/banner1.jpg");
const Img2 = require("../../../assets/banner2.jpg");
const Img3 = require("../../../assets/banner3.jpg");

class Main extends Component {
  render() {
    return (
      <Container>
 
     <List>
            <ListItem onPress={() => this.props.navigation.navigate('FoodItem')} style={{flexDirection: 'row',padding: 0, margin:0}}>
              <View style={{marginRight: 10}}><Thumbnail source={Img1} /></View>
              <View><Text>Costa Grill {'\n'}<Text note>Sliced chicken with onions, sweet {'\n'}</Text></Text></View>
              <Right style={{alignItems: 'flex-end',flex: 1}}><Icon name='heart' style={{color: '#a9343a',fontSize: 18}} /></Right>
            </ListItem>

            <ListItem onPress={() => this.props.navigation.navigate('FoodItem')} style={{flexDirection: 'row',padding: 0, margin:0}}>
              <View style={{marginRight: 10}}><Thumbnail source={Img2} /></View>
              <View><Text>Mc Donald's {'\n'}<Text note>Sliced chicken with onions, sweet {'\n'}</Text></Text></View>
              <Right style={{alignItems: 'flex-end',flex: 1}}><Icon name='heart' style={{color: '#a9343a',fontSize: 18}} /></Right>
            </ListItem>
            <ListItem onPress={() => this.props.navigation.navigate('FoodItem')} style={{flexDirection: 'row',padding: 0, margin:0}}>
              <View style={{marginRight: 10}}><Thumbnail source={Img3} /></View>
              <View><Text>Tostones with chicken {'\n'}<Text note>Sliced chicken with onions, sweet {'\n'}</Text></Text></View>
              <Right style={{alignItems: 'flex-end',flex: 1}}><Icon name='heart' style={{color: '#a9343a',fontSize: 18}} /></Right>
            </ListItem>

            <ListItem onPress={() => this.props.navigation.navigate('FoodItem')} style={{flexDirection: 'row',padding: 0, margin:0}}>
              <View style={{marginRight: 10}}><Thumbnail source={Img1} /></View>
              <View><Text>Costa Grill {'\n'}<Text note>Sliced chicken with onions, sweet {'\n'}</Text></Text></View>
              <Right style={{alignItems: 'flex-end',flex: 1}}><Icon name='heart' style={{color: '#a9343a',fontSize: 18}} /></Right>
            </ListItem>

            <ListItem onPress={() => this.props.navigation.navigate('FoodItem')} style={{flexDirection: 'row',padding: 0, margin:0}}>
              <View style={{marginRight: 10}}><Thumbnail source={Img2} /></View>
              <View><Text>Mc Donald's {'\n'}<Text note>Sliced chicken with onions, sweet {'\n'}</Text></Text></View>
              <Right style={{alignItems: 'flex-end',flex: 1}}><Icon name='heart' style={{color: '#a9343a',fontSize: 18}} /></Right>
            </ListItem>
            <ListItem onPress={() => this.props.navigation.navigate('FoodItem')} style={{flexDirection: 'row',padding: 0, margin:0}}>
              <View style={{marginRight: 10}}><Thumbnail source={Img3} /></View>
              <View><Text>Tostones with chicken {'\n'}<Text note>Sliced chicken with onions, sweet {'\n'}</Text></Text></View>
              <Right style={{alignItems: 'flex-end',flex: 1}}><Icon name='heart' style={{color: '#a9343a',fontSize: 18}} /></Right>
            </ListItem>
            




           


            
          </List>


      </Container>
    );
  }
}

export default Main;