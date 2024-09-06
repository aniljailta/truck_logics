import SplashScreen from '@/features/SplashScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

type SplashStackParamList = {
  SplashScreen: undefined;
};
const Stack = createNativeStackNavigator<SplashStackParamList>();

const SplashStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
    </Stack.Navigator>
  );
};

export default SplashStack;
