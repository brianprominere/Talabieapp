const React = require("react-native");
const { Dimensions, Platform } = React;
const deviceHeight = Dimensions.get("window").height;

export default {
   headerContainer: {},
   headerBackgroundImage: {
    paddingBottom: 20,
    paddingTop: 35,
},
headerColumn: {
backgroundColor: 'transparent',

},
formbottom:{marginBottom: 20,},
userImage: {
    
    borderRadius: 75/2,
    borderWidth: 3,
    height: 75,
    marginBottom: 10,
    marginLeft: 15,
    width: 75,
    alignSelf: 'flex-start'
},
};
