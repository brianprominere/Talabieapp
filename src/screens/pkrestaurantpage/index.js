import React, { Component } from "react";
import { View, StatusBar,ImageBackground,Image,ScrollView } from "react-native";
import {Container,Header,Left,Button,Icon,Body,Title,Content,Text,Segment,List, ListItem, Right, Thumbnail,Footer} from "native-base";

import { Col, Row, Grid } from "react-native-easy-grid";

import styles from "./styles";

const Img1 = require("../../../assets/banner1.jpg");
const Img2 = require("../../../assets/banner2.jpg");
const Img3 = require("../../../assets/banner3.jpg");

class PkRestaurantPage extends Component {
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
<Button transparent onPress={() => this.props.navigation.navigate('PickUp')}>
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
<Grid style={{padding: 10}}>
<Col>
<Text style={{marginTop: 5, marginBottom: 5, fontSize: 20, fontWeight: 'bold'}}>Mcdonald's</Text>
<Text note>Desserts, Italian, Sandwiches American, Fastfood</Text>
<Text note><Icon name='clock-o' style={{fontSize: 12,color:'#ccc',marginRight: 5}}/> 10:30 A.M. - 09:00 P.M.</Text>

</Col>
<Col style={{alignItems: 'flex-end', justifyContent: 'flex-end', width: '20%'}}>
<Text style={{marginTop: 5, marginBottom: 5,}}>5 KM</Text>
</Col>
</Grid>

<View style={{padding: 10}}>
<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
<Segment>
          <Button samll
            first
            active={this.state.seg === 1 ? true : false}
            onPress={() => this.setState({ seg: 1 })}
            style={styles.segmentbtn}
          >
            <Text uppercase={false} style={{fontSize: 15}}>Main Dishes</Text>
          </Button>
          <Button samll
            active={this.state.seg === 2 ? true : false}
            onPress={() => this.setState({ seg: 2 })}
            style={styles.segmentbtn}
          >
            <Text uppercase={false} style={{fontSize: 15}}>Appetizers</Text>
          </Button>
          <Button samll
            last
            active={this.state.seg === 3 ? true : false}
            onPress={() => this.setState({ seg: 3 })}
            style={styles.segmentbtn}
          >
            <Text uppercase={false} style={{fontSize: 15}}>Sides</Text>
          </Button>
          <Button samll
            last
            active={this.state.seg === 4 ? true : false}
            onPress={() => this.setState({ seg: 4 })}
            style={styles.segmentbtn}
          >
            <Text uppercase={false} style={{fontSize: 15}}>Italian</Text>
          </Button>
        </Segment>
</ScrollView>
</View>

<View>

          {this.state.seg === 1 && 
            <List>
            <ListItem onPress={() => this.props.navigation.navigate('PkFoodItem')} style={{flexDirection: 'row',padding: 0, margin:0}}>
              <View style={{marginRight: 10}}><Thumbnail style={{width: 45, height: 45, borderRadius: 45/2}} source={Img1} /></View>
              <View><Text>#ANLS - 2018-10-10 {'\n'}<Text note>Sliced chicken with onions, sweet{'\n'}</Text><Text note>$125-Item</Text></Text></View>
              <Right style={{alignItems: 'flex-end',flex: 1}}><Icon name='angle-right' style={{color: '#ccc',fontSize: 24,marginRight: 10}}/></Right>
            </ListItem>

            <ListItem onPress={() => this.props.navigation.navigate('PkFoodItem')} style={{flexDirection: 'row'}}>
              <View style={{marginRight: 10}}><Thumbnail style={{width: 45, height: 45, borderRadius: 45/2}} source={Img2} /></View>
              <View><Text>#ANLS - 2018-10-09 {'\n'}<Text note>Sliced chicken with onions, sweet{'\n'}</Text><Text note>$125-Item</Text></Text></View>
              <Right style={{alignItems: 'flex-end',flex: 1}}><Icon name='angle-right' style={{color: '#ccc',fontSize: 24,marginRight: 10}}/></Right>
            </ListItem>

            <ListItem onPress={() => this.props.navigation.navigate('PkFoodItem')} style={{flexDirection: 'row'}}>
              <View style={{marginRight: 10}}><Thumbnail style={{width: 45, height: 45, borderRadius: 45/2}} source={Img3} /></View>
              <View><Text>#ANLS - 2018-10-08 {'\n'}<Text note>Sliced chicken with onions, sweet{'\n'}</Text><Text note>$125-Item</Text></Text></View>
              <Right style={{alignItems: 'flex-end',flex: 1}}><Icon name='angle-right' style={{color: '#ccc',fontSize: 24,marginRight: 10}}/></Right>
            </ListItem>
            <ListItem onPress={() => this.props.navigation.navigate('PkFoodItem')} style={{flexDirection: 'row'}}>
              <View style={{marginRight: 10}}><Thumbnail style={{width: 45, height: 45, borderRadius: 45/2}} source={Img1} /></View>
              <View><Text>#ANLS - 2018-10-07 {'\n'}<Text note>Sliced chicken with onions, sweet{'\n'}</Text><Text note>$125-Item</Text></Text></View>
              <Right style={{alignItems: 'flex-end',flex: 1}}><Icon name='angle-right' style={{color: '#ccc',fontSize: 24,marginRight: 10}}/></Right>
            </ListItem>



            
          </List>

          }
          {this.state.seg === 2 && 
            <List>
            <ListItem onPress={() => this.props.navigation.navigate('PkFoodItem')} style={{flexDirection: 'row',padding: 0, margin:0}}>
              <View style={{marginRight: 10}}><Thumbnail style={{width: 45, height: 45, borderRadius: 45/2}} source={Img1} /></View>
              <View><Text>Appetizer One {'\n'}<Text note>Sliced chicken with onions, sweet{'\n'}</Text><Text note>$125-Item</Text></Text></View>
              <Right style={{alignItems: 'flex-end',flex: 1}}><Icon name='angle-right' style={{color: '#ccc',fontSize: 24,marginRight: 10}}/></Right>
            </ListItem>

            <ListItem onPress={() => this.props.navigation.navigate('PkFoodItem')} style={{flexDirection: 'row'}}>
              <View style={{marginRight: 10}}><Thumbnail style={{width: 45, height: 45, borderRadius: 45/2}} source={Img2} /></View>
              <View><Text>Appetizer {'\n'}<Text note>Sliced chicken with onions, sweet{'\n'}</Text><Text note>$125-Item</Text></Text></View>
              <Right style={{alignItems: 'flex-end',flex: 1}}><Icon name='angle-right' style={{color: '#ccc',fontSize: 24,marginRight: 10}}/></Right>
            </ListItem>

            <ListItem onPress={() => this.props.navigation.navigate('PkFoodItem')} style={{flexDirection: 'row'}}>
              <View style={{marginRight: 10}}><Thumbnail style={{width: 45, height: 45, borderRadius: 45/2}} source={Img3} /></View>
              <View><Text>Appetizer {'\n'}<Text note>Sliced chicken with onions, sweet{'\n'}</Text><Text note>$125-Item</Text></Text></View>
              <Right style={{alignItems: 'flex-end',flex: 1}}><Icon name='angle-right' style={{color: '#ccc',fontSize: 24,marginRight: 10}}/></Right>
            </ListItem>
            <ListItem onPress={() => this.props.navigation.navigate('PkFoodItem')} style={{flexDirection: 'row'}}>
              <View style={{marginRight: 10}}><Thumbnail style={{width: 45, height: 45, borderRadius: 45/2}} source={Img1} /></View>
              <View><Text>Appetizer {'\n'}<Text note>Sliced chicken with onions, sweet{'\n'}</Text><Text note>$125-Item</Text></Text></View>
              <Right style={{alignItems: 'flex-end',flex: 1}}><Icon name='angle-right' style={{color: '#ccc',fontSize: 24,marginRight: 10}}/></Right>
            </ListItem>



            
          </List>
          }
          {this.state.seg === 3 && 
            <List>
            <ListItem onPress={() => this.props.navigation.navigate('PkFoodItem')} style={{flexDirection: 'row',padding: 0, margin:0}}>
              <View style={{marginRight: 10}}><Thumbnail style={{width: 45, height: 45, borderRadius: 45/2}} source={Img1} /></View>
              <View><Text>Sides One {'\n'}<Text note>Sliced chicken with onions, sweet{'\n'}</Text><Text note>$125-Item</Text></Text></View>
              <Right style={{alignItems: 'flex-end',flex: 1}}><Icon name='angle-right' style={{color: '#ccc',fontSize: 24,marginRight: 10}}/></Right>
            </ListItem>

            <ListItem onPress={() => this.props.navigation.navigate('PkFoodItem')} style={{flexDirection: 'row'}}>
              <View style={{marginRight: 10}}><Thumbnail style={{width: 45, height: 45, borderRadius: 45/2}} source={Img2} /></View>
              <View><Text>Sides {'\n'}<Text note>Sliced chicken with onions, sweet{'\n'}</Text><Text note>$125-Item</Text></Text></View>
              <Right style={{alignItems: 'flex-end',flex: 1}}><Icon name='angle-right' style={{color: '#ccc',fontSize: 24,marginRight: 10}}/></Right>
            </ListItem>

            <ListItem onPress={() => this.props.navigation.navigate('PkFoodItem')} style={{flexDirection: 'row'}}>
              <View style={{marginRight: 10}}><Thumbnail style={{width: 45, height: 45, borderRadius: 45/2}} source={Img3} /></View>
              <View><Text>Sides {'\n'}<Text note>Sliced chicken with onions, sweet{'\n'}</Text><Text note>$125-Item</Text></Text></View>
              <Right style={{alignItems: 'flex-end',flex: 1}}><Icon name='angle-right' style={{color: '#ccc',fontSize: 24,marginRight: 10}}/></Right>
            </ListItem>
            <ListItem onPress={() => this.props.navigation.navigate('PkFoodItem')} style={{flexDirection: 'row'}}>
              <View style={{marginRight: 10}}><Thumbnail style={{width: 45, height: 45, borderRadius: 45/2}} source={Img1} /></View>
              <View><Text>Sides {'\n'}<Text note>Sliced chicken with onions, sweet{'\n'}</Text><Text note>$125-Item</Text></Text></View>
              <Right style={{alignItems: 'flex-end',flex: 1}}><Icon name='angle-right' style={{color: '#ccc',fontSize: 24,marginRight: 10}}/></Right>
            </ListItem>



            
          </List>}
          {this.state.seg === 4 && 
            <List>
            <ListItem onPress={() => this.props.navigation.navigate('PkFoodItem')} style={{flexDirection: 'row',padding: 0, margin:0}}>
              <View style={{marginRight: 10}}><Thumbnail style={{width: 45, height: 45, borderRadius: 45/2}} source={Img1} /></View>
              <View><Text>Italian One {'\n'}<Text note>Sliced chicken with onions, sweet{'\n'}</Text><Text note>$125-Item</Text></Text></View>
              <Right style={{alignItems: 'flex-end',flex: 1}}><Icon name='angle-right' style={{color: '#ccc',fontSize: 24,marginRight: 10}}/></Right>
            </ListItem>

            <ListItem onPress={() => this.props.navigation.navigate('PkFoodItem')} style={{flexDirection: 'row'}}>
              <View style={{marginRight: 10}}><Thumbnail style={{width: 45, height: 45, borderRadius: 45/2}} source={Img1} /></View>
              <View><Text>Italian {'\n'}<Text note>Sliced chicken with onions, sweet{'\n'}</Text><Text note>$125-Item</Text></Text></View>
              <Right style={{alignItems: 'flex-end',flex: 1}}><Icon name='angle-right' style={{color: '#ccc',fontSize: 24,marginRight: 10}}/></Right>
            </ListItem>

            <ListItem onPress={() => this.props.navigation.navigate('PkFoodItem')} style={{flexDirection: 'row'}}>
              <View style={{marginRight: 10}}><Thumbnail style={{width: 45, height: 45, borderRadius: 45/2}} source={Img1} /></View>
              <View><Text>Italian {'\n'}<Text note>Sliced chicken with onions, sweet{'\n'}</Text><Text note>$125-Item</Text></Text></View>
              <Right style={{alignItems: 'flex-end',flex: 1}}><Icon name='angle-right' style={{color: '#ccc',fontSize: 24,marginRight: 10}}/></Right>
            </ListItem>
            <ListItem onPress={() => this.props.navigation.navigate('PkFoodItem')} style={{flexDirection: 'row'}}>
              <View style={{marginRight: 10}}><Thumbnail style={{width: 45, height: 45, borderRadius: 45/2}} source={Img1} /></View>
              <View><Text>Italian {'\n'}<Text note>Sliced chicken with onions, sweet{'\n'}</Text><Text note>$125-Item</Text></Text></View>
              <Right style={{alignItems: 'flex-end',flex: 1}}><Icon name='angle-right' style={{color: '#ccc',fontSize: 24,marginRight: 10}}/></Right>
            </ListItem>



            
          </List>

          }



</View>

      </Content>
      <Footer style={{backgroundColor: '#63BC59'}}>
      <Left><Text style={{color: '#fff',fontSize: 13,marginLeft: 15}}>1 ITEM . $5.00</Text></Left>
      <Body/>
      <Right><Text style={{color: '#fff',fontSize: 13,marginRight: 15}}><Icon name="shopping-cart" style={{color: '#fff', fontSize: 13, marginRight: 10}}/> VIEW TALABIE</Text></Right>
      </Footer>
      </Container>
    );
  }
}

export default PkRestaurantPage;