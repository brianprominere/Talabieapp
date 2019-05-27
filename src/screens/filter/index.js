import React, { Component } from "react";
import { View, StatusBar,ImageBackground,Image } from "react-native";
import {Container,Header,Left,Right, Button,Icon,Body,Title,Content,Text,Form, Item, Input, Label, Footer,ListItem} from "native-base";

import { Col, Row, Grid } from "react-native-easy-grid";

import styles from "./styles";


class FilterPage extends Component {
  render() {
    return (

    	<Container>

          <StatusBar hidden={true} />
          <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.navigate('HomePage')}>
                <Icon name='angle-left' style={{color: '#fff'}}/>
            </Button>
          </Left>
          <Body>
            <Text style={{color: '#fff'}}>Location</Text>
          </Body>
          <Right />
          </Header>
     <Content padder>
      


<Form style={styles.formbottom}>
          
          <Text style={{fontWeight: 'bold',marginBottom: 10,marginLeft: 12, fontSize: 16 }}>
            Recent Locations
          </Text>

          <ListItem style={{paddingTop: 15, paddingBottom: 15}}> 
          <Icon active name='map-marker' style={{color: '#a9343a',fontSize: 18, marginRight: 10}} />            
            <Body>
              <Text style={{color: '#676767'}}>Balckfoot Corporate Center</Text>
            </Body>
          </ListItem>
          <ListItem style={{paddingTop: 15, paddingBottom: 15}}>  
          <Icon active name='map-marker' style={{color: '#a9343a',fontSize: 18, marginRight: 10}} />           
            <Body>
              <Text style={{color: '#676767'}}>4411 6th Street SE #110</Text>
            </Body>            
          </ListItem>
          <ListItem style={{paddingTop: 15, paddingBottom: 15}}> 
          <Icon active name='map-marker' style={{color: '#a9343a',fontSize: 18, marginRight: 10}} />            
            <Body>
              <Text style={{color: '#676767'}}>Calgary, Canada</Text>
            </Body>
          <Icon active name='check-circle' style={{color: '#60BE5B',fontSize: 20, marginRight: 10}} />
          </ListItem>
          <ListItem style={{paddingTop: 15, paddingBottom: 15}}>  
          <Icon active name='map-marker' style={{color: '#a9343a',fontSize: 18, marginRight: 10}} />           
            <Body>
              <Text style={{color: '#676767'}}>Current Location</Text>
            </Body>            
          </ListItem>


          <Text style={{fontWeight: 'bold',marginBottom: 10,marginTop: 20,marginLeft: 20 }}>
           When
          </Text>
          
           <ListItem style={{paddingTop: 15, paddingBottom: 15}}>
            
            <Body>
              <Text><Icon active name='clock-o' style={{fontSize: 18,color: '#bbb'}} />  Dine In</Text>
            </Body>
            
          </ListItem>
          

          
          <ListItem style={{paddingTop: 15, paddingBottom: 15}}>
            
            <Body>
              <Text><Icon active name='calendar' style={{fontSize: 18,color: '#bbb'}} />  Pickup</Text>
            </Body>
           
          </ListItem>
          <ListItem style={{borderBottomWidth: 0,paddingTop: 15, paddingBottom: 15}}>
            
            <Body>
              <Text><Icon active name='calendar-check-o' style={{fontSize: 18,color: '#bbb'}} />  Reservation</Text>
            </Body>
            <Icon active name='check-circle' style={{color: '#60BE5B',fontSize: 20, marginRight: 10}} />
          </ListItem>

          <Grid style={{width: '98%',marginRight: 'auto', marginLeft: 'auto'}}>
            <Col style={{borderWidth: 1, borderLeftWidth: 0, borderColor: '#ccc',width: '40%',paddingLeft: 5}}>
              <Item style={{borderBottomWidth: 0,marginLeft: 0}}>            
            <Input placeholder='Schedule a Date' style={{fontSize: 13, marginBottom: 0}}/>
            <Icon active name='calendar' style={{fontSize: 15,color: '#bbb'}} />
          </Item>
               
            </Col>
            <Col style={{borderWidth: 1, borderLeftWidth: 0, borderColor: '#ccc',width: '26%',paddingLeft: 5}}>
            <Item style={{borderBottomWidth: 0,marginLeft: 0}}>            
            <Input placeholder='Set Time' style={{fontSize: 13, marginBottom: 0}}/>
            <Icon active name='clock-o' style={{fontSize: 15,color: '#bbb',}} />
          </Item>
              
             

            </Col>
            <Col style={{borderWidth: 1, borderLeftWidth: 0, borderRightWidth: 0, borderColor: '#ccc',width: '34%',paddingLeft: 5}}>
            <Item style={{borderBottomWidth: 0,marginLeft: 0}}>            
            <Input placeholder='Number of Guest' style={{fontSize: 13, marginBottom: 0}}/>
          </Item>
          

            </Col>
          </Grid>

          

          </Form>

          <View style={{alignSelf: 'center',marginBottom: 20, marginTop: 20}}>

      <Button small success onPress={() => this.props.navigation.navigate('Reservation')}>
      <Text style={{width: '40%', textAlign: 'center'}}>Apply</Text>
      </Button>
      </View>




      </Content>
      </Container>
    );
  }
}

export default FilterPage;