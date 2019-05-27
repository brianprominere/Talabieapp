import React, { Component } from "react";
import { View, StatusBar,ImageBackground,Image,ScrollView } from "react-native";
import {Container,Header,Left,Button,Icon,Body,Title,Content,Text,Segment,List, ListItem, Right, Thumbnail,Footer,CheckBox,Item,Label,Input,Form,Picker} from "native-base";

import { Col, Row, Grid } from "react-native-easy-grid";

import styles from "./styles";

const Img1 = require("../../../assets/banner1.jpg");

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
<Col>
<Button transparent onPress={() => this.props.navigation.navigate('CheckOut')}>
<Icon  name='angle-left' style={{color: '#fff',marginLeft: 10}}/>
</Button>
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
<Text style={{marginTop: 5, marginBottom: 5, fontSize: 18, fontWeight: 'bold',}}>The Costa Gril - Gril</Text>
<Text note>Ramanayapeta,{'\n'}Kakinada, Andhra Pradesh 533005</Text>
</View>
</Col>
</Row>
</Grid>

<Grid style={{padding: 15,marginBottom: 25,paddingTop: 0}}>

<Row>
<Col><Text style={{padding:10,marginBottom: 10, backgroundColor: '#F9F9F9', fontWeight: 'bold'}}>Your Talabie</Text></Col>
</Row>
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
<Col><Text style={{padding:10,marginBottom: 10, backgroundColor: '#EDEDEE', fontWeight:'bold'}}>Extras</Text></Col>
</Row>

<Row style={{borderBottomWidth: 1, borderBottomColor: '#ccc',paddingBottom: 10}}>
<Col style={{width: '70%',height: 30}}>
<Text style={{lineHeight: 40}}>1 Extra Cheese</Text>
</Col>
<Col style={{width: '30%',height: 30,alignItems: 'flex-end'}}>
<Text style={{lineHeight: 40, marginRight: 10}}>$2.00</Text>
</Col>
</Row>

<Row style={{borderBottomWidth: 1, borderBottomColor: '#ccc',paddingBottom: 10}}>
<Col style={{width: '70%',height: 30}}>
<Text style={{lineHeight: 40,color: '#737373'}}>Total</Text>
</Col>
<Col style={{width: '30%',height: 30,alignItems: 'flex-end'}}>
<Text style={{lineHeight: 40, marginRight: 10}}>$200.00</Text>
</Col>
</Row>

<Row>
<Col>

<Form>
          <View style={{flexDirection: 'row', justifyContent: 'space-between',backgroundColor: '#EDEDEE'}}>
          
          <View style={{justifyContent: 'center'}}>
          <Text>Table Number</Text>
          </View>

          <View style={{width: '20%', marginRight: 10}}>
              <Picker
              mode="dropdown"
              selectedValue={this.state.language}
              onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
              <Picker.Item label="01" value="01" />
              <Picker.Item label="02" value="02" />
              <Picker.Item label="03" value="03" />
              <Picker.Item label="04" value="04" />
            </Picker>
          </View>

          </View>
</Form>
</Col>
</Row>

</Grid>



      </Content>
      <Footer style={{backgroundColor: '#63BC59'}}>
      <View>
      <Button transparent full light onPress={() => this.props.navigation.navigate('ThankYou')}>
      <Text style={{fontWeight: 'bold'}}>PLACE ORDER</Text>
      </Button>
      </View>
      </Footer>
      </Container>
    );
  }
}

export default PlaceOrder;