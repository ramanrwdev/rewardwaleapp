import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Dashboard from './Dashboard';
import CustomDrawerContent from './DrawerContent';
import { testProps } from '../utills/commonFunctions';
import { normalizeWidth } from '../components/ResponsiveScreen';
import global from '../global';

let openpanelstatus = false;
let openkycpopup = false;
const Drawer = createDrawerNavigator();

export default function SideDrawer(props) {
  const navDashboard = (params) => {
    openpanelstatus = params && params.openpanel;
  };

  const dashFunc = (params) => {
    openpanelstatus = params;

  };
  const navKYC = (params) => {
    openkycpopup = params && params.openkycpop;
  };

  return (
    <Drawer.Navigator {...testProps('IPDRAWER')}
      overlayColor="rgba(0, 0, 0, 0.5)"
      drawerStyle={{
        width: normalizeWidth(280),
        backgroundColor: global.color.blue2,
      }}
      drawerContentOptions={{
        activeTintColor: 'white',
        itemStyle: {
          marginVertical: 0,
          height: 0
        }
      }}
      drawerContent={(props) => (
        <CustomDrawerContent {...props} navigateDashboard={navDashboard} navigateKYC={navKYC} />
      )}>
      <Drawer.Screen
        name="Dashboard"
        options={{
          headerShown: false,
          title: 'test'
        }}>
        {(props) => (
          <Dashboard
            myProp={openpanelstatus}
            kycprop={openkycpopup}
            navigation={props.navigation}
            dashboardFunc={dashFunc}
          />
        )}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
}
