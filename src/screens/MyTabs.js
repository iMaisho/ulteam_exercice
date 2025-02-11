import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./HomeScreen";
import FavoritesScreen from "./FavoritesScreen";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;
