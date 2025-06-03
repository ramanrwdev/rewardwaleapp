import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity,Dimensions } from 'react-native';
import FooterStyle from '../styles/FooterStyle';
import { connect } from 'react-redux';
import lang_eng from '../languages/lang_eng';
import images from '../images/images';
import GlobalStyles from '../styles/GlobalStyles';
import Global from '../global';
import LinearGradient from 'react-native-linear-gradient';
import { normalizeHeight, normalizeWidth, heightPercentageToDP, widthPercentageToDP } from './ResponsiveScreen';
import moment from 'moment';
import { customToast } from '../utills/commonFunctions';
import Modal from 'react-native-modal';
import I18n from 'react-native-i18n';
let prepaidnav = 0;
class MainFooter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: true,
      activeMenu: 1,
      showmessage: false,
      showTip: false,
      // accountStatus:{},
      // prepaidUser: this.props?.prePaidCardReducer?.prepaidgetuserslistData
    };

    // this.nearStoreByNavigation = this.nearStoreByNavigation.bind(this);
  }

  async componentDidMount() {
    // token =
    // this.props.userReducer &&
    // this.props.userReducer.userAuth &&
    // this.props.userReducer.userAuth.token;
    //  try {
    //   const {data} = await API.getAccountstatus(token)
    //   this.setState({accountStatus: data?.data?.data})
    //  } catch (error) {
    //    this.setState({accountStatus: {}})
    //     console.log("ERRORR:", error)
    //  }
    this.props.navigation.addListener('focus', async () => {
      this.setState({
        active: this.state.active,
        activeMenu:
          this.props.activeScreen === 'Dashboard'
            ? 1
            : this.props.activeScreen === 'Leads'
              ? 2
              : this.props.activeScreen === 'FollowUp'? 3 : 4
      });
    });
  }

  componentDidUpdate(nextProps) {
    // if (
    //   this.props.prePaidCardReducer && this.props.prePaidCardReducer.prepaidgetuserslistData &&
    //   ((this.props.prePaidCardReducer.prepaidgetuserslistData !==
    //     nextProps.prePaidCardReducer.prepaidgetuserslistData) || this.props.prePaidCardReducer.prepaidgetuserslistData ===
    //     nextProps.prePaidCardReducer.prepaidgetuserslistData) &&
    //   this.props.prePaidCardReducer.prepaidtransactionhistorySuccess === true && prepaidnav === 0
    // ) {
    //   // this.setState({
    //   //   showLoader: false
    //   // })
    //   if (this.props?.prePaidCardReducer?.prepaidgetuserslistData?.length > 0) {
    //     this.props.navigation.navigate('CardDashboard')
    //   } else {
    //     this.props.navigation.navigate('CardInfo')
    //   }
    //   prepaidnav = 1;
    // }
  }



  checkkyc1 = () => {
    this.props.navigation.navigate('MyWealthDashboard');

  }

  homenavigation = () => {
    this.setState({
      active: true,
      activeMenu: 1
    });
    this.props.navigation.navigate('Dashboard');
  };

  // nearStoreByNavigation = () => {
  //   // This.setState({showmessage: true});
  //   // SetTimeout(() => {
  //   //   This.setState({showmessage: false});
  //   // }, 5000);
  //   // // console.log('iam hererre')
  //   // This.props.showMessage('Coming soon!!')
  //   // Return false;
  //   this.setState({
  //     active: true,
  //     activeMenu: 2
  //   });
  //   this.props.navigation.navigate('NearbyDeals');
  // };

  // billPayNav = () => {

  //   this.props.navigation.navigate('BBPSBillPay')
  // }

  rewardsNavigation = () => {
    this.setState({
      active: true,
      activeMenu: 3
    });
    this.props.navigation.navigate('Rewardsdashboard');
  };


  budgetnavigation() {
    if (
      this.props.budgetReducer &&
      this.props.budgetReducer.spendigsdata &&
      this.props.budgetReducer.spendigsdata.data &&
      this.props.budgetReducer.spendigsdata.data.length > 0
    ) {
      this.props.navigation.navigate('MyfinancialReport', { month: moment().format('MM'), year: moment().format('YYYY'), fromFooter: true })
    }
    else {
      //customToast("No budget available to access your report.\nPlease create your budget")
      this.setState({ showTip: true })
    }
  }

  insuranceNavigation = () => {
    this.setState({
      active: true,
      activeMenu: 4
    });

    this.setState({ showmessage: true });
    setTimeout(() => {
      this.setState({ showmessage: false });
    }, 5000);

    this.props &&
      this.props.showMessage &&
      this.props.showMessage('Coming soon!!');
  };
  render() {
    const { active, activeMenu, showmessage } = this.state;
    return (
      <View style={{ flex: 1 }}>
       

        <View style={FooterStyle.footercontainer}>
        <View style={{ width: '100%',
    borderBottomWidth: 1,
    paddingBottom: 0,
    height: 0,
    borderBottomColor: Global.color.light22grey}}></View>
          <View style={{
            flexDirection: 'row',
            // justifyContent: 'space-around',
            alignItems: 'center',
            flex: 1,
            paddingLeft: normalizeWidth(5),
            paddingRight: normalizeWidth(5)
          }}>
            <TouchableOpacity
              hitSlop={{
                top: 25,
                bottom: 25,
                left: 25,
                right: 25
              }}
             // onPress={() => this.props.onPressHome()}
              onPress={() => this.props.navigation.navigate('Dashboard')}
              style={{
                alignItems: 'center',
                flexBasis: '20%'
                // borderRadius: 15,
                // shadowColor: "rgba(65, 174, 251, 0.2)",
                // shadowOffset: {
                //   width: 0,
                //   height: 2
                // },
                // shadowOpacity: 0.25,
                // shadowRadius: 4,
                // elevation: 7,
                // outlineProvider: 'background'
              }}>
              <Image
                style={FooterStyle.iconsize}
                source={images.home}
              tintColor={
                active && activeMenu === 1
                  ? Global.color.primary
                  : Global.color.black
              }
              />
              <Text
                style={[
                  FooterStyle.menutext,
                  {
                    color:
                      active && activeMenu === 1
                        ? Global.color.primary
                        : Global.color.black
                  }
                ]}>
                {'Home'}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              hitSlop={{
                top: 25,
                bottom: 25,
                left: 25,
                right: 25
              }}
             // onPress={() => this.props.navigation.navigate('SelectStore')}
             //onPress={() => this.props.onPressBrowser()}
              onPress={() => this.props.navigation.navigate('Leads')}
              style={{ alignItems: 'center', flexBasis: '20%' }}>
              <Image
                style={FooterStyle.iconsize}
                source={images.user_icon}
                resizeMode={'contain'}
                tintColor={
                  active && activeMenu === 2
                    ? Global.color.primary
                    : Global.color.black
                }
              />
              <Text
                style={{
                  fontSize: normalizeHeight(12),
                  lineHeight: normalizeHeight(15),
                  fontWeight: '500',
                  fontFamily: Global.font.font_family_fb,
                  letterSpacing: 0.5,
                  marginTop: normalizeHeight(2),
                  textAlign: 'center',
                  color:
                      active && activeMenu === 2
                        ? Global.color.primary
                        : Global.color.black
                }}>
                {'Leads'}
              </Text>
            </TouchableOpacity>
            <View style={{flexBasis: '1%'}}></View>
           <TouchableOpacity 
           onPress={() => this.props.navigation.navigate('CreateLead')}
           style={{position:'relative',bottom:2,alignItems: 'center',justifyContent:'center',backgroundColor:Global.color.white,borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
              width: Dimensions.get('window').width / 7,
              height: Dimensions.get('window').width / 7, shadowColor: Global.color.black,
              shadowOffset: {
                width: 2,
                 height: 2,
               },
               shadowOpacity: 0.2,
              // shadowRadius: 70/2,
               elevation: 3,}}>
           <TouchableOpacity 
           onPress={() => this.props.navigation.navigate('CreateLead')}
           
              style={{alignItems: 'center',justifyContent:'center',backgroundColor:Global.color.primary, borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
              width: Dimensions.get('window').width / 8,
              height: Dimensions.get('window').width / 8,}}>
              <Image
                style={{width:normalizeWidth(25),height:normalizeHeight(25)}}
                source={images.plus}
                resizeMode={'contain'}
                tintColor={
                  active && activeMenu === 3
                    ? Global.color.white
                    : Global.color.white
                }
              />
             
            </TouchableOpacity>
            </TouchableOpacity>
            <View style={{flexBasis: '1%'}}></View>
            <TouchableOpacity
             
              //onPress={() => this.props.onPressOrderHistory()}
              onPress={() =>  this.props.navigation.navigate(this.props.usertype =='user' || this.props.usertype  == 'tv_rm_user' ?'FollowUp':'MyLeads')}
              style={{ alignItems: 'center', flexBasis: '22%' }}>
             
             <Image
                style={FooterStyle.iconsize}
                resizeMode={'contain'}
                source={images.calendar}
                tintColor={
                  active && activeMenu === 3
                    ? Global.color.primary
                    : Global.color.black
                }
              />
              <Text
                style={{
                  fontSize: normalizeHeight(12),
                  lineHeight: normalizeHeight(15),
                  fontWeight: '500',
                  fontFamily: Global.font.font_family_fb,
                  letterSpacing: 0.5,
                  marginTop: normalizeHeight(2),
                  textAlign: 'center',
                  color:
                  active && activeMenu === 3
                    ? Global.color.primary
                    : Global.color.black
                }}>
                {this.props.usertype  == 'user' || this.props.usertype  == 'tv_rm_user'  ? 'Follow Ups':'My Team'}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              hitSlop={{
                top: 25,
                bottom: 25,
                left: 25,
                right: 25
              }}
             // onPress={() => this.props.onPressProfile()}
              onPress={() => this.props.navigation.navigate('Profile')}
              style={{ alignItems: 'center', flexBasis: '18%' }}>
             
             <Image
                style={{width:normalizeWidth(22),height:normalizeHeight(22)}}
                source={images.profile}
                resizeMode={'contain'}
                tintColor={
                  active && activeMenu === 4
                    ? Global.color.primary
                    : Global.color.black
                }
              />
              <Text
                style={{
                  fontSize: normalizeHeight(12),
                  lineHeight: normalizeHeight(15),
                  fontWeight: '500',
                  fontFamily: Global.font.font_family_fb,
                  letterSpacing: 0.5,
                  marginTop: normalizeHeight(2),
                  textAlign: 'center',
                  color:
                  active && activeMenu === 4
                    ? Global.color.primary
                    : Global.color.black
                }}>
                {'Profile'}
              </Text>
            </TouchableOpacity>
            <Modal
              backdropColor={Global.color.backdrop}
              backdropOpacity={0.7}
              animationOut="zoomOutUp"
              animationInTiming={10}
              animationOutTiming={10}
              isVisible={this.state.showTip}
              onBackButtonPress={() => this.setState({ showTip: false })}
              onBackdropPress={() => this.setState({ showTip: false })}
              style={{
                position: 'absolute',
                top: heightPercentageToDP('45%'),
                left: -4,
                width: '92%',
                backgroundColor: '#151D29',
                borderRadius: 10,
                overflow: 'hidden',
              }}>
              <View style={{ paddingVertical: normalizeHeight(15) }}>
                <TouchableOpacity style={{ position: 'absolute', right: 0, top: 0 }} onPress={() => this.setState({ showTip: false })}>
                  {/* <Image name={CROSS} height={normalizeHeight(19)} width={normalizeWidth(21)} />
                 */}
                </TouchableOpacity>
                <Text style={{
                  color: 'rgba(250, 250, 250, 0.7)',
                  fontSize: normalizeHeight(15),
                  lineHeight: normalizeHeight(20),
                  fontFamily: Global.font.font_family_fb,
                  textAlign: 'center'
                }}> {I18n.t('LBL_NO_BUDGET')} </Text>
              </View>
            </Modal>

          </View>
        </View>
      </View >
    );
  }
}

function mapStateToProps(state) {
  return {
    userReducer: state.userReducer,
    budgetReducer: state.budgetReducer,
    //prePaidCardReducer: state.prePaidCardReducer
  };
}
export default connect(mapStateToProps)(MainFooter);
