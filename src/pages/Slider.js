import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Animated,
  Dimensions,
  BackHandler,
  Alert
} from "react-native";
import GlobalStyles from "../styles/GlobalStyles";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  widthPercentageToDP,
  heightPercentageToDP,
  normalizeHeight,
  normalizeWidth,
} from "../components/ResponsiveScreen";
import appImages from "../images/images";
import { SvgXml } from 'react-native-svg';
import Global from "./../global";
import bluebackarrow from "../images/blueBackArrow.svg";
import blueforwardarrow from "../images/blueforwardarrow.svg";
import namelogo from "../images/namelogo.svg";
import images from '../images/images';
import I18n from 'react-native-i18n';


export default Slider = (props) => {
  const [currentIndex, setcurrentIndex] = useState(0)
  const flatListRef = useRef(null);

  useEffect(() => {
    const unsubscribeSiFocus = props.navigation.addListener('focus', (e) => {
      BackHandler.addEventListener('hardwareBackPress', backAction);
    });
    const unsubscribeSiBlur = props.navigation.addListener('blur', (e) => {
      BackHandler.removeEventListener('hardwareBackPress', backAction);
    });
    return unsubscribeSiFocus, unsubscribeSiBlur;
  }, [])

  const data = [
    {
      id: 1,
      name: I18n.t('LBL_SLIDER_DATA_TEXT1'),
      title: I18n.t('LBL_NIGHT_STAY'),
      image: appImages.night_stay,
    },
    {
      id: 2,
      name: I18n.t('LBL_SLIDER_DATA_TEXT2'),
      title: I18n.t('LBL_COUPLES_STAY'),
      image: appImages.couple_stay,
    },
    {
      id: 3,
      name: I18n.t('LBL_SLIDER_DATA_TEXT3'),
      title: I18n.t('LBL_BUSINESS_MEETING'),
      image: appImages.meeting_stay,
    },

  ]

  const backAction = () => {
    Alert.alert(
      I18n.t('LBL_EXIT_APP'),
      I18n.t('LBL_WANT_TO_EXIT'),
      [
        {
          text: I18n.t('LBL_CANCEL'),
          style: 'cancel'
        },
        {
          text: I18n.t('BTN_OK'),
          onPress: () => BackHandler.exitApp()
        }
      ],
      {
        cancelable: false
      }
    );
    return true;
  };
  const onViewCallBack = useCallback((viewableItems) => {
    if (viewableItems?.viewableItems && viewableItems?.viewableItems[0]) {
      setcurrentIndex(viewableItems?.viewableItems[0]?.index);
    }
  }, [])
  const viewConfigRef = useRef({
    viewAreaCoveragePercentThreshold: 60,
  })

  const screenWidth = Dimensions.get("screen").width;
  const scrollX = new Animated.Value(0);

  const dotPosition = Animated.divide(scrollX, screenWidth);

  navigatetoDashboard = async () =>
  {
    const asynccredentails = 
    {
      contact:"9729799040",
      otp:"1111",
    }
    await AsyncStorage.setItem('usercrendentials', JSON.stringify(asynccredentails));
    props.navigation.navigate("Main")
  }
  return (
    <View style={[GlobalStyles.mainsection, { backgroundColor: Global.color.lightpink}]}>
      <View style={[GlobalStyles.innerContainer]}>
        <View
          style={{
            marginTop: normalizeHeight(50),
            justifyContent: "center",
            alignItems: "center",
          }}
        >

{/* <Image
                        source={images.logo}
                        style={{
                          width: normalizeWidth(200),
                          height: normalizeHeight(50),
                        }}
                        resizeMode="contain"
                      /> */}
          {/* <SvgXml
            height={heightPercentageToDP('7.93%')}
            width={widthPercentageToDP('40%')}
            xml={namelogo}
            style={{ flex: 1 }}
          /> */}

          <View
            style={{
              marginTop: normalizeHeight(50),
              width: screenWidth,
            }}
          >
            <Animated.FlatList
              ref={flatListRef}
              horizontal
              pagingEnabled
              scrollEventThrottle={16}
              snapToAlignment="center"
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => `${item.id}`}
              data={data}
              decelerationRate="fast"
              viewabilityConfig={viewConfigRef.current}
              onViewableItemsChanged={onViewCallBack}
              onScroll={Animated.event(
                [
                  {
                    nativeEvent: {
                      contentOffset: {
                        x: scrollX,
                      },
                    },
                  },
                ],
                { useNativeDriver: false }
              )}
              renderItem={({ item, index }) => {
                return (
                  <View key={`d-${index}`}>
                    <View
                      style={{
                        alignItems: "center",
                        width: screenWidth,
                        height: normalizeHeight(320),
                      }}
                    >
                      <Image
                        source={item.image}
                        style={{
                          width: screenWidth,
                          height: normalizeHeight(320),
                        }}
                        resizeMode="contain"
                      />
                    </View>

                    <View
                      style={{
                        marginTop: normalizeHeight(20),
                        alignItems: "center",
                      }}
                    >
                      <Text
                        style={{
                          fontSize: normalizeHeight(24),
                          fontWeight: "500",
                          color: Global.color.lightgrey,
                          fontFamily: Global.font.font_family_fb,
                          textAlign: "center",
                          letterSpacing: 0.3,
                        }}
                      >
                        {item.title}
                      </Text>
                      <Text
                        style={{
                          fontSize: normalizeHeight(17),
                          fontWeight: "500",
                          lineHeight: normalizeHeight(24),
                          color: Global.color.lightgrey,
                          fontFamily: Global.font.font_family_fb,
                          textAlign: "center",
                          letterSpacing: 1,
                          marginTop: normalizeHeight(15),
                        }}
                      >
                        {item.name}
                      </Text>
                    </View>
                  </View>
                );
              }}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              marginTop: heightPercentageToDP("8.86%"),
              width: widthPercentageToDP("100%"),
            }}
          >
            {data.map((item, index) => {
              const dotColor = dotPosition.interpolate({
                inputRange: [index - 1, index, index + 1],
                outputRange: [
                  Global.color.darkGrey,
                  Global.color.white,
                  Global.color.darkGrey,
                ],
                extrapolate: "clamp",
              });
              const dotWidth = dotPosition.interpolate({
                inputRange: [index - 1, index, index + 1],
                outputRange: [
                  widthPercentageToDP("4.26%"),
                  widthPercentageToDP("9.86%"),
                  widthPercentageToDP("4.26%"),
                ],
                extrapolate: "clamp",
              });

              return (
                <Animated.View
                  key={`dot-${index}`}
                  style={{
                    height: heightPercentageToDP("0.49%"),
                    width: dotWidth,
                    borderRadius: 10,
                    marginRight: widthPercentageToDP("2.66%"),
                    backgroundColor: dotColor,
                  }}
                />
              );
            })}
          </View>
        </View>
      </View>
      {currentIndex === data.length - 1 && (
        <TouchableOpacity
          style={{
            width: widthPercentageToDP("92%"),
            height: heightPercentageToDP("6.15%"),
            backgroundColor: Global.color.white,
            borderRadius: 10,
            position: "absolute",
            bottom: heightPercentageToDP("6.15%"),
            left: 0,
            zIndex: 1,
            justifyContent: "center",
            marginLeft: widthPercentageToDP("4%"),
          }}
          onPress={() => props.navigation.navigate("Login")}
        >
          <Text
            style={{
              fontSize: heightPercentageToDP("2.12%"),
              lineHeight: heightPercentageToDP("2.54%"),
              fontWeight: "500",
              color: Global.color.pinkColor,
              fontFamily: Global.font.font_family_fb,
              letterSpacing: 0.8,
              textAlign: "center",
            }}
          >
            {I18n.t('GET_STARTED')}
          </Text>
        </TouchableOpacity>
      )}

      {currentIndex < data.length - 1 && (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: widthPercentageToDP("84%"),
            position: "absolute",
            bottom: heightPercentageToDP("6.15%"),
            left: 0,
            zIndex: 1,
            marginLeft: widthPercentageToDP("8%"),
            alignItems: "center",
          }}
        >
          {currentIndex === 0 ? (
            <View></View>
          ) : (
            <TouchableOpacity
              onPress={() => {
                flatListRef.current.scrollToIndex({
                  index: currentIndex - 1,
                  animated: true,
                });
              }}
            >
               
              <SvgXml
                height={normalizeHeight(40)}
                width={normalizeWidth(40)}
                xml={bluebackarrow}
                style={{ flex: 1 }}
              />
            </TouchableOpacity>
          )}
          <TouchableOpacity
            onPress={() => {
              flatListRef.current.scrollToIndex({
                index: currentIndex + 1,
                animated: true,
              });
            }}
          >
            <SvgXml
              height={normalizeHeight(40)}
              width={normalizeWidth(40)}
              xml={blueforwardarrow}
              style={{ flex: 1 }}
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}


