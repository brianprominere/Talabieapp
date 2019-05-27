import React, { Component } from 'react';
import { View,ImageBackground,Image } from "react-native";
import { Container, Header, Content,Item,Button,Input,Icon,Text,Thumbnail, Footer } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

import styles from "./styles";

const cat1 = require("../../../assets/cat1.jpg");
const cat2 = require("../../../assets/cat2.jpg");
const cat3 = require("../../../assets/cat3.jpg");
const cat4 = require("../../../assets/cat4.jpg");
const cat5 = require("../../../assets/cat5.jpg");
const cat6 = require("../../../assets/cat6.jpg");

const nextbtn = require("../../../assets/nextbtn.png");


class SelectCat extends Component {
  render() {
    return (
     <Container style={styles.bg}>
        <Header searchBar rounded>
          <Item style={styles.searchboxitem}> 
            <Input placeholder="Type or select your top cuisines" placeholderTextColor="#fff" style={styles.searchbox} />
            <Icon name="search" style={{color:'#fff',fontSize: 16}} />
          </Item>                   
        </Header>
        <Content>
          <Grid style={{padding: 5}}>
              <Row>
                <Col style={{height: 150,padding: 2}} onPress={() => this.props.navigation.navigate('Main')}>
                  <ImageBackground source={cat1} style={styles.fullwidth}>
                    <View style={{width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.6)',}}>
                    <View>
                        <Text style={{alignSelf: 'flex-end',padding:5}}><Icon name="check-circle" style={{color:'#5fba5d',fontSize: 20}}/></Text>
                    </View>
                    <View style={{justifyContent: 'center',width: '100%', height: '70%' }}>
                        <Text style={{color: '#fff',alignSelf: 'center',fontWeight: 'normal'}}>Miditerranean </Text>   
                    </View>
                    </View>
                        </ImageBackground>
                </Col>
                <Col style={{height: 150,padding: 2}} onPress={() => this.props.navigation.navigate('Main')}>
                  <ImageBackground source={cat2} style={styles.fullwidth}>
                      <View style={{width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.8)', justifyContent: 'center' }}>
                        <Text style={{color: '#fff',alignSelf: 'center',fontWeight: 'normal'}}>Middle Eastern</Text> 
                      </View>
                  </ImageBackground>
                </Col>
             </Row>
              <Row>
                <Col style={{height: 150,padding: 2}} onPress={() => this.props.navigation.navigate('Main')}>
                    <ImageBackground source={cat3} style={styles.fullwidth}>
                        <View style={{width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.8)', justifyContent: 'center' }}>
                          <Text style={{color: '#fff',alignSelf: 'center',fontWeight: 'normal'}}>Comfort Food</Text>
             
            </View>
            </ImageBackground>
              </Col>
              <Col style={{height: 150,padding: 2}} onPress={() => this.props.navigation.navigate('Main')}>
                    <ImageBackground source={cat4} style={styles.fullwidth}>
                        <View style={{width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.8)', justifyContent: 'center' }}>
                            <Text style={{color: '#fff',alignSelf: 'center',fontWeight: 'normal'}}>Desserts</Text>
                        </View>
                    </ImageBackground>
              </Col>
            </Row>
            <Row>
                <Col style={{height: 150,padding: 2}} onPress={() => this.props.navigation.navigate('Main')}>
                    <ImageBackground source={cat5} style={styles.fullwidth}>
                        <View style={{width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.8)', justifyContent: 'center' }}>
                          <Text style={{color: '#fff',alignSelf: 'center',fontWeight: 'normal'}}>Sandwiches</Text>
             
            </View>
            </ImageBackground>
              </Col>
              <Col style={{height: 150,padding: 2}} onPress={() => this.props.navigation.navigate('Main')}>
                    <ImageBackground source={cat6} style={styles.fullwidth}>
                        <View style={{width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.8)', justifyContent: 'center' }}>
                            <Text style={{color: '#fff',alignSelf: 'center',fontWeight: 'normal'}}>Italian</Text>
                        </View>
                    </ImageBackground>
              </Col>
            </Row>
              <Row>
                <Col style={{height: 150,padding: 2}} onPress={() => this.props.navigation.navigate('Main')}>
                    <ImageBackground source={cat1} style={styles.fullwidth}>
                        <View style={{width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.8)', justifyContent: 'center' }}>
                          <Text style={{color: '#fff',alignSelf: 'center',fontWeight: 'normal'}}>Indian</Text>
             
            </View>
            </ImageBackground>
              </Col>
              <Col style={{height: 150,padding: 2}} onPress={() => this.props.navigation.navigate('Main')}>
                    <ImageBackground source={cat2} style={styles.fullwidth}>
                        <View style={{width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.8)', justifyContent: 'center' }}>
                            <Text style={{color: '#fff',alignSelf: 'center',fontWeight: 'normal'}}>Japanese</Text>
                        </View>
                    </ImageBackground>
              </Col>
            </Row>
            <Row>
                <Col style={{height: 150,padding: 2}} onPress={() => this.props.navigation.navigate('Main')}>
                    <ImageBackground source={cat3} style={styles.fullwidth}>
                        <View style={{width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.8)', justifyContent: 'center' }}>
                          <Text style={{color: '#fff',alignSelf: 'center',fontWeight: 'normal'}}>Thai</Text>
             
            </View>
            </ImageBackground>
              </Col>
              <Col style={{height: 150,padding: 2}} onPress={() => this.props.navigation.navigate('Main')}>
                    <ImageBackground source={cat4} style={styles.fullwidth}>
                        <View style={{width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.8)', justifyContent: 'center' }}>
                            <Text style={{color: '#fff',alignSelf: 'center',fontWeight: 'normal'}}>Spanish</Text>
                        </View>
                    </ImageBackground>
              </Col>
            </Row>
              <Row>
                <Col style={{height: 150,padding: 2}} onPress={() => this.props.navigation.navigate('Main')}>
                    <ImageBackground source={cat5} style={styles.fullwidth}>
                        <View style={{width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.8)', justifyContent: 'center' }}>
                          <Text style={{color: '#fff',alignSelf: 'center',fontWeight: 'normal'}}>Turkish</Text>
             
            </View>
            </ImageBackground>
              </Col>
              <Col style={{height: 150,padding: 2}} onPress={() => this.props.navigation.navigate('Main')}>
                    <ImageBackground source={cat6} style={styles.fullwidth}>
                        <View style={{width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.8)', justifyContent: 'center' }}>
                            <Text style={{color: '#fff',alignSelf: 'center',fontWeight: 'normal'}}>Mexican</Text>
                        </View>
                    </ImageBackground>
              </Col>
            </Row>
          </Grid>
        </Content>
        <View style={styles.gobtn}>
              <Button transparent onPress={() => this.props.navigation.navigate('Main')}>
              <ImageBackground source={nextbtn} style={styles.imagenext} />
              </Button>
        </View>
      </Container>
    );
  }
}

export default SelectCat;