import React, { Component } from "react";
import { View, StatusBar } from "react-native";
import {Container, Header, Content, Text, Body, Title,Left,Button, Right,Icon,Form,Picker,Item,Segment} from "native-base";

import { Col, Row, Grid } from "react-native-easy-grid";


class DropdownPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected1: "key1"
    };
  }
  onValueChange(value: string) {
    this.setState({
      selected1: value
    });
  }
  render() {
    return (

  
<View style={{backgroundColor: '#a9343a',marginBottom: 10}}>

   


<Grid>
    <Col>
    <Button transparent onPress={() => this.props.navigation.goBack()}>
    <Icon name='angle-left' style={{color: '#fff'}}/>
    </Button>
    </Col>
    <Col>
<Form>
          
            <Picker iosHeader="Select one" mode="dropdown" selectedValue={this.state.selected1} onValueChange={this.onValueChange.bind(this)} itemStyle={{color: '#fff'}}>

              <Item label="Reservation" value="key0" style={{backgroundColor: '#000000'}} />
              <Item label="Dine In" value="key1" />
              <Item label="Pick Up" value="key2" />
          
            </Picker>
</Form>
    </Col>
    <Col style={{ width: 50 }}>
    <Button transparent onPress={() => this.props.navigation.goBack()}>
    <Icon name='angle-right' style={{color: '#fff'}}/>
    </Button>
    </Col>
</Grid>



</View>
    );
  }
}

export default DropdownPage;










