import React from "react";
import { Root } from "native-base";
import { StackNavigator, DrawerNavigator } from "react-navigation";

import SideBar from "./screens/sidebar";

import Home from "./screens/home/";
import CreatSocial from "./screens/createsocial/";
import Login from "./screens/login/";
import RegOne from "./screens/regone/";
import RegTwo from "./screens/regtwo/";
import SelectCat from "./screens/selectcategory/";
import SelectLoc from "./screens/selectlocation/";


import Main from "./screens/main/";
import Start from "./screens/main/Dinein/";
import Search from "./screens/main/search/";
import Orders from "./screens/main/orders/";
import Favorite from "./screens/main/favorites/";
import Accounts from "./screens/main/accounts/";

import RestaurantPage from "./screens/restaurantpage/";
import PkRestaurantPage from "./screens/pkrestaurantpage/";
import Booking from "./screens/booking/";
import FoodItem from "./screens/fooditem/";
import PkFoodItem from "./screens/pkfooditem/";
import CheckOut from "./screens/checkout/";
import PkCheckOut from "./screens/pkcheckout/";
import PlaceOrder from "./screens/placeorder/";
import PkPlaceOrder from "./screens/pkplaceorder/";
import ThankYou from "./screens/thankyou/";
import RestaurantwithTime from "./screens/restaurantpagewithtime/";

import FilterPage from "./screens/filter/";
import PkFilterPage from "./screens/pkfilter/";
import DnFilterPage from "./screens/dnfilter/";


import Reservation from "./screens/main/Reservation/";
import PickUp from "./screens/main/pickup/";




const Drawer = DrawerNavigator(
  {
    Home: { screen: Home},
    CreatSocial: { screen: CreatSocial },
    Login: { screen: Login },
    RegOne: { screen: RegOne },
    RegTwo: { screen: RegTwo },
    SelectCat: { screen: SelectCat },
    SelectLoc: { screen: SelectLoc },
    
    Main: { screen: Main },
    Start: { screen: Start },
    Search: { screen: Search },
    Orders: { screen: Orders },
    Favorite: { screen: Favorite },
    Accounts: { screen: Accounts },

    RestaurantPage: { screen: RestaurantPage },
    PkRestaurantPage: { screen: PkRestaurantPage },
    FoodItem: { screen: FoodItem},
    PkFoodItem: { screen: PkFoodItem},
    CheckOut: { screen: CheckOut},
    PkCheckOut: { screen: PkCheckOut},
    PlaceOrder: { screen: PlaceOrder},
    PkPlaceOrder: { screen: PkPlaceOrder},
    ThankYou: { screen: ThankYou},
    RestaurantwithTime: { screen: RestaurantwithTime},
    Booking: { screen: Booking},

    Reservation: { screen: Reservation},
    PickUp: { screen: PickUp},
    FilterPage: { screen: FilterPage},
    PkFilterPage: { screen: PkFilterPage},
    DnFilterPage: { screen: DnFilterPage},
    
   
  },
  {
    initialRouteName: "Home",
    contentOptions: {
      activeTintColor: "#e91e63"
    },
    contentComponent: props => <SideBar {...props} />
  }
);

const AppNavigator = StackNavigator(
  {
    Drawer: { screen: Drawer },
    
  },
  {
    initialRouteName: "Drawer",
    headerMode: "none"
  }
);

export default () =>
  <Root>
    <AppNavigator />
  </Root>;
