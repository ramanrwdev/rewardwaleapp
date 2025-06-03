import React, { useEffect } from 'react';
import { View, Text, BackHandler, StyleSheet } from 'react-native';
import Global from '../global';
import { normalizeHeight, normalizeWidth } from './ResponsiveScreen';
import GlobalStyles from '../styles/GlobalStyles';
import {CmpButton } from './index';

const SuccessFailure = ({ route, navigation }) => {
    const { status, nav, title, message, nav1, title1 } = route?.params;
    useEffect(() => {
        const handleBackButtonClick = () => {
            navigation.navigate(nav);
            return true;
        };
        const backHandler = BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
        return () => backHandler.remove();
    }, []);

    return (
        <View style={[GlobalStyles.mainsection, GlobalStyles.primarysection, styles.container]}>
            {/* <Image name={status === 'fail' ? TRANSACTIONFAIL : GREENDONE} height={normalizeHeight(80)} width={normalizeWidth(80)} />
             */}
            <Text style={[styles.statusText, { color: status === 'fail' ? Global.color.errorRed : Global.color.successgreen }]}>{title}</Text>
            <Text style={styles.messageText}>{message}</Text>
            <Text style={styles.bottomText} onPress={() => navigation.navigate(nav1, { from: nav })}>{title1}</Text>
            <CmpButton name={'Home'} type="footer" onPress={() => navigation.navigate(nav)} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingTop: normalizeHeight(150),
    },
    statusText: {
        fontSize: normalizeHeight(20),
        lineHeight: normalizeHeight(24),
        letterSpacing: 0.3,
        fontFamily: Global.font.bold,
        fontWeight: '700',
        marginTop: normalizeHeight(24)
    },
    messageText: {
        fontSize: normalizeHeight(16),
        lineHeight: normalizeHeight(22),
        letterSpacing: 0.3,
        fontFamily: Global.font.regular,
        fontWeight: '400',
        color: Global.color.white25575,
        marginTop: normalizeHeight(8),
        textAlign: 'center'
    },
    bottomText: {
        fontSize: normalizeHeight(16),
        lineHeight: normalizeHeight(19),
        letterSpacing: 0.3,
        fontFamily: Global.font.semiBold,
        fontWeight: '600',
        color: Global.color.cyanblue,
        textAlign: 'center',
        position: 'absolute',
        bottom: normalizeHeight(104)
    }

});

export default SuccessFailure;
