const React = require("react-native");
const { Dimensions, Platform } = React;
const deviceHeight = Dimensions.get("window").height;

export default {
  btntext:{fontSize: 7},
  topbtn:{backgroundColor: '#41C42C', marginBottom: 5},
  cardview:{flex: 0,marginRight: 5, marginLeft: 0, marginTop: 2, marginBottom: 10,width: 345, backgroundColor: '#fff'},

  tabbg:{borderWidth: 1},

   headerContainer: {},
   headerBackgroundImage: {
   
},
headerColumn: {
backgroundColor: 'rgba(0,0,0,0.8)',
paddingBottom: 20,
paddingTop: 35,

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