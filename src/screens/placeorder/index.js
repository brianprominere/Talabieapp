import React, { Component } from "react";
import { View, StatusBar,ImageBackground,Image,ScrollView } from "react-native";
import {Container,Header,Left,Button,Icon,Body,Title,Content,Text,Segment,List, ListItem, Right, Thumbnail,Footer,CheckBox,Item,Label,Input,Form,Picker} from "native-base";

import { Col, Row, Grid } from "react-native-easy-grid";

import styles from "./styles";

const Img1 = require("../../../assets/img3.jpg");

class PlaceOrder extends Component {

    constructor(props) {
    super(props);
    this.state = {
      selected1: undefined
    };
  }
  onValueChange(value: string) {
    this.setState({
      selected1: value
    });
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
<Text style={{marginTop: 5, marginBottom: 5}}>The Costa Gril - Gril</Text>
<Text note>Ramanayapeta, Kakinada, Andhra Pradesh 533005</Text>
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
<Text style={{lineHeight: 40}}>Item Name (Size)</Text>
</Col>
<Col style={{width: '30%',height: 30,alignItems: 'flex-end'}}>
<Text style={{lineHeight: 40}}>$198.00</Text>
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
<Row>
<Col><Text style={{padding:10,marginBottom: 10, backgroundColor: '#ddd'}}>Table Number</Text></Col>
</Row>

<Row>
<Col>

<Form>
          
            <Picker iosHeader="Select one" 
            mode="dropdown" 
            placeholder="Table Number"
            selectedValue={this.state.selected1}
            onValueChange={this.onValueChange.bind(this)} itemStyle={{color: '#ddd'}}>

              <Item label="01" value="key0" />
              <Item label="02" value="key1" />
              <Item label="03" value="key2" />
          
            </Picker>
</Form>
</Col>
</Row>

</Grid>



      </Content>
      <Footer style={{backgroundColor: 'green'}}>
      <View>
      <Button transparent full light onPress={() => this.props.navigation.navigate('ThankYou')}>
      <Text>PLACE ORDER</Text>
      </Button>
      </View>
      </Footer>
      </Container>
    );
  }
}

export default PlaceOrder;