{/* 
<CmpCheckBox
    value={panCheck}
    text={'I authorise rewardwale'}
    linkText={'terms & conditions'}
    linkPress={() => console.log('clicked')}
    text2={'my CKYC with KRA / CERSAI database to verify my PAN'}
    onSelect={(val) => setpanCheck(val)}
    textStyle={{fontSize:14}}
/> 
*/}

import React from 'react';
import { Text, Pressable, StyleSheet } from 'react-native';
import Global from '../global';
import { normalizeWidth, normalizeHeight } from '../components/ResponsiveScreen';
import Check from '../images/Svg/Check_w'

const CmpCheckBox = (props) => {
    const { value, onSelect, text, linkText, linkPress, text2, disabled, textStyle } = props;
    const onClick = () => {
        onSelect(!value)
    }
    const backgroundColor = value ? Global.color.cyanblue : Global.color.transparent;
    const borderColor = value ? Global.color.cyanblue : Global.color.lightgrey;
    return (
        <Pressable onPress={() => (disabled || linkPress) ? null : onClick()} style={styles.main}>
            <Pressable onPress={() => disabled ? null : onClick()} style={[styles.box, { backgroundColor, borderColor }]}>
                {value ? <Check /> : null}
            </Pressable>
            <Text style={[styles.textStyle, textStyle]}>{text}
                <Text onPress={() => linkPress ? linkPress() : null} style={{ color: Global.color.cyanblue }}> {linkText} </Text>{text2}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    main: { flexDirection: 'row', marginTop: normalizeHeight(24) },
    box: {
        height: normalizeHeight(15),
        width: normalizeHeight(15),
        borderRadius: normalizeHeight(2),
        alignItems: "center",
        justifyContent: "center",
        borderWidth: normalizeWidth(1),
        marginRight: normalizeWidth(8)
    },
    textStyle: {
        fontSize: normalizeHeight(12),
        lineHeight: normalizeHeight(16),
        fontFamily: Global.font.font_family_fr,
        fontWeight: '400',
        color: Global.color.white25070,
        flexShrink: 1
    }
});
export default CmpCheckBox;

// /**
//  * Component: Multiple Checkbox
//  * Name: CmpMultiCheckBox
//  * Path: /components/CmpMultiCheckBox
//  * Purpose: To diplay the group of items in a row or column & get the all selected value in array.
//  * Params:
//  * ** datasource - Array of Object (minimum requirement to provide `value` and `label`)
//  * ** iconSize - must be number.
//  * ** iconColor - color of the icon.
//  * ** errMessage - show error message.
//  * ** styles - used to overwrite styles.
//  * ** textStyle - styles for text like fontSize, fontFamily, color, alignText, padding etc.
//  * ** selectedTextStyle - - styles for text like fontSize, fontFamily, color, alignText, padding etc.
//  * ** label - Title for checkbox.
//  * ** labelStyle - styles for text like fontSize, fontFamily, color, alignText, padding etc.
//  * ** Direction - The value is to display the radio button in horizontal or vertical direction. The value should be either 'column' or 'row'
//  * ** onSelect - To get the all selected value in array.example:- onSelect={(result) => onSelection(result)}
//  */

// import React, { useState, useEffect } from 'react';
// import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialIcons';
// import Global from '../global';
// import { widthPercentageToDP, heightPercentageToDP, normalizeWidth, normalizeHeight } from '../components/ResponsiveScreen';

// function useForceUpdate() {
//     const [
//         value,
//         setValue
//     ] = useState(0);

//     return () => setValue((val) => val + 1); // Update the state to force render
// }

// // const result = [];
// const CmpCheckBox = (props) => {
//     const forceUpdate = useForceUpdate();
//     useEffect(() => {
//         if (props.Selected != null) {
//             setSelectArray(props.Selected)
//         }
//     }, [props.Selected])
//     const result = props.Selected ? props.Selected : [];
//     const [selectArray, setSelectArray] = useState([]);
//     const selectHandler = (value) => {
//         if (result.includes(value)) {
//             const num = result.indexOf(value);
//             result.splice(num, 1);
//             setSelectArray(result);
//             props.onSelect(result);
//             forceUpdate();
//         } else {
//             result.push(value);
//             setSelectArray(result);
//             props.onSelect(result);
//             forceUpdate();
//         }
//     };

//     const { direction } = props;
//     const directionstyle = (direction === 'column' ? styles.cdirection : styles.rdirection);

//     return (
//         <View >
//             {props.label ?
//                 <Text style={[styles.textlabel2,
//                 props.labelStyle]}>{props.label}</Text> : null}
//             <View style={[styles.mainblock,
//                 directionstyle]}>
//                 {props.datasource.map((item, index) => (
//                     <Pressable key={index} onPress={() => props.disabled ? null : selectHandler(item.value)}>
//                         <View style={[styles.checkBox, props.styles]}>
//                             <Image
//                                 name={selectArray.includes(item.value) ? Checkbox : CheckboxEmpty}
//                                 height={props.iconSize ? props.iconSize : normalizeHeight(20)}
//                                 width={props.iconSize ? props.iconSize : normalizeWidth(20)}
//                             />
//                             <Text style={[
//                                 styles.textStyle,
//                                 selectArray.includes(item.value) ? props.selectedTextStyle : props.textStyle
//                             ]}>{item.label}</Text>
//                         </View>
//                     </Pressable>
//                 ))}
//             </View>
//             {props.errMessage ?
//                 <Text style={[styles.errorstyle]}>
//                     {props.errMessage}
//                 </Text> : null}
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     mainblock: {
//         // justifyContent: 'space-around',
//         flexWrap: 'wrap',
//         //  marginHorizontal: 15
//     },
//     cdirection: {
//         flexDirection: 'column'
//     },
//     rdirection: {
//         flexDirection: 'row'
//     },
//     checkBox: {
//         flexDirection: 'row',
//         // marginVertical: heightPercentageToDP('1.3%'),
//         //  marginHorizontal: widthPercentageToDP('5%'),
//         //  alignItems: 'center',
//         // backgroundColor: 'red'
//     },
//     textStyle: {
//         fontSize: normalizeHeight(13),
//         lineHeight: normalizeHeight(20),
//         fontFamily: Global.font.font_family_fr,
//         alignItems: 'center',
//         letterSpacing: 0.3,
//         color: Global.color.white70,
//         paddingLeft: normalizeWidth(10),
//         flexShrink: 1
//     },
//     errorstyle: {
//         color: Global.color.errorRed,
//         textAlign: 'right',
//         fontFamily: Global.font.font_family_fr,
//         fontWeight: '400',
//         fontSize: normalizeHeight(11),
//     },
//     textlabel2: {
//         color: Global.color.white50,
//         fontSize: heightPercentageToDP('1.97%'),
//         fontFamily: Global.font.font_family_fr,
//         lineHeight: heightPercentageToDP('2.37%'),
//         letterSpacing: 0.1,
//         paddingBottom: heightPercentageToDP('1.23%')
//     }
// });

// export default CmpCheckBox;