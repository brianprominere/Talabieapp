import React, { Component } from "react";

import InnerHome from "../innerhome";
import Search from "../search";
import Orders from "../orders";
import Favorite from "../favorite";
import Account from "../account";

import styles from "./styles";

import { TabNavigator } from "react-navigation";
import { Button, Text, Icon, Footer, FooterTab } from "native-base";
export default (FooterScreen = TabNavigator(
  {
    InnerHome: { screen: InnerHome },
    Search: { screen: Search },
    Orders: { screen: Orders },
    Favorite: { screen: Favorite },
    Account: { screen: Account }
  },
  {
    tabBarPosition: "bottom",
    tabBarComponent: props => {
      return (
        <Footer >
          <FooterTab>
          <Button
              vertical
              active={props.navigationState.index === 0}
              onPress={() => props.navigation.navigate("InnerHome")} style={{borderRightColor: '#ccc', borderRightWidth: 1}}>
              <Icon name="home" />
              <Text style={styles.btntext}>Home</Text>
            </Button>
            <Button
              vertical
              active={props.navigationState.index === 1}
              onPress={() => props.navigation.navigate("Search")} style={{borderRightColor: '#ccc', borderRightWidth: 1}}>
              <Icon name="search" />
              <Text style={styles.btntext}>Search</Text>
            </Button>
            <Button
              vertical
              active={props.navigationState.index === 2}
              onPress={() => props.navigation.navigate("Orders")} style={{borderRightColor: '#ccc', borderRightWidth: 1}}>
              <Icon name="edit" />
              <Text style={styles.btntext}>Orders</Text>
            </Button>
            <Button
              vertical
              active={props.navigationState.index === 3}
              onPress={() => props.navigation.navigate("Favorite")} style={{borderRightColor: '#ccc', borderRightWidth: 1}}>
              <Icon name="heart" />
              <Text style={styles.btntext}>Favourite</Text>
            </Button>
            <Button
              vertical
              active={props.navigationState.index === 4}
              onPress={() => props.navigation.navigate("Account")}>
              <Icon name="user" />
              <Text style={styles.btntext}>Account</Text>
            </Button>
          </FooterTab>
        </Footer>
      );
    }
  }
));