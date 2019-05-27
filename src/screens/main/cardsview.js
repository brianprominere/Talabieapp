import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  Animated,
  StyleSheet,
  TouchableHighlight
} from 'react-native';

import { Icon } from "native-base";

class CardView extends Component {
    anime = {
        height: new Animated.Value(),
        expanded: false,
        contentHeight: 0,
    }

    constructor(props) {
        super(props);

        this._initContentHeight = this._initContentHeight.bind(this);
        this.toggle = this.toggle.bind(this);

        this.anime.expanded = props.expanded;
    }

    _initContentHeight(evt) {
        if (this.anime.contentHeight>0) return;
        this.anime.contentHeight = evt.nativeEvent.layout.height;
        this.anime.height.setValue(this.anime.expanded ? this._getMaxValue() : this._getMinValue() );
    }

    _getMaxValue() { return this.anime.contentHeight };
    _getMinValue() { return 0 };

    toggle() {
        Animated.timing(this.anime.height, {
            toValue: this.anime.expanded ? this._getMinValue() : this._getMaxValue(),
            duration: 300,
        }).start();
        this.anime.expanded = !this.anime.expanded;
    }

    render() {
        return (
            <View style={styles.titleContainer}>
                <View style={styles.title}>
                    <TouchableHighlight underlayColor="transparent" onPress={this.toggle}>
                    <View style={{flexDirection: 'row', justifyContent: 'center', width: '100%'}}>
                        <Text style={{color: '#fff'}}>{this.props.title}</Text>
                        <Icon style={{color: '#fff', fontSize: 18, marginLeft: '2%', marginTop: '1%'}} name="caret-down" />
                    </View>
                    </TouchableHighlight>
                </View>

                <Animated.View style={[styles.content, { height: this.anime.height }]} onLayout={this._initContentHeight}>
                    {this.props.children}
                </Animated.View>
            </View>
        );
    }
}

export default CardView;

const styles = StyleSheet.create({

titleContainer:{
    width: '100%'  
},

});

