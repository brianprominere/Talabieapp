import React, { Component } from "react";
import { View, StatusBar,Image,TouchableOpacity,ScrollView } from "react-native";
import {Container, Header, Content, Text, Body, Title,Left,Button, Right,Icon,Form,Picker,Item,Segment,Card,CardItem,Thumbnail} from "native-base";


import styles from "./styles";
import DropdownPage from "../dropdown";

const Img1 = require("../../../assets/ban1.jpg");
const Img2 = require("../../../assets/ban2.jpg");
const Img3 = require("../../../assets/ban3.jpg");

class InnerHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected1: "key1"
    };
  }
  onValueChange(value: string) {
    this.setState({
      selected1: value
    });
  }
  render() {
    return (

      <Container>

      <Content>
      <DropdownPage/>
<View>
<Text style={{fontSize: 18,marginTop: 5,marginBottom: 10,marginLeft:10}}>Favourite Restaurants</Text>
</View>
<ScrollView horizontal={true} style={{borderBottomWidth: 1,borderColor: '#ccc'}}>

          <Card style={styles.cardview}>
            <CardItem style={{paddingTop: 0,paddingLeft: 0,paddingRight: 0}}>
              <Body>
                <Image source={Img1} style={{width: '100%', height: 130}}/>
              </Body>
            </CardItem>
            <CardItem style={{paddingLeft: 0,}}>
              <Left>
                  <View style={{alignItems: 'flex-start'}}>
                  <Text style={{fontWeight: 'bold' }}>The Costa Gril 1</Text>
                  <Text style={{color:'#999',fontWeight:'normal', alignSelf:'flex-start'}}>Italian</Text>
                  </View>
              
              </Left>
              <Right>
              <Text>2.0 KM</Text>
              </Right>
            </CardItem>
          </Card>
          <Card style={styles.cardview}>
            <CardItem style={{paddingTop: 0,paddingLeft: 0,paddingRight: 0}}>
              <Body>
                <Image source={Img1} style={{width: '100%', height: 130}}/>
              </Body>
            </CardItem>
            <CardItem style={{paddingLeft: 0,}}>
              <Left>
                  <View style={{alignItems: 'flex-start'}}>
                  <Text style={{fontWeight: 'bold' }}>The Costa Gril 2</Text>
                  <Text style={{color:'#999',fontWeight:'normal', alignSelf:'flex-start'}}>Italian</Text>
                  </View>
              
              </Left>
              <Right>
              <Text>2.0 KM</Text>
              </Right>
            </CardItem>
          </Card>
</ScrollView>

<View>
<Text style={{fontSize: 18,marginTop: 5,marginBottom: 10,marginLeft:10}}>Popular Restaurants</Text>
</View>
<ScrollView horizontal={true} style={{borderBottomWidth: 1,borderColor: '#ccc'}}>
          <Card style={styles.cardview}>
            <CardItem style={{paddingTop: 0,paddingLeft: 0,paddingRight: 0}}>
              <Body>
                <Image source={Img1} style={{width: '100%', height: 130}}/>
              </Body>
            </CardItem>
            <CardItem style={{paddingLeft: 0,}}>
              <Left>
                  <View style={{alignItems: 'flex-start'}}>
                  <Text style={{fontWeight: 'bold' }}>The Costa Gril 3</Text>
                  <Text style={{color:'#999',fontWeight:'normal', alignSelf:'flex-start'}}>Italian</Text>
                  </View>
              
              </Left>
              <Right>
              <Text>2.0 KM</Text>
              </Right>
            </CardItem>
          </Card>
          <Card style={styles.cardview}>
            <CardItem style={{paddingTop: 0,paddingLeft: 0,paddingRight: 0}}>
              <Body>
                <Image source={Img1} style={{width: '100%', height: 130}}/>
              </Body>
            </CardItem>
            <CardItem style={{paddingLeft: 0,}}>
              <Left>
                  <View style={{alignItems: 'flex-start'}}>
                  <Text style={{fontWeight: 'bold' }}>The Costa Gril 4</Text>
                  <Text style={{color:'#999',fontWeight:'normal', alignSelf:'flex-start'}}>Italian</Text>
                  </View>
              
              </Left>
              <Right>
              <Text>2.0 KM</Text>
              </Right>
            </CardItem>
          </Card>
          <Card style={styles.cardview}>
            <CardItem style={{paddingTop: 0,paddingLeft: 0,paddingRight: 0}}>
              <Body>
                <Image source={Img1} style={{width: '100%', height: 130}}/>
              </Body>
            </CardItem>
            <CardItem style={{paddingLeft: 0,}}>
              <Left>
                  <View style={{alignItems: 'flex-start'}}>
                  <Text style={{fontWeight: 'bold' }}>The Costa Gril 5</Text>
                  <Text style={{color:'#999',fontWeight:'normal', alignSelf:'flex-start'}}>Italian</Text>
                  </View>
              
              </Left>
              <Right>
              <Text>2.0 KM</Text>
              </Right>
            </CardItem>
          </Card>
</ScrollView>

<View>
<Text style={{fontSize: 18,marginTop: 5,marginBottom: 10,marginLeft:10}}>Restaurants near you</Text>
</View>

<ScrollView horizontal={true} style={{borderBottomWidth: 1,borderColor: '#ccc'}}>
          <Card style={styles.cardview}>
            <CardItem style={{paddingTop: 0,paddingLeft: 0,paddingRight: 0}}>
              <Body>
                <Image source={Img1} style={{width: '100%', height: 130}}/>
              </Body>
            </CardItem>
            <CardItem style={{paddingLeft: 0,}}>
              <Left>
                  <View style={{alignItems: 'flex-start'}}>
                  <Text style={{fontWeight: 'bold' }}>The Costa Gril 6</Text>
                  <Text style={{color:'#999',fontWeight:'normal', alignSelf:'flex-start'}}>Italian</Text>
                  </View>
              
              </Left>
              <Right>
              <Text>2.0 KM</Text>
              </Right>
            </CardItem>
          </Card>
          <Card style={styles.cardview}>
            <CardItem style={{paddingTop: 0,paddingLeft: 0,paddingRight: 0}}>
              <Body>
                <Image source={Img1} style={{width: '100%', height: 130}}/>
              </Body>
            </CardItem>
            <CardItem style={{paddingLeft: 0,}}>
              <Left>
                  <View style={{alignItems: 'flex-start'}}>
                  <Text style={{fontWeight: 'bold' }}>The Costa Gril 7</Text>
                  <Text style={{color:'#999',fontWeight:'normal', alignSelf:'flex-start'}}>Italian</Text>
                  </View>
              
              </Left>
              <Right>
              <Text>2.0 KM</Text>
              </Right>
            </CardItem>
          </Card>
          <Card style={styles.cardview}>
            <CardItem style={{paddingTop: 0,paddingLeft: 0,paddingRight: 0}}>
              <Body>
                <Image source={Img1} style={{width: '100%', height: 130}}/>
              </Body>
            </CardItem>
            <CardItem style={{paddingLeft: 0,}}>
              <Left>
                  <View style={{alignItems: 'flex-start'}}>
                  <Text style={{fontWeight: 'bold' }}>The Costa Gril 8</Text>
                  <Text style={{color:'#999',fontWeight:'normal', alignSelf:'flex-start'}}>Italian</Text>
                  </View>
              
              </Left>
              <Right>
              <Text>2.0 KM</Text>
              </Right>
            </CardItem>
          </Card>
</ScrollView>






      </Content>

      </Container>
    );
  }
}

export default InnerHome;