import React, { Component } from "react";
import { View, StatusBar,Image,TouchableOpacity,ScrollView } from "react-native";
import {Container, Header, Content, Text, Body, Title,Left,Button, Right,Icon,Form,Picker,Item,Segment,Card,CardItem,Thumbnail} from "native-base";

import CardView from "./cardsview";

import styles from "./styles";

const Img1 = require("../../../assets/banner1.jpg");
const Img2 = require("../../../assets/banner2.jpg");
const Img3 = require("../../../assets/banner3.jpg");

class HomePage extends Component {

  render() {
          return (

    <Container style={{backgroundColor: '#fff'}}>
    <StatusBar barStyle="light-content" 
              backgroundColor="#a9343a" />
        <View style={{backgroundColor: '#a9343a'}}>       
               <View style={{marginTop: 5, width: '100%'}}>
           <CardView title='Chosen option' expanded={false} >
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
      <Content padder>
          <View>
              <Text style={{fontSize: 18,marginTop: 5,marginBottom: 5,marginLeft:10}} >Favorite Restaurants</Text>
          </View>

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
         
         <Card transparent style={{borderColor: '#fff',width: 335}}>
           <CardItem cardBody button onPress={() => this.props.navigation.navigate('PkRestaurantPage')}>
             <Body>
              <Image source={Img1} style={{width: '100%', height: 140,position: 'relative'}} />
               <Icon name='heart-o' style={{color: '#fff',fontSize: 20, position: 'absolute', top: 5, left: 5}}/>
               </Body>
               </CardItem>
            <CardItem cardBody style={{marginTop: 5}}>
            <Left>
            <Text style={{fontWeight: 'bold', lineHeight: 25}}>The Costal Gril - Gril {"\n"} <Text style={{color:'#999',fontWeight: 'normal',fontSize: 13}}>ITALIAN</Text></Text>

            
            </Left>
            
            <Right><Text style={{marginRight: 10}}>2.5 KM</Text></Right>
           </CardItem>
         </Card>

         <Card transparent style={{borderColor: '#fff', width: 335}}>
           <CardItem cardBody button onPress={() => this.props.navigation.navigate('PkRestaurantPage')}>
             <Body>
              <Image source={Img2} style={{width: '100%', height: 140,position: 'relative'}} />
               <Icon name='heart-o' style={{color: '#fff',fontSize: 20, position: 'absolute', top: 5, left: 5}}/>
               </Body>
               </CardItem>
            <CardItem cardBody style={{marginTop: 5}}>
            <Left>
            <Text style={{fontWeight: 'bold', lineHeight: 25}}>The Costal Gril - Gril {"\n"} <Text style={{color:'#999',fontWeight: 'normal',fontSize: 13}}>ITALIAN</Text></Text>

            
            </Left>
            
            <Right><Text style={{marginRight: 10}}>2.5 KM</Text></Right>
           </CardItem>
         </Card>

         <Card transparent style={{borderColor: '#fff',width: 335}}>
           <CardItem cardBody button onPress={() => this.props.navigation.navigate('PkRestaurantPage')}>
             <Body>
              <Image source={Img3} style={{width: '100%', height: 140,position: 'relative'}} />
               <Icon name='heart-o' style={{color: '#fff',fontSize: 20, position: 'absolute', top: 5, left: 5}}/>
               </Body>
               </CardItem>
            <CardItem cardBody style={{marginTop: 5}}>
            <Left>
            <Text style={{fontWeight: 'bold', lineHeight: 25}}>The Costal Gril - Gril {"\n"} <Text style={{color:'#999',fontWeight: 'normal',fontSize: 13}}>ITALIAN</Text></Text>

            
            </Left>
            
            <Right><Text style={{marginRight: 10}}>2.5 KM</Text></Right>
           </CardItem>
         </Card>
</ScrollView>


 <View>
              <Text style={{fontSize: 18,marginTop: 5,marginBottom: 5,marginLeft:10}} >Popular Restaurants</Text>
          </View>

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
         
         <Card transparent style={{borderColor: '#fff',width: 335}}>
           <CardItem cardBody button onPress={() => this.props.navigation.navigate('PkRestaurantPage')}>
             <Body>
              <Image source={Img2} style={{width: '100%', height: 140,position: 'relative'}} />
               <Icon name='heart-o' style={{color: '#fff',fontSize: 20, position: 'absolute', top: 5, left: 5}}/>
               </Body>
               </CardItem>
            <CardItem cardBody style={{marginTop: 5}}>
            <Left>
            <Text style={{fontWeight: 'bold', lineHeight: 25}}>The Costal Gril - Gril {"\n"} <Text style={{color:'#999',fontWeight: 'normal',fontSize: 13}}>ITALIAN</Text></Text>

            
            </Left>
            
            <Right><Text style={{marginRight: 10}}>2.5 KM</Text></Right>
           </CardItem>
         </Card>

         <Card transparent style={{borderColor: '#fff',width: 335}}>
           <CardItem cardBody button onPress={() => this.props.navigation.navigate('PkRestaurantPage')}>
             <Body>
              <Image source={Img3} style={{width: '100%', height: 140,position: 'relative'}} />
               <Icon name='heart-o' style={{color: '#fff',fontSize: 20, position: 'absolute', top: 5, left: 5}}/>
               </Body>
               </CardItem>
            <CardItem cardBody style={{marginTop: 5}}>
            <Left>
            <Text style={{fontWeight: 'bold', lineHeight: 25}}>The Costal Gril - Gril {"\n"} <Text style={{color:'#999',fontWeight: 'normal',fontSize: 13}}>ITALIAN</Text></Text>

            
            </Left>
            
            <Right><Text style={{marginRight: 10}}>2.5 KM</Text></Right>
           </CardItem>
         </Card>

         <Card transparent style={{borderColor: '#fff',width: 335}}>
           <CardItem cardBody button onPress={() => this.props.navigation.navigate('PkRestaurantPage')}>
             <Body>
              <Image source={Img1} style={{width: '100%', height: 140,position: 'relative'}} />
               <Icon name='heart-o' style={{color: '#fff',fontSize: 20, position: 'absolute', top: 5, left: 5}}/>
               </Body>
               </CardItem>
            <CardItem cardBody style={{marginTop: 5}}>
            <Left>
            <Text style={{fontWeight: 'bold', lineHeight: 25}}>The Costal Gril - Gril {"\n"} <Text style={{color:'#999',fontWeight: 'normal',fontSize: 13}}>ITALIAN</Text></Text>

            
            </Left>
            
            <Right><Text style={{marginRight: 10}}>2.5 KM</Text></Right>
           </CardItem>
         </Card>
</ScrollView>

 <View>
              <Text style={{fontSize: 18,marginTop: 5,marginBottom: 5,marginLeft:10}} >Restaurants Near You</Text>
          </View>

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
         
         <Card transparent style={{borderColor: '#fff',width: 335}}>
           <CardItem cardBody button onPress={() => this.props.navigation.navigate('PkRestaurantPage')}>
             <Body>
              <Image source={Img3} style={{width: '100%', height: 140,position: 'relative'}} />
               <Icon name='heart-o' style={{color: '#fff',fontSize: 20, position: 'absolute', top: 5, left: 5}}/>
               </Body>
               </CardItem>
            <CardItem cardBody style={{marginTop: 5}}>
            <Left>
            <Text style={{fontWeight: 'bold', lineHeight: 25}}>The Costal Gril - Gril {"\n"} <Text style={{color:'#999',fontWeight: 'normal',fontSize: 13}}>ITALIAN</Text></Text>

            
            </Left>
            
            <Right><Text style={{marginRight: 10}}>2.5 KM</Text></Right>
           </CardItem>
         </Card>

         <Card transparent style={{borderColor: '#fff',width: 335}}>
           <CardItem cardBody button onPress={() => this.props.navigation.navigate('PkRestaurantPage')}>
             <Body>
              <Image source={Img1} style={{width: '100%', height: 140,position: 'relative'}} />
               <Icon name='heart-o' style={{color: '#fff',fontSize: 20, position: 'absolute', top: 5, left: 5}}/>
               </Body>
               </CardItem>
            <CardItem cardBody style={{marginTop: 5}}>
            <Left>
            <Text style={{fontWeight: 'bold', lineHeight: 25}}>The Costal Gril - Gril {"\n"} <Text style={{color:'#999',fontWeight: 'normal',fontSize: 13}}>ITALIAN</Text></Text>

            
            </Left>
            
            <Right><Text style={{marginRight: 10}}>2.5 KM</Text></Right>
           </CardItem>
         </Card>

         <Card transparent style={{borderColor: '#fff',width: 335}}>
           <CardItem cardBody button onPress={() => this.props.navigation.navigate('PkRestaurantPage')}>
             <Body>
              <Image source={Img2} style={{width: '100%', height: 140,position: 'relative'}} />
               <Icon name='heart-o' style={{color: '#fff',fontSize: 20, position: 'absolute', top: 5, left: 5}}/>
               </Body>
               </CardItem>
            <CardItem cardBody style={{marginTop: 5}}>
            <Left>
            <Text style={{fontWeight: 'bold', lineHeight: 25}}>The Costal Gril - Gril {"\n"} <Text style={{color:'#999',fontWeight: 'normal',fontSize: 13}}>ITALIAN</Text></Text>

            
            </Left>
            
            <Right><Text style={{marginRight: 10}}>2.5 KM</Text></Right>
           </CardItem>
         </Card>
</ScrollView>





      </Content>

      </Container>
    );
  }
}

export default HomePage;