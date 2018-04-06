import React, { Component } from 'react';
import { View,ImageBackground,Image } from "react-native";
import { Container, Header, Content,Item,Button,Input,Icon,Text,Thumbnail } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

import styles from "./styles";

const cat1 = require("../../../assets/cat1.jpg");
const cat2 = require("../../../assets/cat2.jpg");
const cat3 = require("../../../assets/cat3.jpg");
const cat4 = require("../../../assets/cat4.jpg");
const cat5 = require("../../../assets/cat5.jpg");
const cat6 = require("../../../assets/cat6.jpg");

const launchscreenBg = require("../../../assets/firstscreen-bg.png");

class SelectCat extends Component {
  render() {
    return (
      <Container>
        <Header searchBar rounded>
          <Item>
            
            <Input placeholder="Type or select your top cuisines" />
            <Icon name="search" />
          </Item>
          <Button transparent onPress={() => this.props.navigation.navigate('Login')}>
    <Text style={{color: '#fff'}}>Login</Text>
    </Button>
         
        </Header>
        <Content>
          <Grid style={{padding: 5}}>
          <Row>
            <Col style={{height: 150}}>
            <ImageBackground source={cat1} style={styles.fullwidth}>
            <View style={{width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)',}}>
            <View>
            <Text style={{alignSelf: 'flex-end',padding:2}}><Icon name="check-square-o" style={{color:'#5fba5d',fontSize: 16}}/></Text>
            </View>
              <View style={{justifyContent: 'center',width: '100%', height: '70%' }}>

              <Text style={{color: '#fff',alignSelf: 'center',fontWeight: 'bold'}}>Category 1</Text>
             
            </View>
            </View>

            </ImageBackground>
            </Col>
            <Col style={{height: 150}}>
            <ImageBackground source={cat2} style={styles.fullwidth}>
              <View style={{width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center' }}>
              <Text style={{color: '#fff',alignSelf: 'center',fontWeight: 'bold'}}>Category 2</Text>
             
            </View>
            </ImageBackground>
            </Col>
          </Row>
          <Row>
            <Col style={{height: 150}}>
            <ImageBackground source={cat3} style={styles.fullwidth}>
              <View style={{width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center' }}>
              <Text style={{color: '#fff',alignSelf: 'center',fontWeight: 'bold'}}>Category 3</Text>
             
            </View>
            </ImageBackground>
            </Col>
            <Col style={{height: 150}}>
            <ImageBackground source={cat4} style={styles.fullwidth}>
              <View style={{width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center' }}>
              <Text style={{color: '#fff',alignSelf: 'center',fontWeight: 'bold'}}>Category 4</Text>
             
            </View>
            </ImageBackground>
            </Col>
          </Row>
          <Row>
            <Col style={{height: 150}}>
            <ImageBackground source={cat5} style={styles.fullwidth}>
              <View style={{width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center' }}>
              <Text style={{color: '#fff',alignSelf: 'center',fontWeight: 'bold'}}>Category 5</Text>
             
            </View>
            </ImageBackground>
            </Col>
            <Col style={{height: 150}}>
            <ImageBackground source={cat6} style={styles.fullwidth}>
              <View style={{width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center' }}>
              <Text style={{color: '#fff',alignSelf: 'center',fontWeight: 'bold'}}>Category 6</Text>
             
            </View>
            </ImageBackground>
            </Col>
          </Row>
          <Row>
            <Col style={{height: 150}}>
            <ImageBackground source={cat1} style={styles.fullwidth}>
              <View style={{width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center' }}>
              <Text style={{color: '#fff',alignSelf: 'center',fontWeight: 'bold'}}>Category 1</Text>
             
            </View>
            </ImageBackground>
            </Col>
            <Col style={{height: 150}}>
            <ImageBackground source={cat2} style={styles.fullwidth}>
              <View style={{width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center' }}>
              <Text style={{color: '#fff',alignSelf: 'center',fontWeight: 'bold'}}>Category 2</Text>
             
            </View>
            </ImageBackground>
            </Col>
          </Row>
          <Row>
            <Col style={{height: 150}}>
            <ImageBackground source={cat3} style={styles.fullwidth}>
              <View style={{width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center' }}>
              <Text style={{color: '#fff',alignSelf: 'center',fontWeight: 'bold'}}>Category 3</Text>
             
            </View>
            </ImageBackground>
            </Col>
            <Col style={{height: 150}}>
            <ImageBackground source={cat4} style={styles.fullwidth}>
              <View style={{width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center' }}>
              <Text style={{color: '#fff',alignSelf: 'center',fontWeight: 'bold'}}>Category 4</Text>
             
            </View>
            </ImageBackground>
            </Col>
          </Row>
          <Row>
            <Col style={{height: 150}}>
            <ImageBackground source={cat5} style={styles.fullwidth}>
              <View style={{width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center' }}>
              <Text style={{color: '#fff',alignSelf: 'center',fontWeight: 'bold'}}>Category 5</Text>
             
            </View>
            </ImageBackground>
            </Col>
            <Col style={{height: 150}}>
            <ImageBackground source={cat6} style={styles.fullwidth}>
              <View style={{width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center' }}>
              <Text style={{color: '#fff',alignSelf: 'center',fontWeight: 'bold'}}>Category 6</Text>
             
            </View>
            </ImageBackground>
            </Col>
          </Row>
          
          </Grid>
        </Content>
      </Container>
    );
  }
}

export default SelectCat;