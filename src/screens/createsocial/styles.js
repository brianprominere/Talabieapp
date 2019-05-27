const React = require("react-native");
const { Dimensions, Platform } = React;
const deviceHeight = Dimensions.get("window").height;

export default {
  BgContainer:{
backgroundColor: '#a9343a'
 },
 imageLogo:{
  	width:225,
  	height: 25,
  	marginBottom: 50,
  	marginTop: 100,
  	alignSelf: "center",
  },
  CreateAccountBtn:{alignSelf: "center",backgroundColor: "#fff", marginBottom: 25, width: '80%'},
  FbBtn:{alignSelf: "center", marginBottom: 15, width: '80%'}
};
