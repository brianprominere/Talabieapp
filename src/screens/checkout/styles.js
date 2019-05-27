const React = require("react-native");
const { Dimensions, Platform } = React;
const deviceHeight = Dimensions.get("window").height;

export default {
headerContainer: {},
headerBackgroundImage: {},
headerColumn: {backgroundColor: 'rgba(0,0,0,0.8)', paddingBottom: 20, paddingTop: 30},
formbottom:{marginBottom: 20,},
segmentbtn:{marginRight: 10},
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