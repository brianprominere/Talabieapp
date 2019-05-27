import React, { Component } from "react";
import { View, StatusBar,ImageBackground,Image,ScrollView,TouchableOpacity } from "react-native";
import {Container,Header,Left,Button,Icon,Body,Title,Content,Text,Segment,List, H3,ListItem, Right, Thumbnail,Footer,CheckBox,Item,Label,Input} from "native-base";

import { Col, Row, Grid } from "react-native-easy-grid";

import styles from "./styles";

const Img1 = require("../../../assets/banner1.jpg");
const Img2 = require("../../../assets/banner2.jpg");

class CheckOut extends Component {
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

      <Header>
      <Grid>
        <Col style={{width: '15%'}}>
        <Button transparent onPress={() => this.props.navigation.navigate('FoodItem')}>
<Icon name='angle-left' style={{color: '#fff',marginLeft: 0}}/>
</Button>
        </Col>
        <Col>
        <Text style={{color: '#fff', paddingTop: 15}}>Cart</Text>
        </Col>
      </Grid>
     
      </Header>
                
     <Content>
      

     <View style={styles.headerContainer}>
        <ImageBackground style={styles.headerBackgroundImage} source={Img2}>
          <View style={styles.headerColumn}>
            <Grid>
                <Col style={{ width: 100 }}><Image style={styles.userImage} source={Img1} /></Col>
                <Col>
                  <View style={{padding: 15, alignSelf: 'flex-end' }}>
                    <Text style={{color: '#fff',fontSize: 20, alignSelf: 'flex-end'}}>Sample</Text>
                    <Text style={{color: '#8ADA00',fontSize: 18, alignSelf: 'flex-end'}}>$ 100.30</Text>
                  </View>
                </Col>
            </Grid>
        </View>
       </ImageBackground>
    </View>


      



<Grid style={{backgroundColor: '#F9F9F9',borderBottomWidth: 1, borderBottomColor: '#E6E6E6', width: '95%', marginLeft: 'auto', marginRight: 'auto'}}>
<Row>
<Col>
<View style={{ padding:10,marginBottom: 10}}>
<Text style={{fontSize: 20, lineHeight: 40}}>Your Order</Text>
</View>
</Col>
<Col>
<View style={{padding:10,marginBottom: 10}}>
<Text style={{color:'#D53643',alignSelf: 'flex-end', lineHeight: 40}}>Edit Order</Text>
</View>
</Col>
</Row>
</Grid>


<Grid style={{padding: 10}}>


<Row style={{borderBottomWidth: 1, borderBottomColor: '#ccc',paddingBottom: 10}}>
<Col style={{width: '70%',height: 30}}>
<View>
<Text style={{lineHeight: 40}}> 1 x <Text style={{color: 'red',textDecorationLine: 'line-through'}}>100</Text> 99 Cheesebuger (Small) <Icon name='edit' style={{fontSize: 16,color: '#aaa'}} /></Text>

</View>
</Col>
<Col style={{width: '30%',height: 30,alignItems: 'flex-end'}}>
<View>
<Text style={{lineHeight: 40}}>$99.00 </Text>
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
<Text style={{lineHeight: 40}}>2 X 1 Extra Cheese</Text>
</Col>
<Col style={{width: '30%',height: 30,alignItems: 'flex-end'}}>
<Text style={{lineHeight: 40}}>$2.00</Text>
</Col>
</Row>

<Row style={{borderBottomWidth: 1, borderBottomColor: '#ccc',paddingBottom: 10}}>
<Col style={{width: '70%',height: 30}}>
<Text style={{lineHeight: 40, color: '#737373', fontWeight: 'bold'}}>Sub Total</Text>
</Col>
<Col style={{width: '30%',height: 30,alignItems: 'flex-end'}}>
<Text style={{lineHeight: 40}}>$101.00</Text>
</Col>
</Row>
</Grid>



      </Content>
      <Footer style={{backgroundColor: '#63BC59'}}>
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