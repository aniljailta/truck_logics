import DashboardIcon from '@/assets/svg/DashboardIcon';
import DocumentIcon from '@/assets/svg/DocumentIcon';
import SupportIcon from '@/assets/svg/SupportIcon';
import TruckIcon from '@/assets/svg/TruckIcon';
import appColor from '@/constants/Colors';
import {appFontSize, appFontWeight} from '@/constants/Fonts';
import {appPaddings} from '@/constants/Styles';
import DashboardScreen from '@/features/dashboard/components/DashboardScreen';
import DispatchScreen from '@/features/dispatches/components/DispatchScreen';
import DocumentScreen from '@/features/documents/components/DocumentScreen';
import SupportScreen from '@/features/support/components/SupportScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

type TabStackParamList = {
  Dashboard: undefined;
  Dispatches: undefined;
  Documents: undefined;
  Support: undefined;
};

const Tab = createBottomTabNavigator<TabStackParamList>();

const TabStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          height: 76,
          paddingVertical: appPaddings.PADDING_12,
          paddingBottom: appPaddings.PADDING_14,
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
        },
        tabBarLabelStyle: {
          fontSize: appFontSize.FONT_14,
          fontWeight: appFontWeight.FONT_WEIGHT_500,
          textAlignVertical: 'center',
        },
        tabBarActiveTintColor: appColor.ACTIVE_TAB_COLOR,
        tabBarInactiveTintColor: appColor.IN_ACTIVE_TAB_COLOR,
      }}>
      <Tab.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
          tabBarLabel: 'Dashboard',
          tabBarIcon: ({focused}) => (
            <DashboardIcon
              fill={
                focused
                  ? appColor.ACTIVE_TAB_COLOR
                  : appColor.IN_ACTIVE_TAB_COLOR
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="Dispatches"
        component={DispatchScreen}
        options={{
          tabBarLabel: 'Dispatches',
          tabBarIcon: ({focused}) => (
            <TruckIcon
              fill={
                focused
                  ? appColor.ACTIVE_TAB_COLOR
                  : appColor.IN_ACTIVE_TAB_COLOR
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="Documents"
        component={DocumentScreen}
        options={{
          tabBarLabel: 'Documents',
          tabBarIcon: ({focused}) => (
            <DocumentIcon
              fill={
                focused
                  ? appColor.ACTIVE_TAB_COLOR
                  : appColor.IN_ACTIVE_TAB_COLOR
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="Support"
        component={SupportScreen}
        options={{
          tabBarLabel: 'Support',
          tabBarIcon: ({focused}) => (
            <SupportIcon
              fill={
                focused
                  ? appColor.ACTIVE_TAB_COLOR
                  : appColor.IN_ACTIVE_TAB_COLOR
              }
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabStack;
