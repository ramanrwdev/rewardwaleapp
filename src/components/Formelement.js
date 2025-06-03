import React, { Component, Fragment } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Platform,
  Pressable,
  Image,
} from 'react-native';
import Global from '../global';
import FormelemenStyles from '../styles/FormelemenStyles.js';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import GlobalStyles from '../styles/GlobalStyles';
import { normalizeHeight, normalizeWidth } from '../components/ResponsiveScreen';
import moment from 'moment';
class BottomButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={GlobalStyles.bottomContainer}>
        <View style={GlobalStyles.rowView}>
          <View>
            <Text style={GlobalStyles.bottomText}>{this.props.text}</Text>
            <Text style={GlobalStyles.bottomSubText}>{this.props.subtext}</Text>
          </View>
          <Pressable
            onPress={this.props.onpress}
            disabled={this.props.disabled}
            style={{
              height: normalizeHeight(38),
              width: normalizeWidth(130),
              borderRadius: 8,
              backgroundColor: this.props.disabled
                ? Global.color.disablecyan
                : Global.color.cyanblue,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: normalizeHeight(17),
                lineHeight: normalizeHeight(21),
                letterSpacing: 0.3,
                fontWeight: '500',
                color: this.props.disabled
                  ? Global.color.white25
                  : Global.color.lightgrey,
                fontFamily: Global.font.font_family_fb,
              }}>
              {this.props.buttontext}
            </Text>
          </Pressable>
        </View>
      </View>
    );
  }
}

export { BottomButton };
