import React, { useLayoutEffect, useState } from 'react';
import { WebView } from 'react-native-webview';
import {
    BackHandler,
    View,
    StyleSheet,
    ScrollView,
} from 'react-native';
import Global from '../global';
import { Header, CmpLoader } from '.';
import { normalizeHeight, normalizeWidth } from './ResponsiveScreen';
import { checkpay } from '../actions/fdAction';
import { getMandateStatus } from '../actions/goldAction';
import { SERVERURL } from '../../config';
import I18n from 'react-native-i18n';
import moment from 'moment';

const INJECTED_JS = `
  window.onscroll = function() {
    window.ReactNativeWebView.postMessage(
      JSON.stringify({
        scrollTop: document.documentElement.scrollTop || document.body.scrollTop
      }),     
    )
}`;

function index({ route, navigation }) {
    const { html, name, url, frompage, sub_reference_id } = route?.params;
    const [source, setSource] = useState({});
    const [showLoader, setshowLoader] = useState(false);
    const [loaderText, setLoaderText] = useState("");

    useLayoutEffect(() => {
        navigation.setOptions({
            header: () => (
                <Header
                    backicon={frompage === 'fd' ? false : true}
                    navigation={navigation}
                    home={frompage === 'fd' ? false : true}
                    name={name}
                    homePress={() => handleBackButtonClick()}
                />
            )
        });
        if (html) {
            setSource({ html: html })
        } else {
            if (name === 'NPS') {
                setshowLoader(true);
                setLoaderText(I18n.t('VLD_PLEASE_WHILE_PROCESSING'))
                setTimeout(() => {
                    setshowLoader(false);
                }, 20000);
            }
            setSource({ uri: url })
        }
        const unsubscribeSiFocus = navigation.addListener('focus', (e) => {
            BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
        });
        const unsubscribeSiBlur = navigation.addListener('blur', (e) => {
            BackHandler.removeEventListener('hardwareBackPress', handleBackButtonClick);
        });
        return unsubscribeSiFocus, unsubscribeSiBlur
    }, [])

    const handleBackButtonClick = () => {
        navigation.goBack();
        return true;
    };

    const ActivityIndicatorLoadingView = () => {
        if (name === 'NPS') {
            return <CmpLoader loading={showLoader} loaderText={loaderText} />
        } else {
            return <CmpLoader />;
        }

    }
    const checkpayment = async () => {
        let data = await checkpay()
        if (data?.data?.data?.status) {
            navigation.navigate('FdPaymentSuccessful', { status: data?.data?.data?.status })
        }
    }
    const checkMandateStatus = async () => {
        const { data, error } = await getMandateStatus({ sub_reference_id })
        if (!error && data?.item?.checkout_status == 'SUCCESS') {
            navigation.navigate('SuccessFailure', {
                status: 'success',
                nav: 'Goldbuy',
                title: 'SIP Created Successfully',
                title1: 'View SIPs',
                nav1: 'ManageSIP',
                message: `Your SIP will start on ${moment(data?.item?.firstcharge_date, 'YYYY-MM-DD').format('DD MMM YYYY')}`
            })
        } else {
            navigation.navigate('SuccessFailure', {
                status: 'fail',
                nav: 'Goldbuy',
                title: 'Authorisation Failed',
                message: `Your bank authorisation could not complete\nTry to create the SIP again`
            })
        }
    }

    const onNavigationStateChange = (navState) => {
        if (navState?.url == `${SERVERURL}fd/paymentresponse`) {
            checkpayment()
        }
        if (navState?.url == `${SERVERURL}goldsilver/mandateresponse`) {
            checkMandateStatus()
        }
    };


    return (
        <View style={styles.container} >
            <ScrollView
                contentContainerStyle={styles.SCROLLVIEW_CONTAINER}>
                <WebView
                    source={source}
                    renderLoading={ActivityIndicatorLoadingView}
                    injectedJavaScript={INJECTED_JS}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    geolocationEnabled={false}
                    onNavigationStateChange={(nav) => onNavigationStateChange(nav)}
                    startInLoadingState={true}
                />
            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    SCROLLVIEW_CONTAINER: {
        flex: 1,
        marginTop: 0
    },
    name: {
        fontSize: normalizeHeight(17),
        color: Global.color.white,
        fontFamily: Global.font.font_family_fb,
        fontWeight: '500',
        letterSpacing: 0.3,
        paddingLeft: normalizeWidth(5)
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    headerRight: {
        flex: 0.1,
        alignItems: 'flex-end',
        paddingRight: normalizeWidth(15)
    },
    img: {
        height: normalizeHeight(18),
        width: normalizeWidth(18),
        resizeMode: 'contain',
        tintColor: Global.color.white
    }
});

export default index;