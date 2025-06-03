/**
 * Component: Loader
 * Name: CmpLoader
 * Path: /components/CmpLoader/CmpLoader
 * Params:
 * ** loading - boolean 'true' or 'false'(it must be true to show loading). Ex: loading={this.state.loading}
 * ** loaderText - To show the text Message below loader.(string)
 * ** textStyle - Min styles are given to loaderText, to overwrite styles for text like fontSize, fontFamily, color, alignText, padding etc
 *
 */

import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  Modal,
  Dimensions
} from 'react-native';
import Global from '../../global';
import { normalizeHeight, normalizeWidth } from '../ResponsiveScreen';
import UIActivityIndicator from './activityIndicator';

const CmpLoader = (props) => {
  const {
    loading,
    loaderText,
    textStyle,
    ...attributes
  } = props;

  return (
    <Modal
      transparent={true}
      animationType={'none'}
      visible={loading}

    >
      <View style={styles.modalBackground}>
        {/* <View style={styles.activityIndicatorWrapper}> */}
        <UIActivityIndicator color={Global.color.black2c} size={normalizeHeight(60)} text={loaderText} textStyle={props.textStyle} subText={props.subText} subTextStyle={props.subTextStyle} />
        {/* </View> */}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: 'transparent'
  }

  /*
   * ActivityIndicatorWrapper: {
   *   backgroundColor: 'rgba(52, 52, 52, 0.8)',
   *   height: 100,
   *   width: 100,
   *   borderRadius: 10,
   *   display: 'flex',
   *   alignItems: 'center',
   *   justifyContent: 'space-around'
   * }
   */
});

export default CmpLoader;
