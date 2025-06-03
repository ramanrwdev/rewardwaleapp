import React, { useState } from 'react';
import { View, Text, Platform } from 'react-native';
import global from '../global';
import { Dropdown } from 'react-native-element-dropdown';
import GlobalStyles from '../styles/GlobalStyles';
import { normalizeHeight, normalizeWidth } from './ResponsiveScreen';
const DropDown = ({ labelField, valueField, disabled, maxHeight, width, items, onChangeItem, value, placeholder, dropDownDirection, label,label2, errorMessage, leftText }) => {
  const [isFocus,
    setIsFocus] = useState(false);
  return (
    <View style={{
      //flexDirection: 'column',
     // justifyContent: 'center',
     // marginHorizontal:normalizeWidth(30)
    }}>
      {label ? <Text style={[GlobalStyles.labelTextz,{}]}>{label}<Text style={GlobalStyles.label2}>{' '}{label2}</Text></Text> : null}
      <Dropdown
        iconColor={global.color.primary}
        labelField={labelField ?? 'label'}
        valueField={valueField ?? 'value'}
        disable={disabled ?? false}
        maxHeight={maxHeight ?? normalizeHeight(160)}
        style={{
          width: width ? width : '100%',
          height: normalizeHeight(52),
          borderWidth: 1,
          borderColor: global.color.skycolorbk,
          backgroundColor: global.color.skycolorbk,
          borderBottomLeftRadius: dropDownDirection !== 'top' && isFocus ? 0 : 10,
          borderBottomRightRadius: dropDownDirection !== 'top' && isFocus ? 0 : 10,
          borderTopLeftRadius: dropDownDirection === 'top' && isFocus ? 0 : 10,
          borderTopRightRadius: dropDownDirection === 'top' && isFocus ? 0 : 10,
          marginTop: normalizeHeight(8),
          marginBottom: normalizeHeight(4),
          paddingRight: normalizeWidth(10)
        }}
        dropdownPosition={dropDownDirection ? dropDownDirection : 'bottom'}
        iconStyle={{width:18,height:18}}
        
        placeholder={placeholder}
        data={items}
        onChange={onChangeItem}
        value={value}
        placeholderStyle={{
          fontSize: normalizeHeight(16),
          lineHeight:normalizeHeight(19),
          fontWeight: '400',
          color: global.color.blackcc,
          fontFamily: global.font.TextMedium,
          letterSpacing: 0.3,
          paddingLeft: normalizeWidth(15)
        }}
        selectedTextStyle={{
          fontSize: normalizeHeight(16),
          lineHeight:normalizeHeight(19),
          fontWeight: '400',
          color: global.color.blackcc,
          letterSpacing: 0.3,
          fontFamily: global.font.TextMedium,
          paddingLeft: normalizeWidth(15)
        }}
        itemContainerStyle={{
          marginVertical: normalizeHeight(-6),
          marginLeft: normalizeWidth(-2)
        }}
        containerStyle={{
          marginTop: normalizeHeight(-2),
          backgroundColor: global.color.white,
          borderWidth: 1,
          borderColor: global.color.skycolorbk,
          borderTopStartRadius: dropDownDirection === 'top' ? 10 : 0,
          borderTopEndRadius: dropDownDirection === 'top' ? 10 : 0,
          borderBottomEndRadius: dropDownDirection !== 'top' ? 10 : 0,
          borderBottomStartRadius: dropDownDirection !== 'top' ? 10 : 0
        }}
        activeColor="transparent"
        itemTextStyle={{
          fontSize: normalizeHeight(16),
          lineHeight:normalizeHeight(19),
          fontWeight: '400',
          color: global.color.blackcc,
          letterSpacing: 0.1,
          fontFamily: global.font.regular
        }}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
      />
      {errorMessage ? <Text style={GlobalStyles.errorstyle}>{errorMessage} </Text> :
        (leftText && !errorMessage) ? <Text style={[GlobalStyles.errorstyle, {
          color: global.color.blackcc, textAlign: 'left', fontFamily: global.font.semiBold
        }]}>{leftText} </Text> : <Text style={GlobalStyles.errorstyle}>{'  '}</Text>}

      <View style={{ marginBottom: normalizeHeight(8) }} />
    </View>
  );
};

export default DropDown;
