/**
 * page: fail or success transaction
 * Name: 
 * Path: /components/CmpTextBox
 * Params:
 * ** status - fail or success
 * ** label - the message 
 * nav: navigation on click of footer button
 **/

import { View, Image, Text, TextInput, StyleSheet, Pressable, Platform, } from 'react-native';
import React, { useRef } from 'react';
import Global from '../global';
import { normalizeHeight, normalizeWidth } from './ResponsiveScreen';
import GlobalStyles from '../styles/GlobalStyles';
import {CmpButton } from './../components/index'


const Failsuccess = (props) => {

    let status = props?.route?.params?.status
    console.log(status, props?.route?.params?.label)

    return (
        <View style={[GlobalStyles.mainsection,
        GlobalStyles.primarysection, { alignItems: 'center', paddingTop: normalizeHeight(108) }]}>
            {/* <Image
                name={status === 'fail' ? FAILT : SUCCESF}
                height={normalizeHeight(247)}
                width={normalizeWidth(214)}
            /> */}
            <Text style={{
                fontSize: normalizeHeight(20),
                lineHeight: normalizeHeight(24),
                letterSpacing: 0.6,
                fontFamily: Global.font.font_family_fb,
                fontWeight: '700',
                color: status === 'fail' ? Global.color.errorRed : Global.color.successgreen,
                marginTop: normalizeHeight(35)

            }}>{status === 'fail' ? "Transaction Failed" : "Transaction Successful"}</Text>
            <Text style={{
                fontSize: normalizeHeight(16),
                lineHeight: normalizeHeight(22),
                letterSpacing: 0.6,
                fontFamily: Global.font.font_family_fr,
                fontWeight: '400',
                color: Global.color.periwinklegrey,
                marginTop: normalizeHeight(35),
                textAlign: 'center'


            }}>{props.route.params?.label}</Text>
            <CmpButton
                name='Home'
                type="footer"
                onPress={() => props.navigation.navigate(props?.route?.params?.nav)}
            />
        </View>
    );
}


export default Failsuccess