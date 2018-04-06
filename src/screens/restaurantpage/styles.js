const React = require("react-native");
const { Dimensions, Platform } = React;
const deviceHeight = Dimensions.get("window").height;

export default {
   headerContainer: {backgroundColor: '#000000',height: 150,},
   headerBackgroundImage: {
    height: '100%'
    
},
headerColumn: {
backgroundColor: 'transparent',
marginTop: 0,
height: '100%'
},
segmentbtn:{marginRight: 10},
};