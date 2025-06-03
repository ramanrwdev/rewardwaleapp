/**
 * Component: RadioButton
 * Name: CmpRadioGroup
 * Path: /components/CmpRadioGroup
 * Purpose: To diplay the group of items in a row or column & get the selected single value.
 * Params:
 * ** datasource - Array of Object (minimum requirement to provide `value` and `label`)
 * ** iconSize - must be number
 * ** iconColor - color of the icon
 * ** errMessage - show error message.
 * ** styles - used to overwrite styles.
 * ** textStyle - styles for text like fontSize, fontFamily, color, alignText, padding etc.
 * ** label - Title for RadioGroup.
 * ** labelStyle - styles for text like fontSize, fontFamily, color, alignText, padding etc.
 * ** Direction - The value is to display the radio button in horizontal or vertical direction. The value should be either 'column' or 'row'
 * ** onSelect - To get the selected value in RadioGroup. example:- onSelect={(value) => setState(value)}
 * ** Selected - To display previous selected value
 * ** iconColorSelected - color for selected icon
 * ** selectedTextStyle - styles for selected text
 */

import React, { forwardRef, useState, useImperativeHandle, useEffect } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Global from '../global';
import { widthPercentageToDP, heightPercentageToDP, normalizeWidth, normalizeHeight } from '../components/ResponsiveScreen';

const CmpRadioGroup = (props, ref) => {
    const [
        switchoptions,
        setswitchoptions
    ] = useState(props?.Selected ? props?.Selected : null);
    const selectHandler = (value) => {
        props.onSelect(value);
        setswitchoptions(value);
    };
    const autoSel = (val) => {
        if (props?.Selected) {
            setswitchoptions(val)
        }
    }
    useImperativeHandle(ref, () => ({
        auto: (val) => { autoSel(val) },
    }))
    const direction = props.direction;
    const directionstyle = (direction === 'column' ? styles.cdirection : styles.rdirection);
    return (
        <>
            {!props.pattern2 && !props.pattern3 ? (
                <View>
                    {props.label ?
                        <Text style={[styles.textlabel2,
                        props.labelStyle]}>{props.label}</Text> : null}
                    <View style={[styles.mainblock, directionstyle]}>
                        {props.datasource.map((item, index) => (
                            <Pressable key={index} onPress={() => selectHandler(item.value)}>
                                <View style={[styles.checkBox, props.styles, index == '0' ? props.indexStyle : null]}>
                                    <Icon
                                        size={props.iconSize ? props.iconSize : normalizeHeight(18)}
                                        color={item.value === switchoptions ? props.iconColorSelected : props.iconColor}
                                        name={(item.value === switchoptions || item.id === props.Selected) ? 'radio-button-on' : 'radio-button-off'}
                                    />
                                    <Text style={[styles.textStyle, item.value === switchoptions ? props.selectedTextStyle : props.textStyle]}>
                                        {item.label}
                                    </Text>
                                </View>
                            </Pressable>
                        ))}
                        
                    </View>
                    <Text style={[styles.errorstyle]}>
                        {props.errMessage}
                    </Text>
                </View>) : (


                <View style={[styles.mainblock, directionstyle]}>
                    {props.datasource.map((item, index) => (
                        <Pressable key={index} onPress={() => selectHandler(item.value)}>

                            {props.pattern2 ? (
                                <View style={[styles.checkBox2, props.styles]}>
                                    <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                                        <Text style={[styles.textStyle, { marginBottom: normalizeHeight(5), paddingLeft: 0 },
                                        item.value === switchoptions ? props.selectedTextStyle : props.textStyle]}>
                                            {item.label}
                                        </Text>
                                        {/* <Image
                                            name={item.value === switchoptions ? Checkbox : CheckboxEmpty}
                                            height={props.iconSize ? props.iconSize : normalizeHeight(18)}
                                            width={props.iconSize ? props.iconSize : normalizeHeight(18)}
                                        /> */}
                                    </View>
                                </View>) :
                                props.pattern3 ? (
                                    <View style={item.value === switchoptions ? styles.selectedpattern3 : styles.pattern3}>
                                        <Text style={
                                            item.value === switchoptions ? styles.selectedpattern3text : styles.pattern3text}>
                                            {item.label}
                                        </Text>
                                    </View>
                                ) : null}
                        </Pressable>
                    ))}
                </View>)}
        </>
    );
};

const styles = StyleSheet.create({
    mainblock: {
        flexWrap: 'wrap',
    },
    cdirection: {
        flexDirection: 'column'
    },
    rdirection: {
        flexDirection: 'row'
    },
    checkBox: {
        flexDirection: 'row',
        alignItems: 'center',
        //  flexDirection: 'row',
        marginVertical: heightPercentageToDP('1.3%'),
        // marginHorizontal: widthPercentageToDP('5%'),
        alignItems: 'center'
    },
    checkBox2: {
        flexDirection: 'row',
        paddingHorizontal: widthPercentageToDP('4%'),
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textStyle: {
        fontSize: normalizeHeight(14),
        fontFamily: Global.font.font_family_fr,
        textAlign: 'center',
        letterSpacing: 0.1,
        color: Global.color.white,
        paddingLeft: normalizeWidth(8)
    },
    errorstyle: {
        color: Global.color.errorRed,
        textAlign: 'right',
        fontFamily: Global.font.font_family_fr,
        fontWeight: '400',
        fontSize: normalizeHeight(11),
        paddingBottom: heightPercentageToDP('1.23%')
    },
    selectedpattern3text: {
        color: Global.color.white25070,
        fontSize: heightPercentageToDP('1.71%'),
        fontFamily: Global.font.font_family_fb,
        letterSpacing: 0.1,
        paddingHorizontal: 6
    },
    pattern3text: {
        color: Global.color.white25070,
        fontSize: heightPercentageToDP('1.71%'),
        fontFamily: Global.font.font_family_fr,
        letterSpacing: 0.1,
        paddingHorizontal: 6
    },
    pattern3: {
        borderColor: Global.color.white50,
        borderRadius: 4,
        borderWidth: 1,
        marginRight: widthPercentageToDP('4%')
    },
    selectedpattern3: {
        borderColor: Global.color.cyanblue,
        borderRadius: 4,
        backgroundColor: Global.color.cyanblue,
        borderWidth: 1,
        marginRight: widthPercentageToDP('4%')
    }
});

export default forwardRef(CmpRadioGroup);
