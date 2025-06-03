/**
 * Component: TextBox
 * Name: CmpTextBox
 * Path: /components/CmpTextBox
 * Params:
 * ** label - To give title for the textbox.(string)
 * ** textPreffix - To show text as prefix in placeholder. Ex: textPreffix={'+91'}
 * ** textSuffix - To show text as suffix in placeholder. Ex: textSuffix={'Apply'}
 * ** suffixColor - color for textSuffix
 * ** imageSourcePrefix - To show image as prefix in placeholder. Ex: imageSourcePrefix={require('../Images/acc.png')}
 * ** iconPrefix - To show icon as prefix in placeholder. Ex: iconPrefix={ <Icon name="search" size={18} color={Global.color.white50}> </Icon> }
 * ** imageSourceSuffix - To show image as suffix in placeholder. Ex: imageSourceSuffix={require('../Images/mail.png')}
 * ** iconSuffix - To show icon as suffix in placeholder. Ex: iconSuffix={ <Icon name="search" size={18} color={Global.color.white50}> </Icon> }
 * ** errorMessage - error Message
 * ** styles - To give extra styles
 **/

import { View, Image, Text, TextInput, StyleSheet, Pressable, Platform, TouchableOpacity } from 'react-native';
import React, { useRef } from 'react';
import Global from '../global';
import { normalizeHeight, normalizeWidth } from './ResponsiveScreen';
import GlobalStyles from '../styles/GlobalStyles';

const CmpText2Box = (props) => {
    const { label, label2, noteRight, textPrefix, textSuffix, imageSourcePrefix, iconPrefix, iconSuffix, imageSourceSuffix, suffixColor, noteLeft, errorMessage, suffixPress, onPress, multiline, editable, absoluteSuffix, multilinestyle,secureTextEntry,placeholderColor } = props;
    const textInRef = useRef(null)
    return (
        <View pointerEvents={!onPress && editable === false ? 'none' : 'auto'} style={{marginTop:3}}>
            {(label || noteRight || noteLeft) ?
                <View style={[styles.label, { justifyContent: (noteRight && label) ? 'space-between' : noteRight ? 'flex-end' : 'flex-start' }]}>
                    {label ? <Text style={styles.labelTextz}>{label}<Text style={styles.label2}>{' '}{label2}</Text></Text> : null}
                    <Text style={styles.note}>{noteRight ? noteRight : noteLeft}</Text>
                </View> : null}
            <TouchableOpacity onPress={() => onPress ? onPress() : textInRef.current.focus()}>
                <View pointerEvents={onPress ? 'none' : 'auto'} style={[styles.sectionStyle, props.styles]} >
                    <View style={{ flexDirection: 'row' }}>
                        {imageSourcePrefix ?
                            <Image
                                source={imageSourcePrefix}
                                style={styles.imageStyle}
                            /> : null}
                        {iconPrefix ? <View style={styles.iconP}>{iconPrefix}</View> : null}
                        {textPrefix ? <Text style={styles.pretext}>{textPrefix}</Text> : null}
                        <TextInput
                            ref={textInRef}
                            secureTextEntry={secureTextEntry}
                            style={[
                                styles.textinside, multiline ? multilinestyle ?? styles.multiline : null,
                                (iconPrefix || imageSourcePrefix ? { marginLeft: normalizeWidth(46) } : textPrefix ? { marginLeft: normalizeWidth(10) } : { marginLeft: normalizeWidth(10) }),
                                (iconSuffix || imageSourceSuffix ? { marginRight: normalizeWidth(10) } : textSuffix ? { marginRight: normalizeWidth(0) } : { marginRight: normalizeWidth(13) })
                            ]}
                            placeholderTextColor={placeholderColor ? placeholderColor:Global.color.blackone}
                            color={Global.color.blackone}
                            returnKeyType={'done'}
                            {...props}
                        />
                    </View>
                    {imageSourceSuffix ?
                                <Image
                                    source={imageSourceSuffix}
                                    style={styles.imageStyle1}
                                    tintColor={Global.color.primary}
                                /> : null}
                    {/* {imageSourceSuffix || iconSuffix || textSuffix || absoluteSuffix ?
                        <Pressable hitSlop={{ top: 20, bottom: 20, left: 10, right: 10 }} onPress={() => suffixPress ? suffixPress() : null} style={{ alignItems: 'flex-end', justifyContent: 'center' }}>
                            {imageSourceSuffix ?
                                <Image
                                    source={imageSourceSuffix}
                                    style={styles.imageStyle1}
                                /> : null}
                            {iconSuffix ? <View style={styles.iconS}>{iconSuffix}</View> : null}
                            {textSuffix ? <Text style={[styles.pretext, { marginLeft: 0, marginRight: normalizeWidth(16), color: suffixColor ? suffixColor : Global.color.slateGrey }]}>{textSuffix}</Text> : null}
                            {absoluteSuffix ? <Text style={[styles.pretext, { marginLeft: 0, marginRight: normalizeWidth(16), color: Global.color.slateGrey, position: 'absolute', right: normalizeWidth(60) }]}>{absoluteSuffix}</Text> : null}
                        </Pressable>
                        : null} */}
                </View>
            </TouchableOpacity>
            <Text style={[GlobalStyles.errorstyle, { paddingBottom: normalizeHeight(8) }]}>{errorMessage ? errorMessage : '  '}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    textlabel2: {
        color: Global.color.lightgrey,
        fontSize: normalizeHeight(14),
        fontFamily: Global.font.font_family_fb,
        fontWeight: '600',
    },
    label2: { color: Global.color.error, fontFamily: Global.font.font_family_fr },
    label: { flexDirection: 'row', alignItems: 'center', paddingBottom: normalizeHeight(8) },
    textinside: {
        fontFamily: Global.font.TextMedium,
        fontSize: normalizeHeight(16),
        lineHeight:normalizeHeight(19),
        fontWeight: '400',
        minHeight: normalizeHeight(52),
        minWidth: normalizeWidth(311),
        paddingTop: (Platform.OS === 'ios') ? normalizeHeight(11) : 0,
        paddingBottom: (Platform.OS === 'ios') ? normalizeHeight(11) : 0
    },
    pretext: {
        fontFamily: Global.font.font_family_fb,
        color:Global.color.white,
        fontSize: normalizeHeight(18),
        fontWeight: '600',
        marginLeft: normalizeWidth(16),
        alignSelf: 'center'
    },
    note: {
        color: Global.color.orgGrey,
        fontFamily: Global.font.font_family_fr,
        fontWeight: '400',
        fontSize: normalizeHeight(11)
    },
    sectionStyle: {
       // flexDirection: 'row',
        marginTop:normalizeHeight(3),
        backgroundColor: Global.color.skycolorbk,
        borderWidth: 0,
        width:'100%',
        borderColor: Global.color.skycolorbk,
        // backgroundColor: '#242A34',
        borderRadius: normalizeHeight(10),
        //marginBottom: normalizeHeight(4),
        zIndex: 1,
        justifyContent: 'center',
    },
    imageStyle: {
        position: 'absolute',
        left: normalizeHeight(16),
        top: normalizeHeight(10),
        height: normalizeHeight(20),
        width: normalizeHeight(20),
        resizeMode: 'contain',
    },
    imageStyle1: {
        position: 'absolute',
        right: normalizeHeight(26),
        top: normalizeHeight(14),
        height: normalizeHeight(20),
        width: normalizeHeight(20),
        resizeMode: 'contain'
    },
     labelTextz: {
        fontFamily: Global.font.TextMedium,
        fontSize: normalizeHeight(18),
        lineHeight:normalizeHeight(21),
        color: Global.color.blackz,
      },
    iconS: { position: 'absolute', right: normalizeHeight(16), top: normalizeHeight(10) },
    iconP: { position: 'absolute', left: normalizeHeight(16), top: normalizeHeight(10) },
    multiline: {
        minHeight: normalizeHeight(96),
        textAlignVertical: 'top',
        paddingTop: normalizeHeight(15),
        maxHeight: normalizeHeight(120),
        width: '93%'
    }
});

export default CmpText2Box 