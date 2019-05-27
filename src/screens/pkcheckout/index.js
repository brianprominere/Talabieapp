import React, { Component } from "react";
import { View, StatusBar,ImageBackground,Image,ScrollView } from "react-native";
import {Container,Header,Left,Button,Icon,Body,Title,Content,Text,Segment,List, ListItem, Right, Thumbnail,Footer,CheckBox,Item,Label,Input,H3} from "native-base";

import { Col, Row, Grid } from "react-native-easy-grid";

import styles from "./styles";

const Img1 = require("../../../assets/ban1.jpg");

class PkCheckOut extends Component {
   constructor(props) {
    super(props);
    this.state = {
      seg: 1
    };
  }
  render() {
    return (

    	<Container style={{backgroundColor: '#FFF'}}>
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
<Button transparent onPress={() => this.props.navigation.navigate('FoodItem')}>
<Icon  name='angle-left' style={{color: '#fff',marginLeft: 10}}/>
</Button>
</Col>

</Row>

</Grid>
           
           
</View>
</ImageBackground>
</View>


<Grid style={{padding: 10,paddingBottom: 0}}>
<Row>
<Col>
<View style={{backgroundColor: '#F9F9F9', padding:10,marginBottom: 5,}}>
<H3>Restaurant Name</H3>
<Text>Your Talable</Text>
</View>
</Col>
</Row>
</Grid>


<Grid style={{padding: 10,paddingTop: 0}}>


<Row style={{borderBottomWidth: 1, borderBottomColor: '#ccc',paddingBottom: 10}}>
<Col style={{width: '70%',height: 30}}>
<View>
<Text style={{lineHeight: 40}}>Cheesebuger (Small) <Icon name='edit' style={{fontSize: 16,color: '#aaa'}} /></Text>

</View>
</Col>
<Col style={{width: '30%',height: 30,alignItems: 'flex-end'}}>
<View>
<Text style={{lineHeight: 40}}>$198.00 <Icon name='trash-o' style={{fontSize: 16,color: '#f00'}} /></Text>
</View>
</Col>

</Row>
<Row style={{paddingTop: 10,paddingBottom: 10}}>
<Col><Text>Medium Rate</Text>
</Col>
</Row>
<Row>
<Col><Text style={{padding:10,marginBottom: 10, backgroundColor: '#EDEDEE', fontWeight:'bold'}}>Ingredients</Text></Col>
</Row>
<Row style={{marginBottom: 10}}>
<Col><Text style={{marginLeft: 15}}>new ingredients</Text>
</Col>
</Row>
<Row>
<Col><Text style={{padding:10,marginBottom: 10, backgroundColor: '#ddd', fontWeight:'bold'}}>Extras</Text></Col>
</Row>

<Row style={{borderBottomWidth: 1, borderBottomColor: '#ccc',paddingBottom: 10}}>
<Col style={{width: '70%',height: 30}}>
<Text style={{lineHeight: 40}}>1 Extra Cheese</Text>
</Col>
<Col style={{width: '30%',height: 30,alignItems: 'flex-end'}}>
<Text style={{lineHeight: 40}}>$2.00</Text>
</Col>
</Row>

<Row style={{borderBottomWidth: 1, borderBottomColor: '#ccc',paddingBottom: 10}}>
<Col style={{width: '70%',height: 30}}>
<Text style={{lineHeight: 40}}>Total</Text>
</Col>
<Col style={{width: '30%',height: 30,alignItems: 'flex-end'}}>
<Text style={{lineHeight: 40}}>$200.00</Text>
</Col>
</Row>
</Grid>



      </Content>
      <Footer style={{backgroundColor: '#63BC59'}}>
      <View>
      <Button transparent full light onPress={() => this.props.navigation.navigate('PkPlaceOrder')}>
      <Text>CHECK OUT</Text>
      </Button>
      </View>
      </Footer>
      </Container>
    );
  }
}

export default PkCheckOut;