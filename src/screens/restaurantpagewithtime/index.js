import React, { Component } from "react";
import { View, StatusBar,ImageBackground,Image,ScrollView } from "react-native";
import {Container,Header,Left,Button,Icon,Body,Title,Content,Text,Segment,List, ListItem, Right, Thumbnail,Footer,Badge,Form,Picker,Item} from "native-base";

import { Col, Row, Grid } from "react-native-easy-grid";

import styles from "./styles";

const Img1 = require("../../../assets/img3.jpg");

class RestaurantwithTime extends Component {
   constructor(props) {
    super(props);
    this.state = {
      seg: 1
    };
  }


  render() {
    return (

    	<Container>
      
     <Content>
      

     <View style={styles.headerContainer}>
        <ImageBackground
          style={styles.headerBackgroundImage}
          source={Img1}
>
<View style={styles.headerColumn}>

<Grid>
<Row>
<Col style={{ width: '82%' }}>
<Icon name='angle-left' style={{color: '#fff',marginLeft: 10}}/>
</Col>
<Col style={{ width: '8%', marginTop: 5 }}>
<Icon name='heart' style={{color: '#fff',fontSize: 16}}/>
</Col>
<Col style={{ width: '8%', marginTop: 5 }}>
<Icon name='share-alt' style={{color: '#fff',fontSize: 16}}/>
</Col>
</Row>
<Row>
<Col style={{alignItems: 'flex-end'}}>
<View style={{flexDirection: 'row', marginRight: 10, marginTop: 50 }}>
<Icon name='star' style={{color: 'yellow',fontSize: 16,marginRight: 5, }}/>
<Icon name='star-half-o' style={{color: 'yellow',fontSize: 16,marginRight: 5,}}/>
<Icon name='star-o' style={{color: '#fff',fontSize: 16,marginRight: 5}}/>
<Icon name='star-o' style={{color: '#fff',fontSize: 16,marginRight: 5}}/>
<Icon name='star-o' style={{color: '#fff',fontSize: 16,marginRight: 5}}/>
</View>
</Col>
</Row>
</Grid>
           
           
</View>
</ImageBackground>
</View>
<View style={{padding: 10}}>
<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
<Button small danger style={{marginRight: 5}}>
            <Text style={{fontSize: 11}}>06:00 PM</Text>
</Button>
<Button small danger style={{marginRight: 5}}>
            <Text style={{fontSize: 11}}>06:30 PM</Text>
</Button>
<Button small danger style={{marginRight: 5}}>
            <Text style={{fontSize: 11}}>07:00 PM</Text>
</Button>
<Button small danger style={{marginRight: 5}}>
            <Text style={{fontSize: 11}}>07:30 PM</Text>
</Button>
<Button small danger style={{marginRight: 5}}>
            <Text style={{fontSize: 11}}>08:00 PM</Text>
</Button>
<Button small danger style={{marginRight: 5}}>
            <Text style={{fontSize: 11}}>08:30 PM</Text>
</Button>
<Button small danger style={{marginRight: 5}}>
            <Text style={{fontSize: 11}}>09:00 PM</Text>
</Button>
<Button small danger style={{marginRight: 5}}>
            <Text style={{fontSize: 11}}>09:30 PM</Text>
</Button>
</ScrollView>
</View>

<View style={{alignSelf: "center", padding:5, borderColor: '#ddd', borderWidth: 1, borderRightWidth: 0,borderLeftWidth: 0, width: '100%' }}>
<Text style={{fontSize: 11,alignSelf:'center'}}><Icon name="calendar-o" style={{fontSize: 11}}/> Table for 2 tonight at 8:30 PM</Text>
</View>


<Grid style={{padding: 10}}>
<Col>
<View>
<Text style={{marginTop: 5, marginBottom: 5}}>Restaurant Name</Text>
<Text note style={{fontSize: 10}}>Desserts, Italian, Sandwiches American, Fastfood</Text>
<Text note style={{fontSize: 10}}><Icon name='clock-o' style={{fontSize: 10,color:'#ccc',marginRight: 5}}/> 10:30 A.M. - 09:00 P.M.</Text>
</View>
</Col>
<Col style={{alignItems: 'flex-end', justifyContent: 'flex-end'}}>
<Text style={{marginTop: 5, marginBottom: 5,}}>5 KM</Text>
</Col>
</Grid>

<View style={{padding: 10}}>
<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
<Segment>
          <Button
            first
            active={this.state.seg === 1 ? true : false}
            onPress={() => this.setState({ seg: 1 })}
            style={styles.segmentbtn}
          >
            <Text>Main Dishes</Text>
          </Button>
          <Button
            active={this.state.seg === 2 ? true : false}
            onPress={() => this.setState({ seg: 2 })}
            style={styles.segmentbtn}
          >
            <Text>Appetizer</Text>
          </Button>
          <Button
            last
            active={this.state.seg === 3 ? true : false}
            onPress={() => this.setState({ seg: 3 })}
            style={styles.segmentbtn}
          >
            <Text>Sides</Text>
          </Button>
          <Button
            last
            active={this.state.seg === 4 ? true : false}
            onPress={() => this.setState({ seg: 4 })}
            style={styles.segmentbtn}
          >
            <Text>Italian</Text>
          </Button>
        </Segment>
</ScrollView>
</View>

<View style={{padding: 10}}>

          {this.state.seg === 1 && 
            <List>
            <ListItem avatar onPress={() => this.props.navigation.navigate('Booking')}>
              <Left>
                <Thumbnail source={Img1} />
              </Left>
              <Body>
                <Text>Kumar Pratik</Text>
                <Text note>Doing what you like will...</Text>
              </Body>
              <Right>
                <Icon name='angle-right' style={{color: '#ccc',fontSize: 24,marginRight:2, marginTop: 5}}/>
              </Right>
              
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail source={Img1} />
              </Left>
              <Body>
                <Text>Kumar Pratik</Text>
                <Text note>Doing what you like will...</Text>
                
              </Body>
              <Right>
                <Icon name='angle-right' style={{color: '#ccc',fontSize: 24,marginRight:2, marginTop: 5}}/>
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail source={Img1} />
              </Left>
              <Body>
                <Text>Kumar Pratik</Text>
                <Text note>Doing what you like will...</Text>
                
              </Body>
              <Right>
                <Icon name='angle-right' style={{color: '#ccc',fontSize: 24,marginRight:2, marginTop: 5}}/>
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail source={Img1} />
              </Left>
              <Body>
                <Text>Kumar Pratik</Text>
                <Text note>Doing what you like will...</Text>
                
              </Body>
              <Right>
                <Icon name='angle-right' style={{color: '#ccc',fontSize: 24,marginRight:2, marginTop: 5}}/>
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail source={Img1} />
              </Left>
              <Body>
                <Text>Kumar Pratik</Text>
                <Text note>Doing what you like will...</Text>
                
              </Body>
              <Right>
                <Icon name='angle-right' style={{color: '#ccc',fontSize: 24,marginRight:2, marginTop: 5}}/>
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail source={Img1} />
              </Left>
              <Body>
                <Text>Kumar Pratik</Text>
                <Text note>Doing what you like will...</Text>
                
              </Body>
              <Right>
                <Icon name='angle-right' style={{color: '#ccc',fontSize: 24,marginRight:2, marginTop: 5}}/>
              </Right>
            </ListItem>
            
          </List>

          }
          {this.state.seg === 2 && <Text>Appetizer Selected</Text>}
          {this.state.seg === 3 && <Text>Sides Selected</Text>}
          {this.state.seg === 4 && <Text>Italian Selected</Text>}



</View>
      </Content>
      <Footer style={{backgroundColor: 'green'}}>
      <Left><Text style={{color: '#fff',fontSize: 13,marginLeft: 15}}>1 Item . $5.00</Text></Left>
      <Body/>
      <Right><Text style={{color: '#fff',fontSize: 13,marginRight: 15}}><Icon name="shopping-cart" style={{color: '#fff', fontSize: 13, marginRight: 10}}/> View Talabie</Text></Right>
      </Footer>
      </Container>
    );
  }
}

export default RestaurantwithTime;