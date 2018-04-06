import React, { Component } from "react";
import { View, StatusBar,ImageBackground,Image,ScrollView } from "react-native";
import {Container,Header,Left,Button,Icon,Body,Title,Content,Text,Segment,List, ListItem, Right, Thumbnail,Footer,CheckBox,Item,Label,Input} from "native-base";

import { Col, Row, Grid } from "react-native-easy-grid";

import styles from "./styles";

const Img1 = require("../../../assets/img3.jpg");

class CheckOut extends Component {
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
<Col>
<Icon name='angle-left' style={{color: '#fff',marginLeft: 10}}/>
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
<Text style={{marginTop: 5, marginBottom: 5}}>Restaurant Name</Text>
</View>
</Col>
</Row>
</Grid>


<Grid style={{padding: 10}}>
<Row>
<Col><Text style={{padding:10,marginBottom: 10, backgroundColor: '#ddd'}}>Your Talabie</Text></Col>
</Row>

<Row style={{borderBottomWidth: 1, borderBottomColor: '#ccc',paddingBottom: 10}}>
<Col style={{width: '70%',height: 30}}>
<View style={{flexDirection: 'row' }}>
<Text style={{lineHeight: 40}}>Item Name (Size)</Text>
<Button transparent style={{padding: 0, margin:0,}}><Icon name='edit' style={{color: '#aaa',fontSize: 14}} /></Button>
</View>
</Col>
<Col style={{width: '30%',height: 30,alignItems: 'flex-end'}}>
<View style={{flexDirection: 'row' }}>
<Text style={{lineHeight: 40}}>$198.00</Text>
<Button transparent style={{padding: 0, margin:0,}}><Icon name='trash-o' style={{color: '#f00',fontSize: 14}} /></Button>
</View>
</Col>

</Row>
<Row style={{paddingTop: 10,paddingBottom: 10}}>
<Col><Text>Medium Rate</Text>
</Col>
</Row>
<Row>
<Col><Text style={{padding:10,marginBottom: 10, backgroundColor: '#ddd'}}>Ingredients</Text></Col>
</Row>
<Row style={{paddingTop: 10,paddingBottom: 10}}>
<Col><Text>New ingredients</Text>
</Col>
</Row>
<Row>
<Col><Text style={{padding:10,marginBottom: 10, backgroundColor: '#ddd'}}>Extras</Text></Col>
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
      <Footer style={{backgroundColor: 'green'}}>
      <View>
      <Button transparent full light onPress={() => this.props.navigation.navigate('PlaceOrder')}>
      <Text>CHECK OUT</Text>
      </Button>
      </View>
      </Footer>
      </Container>
    );
  }
}

export default CheckOut;