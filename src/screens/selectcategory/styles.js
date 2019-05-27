const React = require("react-native");
const { Dimensions, Platform } = React;
const deviceHeight = Dimensions.get("window").height;

export default {
 bg:{backgroundColor: '#A5363D'},
  gobtn:{position: 'absolute',bottom: 10,right: 10},
 fullwidth:{width: '100%', height: '100%',borderRadius: 0},
 imagenext:{width:40,height: 40,marginRight:15,alignSelf: "flex-end",},
 searchbox:{backgroundColor: 'transparent'},
 searchboxitem:{backgroundColor: 'transparent',borderBottomColor: '#fff'},
};
