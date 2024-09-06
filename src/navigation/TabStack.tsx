import DashboardScreen from '@/features/dashboard/components/DashboardScreen';
import DispatchScreen from '@/features/dispatches/components/DispatchScreen';
import DocumentScreen from '@/features/documents/components/DocumentScreen';
import SupportScreen from '@/features/support/components/SupportScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const TabStack = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Dashboard" component={DashboardScreen} />
      <Tab.Screen name="Dispatches" component={DispatchScreen} />
      <Tab.Screen name="Documents" component={DocumentScreen} />
      <Tab.Screen name="Support" component={SupportScreen} />
    </Tab.Navigator>
  );
};

export default TabStack;
