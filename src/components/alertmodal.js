import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Modal from 'react-native-modal';
import images from '../images/images';
import CameraStyles from '../styles/CameraStyles';
import GlobalStyles from '../styles/GlobalStyles';
import { CmpButton } from './../components';
import {
  widthPercentageToDP,
  heightPercentageToDP,
  normalizeHeight,
  normalizeWidth,
} from './../components/ResponsiveScreen';
import Global from './../global';
import { testProps } from '../utills/commonFunctions';
import I18n from 'react-native-i18n';
class Alertmodal extends Component {
  render() {
    const {
      continuefunc,
      closefunc,
      isVisible,
      title,
      content,
      closebutton,
      continuebutton,
    } = this.props;

    return (
      <View>
        <Modal
          isVisible={isVisible}
          backdropOpacity={0.5}
          backdropTransitionOutTiming={0}
          animationIn="fadeIn"
          hideModalContentWhileAnimating={false}
          animationOut="fadeOut"
          onBackdropPress={this.props.onBackdropPress}
          onBackButtonPress={this.props.onBackButtonPress}>
          <View style={CameraStyles.modalmaincont}>
            {title ? (
              <View style={CameraStyles.modalmaintext}>
                <Text style={CameraStyles.titlefont}>{title}</Text>
              </View>
            ) : null}
            {content ? (
              <View style={CameraStyles.modalmaintext}>
                <Text style={CameraStyles.discardfont}>{content}</Text>
              </View>
            ) : null}

            <View style={CameraStyles.modalbuttoncont}>
              <TouchableOpacity
                onPress={closefunc}
                style={CameraStyles.buttonspacing}>
                <View>
                  <Text style={CameraStyles.modalCancelfont}>
                    {closebutton}
                  </Text>
                </View>
              </TouchableOpacity>
              <View style={CameraStyles.centerborder}></View>

              <TouchableOpacity
                onPress={continuefunc}
                style={[CameraStyles.buttonspacing]}>
                <View>
                  <Text style={CameraStyles.btndiscardfont}>
                    {continuebutton}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

class Alertmodalok extends Component {
  render() {
    const { closefunc, isVisible, title, content, closebutton } = this.props;

    return (
      <View>
        <Modal
          isVisible={isVisible}
          backdropOpacity={0.5}
          backdropTransitionOutTiming={0}
          // AnimationIn="fadeIn"
          hideModalContentWhileAnimating={false}
          // AnimationOut="fadeOut"
          onBackdropPress={this.props.onBackdropPress}
          onBackButtonPress={this.props.onBackButtonPress}>
          <View style={CameraStyles.modalmaincont}>
            {title ? (
              <View style={CameraStyles.modalmaintext}>
                <Text style={CameraStyles.titlefont}>{title}</Text>
              </View>
            ) : null}
            {content ? (
              <View style={CameraStyles.modalmaintext}>
                <Text style={CameraStyles.discardfont}>{content}</Text>
              </View>
            ) : null}

            <View style={CameraStyles.modalbuttoncont}>
              <TouchableOpacity
                onPress={closefunc}
                style={CameraStyles.buttonspacing}>
                <View>
                  <Text style={CameraStyles.modalCancelfont}>
                    {closebutton}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}
class KYCmodal extends Component {

  render() {
    const { middleButtonOnPress, onBackdropPress, isVisible, title, error, onBackButtonPress, closeButtonText, submitButtonText, middleButtonText, message, submitButtonOnPress, closeButtonOnPress } = this.props;
    return (
      <View>
        <Modal
          isVisible={isVisible}
          backdropColor={Global.color.backdrop}
          backdropOpacity={1}
          backdropTransitionOutTiming={0}
          animationIn="fadeIn"
          hideModalContentWhileAnimating={false}
          animationOut="fadeOut"
          onBackdropPress={onBackdropPress}
          coverScreen={true}
          onBackButtonPress={onBackButtonPress}
        >
          <View style={{
            // backgroundColor: '#FAFAFA',
            backgroundColor: Global.color.mirage,
            borderRadius: 10,
            paddingVertical: normalizeHeight(20),
            justifyContent: 'center',
            alignItems: 'center',
            // Height: heightPercentageToDP('22.29%'),
            paddingHorizontal: normalizeWidth(22),
            shadowColor: 'rgba(0, 0, 0, 0.15)',
            shadowOffset: {
              width: 0,
              height: 2
            },
            shadowOpacity: 0.2,
            shadowRadius: 20,
            elevation: 5
          }}
          >
            {error ?
              <Text style={{
                fontSize: heightPercentageToDP('2.40%'),
                lineHeight: heightPercentageToDP('2.83%'),
                color: '#EE5166',
                fontFamily: Global.font.font_family_fb,
                fontWeight: '500',
                letterSpacing: 0.3,
                marginBottom: heightPercentageToDP('1.84%')
              }}>{error}</Text> : null
            }
            {title ?
              <Text style={{
                fontSize: normalizeHeight(17),
                lineHeight: normalizeHeight(20),
                color: Global.color.white25070,
                fontFamily: Global.font.font_family_fb,
                fontWeight: '500',
                letterSpacing: 0.1
              }}>{title}</Text> : null}

            <Text style={{
              marginTop: !title ? 0 : normalizeHeight(15),
              color: Global.color.white25070,
              fontFamily: Global.font.font_family_fr,
              textAlign: 'center',
              fontSize: normalizeHeight(15),
              lineHeight: normalizeHeight(20),
              letterSpacing: 0.3,
              fontWeight: '400'

            }}>{message}</Text>
            {middleButtonText && (
              <View
                style={{
                  alignItems: 'center',
                  marginTop: heightPercentageToDP('4.06%'),
                }}>
                <TouchableOpacity
                  {...testProps('middle Button')}
                  onPress={middleButtonOnPress}
                  style={{
                    width: widthPercentageToDP('22.4%'),
                    height: heightPercentageToDP('4.34%'),
                    borderRadius: 4,
                    backgroundColor: '#151D29',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderColor: Global.color.cyanblue,
                    borderWidth: 1,
                  }}>
                  <Text
                    style={{
                      fontSize: heightPercentageToDP('1.84%'),
                      lineHeight: heightPercentageToDP('2.21%'),
                      color: Global.color.cyanblue,
                      fontFamily: Global.font.font_family_fr,
                      fontWeight: '500',
                      letterSpacing: 0.3,
                    }}>
                    {middleButtonText}
                  </Text>
                </TouchableOpacity>
              </View>
            )}
            <View
              style={{
                justifyContent:
                  closeButtonText && submitButtonText
                    ? 'space-between'
                    : 'center',
                alignItems: 'center',
                flexDirection: 'row',
                marginTop: heightPercentageToDP('4.06%'),
                width: '100%',
              }}>
              {closeButtonText && (
                <TouchableOpacity
                  {...testProps('Close Button')}
                  onPress={closeButtonOnPress}
                  style={{
                    width: normalizeWidth(107),
                    height: normalizeHeight(33),
                    borderRadius: 8,
                    backgroundColor: Global.color.blue2,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderColor: Global.color.cyanblue80,
                    borderWidth: 1,
                  }}>
                  <Text
                    style={{
                      fontSize: normalizeHeight(15),
                      lineHeight: normalizeHeight(18),
                      color: Global.color.cyanblue80,
                      fontFamily: Global.font.font_family_fb,
                      fontWeight: '500',
                      letterSpacing: 0.3,
                    }}>
                    {closeButtonText}
                  </Text>
                </TouchableOpacity>
              )}
              {submitButtonText && (
                <TouchableOpacity
                  {...testProps('Submit Button')}
                  onPress={submitButtonText === 'Ok' ? closeButtonOnPress : submitButtonOnPress}
                  style={{
                    width: normalizeWidth(107),
                    height: normalizeHeight(33),
                    borderRadius: 8,
                    backgroundColor: Global.color.cyanblue,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      fontSize: normalizeHeight(15),
                      lineHeight: normalizeHeight(18),
                      color: Global.color.lightgrey,
                      fontFamily: Global.font.font_family_fb,
                      fontWeight: '500',
                      letterSpacing: 0.3,
                    }}>
                    {submitButtonText}
                  </Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}
class BankDetailsModal extends Component {
  /*
   * Constructor(props) {
   *   super(props);
   * }
   */

  render() {
    const {
      title,
      fullName,
      bankName,
      ifsc,
      accountNumber,
      accountType,
      submitButtonText,
      submitButtonOnPress,
      onBackdropPress,
      onBackButtonPress,
      isVisible,
    } = this.props;

    let arr = [
      { label: I18n.t('LBL_NAME'), value: fullName.trim() },
      { label: I18n.t('LBL_BANKS'), value: bankName },
      { label: I18n.t('LBL_IFSC_TEXT'), value: ifsc },
      { label: I18n.t('LBL_AC'), value: accountNumber },
      { label: I18n.t('LBL_TYP'), value: accountType }
    ]

    return (
      <View>
        <Modal
          isVisible={isVisible}
          backdropColor={Global.color.backdrop}
          backdropOpacity={0.8}
          backdropTransitionOutTiming={0}
          animationIn="fadeIn"
          hideModalContentWhileAnimating={false}
          animationOut="fadeOut"
          onBackdropPress={onBackdropPress}
          coverScreen={true}
          onBackButtonPress={onBackButtonPress}>
          <View
            style={{
              backgroundColor: '#151D29',
              borderRadius: 10,
              paddingVertical: heightPercentageToDP('2.46%'),
              justifyContent: 'center',
              paddingHorizontal: widthPercentageToDP('5.86%'),
              shadowColor: 'rgba(0, 0, 0, 0.15)',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.2,
              shadowRadius: 20,
              elevation: 5,
            }}>
            <Text
              style={{
                fontSize: heightPercentageToDP('2.12%'),
                lineHeight: heightPercentageToDP('2.83%'),
                color: Global.color.lightgrey,
                fontFamily: Global.font.font_family_fr,
                fontWeight: '500',
                letterSpacing: 0.3,
                textAlign: 'center',
                marginBottom: heightPercentageToDP('3.95%'),
              }}>
              {title}
            </Text>
            {arr?.map((u, i) => {
              return (
                <View key={i}
                  style={{
                    flexDirection: 'row',
                    marginBottom: heightPercentageToDP('1.95%')
                  }}>
                  <View style={{ flex: 0.2 }}>
                    <Text style={[GlobalStyles.bankLabel]}>{u.label}</Text>
                  </View>
                  <View style={{ flex: 0.03 }}>
                    <Text style={[GlobalStyles.bankValue]}>:</Text>
                  </View>
                  <View style={{ flex: 0.77 }}>
                    <Text style={[GlobalStyles.bankValue]}>{u.value}</Text>
                  </View>
                </View>
              )
            })}

            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: heightPercentageToDP('4.34%'),
                width: '100%',
              }}>
              <TouchableOpacity
                onPress={submitButtonOnPress}
                style={{
                  width: widthPercentageToDP('28.53%'),
                  height: heightPercentageToDP('4.34%'),
                  borderRadius: 4,
                  backgroundColor: Global.color.cyanblue,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontSize: heightPercentageToDP('2.12%'),
                    lineHeight: heightPercentageToDP('2.54%'),
                    color: Global.color.lightgrey,
                    fontFamily: Global.font.font_family_fb,
                    fontWeight: '500',
                    letterSpacing: 0.3,
                  }}>
                  {submitButtonText}
                </Text>
              </TouchableOpacity>
            </View>
          </View >
        </Modal >
      </View >
    );
  }
}


class Expensemodal extends Component {
  render() {
    const {
      middleButtonOnPress,
      onBackdropPress,
      isVisible,
      title,
      onBackButtonPress,
      closeButtonText,
      submitButtonText,
      middleButtonText,
      message,
      submitButtonOnPress,
      closeButtonOnPress,
    } = this.props;

    return (
      <View>
        <Modal
          isVisible={isVisible}
          backdropColor={Global.color.backdrop}
          backdropOpacity={0.8}
          backdropTransitionOutTiming={0}
          animationIn="fadeIn"
          hideModalContentWhileAnimating={false}
          animationOut="fadeOut"
          onBackdropPress={onBackdropPress}
          coverScreen={true}
          onBackButtonPress={onBackButtonPress}>
          <View
            style={{
              backgroundColor: '#151D29',
              borderRadius: 10,
              paddingVertical: normalizeHeight(30),
              justifyContent: 'center',
              alignItems: 'center',
              paddingLeft: normalizeWidth(24),
              paddingRight: normalizeWidth(19),
              shadowColor: 'rgba(0, 0, 0, 0.15)',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.2,
              shadowRadius: 20,
              elevation: 4,
            }}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                width: '100%',
              }}>
              <View
                style={{
                  flex: 0.21,
                }}>
                <Image
                  style={{
                    height: normalizeHeight(40),
                    width: normalizeWidth(40),
                    resizeMode: 'contain',
                  }}
                  source={images.pass_icon}
                />
              </View>

              <View
                style={{
                  flex: 0.79,
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                }}>
                <Text
                  style={{
                    color: Global.color.white25070,
                    fontFamily: Global.font.font_family_fb,
                    textAlign: 'center',
                    fontSize: normalizeHeight(17),
                    lineHeight: normalizeHeight(22),
                    fontWeight: '500',
                  }}>
                  {message}
                </Text>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const ImageModal = ({
  onBackdropPress,
  isVisible,
  title,
  onBackButtonPress,
  ButtonText,
  message,
  ButtonOnPress,
  closeIconOnPress,
  image,
  imageStyle
}) => {

  return (
    <View>
      <Modal
        isVisible={isVisible}
        backdropColor={'rgba(0, 0, 0, 0.8)'}
        backdropOpacity={isVisible ? 1 : 0}
        backdropTransitionOutTiming={0}
        animationIn="fadeIn"
        hideModalContentWhileAnimating={false}
        animationOut="fadeOut"
        coverScreen={true}
        onBackdropPress={onBackdropPress}
        onBackButtonPress={onBackButtonPress}
      >
        <View style={{
          width: '100%',
          backgroundColor: Global.color.mirage,
          borderRadius: normalizeHeight(10),
          paddingTop: normalizeHeight(32),
          paddingBottom: normalizeHeight(16),
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: normalizeWidth(24),
          shadowColor: 'rgba(0, 0, 0, 0.15)',
          shadowOffset: {
            width: 0,
            height: 2
          },
          shadowOpacity: 0.2,
          shadowRadius: 20,
          elevation: 5
        }}>
          {closeIconOnPress ?
            <TouchableOpacity hitSlop={{ top: 10, left: 10, right: 10, bottom: 10 }}
              onPress={closeIconOnPress} style={{
                position: 'absolute',
                top: normalizeHeight(16),
                right: normalizeWidth(16)
              }}>
              <Image
                source={require('../images/Close_W.png')}
                style={{
                  height: normalizeHeight(20),
                  width: normalizeHeight(20)
                }}
                resizeMode={'stretch'}
              />
            </TouchableOpacity> : null
          }
          {image ?
            <Image
              source={image}
              resizeMode={'stretch'}
              style={imageStyle}
            /> : null}
          {title ?
            <Text style={{
              fontSize: normalizeHeight(17),
              color: Global.color.white,
              fontFamily: Global.font.bold,
              fontWeight: '700',
              marginTop: normalizeHeight(30)
            }}>{title}</Text> : null}

          <Text style={{
            marginTop: !title ? 0 : normalizeHeight(8),
            color: Global.color.newWhite70,
            fontFamily: Global.font.regular,
            textAlign: 'center',
            fontSize: normalizeHeight(14),
            lineHeight: normalizeHeight(18),
            fontWeight: '400',
            marginBottom: normalizeHeight(46)
          }}>{message}</Text>
          {ButtonText ?
            <CmpButton
              name={ButtonText}
              ButtonStyle={{
                height: normalizeHeight(48),
                width: normalizeWidth(295)
              }}
              onPress={ButtonOnPress ?? null}
            /> : null}
        </View>
      </Modal>
    </View>
  );
}

export {
  Alertmodal,
  Alertmodalok,
  KYCmodal,
  BankDetailsModal,
  Expensemodal,
  ImageModal
};
