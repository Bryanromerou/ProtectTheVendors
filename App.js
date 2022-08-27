import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AlertScreen from './Pages/Alert/index';
import MapScreen from './Pages/Map/index.tsx';
import ProfileScreen from './Pages/Profile';

const Tab = createBottomTabNavigator();

const screenOptionFunction = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    switch (route.name) {
      case 'Alert':
        return <Ionicons name={'alert'} size={size} color={color} />;
      case 'Profile':
        return (
          <Ionicons
            name={focused ? 'person' : 'ios-person-outline'}
            size={size}
            color={color}
          />
        );
      case 'Map':
        return (
          <Ionicons
            name={focused ? 'map' : 'ios-map-outline'}
            size={size}
            color={color}
          />
        );
      default:
        return;
    }
  },
  tabBarActiveTintColor: 'tomato',
  tabBarInactiveTintColor: 'gray'
});

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptionFunction}>
        <Tab.Screen name="Alert" component={AlertScreen} />
        <Tab.Screen name="Map" component={MapScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
