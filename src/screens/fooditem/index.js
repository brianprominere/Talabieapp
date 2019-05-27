import React, { Component } from "react";
import { View, StatusBar,ImageBackground,Image,ScrollView } from "react-native";
import {Container,Header,Left,Button,Icon,Body,Title,Content,Text,Segment,List, ListItem, Right, Thumbnail,Footer,CheckBox,Item,Label,Input} from "native-base";

import { Col, Row, Grid } from "react-native-easy-grid";

import NumericInput,{ calcSize } from 'react-native-numeric-input'

import styles from "./styles";

const Img1 = require("../../../assets/banner1.jpg");

class FoodItem extends Component {
   constructor(props) {
    super(props);
    this.state = {
      seg: 1
    };
  }
  render() {
    return (

    	<Container style={{backgroundColor: '#fff'}}>
       <StatusBar hidden={true} />
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
<Button transparent onPress={() => this.props.navigation.navigate('RestaurantPage')}>
<Icon  name='angle-left' style={{color: '#fff',marginLeft: 10}}/>
</Button>
</Col>
<Col style={{ width: '8%', marginTop: 10 }}>
<Icon name='heart' style={{color: '#fff',fontSize: 16}}/>
</Col>
<Col style={{ width: '8%', marginTop: 10 }}>
<Icon name='share-alt' style={{color: '#fff',fontSize: 16}}/>
</Col>
</Row>

</Grid>
           
           
</View>
</ImageBackground>
</View>


<Grid style={{padding: 10}}>
<Row>
<Col>
<View>
<Text style={{marginTop: 5, marginBottom: 5,paddingBottom: 10, fontSize: 22, fontWeight: 'bold', borderBottomColor: '#ccc', borderBottomWidth: 1}}>Cheeseburger <Text note>(5-8 Calories)</Text></Text>
</View>
</Col>
</Row>
<Row>
<Col>
<View>
<Text note>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </Text>
</View>
</Col>
</Row>
</Grid>


<Grid style={{padding: 10}}>
<Row>
<Col><Text style={{padding:10,marginBottom: 10, backgroundColor: '#EDEDEE'}}>Price</Text></Col>
</Row>

<Row style={{borderBottomColor: '#ccc',borderBottomWidth: 1, marginBottom: 10}}>
<Col style={{width: '12%',height: 30}}><CheckBox checked={true} /></Col>
<Col style={{width: '60%',height: 30}}><Text>Small</Text></Col>
<Col style={{width: '28%',height: 30,alignItems: 'flex-end'}}><Text>$99.00</Text></Col>
</Row>

<Row size={2}>
<Col style={{width: '12%',height: 30}}><CheckBox checked={false} /></Col>
<Col style={{width: '60%',height: 30}}><Text>Large</Text></Col>
<Col style={{width: '28%',height: 30,alignItems: 'flex-end'}}><Text>$199.00</Text></Col>
</Row>

<Row>
<Col><Text style={{padding:10,marginBottom: 10, backgroundColor: '#EDEDEE'}}>Special Instruction</Text></Col>
</Row>

<Row>
<Col> 
<Item>
            <Input placeholder="Add a note (Extra sauce, no onions, etc.,)" style={{fontSize: 14}} ></Input>
</Item>

</Col>

</Row>
<Row>
<Col>

<View style={{marginTop: 10, alignItems: 'center'}}>

        <NumericInput value={this.state.value} 
            onChange={value => this.setState({value})}
            rightButtonBackgroundColor='#fff' 
            leftButtonBackgroundColor='#fff' />
</View>
</Col>
</Row>
</Grid>



      </Content>
      <Footer style={{backgroundColor: '#63BC59'}}>
      <View>
      <Button transparent full light onPress={() => this.props.navigation.navigate('CheckOut')}>
      <Text>ADD TO CART</Text>
      </Button>
      </View>
      </Footer>
      </Container>
    );
  }
}

export default FoodItem;