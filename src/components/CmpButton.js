/**
 * Component: Button
 * Name: CmpButton
 * Path: /components/CmpButton
 * Params:
 * ** name - Text to be displayed on the button
 * ** type - 'fixed', 'float', 'bottom', 'border, 'footer', 'pay'
 * ** disabled - boolean 'true' or 'false'(it must be true when button should be disabled)
 * ** textStyle - styles for text like fontSize, fontFamily, color, alignText, padding etc
 * ** ButtonStyle - Minimun button styles are given, using ButtonStyle we can overwrite styles for button.
 * Function:
 * ** onPress - Handler to be called when the user taps the button.
 **/

import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Image, TouchableOpacity, Keyboard, Animated, StyleSheet } from 'react-native';
import Global from '../global';
import images from '../images/images';
import { normalizeWidth, normalizeHeight } from '../components/ResponsiveScreen';

const CmpButton = (props) => {
    const { name, type, amount, disabled, textStyle, ButtonStyle,btnarrowShow, onPress,onPressSlot, imageSource, svg, label, hide } = props;
    const background = disabled ? Global.color.blackorg : Global.color.blackorg;
    const textColor = disabled ? Global.color.white50 : Global.color.lightgrey;
    const [keyboardUp, setkeyboardUp] = useState(false)
    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', keyboardDidShow);
        const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', keyboardDidHide);
        return () => {
            keyboardDidShowListener.remove();
            keyboardDidHideListener.remove();
        };
    }, [])
    const keyboardDidShow = (e) => {
        setkeyboardUp(true);
        animate(0)
    }
    const keyboardDidHide = () => {
        setkeyboardUp(false)
        animate(1)
    }
    const [ref, setref] = useState(false)
    const pressed = () => {
        setref(true)
        doubleClick()
    }
    const doubleClick = () => {
        setTimeout(() => {
            setref(false)
        }, 1000);
    }
    const renderImg = () => {
        return (
            <Image
                source={imageSource}
                style={styles.image}
            />
        )
    }
    const renderSvg = (imgsvg, right) => {
        return (
            <View style={{ marginRight: right ? normalizeWidth(right) : normalizeWidth(10) }}>
                {/* <Image
                    name={imgsvg ? imgsvg : svg}
                    height={normalizeHeight(14)}
                    width={normalizeWidth(14)}
                /> */}
            </View>
        )
    }
    const opacity = useRef(new Animated.Value(1)).current;
    const animate = (val) => {
        Animated.timing(opacity, {
            toValue: val,
            duration: 300,
            useNativeDriver: true,
        }).start();
    }

    return (
        <>
        
            {(type === 'fixed') ?
                <Animated.View pointerEvents={keyboardUp ? 'none' : 'auto'}
                    style={[styles.fixed, { opacity: opacity }]}>
                    <TouchableOpacity style={[styles.fixed, { backgroundColor: background }, ButtonStyle]}
                        disabled={ref}
                        onPress={() => { disabled ? null : onPress(); pressed() }}>
                        {imageSource ? renderImg() : null}
                        {svg ? renderSvg() : null}
                        <Text style={[styles.textStyle, { color: textColor }, textStyle]}>
                            {name}
                        </Text>
                    </TouchableOpacity>
                </Animated.View>
                :
                (type === 'footer') ?
                    <Animated.View pointerEvents={keyboardUp ? 'none' : 'auto'}
                        style={[styles.footer, {
                            opacity: opacity
                        }]}>
                        <TouchableOpacity style={[styles.footerBtn, { backgroundColor: Global.color.lightpink }, ButtonStyle]}
                            disabled={ref}
                            onPress={() => { disabled ? null : onPress(); pressed() }}>
                            {imageSource ? renderImg() : null}

                            {svg ? renderSvg() : null}
                            <Text style={[styles.textStyle, { color: textColor }, textStyle]}>
                                {name}
                            </Text>
                        </TouchableOpacity>
                    </Animated.View>
                    : (type === 'filter') ?
                        <TouchableOpacity onPress={disabled ? null : onPress} style={{ height: normalizeHeight(30), display: 'flex', flexDirection: 'row', borderWidth: 1, borderRadius: normalizeHeight(20), borderColor: Global.color.white50, alignItems: 'center', paddingLeft: normalizeWidth(8), paddingRight: normalizeHeight(8), width: props.width ? props.width : '100%' }}>
                            {renderSvg('', 8)}
                            <Text style={[styles.filtertextstyle, { color: textColor, flex: 9 }, textStyle]}>{name}</Text>
                            <View style={{ paddingLeft: normalizeWidth(2) }}>

                                {/* <Image
                                    name={BACKICON}
                                    width={normalizeWidth(15)}
                                    height={normalizeHeight(15)}
                                    styles={{ transform: [{ rotate: '270deg' }], flex: 1 }}
                                /> */}
                            </View>
                        </TouchableOpacity>

                        : (type === 'border') ?
                            <Animated.View pointerEvents={keyboardUp && hide ? 'none' : 'auto'}
                                style={{ opacity: hide ? opacity : 1 }}>
                                <TouchableOpacity style={[styles.border, ButtonStyle]}
                                    disabled={ref}
                                    onPress={() => { disabled ? null : onPress(); pressed() }}>
                                    {imageSource ? renderImg() : null}
                                    {svg ? renderSvg() : null}
                                    <Text style={[styles.textborder, textStyle]}>
                                        {name}
                                    </Text>
                                </TouchableOpacity>
                            </Animated.View>
                            :
                            (type === 'float') ?
                                <TouchableOpacity
                                    style={styles.floatingContainer}
                                    disabled={ref}
                                    onPress={() => { disabled ? null : onPress(); pressed() }}>
                                    <View style={[styles.float, { backgroundColor: background }, ButtonStyle]}>
                                        {imageSource ? renderImg() : null}
                                        {svg ? renderSvg() : null}
                                        <Text style={[styles.textStyle, { color: textColor }, textStyle]}>
                                            {name}
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                                :
                                (type === 'pay') ?
                                    <Animated.View pointerEvents={keyboardUp ? 'none' : 'auto'}
                                        style={[styles.bottomContainer, { opacity: opacity }]}>
      

      
                                        <View style={styles.rowView}>
                                            <View>
                                                <Text style={[styles.textborder, {
                                                    color: Global.color.steelGray,
                                                    marginBottom: normalizeHeight(4)
                                                }]}>{label ? label : 'Total Amount'}</Text>
                                                <Text style={styles.textStyle}>{amount}</Text>
                                            </View>
                                            <TouchableOpacity style={[styles.regular, { backgroundColor: background, width: normalizeWidth(157) }, ButtonStyle]}
                                                disabled={ref}
                                                onPress={() => { disabled ? null : onPress(); pressed() }}>
                                                {imageSource ? renderImg() : null}
                                                {svg ? renderSvg() : null}
                                                <Text style={[styles.textStyle, { color: textColor }, textStyle]}>
                                                    {name ? name : 'Proceed to Pay'}
                                                </Text>
                                            </TouchableOpacity>
                                        </View>
                                    </Animated.View>
                                    : (type === 'add') ?
                                    <Animated.View pointerEvents={keyboardUp && hide ? 'none' : 'auto'}
                                        style={{ opacity: hide ? opacity : 1 }}>
                                        <TouchableOpacity style={[styles.regular, { backgroundColor: background }, ButtonStyle]}
                                            disabled={ref}
                                            onPress={() => { disabled ? null : onPress(); pressed() }}>
                                                <View style={{flex:0.1,alignItems:'flex-end',justifyContent:'center',marginLeft:normalizeWidth(5)}}>
                                            {imageSource ? renderImg() : null}
                                            </View>
                                            <View style={{flex:0.9,alignItems:'center',justifyContent:'center'}}>
                                            <Text style={[styles.textStyle, { color: textColor }, textStyle]}>
                                                {name}
                                            </Text>
                                            </View>
                                        </TouchableOpacity>
                                    </Animated.View>:
                                    <Animated.View pointerEvents={keyboardUp && hide ? 'none' : 'auto'}
                                    style={{ opacity: hide ? opacity : 1 }}>
                                    <TouchableOpacity style={[styles.regular, { backgroundColor: background }, ButtonStyle]}
                                        disabled={ref}
                                        onPress={() => { disabled ? null : onPress(); pressed() }}>
                                        {imageSource ? renderImg() : null}
                                        {svg ? renderSvg() : null}
                                        <Text style={[styles.textStyle, { color: textColor }, textStyle]}>
                                            {name}
                                        </Text>
                                    </TouchableOpacity>
                                </Animated.View>

            }
        </>
    )
}

const styles = StyleSheet.create({
    image: {
        width: normalizeHeight(28),
        height: normalizeHeight(28),
       // marginRight: normalizeWidth(29)
    },
    textStyle: {
        color: Global.color.blackperl,
        fontFamily: Global.font.font_family_fb,
        fontSize: normalizeHeight(18),
        fontWeight: '600',
        letterSpacing: 0.3,
    },
    filtertextstyle: {
        color: Global.color.white,
        fontFamily: Global.font.font_family_fr,
        fontSize: normalizeHeight(12),
        letterSpacing: 0.3,
    },
    pricetext: {
        fontSize: normalizeHeight(15),
        lineHeight: normalizeHeight(18),
        letterSpacing: 0.6,
        fontFamily: Global.font.font_family_fb,
        fontWeight: '500',
        color: Global.color.black,
      
      },
      pricehrtext: {
        fontSize: normalizeHeight(12),
        lineHeight: normalizeHeight(17),
        letterSpacing: 0.6,
        fontFamily: Global.font.font_family_fb,
        fontWeight: '500',
        color: Global.color.steelGray,
      
      },
    fixed: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        height: normalizeHeight(50),
        flexDirection: 'row'
    },
    footer: {
        height: normalizeHeight(52),
        paddingHorizontal: normalizeWidth(16),
        alignItems: 'center',
        backgroundColor: Global.color.lightpink,
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0
    },
    footerBtn: {
        borderRadius: normalizeHeight(10),
        justifyContent: 'center',
        alignItems: 'center',
        height: normalizeHeight(40),
        width: '100%',
        flexDirection: 'row',
    },
    regular: {
        flexDirection: 'row',
        alignSelf: 'center',
        //borderRadius: normalizeHeight(10),
        height: normalizeHeight(62),
        width: normalizeWidth(250),
        justifyContent: 'center',
        alignItems: 'center'
    },
    changeslotText: {
        fontFamily: Global.font.font_family_fr,
        fontWeight: '600',
        fontSize: normalizeHeight(14),
        letterSpacing: 0.1,
        lineHeight: normalizeHeight(17),
        color: Global.color.white
      },
    floatingContainer: {
        alignItems: 'center',
        position: 'absolute',
        bottom: normalizeHeight(60),
        left: 0,
        right: 0,
    },
    float: {
        borderRadius: normalizeHeight(10),
        height: normalizeHeight(48),
        width: normalizeHeight(250),
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    priceViewbox1:
    {
      flex:2,
      borderColor:Global.color.steelGray,
      borderWidth:1,
      alignItems:'center',
      justifyContent:'center',
      borderRadius:10,
      paddingVertical:normalizeHeight(5),
      marginHorizontal:normalizeWidth(5)
    },
    rowView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    border: {
        height: normalizeHeight(26),
        width: normalizeWidth(65.5),
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: normalizeWidth(1),
        backgroundColor: Global.color.transparent,
        borderColor: Global.color.cyanblue,
        borderRadius: normalizeHeight(5),
        flexDirection: 'row'
    },
    textborder: {
        color: Global.color.steelGray,
        fontFamily: Global.font.font_family_fb,
        fontSize: normalizeHeight(12),
        fontWeight: '600',
    },
    bottomContainer: {
        borderTopWidth:0.5,
        borderColor:Global.color.darkLightGrey,
        height: normalizeHeight(62),
        backgroundColor: Global.color.white,
        paddingLeft: normalizeWidth(12),
       // paddingRight: normalizeWidth(16),
        position: 'absolute',
        bottom: 0,
        width: '100%',
        justifyContent: 'center',
    },
    filteroutputstyle: {
        height: normalizeHeight(30), display: 'flex', flexDirection: 'row', borderWidth: 1, borderRadius: normalizeHeight(20), borderColor: Global.color.white50, alignItems: 'center', paddingLeft: normalizeWidth(8), paddingRight: normalizeHeight(8)
    }
});

export default CmpButton;
