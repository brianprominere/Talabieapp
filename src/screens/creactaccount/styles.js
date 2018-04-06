const React = require("react-native");
const { Dimensions, Platform } = React;
const deviceHeight = Dimensions.get("window").height;

export default {
  imageContainer:{
  	flex:1,
  	width:null,
  	height: null
  },
  imageLogo:{
  	width:225,
  	height: 25,
  	marginBottom: 50,
  	marginTop: 100,
  	alignSelf: "center",
  },
  loginLink:{alignSelf : 'flex-end'},
  CreateAccountBtn:{alignSelf: "center",backgroundColor: "#fff", marginBottom: 25, width: '80%'},
  FbBtn:{alignSelf: "center", marginBottom: 25, width: '80%'}
};
