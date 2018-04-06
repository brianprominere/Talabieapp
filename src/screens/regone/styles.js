const React = require("react-native");
const { Dimensions, Platform } = React;
const deviceHeight = Dimensions.get("window").height;

export default {
   BgContainer:{backgroundColor: '#a9343a' },
 gobtn:{position: 'absolute',bottom: 10,right: 10},
 imageLogo:{width:225,height: 25,marginBottom: 50,marginTop: 100,alignSelf: "center",},
 CreateAccountBtn:{alignSelf: "center",backgroundColor: "#fff", marginBottom: 25, width: '80%'},
 FbBtn:{alignSelf: "center", marginBottom: 25, width: '80%', color: '#a9343a'}
};