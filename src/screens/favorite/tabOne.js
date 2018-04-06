import React, { Component } from "react";
import {Container,Header,Text,List, ListItem, Left, Body, Right, Thumbnail,Icon} from "native-base";

const Img1 = require("../../../assets/food.jpeg");

class Main extends Component {
  render() {
    return (
      <Container>
 
     <List>
            <ListItem avatar>
              <Left>
                <Thumbnail source={Img1} />
              </Left>
              <Body>
                <Text>Kumar Pratik</Text>
                <Text note>Doing what you like will...</Text>
              </Body>
              <Right>
                <Text style={{fontWeight: 'normal',textAlignVertical:'center',alignSelf: 'center'  }}><Icon name='heart' style={{color: '#a9343a',fontSize: 18}} /></Text>
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
                <Text style={{fontWeight: 'bold',textAlignVertical:'center',alignSelf: 'center'  }}><Icon name='heart-o' style={{color: '#a9343a',fontSize: 18}}/></Text>
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
                <Text style={{fontWeight: 'bold',textAlignVertical:'center',alignSelf: 'center'  }}><Icon name='heart' style={{color: '#a9343a',fontSize: 18}} /></Text>
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
                <Text style={{fontWeight: 'bold',textAlignVertical:'center',alignSelf: 'center'  }}><Icon name='heart-o' style={{color: '#a9343a',fontSize: 18}} /></Text>
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
                <Text style={{fontWeight: 'bold',textAlignVertical:'center',alignSelf: 'center'  }}><Icon name='heart' style={{color: '#a9343a',fontSize: 18}} /></Text>
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
                <Text style={{fontWeight: 'bold',textAlignVertical:'center',alignSelf: 'center'  }}><Icon name='heart-o' style={{color: '#a9343a',fontSize: 18}} /></Text>
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
                <Text style={{fontWeight: 'bold',textAlignVertical:'center',alignSelf: 'center'  }}><Icon name='heart' style={{color: '#a9343a',fontSize: 18}} /></Text>
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
                <Text style={{fontWeight: 'bold',textAlignVertical:'center',alignSelf: 'center'  }}><Icon name='heart-o' style={{color: '#a9343a',fontSize: 18}} /></Text>
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
                <Text style={{fontWeight: 'bold',textAlignVertical:'center',alignSelf: 'center'  }}><Icon name='heart' style={{color: '#a9343a',fontSize: 18}} /></Text>
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
                <Text style={{fontWeight: 'bold',textAlignVertical:'center',alignSelf: 'center'  }}><Icon name='heart-o' style={{color: '#a9343a',fontSize: 18}} /></Text>
              </Right>
            </ListItem>
            
          </List>


      </Container>
    );
  }
}

export default Main;