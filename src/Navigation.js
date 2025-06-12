import React, { useRef, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator,TransitionPresets } from '@react-navigation/stack';
//import { createStackNavigator } from 'react-navigation-stack';
import DropdownAlert from 'react-native-dropdownalert';
import Slider from './pages/Slider';
import Register from './pages/Register';
import RegisterInfo from './pages/RegisterInfo';

import Login from './pages/Login';
import Welcome from './pages/Welcome';
// import LoginViaOtp from './pages/LoginViaOtp';
// import VerifyOTP from './pages/VerifyOTP';
import SideDrawer from './pages/Drawer';
import { ENV } from '../config';


const AuthStack = createStackNavigator();
const DashboardStack = createStackNavigator();


const TransitionScreenOptions = {
  ...TransitionPresets.SlideFromRightIOS, // This is where the transition happens
};

export function AuthStackNavigator() {
  return (
    <AuthStack.Navigator
      initialRouteName="Welcome"
      mode="modal"
      headerMode="screen"
      screenOptions={TransitionScreenOptions}
    >
      <AuthStack.Screen
        name="SideDrawer"
        component={SideDrawer}
        options={{ headerShown: false }}
      />
       <AuthStack.Screen
        name="Welcome"
        component={Welcome}
        options={{ headerShown: false }}
      />
    
      <AuthStack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      />
       <AuthStack.Screen
        name="RegisterInfo"
        component={RegisterInfo}
        options={{ headerShown: false }}
      />
{/*      
       <AuthStack.Screen
        name="LoginViaOtp"
        component={LoginViaOtp}
        options={{ headerShown: false }}
      />
      

      <AuthStack.Screen
        name="VerifyOTP"
        component={VerifyOTP}
        options={{ headerShown: false }}
      /> */}
      <AuthStack.Screen
        name="Slider"
        component={Slider}
        options={{ headerShown: false }}
      />
      
     
    </AuthStack.Navigator>
  );
}



export function DashboardStackNavigator(props) {
  // alert(JSON.stringify(props.isUserLoggedIn))
  let initroutename = null;
  if (ENV === 'DEV') {
    initroutename =  props.isUserLoggedIn && props.isUserLoggedIn.lockscreen ? 'Dashboard' : 'Dashboard';
  } else {
    initroutename =  props.isUserLoggedIn && props.isUserLoggedIn.lockscreen ? 'Dashboard' : 'Dashboard';
  }

  //  console.log('initroutename',initroutename,props.isUserLoggedIn,props.isUserLoggedIn.skip_dashboard)
  return (
    <DashboardStack.Navigator
      initialRouteName={
        initroutename
      }
      mode="card"
      headerMode="screen"
      screenOptions={TransitionScreenOptions}
    >
     
      <DashboardStack.Screen 
      name="Dashboard" 
      component={Dashboard} 
      options={{ headerShown: false }}/>

    


      <DashboardStack.Screen
        name="SideDrawer"
        component={SideDrawer}
        options={{ headerShown: false }}
      />
     
      
    </DashboardStack.Navigator>
  );
}





export default function AppNavigator(props) {
  const reference = useRef('');
  // if (!props.screenProps.netstatus && reference) {
  //   reference.current.alertWithType(
  //       'error',
  //       'No Internet Connection',
  //       'Please Enable Internet Connection'
  //     );
  // }

  if (props.screenProps.netstatus === false) {
    alert('Please Enable Internet Connection');
  }
console.log('login -------'+JSON.stringify(props.isUserLoggedIn))
  return (
    <NavigationContainer>
      <DropdownAlert ref={reference} />
      {
        props.isUserLoggedIn &&
        Object.keys(props.isUserLoggedIn).length > 0 &&
        (props.isUserLoggedIn.email && props.isUserLoggedIn.user_type =='user') ? (
        <DashboardStackNavigator isUserLoggedIn={props.isUserLoggedIn} />
      ) :(
        <AuthStackNavigator />
      )
   }
    </NavigationContainer>
  );
}
