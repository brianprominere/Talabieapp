import React, { Component } from "react";
import { View, StatusBar,ImageBackground,Image,ScrollView } from "react-native";
import {Container,Header,Left,Button,Icon,Body,Title,Content,Text,Segment,List, ListItem, Right, Thumbnail,Footer,Badge,Form,Picker,Item,Label,Input} from "native-base";

import { Col, Row, Grid } from "react-native-easy-grid";
import PopupDialog, { SlideAnimation } from 'react-native-popup-dialog';

import styles from "./styles";

const Img1 = require("../../../assets/ban1.jpg");

const slideAnimation = new SlideAnimation({
  slideFrom: 'left',
});

class Booking extends Component {
   constructor(props) {
    super(props);
    this.state = {
      selected: "key0"
    };
  }
  onValueChange(value: string) {
    this.setState({
      selected: value
    });
  }

  render() {
    return (

    	<Container>
      <StatusBar hidden={true} />
     <Content>
      <PopupDialog width={0.75} overlayBackgroundColor={'#000'} overlayOpacity={0.8} ref={(popupDialog) => { this.popupDialog = popupDialog; }} dialogAnimation={slideAnimation}>
    <View style={{alignItems: 'center',paddingTop: 70,paddingBottom: 70}}>
      <Text><Icon name="calendar" style={{fontWeight: 'bold',fontSize: 50,color: '#3d6889' }}/></Text>
      <Text style={{fontSize: 20,fontWeight: 'bold',lineHeight: 40}}>Thank You</Text>
      <Text>Your booking is confirmed.</Text>
    </View>
    <View style={{backgroundColor: '#63BC59', alignItems: 'baseline',borderRadius: 8,borderTopRightRadius:0,borderTopLeftRadius: 0, marginTop: 3  }}>
    <Button transparent full light onPress={() => this.props.navigation.navigate('ThankYou')}>
      <Text>Got It!</Text>
      </Button>
    </View>
  </PopupDialog>

     <View style={styles.headerContainer}>
        <ImageBackground
          style={styles.headerBackgroundImage}
          source={Img1}
>
<View style={styles.headerColumn}>

<Grid>
<Row>
<Col style={{ width: '82%' }}>
<Button transparent onPress={() => this.props.navigation.navigate('RestaurantwithTime')}>
<Icon  name='angle-left' style={{color: '#fff',marginLeft: 10}}/>
</Button>
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
<Icon name='star' style={{color: '#FCAF00',fontSize: 16,marginRight: 5, }}/>
<Icon name='star-half-o' style={{color: '#FCAF00',fontSize: 16,marginRight: 5,}}/>
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


<Grid style={{padding: 10, borderBottomWidth: 1,borderColor: '#ddd'}}>
<Col>
<View>
<Text style={{marginTop: 5, marginBottom: 5, fontSize: 22, fontWeight: 'bold'}}>Dish Name</Text>
<Text note style={{fontSize: 10}}><Icon name='user' style={{fontSize: 10,color:'#ccc',marginRight: 5}}/> Table for 2 people</Text>
<Text note style={{fontSize: 10}}><Icon name='clock-o' style={{fontSize: 10,color:'#ccc',marginRight: 5}}/> 06:30 P.M.</Text>
<Text note style={{fontSize: 10}}><Icon name='calendar-o' style={{fontSize: 10,color:'#ccc',marginRight: 5}}/> Oct 15 Sunday</Text>
</View>
</Col>
<Col style={{alignItems: 'flex-end'}}>
<Button small success style={{marginTop: 5, marginBottom: 5, alignSelf: 'flex-end'}}><Text> Sign In </Text></Button>
</Col>
</Grid>

<View style={{padding: 10, marginBottom: 25}}>
 <Form>
            <Item stackedLabel>
              <Label>First Name</Label>
              <Input />
            </Item>
            <Item stackedLabel last>
              <Label>Last Name</Label>
              <Input />
            </Item>
            <Item stackedLabel last>
              <Label>Email</Label>
              <Input />
            </Item>
            <Item stackedLabel last>
              <Label>Special Requests (optional)</Label>
              <Input />
            </Item>
            <Grid style={{marginBottom: 5}}>
              <Row>
                <Col style={{width: '25%', paddingTop: 25}}>
                  <Picker
              mode="dropdown"
              iosHeader="Select your SIM"
              iosIcon={<Icon name="ios-arrow-down-outline" />}
              style={{ width: undefined }}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label="+91" value="key0" />
              <Picker.Item label="+92" value="key1" />
              <Picker.Item label="+93" value="key2" />
            </Picker>
                </Col>
                <Col>
                 <Item floatingLabel>
              <Label>Phone</Label>
              <Input />
            </Item>
                </Col>
              </Row>
            </Grid>
            
            
          </Form>

</View>

      </Content>
      <Footer style={{backgroundColor: '#63BC59'}}>
      <View>
      
<Button transparent full light onPress={() => {
      this.popupDialog.show();
    }}>
      <Text>Book</Text>
      </Button>
   
  

      </View>
      </Footer>
      </Container>
    );
  }
}

export default Booking;