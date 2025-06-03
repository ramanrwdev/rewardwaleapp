import React, { useEffect,useState,useRef, useLayoutEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Pressable,
  PermissionsAndroid,
  Platform,
  Image,
  ScrollView,
  BackHandler,
  Alert,
  FlatList,
  Linking,
  ImageBackground,TextInput,Dimensions,
} from 'react-native';
import DashboardStyles from '../styles/DashboardStyles';
import GlobalStyles from '../styles/GlobalStyles';
import LoginStyles from '../styles/LoginStyles';
import { useIsFocused } from '@react-navigation/native';
import { CmpLoader,CmpButton } from '../components';
import MainFooter from '../components/MainFooter';
import Geolocation from '@react-native-community/geolocation';
import Global from '../global';
import { useDispatch, useSelector } from 'react-redux';
import HideWithKeyboard from 'react-native-hide-with-keyboard';
import axios from "axios"
import {
  amountFormat2
} from '../utills/commonFunctions';
import { getHomeDetailsApi ,getAddToCartApi,getMyCartApi,updateCartQtyApi,getAllCategoryListApi,getAddUpdateAddressApi} from '../actions/profileActions'
import {
  normalizeWidth,
  normalizeHeight
} from '../components/ResponsiveScreen';
import { SERVERURL, ENV} from '../../config';
import images from '../images/images';
import I18n from 'react-native-i18n';
let {width, height} = Dimensions.get('window');
const CARD_WIDTH = width / 2 - 22;
const SPACING = (width - CARD_WIDTH * 2) / 2;
let status;
let profilephoto = '';



export default Dashboard = (props) => {
  const isFocused = useIsFocused();
  const userdata = useSelector((state) => state.userReducer.userAuth);
  const [dashboard, setdashboard] = useState([])
  const [visible, setVisible] = useState(false)
  const [spendingPercentage, setSpendingPercentage] = useState(0)
  const [wealthData, setWealthData] = useState({})
  const [homeDetails, setHomeDetails] = useState([])
   const [allHomeDetails, setAllHomeDetails] = useState([])
  const [updatename, setUpdateName] = useState('Avtar')
  const [showLoader, setshowLoader] = useState(false);
  const [myCartData, setMyCartData] = useState({})
  const [position, setposition] = useState({})
  const [allcategorylist, setcategorylist] = useState([])
  const [evaluation, setEvaluation] = useState(0)
  const [yettoAssign, setYettoAssign] = useState(0)
  const [assigned, setAssigned] = useState(0)
  const [totalLeads, setTotalLeads] = useState(0)
  const [openLeads, setOpenLeads] = useState(0)
  const [lostCause, setLostCause] = useState(0)
  const [addressobject, setaddressobject] = useState({})
   const [requestoLossmodal, setRequestoLossmodal] = useState(false)
   const [selcectSummaryType, setSelcectSummaryType] = useState(0)
   
  const [currentAddressDetails, setcurrentAddressDetails] = useState('')
  const [mobileNumber, setMobileNumber] = useState('+919500011899');
  const [whatsAppMsg, setWhatsAppMsg] = useState(
    'Hi rewardwale Connect ',
  );

  let userAuth = useSelector(state => state?.userReducer?.userAuth)
  const dispatch = useDispatch();
console.log("userdata"+JSON.stringify(userdata))


  useEffect(() => {
    
  
    getHomeDetails(true);
    
 
  }, []);


  useEffect(() => {
    if (isFocused) {
      getHomeDetails(true);
    }
  }, [props,
isFocused]);





getCurrentloc = () =>
{
  Geolocation.getCurrentPosition((pos) => {
    try {
    const crd = pos.coords;
    console.log('get current location'+JSON.stringify(crd))
    let coordinate =
    {
      latitude: crd.latitude,
      longitude: crd.longitude,
      latitudeDelta: 0.0421,
      longitudeDelta: 0.0421,
    }
    console.log('get latlng data'+JSON.stringify(coordinate))
    setposition(coordinate);
    searchMapListing(crd.latitude,crd.longitude)
  } catch (err) {
    console.log(err);
  };
})
}

updateAddress = () =>
{
  getCurrentloc();
  //props.navigation.navigate('UpdateAddress');
}



searchMapListing = async (lat, long) => {
  let apiUrl = 'https://maps.googleapis.com/maps/api/geocode/json';
  const result = {};
  let address = lat + ',' + long;
  let paramObj = {address: address, key: 'AIzaSyBCMJ-LYHH4Uv5l_mkkRsyR5j8SqkXqgwk'};
  let url = getUrl(apiUrl, paramObj);
  const types = {
    // https://developers.google.com/maps/documentation/places/web-service/supported_types#table2
    administrative_area_level_1: 'custom_1',
    administrative_area_level_2: 'custom_2',
    country: 'custom_3',
    postal_code: 'custom_4',
  };

  try {
    const resultdata = await axios.get(url);
    // console.log(resultdata.data);
    const response = resultdata;
      console.log('res---res---res111111111==='+JSON.stringify(response))
    if (response) {
      let geoSearchMapList =
        response.data && response.data.results ? response.data.results : {};
  
        if (geoSearchMapList[0]) {
          if (geoSearchMapList[0].address_components) {
            geoSearchMapList[0].address_components.map(address => {
              if (address.types[0]) {
                result[address.types[0]] = address.long_name;
              }
            });
        }
      }
     // const currentaddress = result?.
      setcurrentAddressDetails(geoSearchMapList &&  geoSearchMapList[0] &&  geoSearchMapList[0].formatted_address);
      setaddressobject(geoSearchMapList &&  geoSearchMapList[0]);
      console.log(`get current address result1111==${JSON.stringify(geoSearchMapList &&  geoSearchMapList[0] &&  geoSearchMapList[0].geometry.location)}`);
      sendUpdateAddress(result,geoSearchMapList &&  geoSearchMapList[0])
    }


} catch (error) {
    console.error(error);
}
 
}



sendUpdateAddress = (addressobj,geoseracharray) => {
  console.log('addressobj2222==='+JSON.stringify(addressobj))
  setshowLoader(true);
    const data = {
      user_id: userdata && userdata?.user_id,
      address_id:'',
      name: userdata && userdata?.firstname,
      mobile: userdata && userdata?.contact,
      address: geoseracharray?.formatted_address,
      pincode: addressobj?.postal_code,
      state: addressobj?.administrative_area_level_1,
      city: addressobj?.administrative_area_level_3,
      latitude:geoseracharray?.geometry?.location?.lat,
      longitude:geoseracharray?.geometry?.location?.lng,
      account_type:'primary',
    };

    console.log('current address send object2222'+JSON.stringify(data));
  
    dispatch(getAddUpdateAddressApi(data, (res) => {
      setshowLoader(false);
      if (res.error) {
        setshowLoader(false);
      } else {
        setshowLoader(false);
        const updateAddressDetails = res?.data?.data;
      // props.navigation.goBack();
     console.log(`updateAddressDetails==${JSON.stringify(updateAddressDetails)}`);
  
  
      }
    }));
  
};


  getUrl = (baseUrl, paramObj) => {
  let url = baseUrl + '?';
  let paramKeyArray = Object.keys(paramObj);
  let length = paramKeyArray.length;
  paramKeyArray.map((key, index) => {
    url = url + key + '=' + paramObj[key];
    if (index !== length - 1) {
      url = url + '&';
    }
  });
  return url;
};



getMyCartDetails7 = async () => {
  setshowLoader(true);
   const token = userdata && userdata.token;
  const data = {
    user_id:userdata && userdata?.user_id
  };
    console.log('set token'+JSON.stringify(data))
   dispatch(getMyCartApi(data, (res) => {
     if (res.error) {
       setshowLoader(false);
     } else {
       setshowLoader(false);
       const getMyCartData = res?.data?.data;
       setMyCartData(getMyCartData);
    console.log(`getMyCartData==${JSON.stringify(getMyCartData)}`);


     }
   }));
  // setapicall(true);

 };

  getHomeDetails = async (loaderaction) => {
   setshowLoader(loaderaction);
    const token = userdata && userdata.token;
   const data = {
     user_id:userdata && userdata?.user_id,
   };
     console.log('send params'+JSON.stringify(data))
    dispatch(getHomeDetailsApi(data, (res) => {
      if (res.error) {
        setshowLoader(false);
      } else {
        setshowLoader(false);
        const getHomeDetailsData = res?.data?.data;
        console.log('get-----home'+JSON.stringify(getHomeDetailsData))
        const getevaluation = res?.data?.evaluation;
        const getyet_to_assign = res?.data?.yet_to_assign;
        const getassigned = res?.data?.assigned;
        const gettotalLeads = res?.data?.total_leads;
        const getopenLeads = res?.data?.open_leads;
        const getlostCause = res?.data?.lost_cause;
        setTotalLeads(gettotalLeads);
        setOpenLeads(getopenLeads);
        setLostCause(getlostCause);
        setEvaluation(getevaluation);
        setYettoAssign(getyet_to_assign);
        setAssigned(getassigned);
        setHomeDetails(getHomeDetailsData);
        setAllHomeDetails(getHomeDetailsData);
    
      }
    }));
   // setapicall(true);

  };


  getCategoryListDetails = async () => {
    setshowLoader(true);
     const token = userdata && userdata.token;
    const data = {
      user_id:userdata && userdata?.user_id,
    };
     // Console.log('set token'+JSON.stringify(data))
     dispatch(getAllCategoryListApi(data, (res) => {
       if (res.error) {
         setshowLoader(false);
       } else {
         setshowLoader(false);
         const getCategoryListData = res?.data?.data;
         setcategorylist(getCategoryListData);
      console.log(`get categorylist ==${JSON.stringify(getCategoryListData)}`);
  
  
       }
     }));
    // setapicall(true);
  
   };


  useLayoutEffect(() => {
   
  
    const unsubscribeSiFocus = props.navigation.addListener('focus', (e) => {
  
      BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    });
    const unsubscribeSiBlur = props.navigation.addListener('blur', (e) => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackButtonClick);
    });
    return unsubscribeSiFocus, unsubscribeSiBlur
  }, [])


  const handleBackButtonClick = () => {
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

  onSelectSummaryType = (item) =>
  {

    setshowLoader(true)

    if (item.id === 1) {
     
     setSelcectSummaryType(item?.id)
      setHomeDetails(allHomeDetails)
      setshowLoader(false)
      
    }
    if (item.id === 2) {
      homeDetailsData = allHomeDetails.filter(function(item){
        return item.srm_reason_lost_cause == '' && item.booking_no == '0';
     }).map(function(item){
         return item;
     });
     setSelcectSummaryType(item?.id)
     setHomeDetails(homeDetailsData);
      setshowLoader(false)
    }
    if (item.id === 3) {
      homeDetailsData = allHomeDetails.filter(function(item){
        return item.srm_reason_lost_cause != '';
     }).map(function(item){
         return item;
     });
     setSelcectSummaryType(item?.id);
     setHomeDetails(homeDetailsData);
     setshowLoader(false)
  }
}


 onSelectsRMSummaryType = (item) =>
  {

    setshowLoader(true)

    if (item.id === 1) {
     
     setSelcectSummaryType(item?.id)
      setHomeDetails(allHomeDetails)
      setshowLoader(false)
      
    }
    if (item.id === 2) {
      homeDetailsData = allHomeDetails.filter(function(item){
        return  item.customer_type == 'replacement' && item.tv_srm_user_id =='0';
     }).map(function(item){
         return item;
     });
     setSelcectSummaryType(item?.id)
     setHomeDetails(homeDetailsData);
      setshowLoader(false)
    }
    if (item.id === 3) {
    
      homeDetailsData = allHomeDetails.filter(function(item){
        
        return item.customer_type == 'replacement' &&  item.old_car_make !='' &&  item.tv_srm_user_id ==  userdata?.user_id;
     }).map(function(item){
         return item;
     });
     console.log('3 assigned '+JSON.stringify(homeDetailsData))
     setSelcectSummaryType(item?.id);
     setHomeDetails(homeDetailsData);
     setshowLoader(false)
  }
}

 

  const categoryRenderview = ({item, index}) => {
    return (
      <TouchableOpacity onPress={() => {onSelectSummaryType(item)}}
      style={{backgroundColor:selcectSummaryType == item?.id ?Global.color.primary+10 :Global.color.white,borderWidth:1,borderRadius:10,marginTop:normalizeHeight(10),borderColor:selcectSummaryType == item?.id ?Global.color.primary:Global.color.lightorgrey,marginHorizontal:normalizeWidth(5),alignItems:'center',justifyContent:'center',paddingTop:normalizeHeight(12),paddingBottom:normalizeHeight(12),paddingHorizontal:normalizeWidth(17)}}>
    <Text style={[DashboardStyles.headingViewStyle,{color:Global.color.blackorg}]}>{item.title}</Text>
      <Text style={[DashboardStyles.headingdesViewStyle,{alignSelf:'flex-start',marginTop:normalizeHeight(13),color:Global.color.blackorg}]}>{item.count}</Text>
    </TouchableOpacity>

    )
}

 const categorySRMRenderview = ({item, index}) => {
    return (
      <TouchableOpacity onPress={() => {onSelectsRMSummaryType(item)}}
      style={{backgroundColor:selcectSummaryType == item?.id ?Global.color.primary+10 :Global.color.white,borderWidth:1,borderRadius:10,marginTop:normalizeHeight(10),borderColor:selcectSummaryType == item?.id ?Global.color.primary:Global.color.lightorgrey,marginHorizontal:normalizeWidth(5),alignItems:'center',justifyContent:'center',paddingTop:normalizeHeight(12),paddingBottom:normalizeHeight(12),paddingHorizontal:normalizeWidth(17)}}>
    <Text style={[DashboardStyles.headingViewStyle,{color:Global.color.blackorg}]}>{item.title}</Text>
      <Text style={[DashboardStyles.headingdesViewStyle,{alignSelf:'flex-start',marginTop:normalizeHeight(13),color:Global.color.blackorg}]}>{item.count}</Text>
    </TouchableOpacity>

    )
}


gotoSearch = () =>
{
  props.navigation.navigate('GlobalSearch');
}

handleSearchText = (text) => {

}

onPressGotoProductList = (item) =>
{
  props.navigation.navigate('Leads')
}


onPressRequestToLossAction = action => {
  setRequestoLossmodal(action)
};

onPressAddtoCart = (item) =>
{
  console.log(JSON.stringify(item))
  setshowLoader(true);
  const token = userdata && userdata.token;
 const data = {
  user_id:userdata && userdata?.user_id,
   address_id:0,
   product_id: item?.id,
   product_name:item?.product_name,
   product_array:[],
   price:item?.price,
   qty:1,
   stock_position:0,
   store_id:0,
   product_type:'normal',
   store_data_id:0
   
 };
 console.log('send params cart send '+JSON.stringify(data))
  dispatch(getAddToCartApi(data, (res) => {
    if (res.error) {
      setshowLoader(false);
    } else {
      setshowLoader(false);
      getHomeDetails(false);
      getMyCartDetails7();
   console.log(`cart res==${JSON.stringify(res)}`);


    }
  }));
}


onPressGotoProductListAll = (type) =>
{
  
  const propsdata =
  {
    category_id :type == 'banner1' ? '1':type =='banner2' ? '4': type =='newproduct'? '1':type =='popularproduct' ?'4':'1',
    brand_id:'',
    sub_category_id:''
  }
  props.navigation.navigate('ProductList',{productItem:propsdata})
}

onPressGotoProductListViatopbrand = () =>
{
  const propsdata =
  {
    category_id :'4',
    brand_id:'',
    sub_category_id:''
  }
  props.navigation.navigate('ProductList',{productItem:propsdata})
}


onPressProductListviabrand = (item) =>
{
  // alert(JSON.stringify(item))
  const propsdata =
  {
    category_id :'',
    brand_id:item?.brand_id,
    sub_category_id:''
  }
  props.navigation.navigate('ProductList',{productItem:propsdata})
}


changeqty = (item, selectqty) =>
{
  setshowLoader(false);
 const selqty = selectqty === ''?1:selectqty;
  //setshowLoader(true);
 const token = userdata && userdata.token;
const data = {
  user_id:userdata && userdata?.user_id,
  product_id:item?.id,
  qty:selqty,
  stock:false,
  stock_position:''
};
  console.log('send params'+JSON.stringify(data))
 dispatch(updateCartQtyApi(data, (res) => {
   if (res.error) {
     setshowLoader(false);
   } else {
     setshowLoader(false);
     getHomeDetails(false);
     getMyCartDetails7();
  console.log(`update cart qty api resp==${JSON.stringify(res)}`);


   }
 }));
}


onPressUnitLess = (item,sqty) =>
{
  const selqty = parseInt(sqty) < 0 ?0:parseInt(sqty)-1;
  setshowLoader(true);
 const token = userdata && userdata.token;
const data = {
  user_id:userdata && userdata?.user_id,
  product_id:item?.id,
  qty:selqty,
  stock:false,
  stock_position:''
};
  console.log('send params'+JSON.stringify(data))
 dispatch(updateCartQtyApi(data, (res) => {
   if (res.error) {
     setshowLoader(false);
   } else {
     setshowLoader(false);
     getHomeDetails(true);
     getMyCartDetails7();
  console.log(`update cart qty api resp==${JSON.stringify(res)}`);


   }
 }));
}


onPressUnitAdd = (item,sqty) =>
{
 
  const selqty = parseInt(sqty)+1;
  setshowLoader(true);
 const token = userdata && userdata.token;
const data = {
  user_id:userdata && userdata?.user_id,
  product_id:item?.id,
  qty:selqty,
  stock:false,
  stock_position:''
};
  console.log('send params unit add '+JSON.stringify(data))
 dispatch(updateCartQtyApi(data, (res) => {
   if (res.error) {
     setshowLoader(false);
   } else {
     setshowLoader(false);
     getHomeDetails(true);
     getMyCartDetails7();
  console.log(`update cart qty api resp==${JSON.stringify(res)}`);


   }
 }));
}

gotoWhatapp = () =>
{
  let url =
  'whatsapp://send?text=' + 
   whatsAppMsg +
  '&phone=' + mobileNumber;
  Linking.openURL(url)
  .then((data) => {
    console.log('WhatsApp Opened');
  })
  .catch(() => {
    alert('Make sure Whatsapp installed on your device');
  });
  
}

sendcall = (call) =>
{
  let phoneNumber = '';
  if (Platform.OS === 'android') {
    phoneNumber = `tel:${call}`;
  } else {
    phoneNumber = `telprompt:${call}`;
  }

  Linking.openURL(phoneNumber);
}



onPressGotoLeadScreen = () =>
{
  
    props.navigation.navigate('Leads')
}




  return (

    <View style={DashboardStyles.dashboardblock}>
      
      
          <View style={{backgroundColor:Global.color.primary,borderBottomRightRadius:20,borderBottomLeftRadius:20}}>
          <View style={{marginTop:normalizeHeight(20),marginHorizontal:normalizeWidth(16),marginBottom:normalizeHeight(10)}}>
        <View style={{flexDirection:'row',marginBottom:normalizeHeight(10)}}>
        
          <TouchableOpacity onPress={() => updateAddress()} style={{flex:0.9,alignItems:'flex-start',justifyContent:'center'}}>
          <Text 
          numberOfLines={2}
          style={{
              marginLeft: normalizeWidth(16),
              marginBottom: normalizeHeight(0),
              marginTop:normalizeHeight(10),
              color: Global.color.white,
              fontFamily: Global.font.font_family_fr,
              fontWeight: '500',
              letterSpacing: 0.3,
              fontSize: normalizeHeight(14),
              lineHeight: normalizeHeight(17)
            }}>{'Welcome back,'}</Text>
            <Text 
numberOfLines={2}
style={{
              marginLeft: normalizeWidth(16),
              marginBottom: normalizeHeight(13),
              marginTop:normalizeHeight(10),
              color: Global.color.white,
              fontFamily: Global.font.font_family_fb,
              fontWeight: '700',
              letterSpacing: 1,
              fontSize: normalizeHeight(25),
              lineHeight: normalizeHeight(28)
            }}>{userdata && userdata?.name}</Text>
</TouchableOpacity>
{userdata && userdata?.user_type != 'srm_user' ?<TouchableOpacity style={{flex:0.1,alignItems:'center',justifyContent:'center'}}
// onPress={() => props.navigation.navigate('GlobalSearch')}
>
<Image
                source={images.notification_icon}
                //tintColor={Global.color.white}
                resizeMode='contain'
                style={{width:normalizeWidth(22),height:normalizeHeight(22)}}
            />
  </TouchableOpacity>:null}
  {/* <TouchableOpacity style={{flex:0.1,alignItems:'flex-end',justifyContent:'center'}}
  onPress={() => alert('Coming soon....')}>
<Image
                source={images.menu_icon}
               // tintColor={Global.color.white}
                resizeMode='contain'
                style={{width:normalizeWidth(22),height:normalizeHeight(22)}}
            />
           
  </TouchableOpacity> */}
</View>


        </View>
           </View>

      <CmpLoader loading={showLoader} />
   
      <HideWithKeyboard style={{flex:1}}>
     
      <MainFooter
        // props={props}
        onPressGotoCart={() => onPressGotoProductCart()}
        usertype ={userdata && userdata?.user_type}
        cartno={myCartData && myCartData.data && myCartData.data.length > 0 ?myCartData.data.length:0}
        activeScreen={'Dashboard'}
        navigation={props.navigation}></MainFooter>
      </HideWithKeyboard>
    </View >
  );
}
