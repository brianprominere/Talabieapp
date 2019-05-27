import React, { Component } from "react";
import { View, StatusBar,Image,TouchableOpacity,ScrollView } from "react-native";
import {Container, Header, Content, Text, Body, Title,Left,Button, Input, Right,Icon,Form,Picker,Item,Segment,Card,CardItem,Thumbnail} from "native-base";

import CardView from "./cardsview";

import styles from "./styles";

const Img1 = require("../../../assets/banner1.jpg");
const Img2 = require("../../../assets/banner2.jpg");
const Img3 = require("../../../assets/banner3.jpg");

class Reservation extends Component {

  render() {
          return (

    <Container style={{backgroundColor: '#fff'}}>
    <StatusBar barStyle="light-content" 
              backgroundColor="#a9343a" />
        <View style={{backgroundColor: '#a9343a'}}>       
              <View style={{marginTop: 5, width: '100%', alignSelf: 'center'}}>
                <CardView title='Reservation' expanded={false} >
                  <View style={{width: '100%',paddingTop: '3%', paddingBottom: '3%', paddingLeft: '3%', paddingRight: '3%', backgroundColor: '#24B300'}}>
          <Button full style={styles.topbtn} onPress={() => this.props.navigation.navigate('FilterPage')}>
            <Text uppercase={false} style={{fontSize: 18,width: '100%'}}>Reservation</Text>
          </Button>
          <Button full style={styles.topbtn} onPress={() => this.props.navigation.navigate('DnFilterPage')}>
            <Text uppercase={false} style={{fontSize: 18,width: '100%'}}>Dine in</Text>
          </Button>
          <Button full style={styles.topbtn} onPress={() => this.props.navigation.navigate('PkFilterPage')}>
            <Text uppercase={false} style={{fontSize: 18,width: '100%'}}>Pick up</Text>
          </Button>
          </View>
                </CardView>
              </View>
        </View>

        <View style={{backgroundColor: '#24B400'}}>       
              <View style={{marginTop: 5, width: '95%', alignSelf: 'center'}}>
                <CardView title='Change Options' expanded={false} >
                  <View style={{width: '100%'}}>
                    <Item style={{backgroundColor: '#41C42C',marginTop: 4, marginBottom: 2,borderBottomWidth: 0}}>
                      <Icon active name='clock-o' style={{color: '#FFF',fontSize: 16,marginLeft: 15}} />
                      <Input placeholder='Choose Time' placeholderTextColor="#fff" style={{color: '#fff',fontSize: 16}}/>
                      <Icon active name='angle-down' style={{color: '#FFF',fontSize: 20,marginRight: 15}} />
                    </Item>
                    <Item style={{backgroundColor: '#41C42C',marginTop: 4, marginBottom: 2,borderBottomWidth: 0}}>
                      <Icon active name='calendar' style={{color: '#FFF',fontSize: 16,marginLeft: 15}} />
                      <Input placeholder='Choose Date' placeholderTextColor="#fff" style={{color: '#fff',fontSize: 16}}/>
                      <Icon active name='angle-down' style={{color: '#FFF',fontSize: 20,marginRight: 15}} />
                    </Item>
                    <Item style={{backgroundColor: '#41C42C',marginTop: 4, marginBottom: 8,borderBottomWidth: 0}}>
                      <Icon active name='user-o' style={{color: '#FFF',fontSize: 16,marginLeft: 15}} />
                      <Input placeholder='Guest Number' placeholderTextColor="#fff" style={{color: '#fff',fontSize: 16}}/>
                    </Item>
                  </View>
                </CardView>
              </View>
        </View>
      <Content padder>
          
          <Card transparent style={{borderColor: '#fff'}}>
           <CardItem cardBody button onPress={() => this.props.navigation.navigate('RestaurantwithTime')}>
             <Body>
              <Image source={Img1} style={{width: '100%', height: 140,position: 'relative'}} />
               <Icon name='heart-o' style={{color: '#fff',fontSize: 20, position: 'absolute', top: 5, left: 5}}/>
               </Body>
               </CardItem>
            <CardItem cardBody style={{marginTop: 5}}>
            <View style={{width: '85%'}}>
            <Text style={{fontWeight: 'bold', lineHeight: 25,marginLeft: 0, marginRight: 0}}>The Costal Gril - Gril {"\n"} <Text style={{color:'#999',fontWeight: 'normal',fontSize: 14}}>ITALIAN</Text></Text>

            
            </View>
            
            <View style={{width: '15%'}}><Text style={{marginRight: 10,fontSize: 14,marginLeft: 0, marginRight: 0,alignSelf: 'flex-end'}}>2.5 KM{"\n"}{"\n"}</Text></View>
           </CardItem>
         </Card>

         <Card transparent style={{borderColor: '#fff'}}>
           <CardItem cardBody button onPress={() => this.props.navigation.navigate('RestaurantwithTime')}>
             <Body>
              <Image source={Img2} style={{width: '100%', height: 140,position: 'relative'}} />
               <Icon name='heart-o' style={{color: '#fff',fontSize: 20, position: 'absolute', top: 5, left: 5}}/>
               </Body>
               </CardItem>
            <CardItem cardBody style={{marginTop: 5}}>



            <View style={{width: '85%'}}>
            <Text style={{fontWeight: 'bold', lineHeight: 25,marginLeft: 0, marginRight: 0,}}>The Costa Gril - Multicuisine Restaurant {"\n"} <Text style={{color:'#999',fontWeight: 'normal',fontSize: 14}}>COMFORT FOOD</Text></Text>

            
            </View>
            
            <View style={{width: '15%'}}><Text style={{marginRight: 10,fontSize: 14,marginLeft: 0, marginRight: 0,alignSelf: 'flex-end'}}>4 KM{"\n"}{"\n"}</Text></View>
           </CardItem>
         </Card>

         <Card transparent style={{borderColor: '#fff'}}>
           <CardItem cardBody button onPress={() => this.props.navigation.navigate('RestaurantwithTime')}>
             <Body>
              <Image source={Img3} style={{width: '100%', height: 140,position: 'relative'}} />
               <Icon name='heart-o' style={{color: '#fff',fontSize: 20, position: 'absolute', top: 5, left: 5}}/>
               </Body>
               </CardItem>
            <CardItem cardBody style={{marginTop: 5}}>
            <View style={{width: '85%'}}>
            <Text style={{fontWeight: 'bold', lineHeight: 25,marginLeft: 0, marginRight: 0}}>The Costal Gril - Gril {"\n"} <Text style={{color:'#999',fontWeight: 'normal',fontSize: 14}}>ITALIAN</Text></Text>

            
            </View>
            
            <View style={{width: '15%'}}><Text style={{marginRight: 10,fontSize: 14,marginLeft: 0, marginRight: 0,alignSelf: 'flex-end'}}>2.5 KM{"\n"}{"\n"}</Text></View>
           </CardItem>
         </Card>

         <Card transparent style={{borderColor: '#fff'}}>
           <CardItem cardBody button onPress={() => this.props.navigation.navigate('RestaurantwithTime')}>
             <Body>
              <Image source={Img1} style={{width: '100%', height: 140,position: 'relative'}} />
               <Icon name='heart-o' style={{color: '#fff',fontSize: 20, position: 'absolute', top: 5, left: 5}}/>
               </Body>
               </CardItem>
            <CardItem cardBody style={{marginTop: 5}}>
            <View style={{width: '85%'}}>
            <Text style={{fontWeight: 'bold', lineHeight: 25,marginLeft: 0, marginRight: 0}}>The Costal Gril - Gril {"\n"} <Text style={{color:'#999',fontWeight: 'normal',fontSize: 14}}>ITALIAN</Text></Text>

            
            </View>
            
            <View style={{width: '15%'}}><Text style={{marginRight: 10,fontSize: 14,marginLeft: 0, marginRight: 0,alignSelf: 'flex-end'}}>2.5 KM{"\n"}{"\n"}</Text></View>
           </CardItem>
         </Card>
      </Content>

      </Container>
    );
  }
}

export default Reservation;