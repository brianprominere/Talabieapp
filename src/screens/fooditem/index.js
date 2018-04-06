import React, { Component } from "react";
import { View, StatusBar,ImageBackground,Image,ScrollView } from "react-native";
import {Container,Header,Left,Button,Icon,Body,Title,Content,Text,Segment,List, ListItem, Right, Thumbnail,Footer,CheckBox,Item,Label,Input} from "native-base";

import { Col, Row, Grid } from "react-native-easy-grid";

import styles from "./styles";

const Img1 = require("../../../assets/img3.jpg");

class FoodItem extends Component {
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

</Grid>
           
           
</View>
</ImageBackground>
</View>


<Grid style={{padding: 10}}>
<Row>
<Col>
<View>
<Text style={{marginTop: 5, marginBottom: 5}}>Food Item Name</Text>
</View>
</Col>
</Row>
<Row>
<Col>
<View>
<Text note style={{fontSize: 10}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </Text>
</View>
</Col>
</Row>
</Grid>


<Grid style={{padding: 10}}>
<Row>
<Col><Text style={{padding:10,marginBottom: 10, backgroundColor: '#ddd'}}>Price</Text></Col>
</Row>

<Row>
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
<Col><Text style={{padding:10,marginBottom: 10, backgroundColor: '#ddd'}}>Special Instruction</Text></Col>
</Row>

<Row>
<Col style={{height: 30}}> 
<Item>
            <Input placeholder="Add a note (Extra sauce, no onions, etc.,)" />
</Item>

</Col>
</Row>
</Grid>



      </Content>
      <Footer style={{backgroundColor: 'green'}}>
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