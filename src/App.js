import React from "react";
import { Root } from "native-base";
import { StackNavigator, DrawerNavigator } from "react-navigation";



import Home from "./screens/home/";
import Main from "./screens/main/";
import CreatAccount from "./screens/creactaccount/";
import CreatSocial from "./screens/createsocial/";
import Login from "./screens/login/";
import RegOne from "./screens/regone/";
import RegTwo from "./screens/regtwo/";
import SelectCat from "./screens/selectcategory/";
import SelectLoc from "./screens/selectlocation/";
import RestaurantPage from "./screens/restaurantpage/";
import InnerHome from "./screens/innerhome/";
import DropdownPage from "./screens/dropdown/";
import FoodItem from "./screens/fooditem/";
import CheckOut from "./screens/checkout/";
import PlaceOrder from "./screens/placeorder/";
import ThankYou from "./screens/thankyou/";

import RestaurantwithTime from "./screens/restaurantpagewithtime/";
import Booking from "./screens/booking/";





const AppNavigator = StackNavigator(
  {
    Home: { screen: Home},
    Main: { screen: Main },
    CreatAccount: { screen: CreatAccount },
    CreatSocial: { screen: CreatSocial },
    Login: { screen: Login },
    RegOne: { screen: RegOne },
    RegTwo: { screen: RegTwo },
    SelectCat: { screen: SelectCat },
    SelectLoc: { screen: SelectLoc },
    InnerHome: { screen: InnerHome},
    RestaurantPage: { screen: RestaurantPage},
    DropdownPage: { screen: DropdownPage},
    FoodItem: { screen: FoodItem},
    CheckOut: { screen: CheckOut},
    PlaceOrder: { screen: PlaceOrder},
    ThankYou: { screen: ThankYou},
    RestaurantwithTime: { screen: RestaurantwithTime},
    Booking: { screen: Booking},

  },
  {
    initialRouteName: "Home",
    headerMode: "none"
  }
);

export default () =>
  <Root>
    <AppNavigator />
  </Root>;
