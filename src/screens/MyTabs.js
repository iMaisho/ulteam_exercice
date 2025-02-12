import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useContext } from "react";
import HomeScreen from "./HomeScreen";
import FavoritesScreen from "./FavoritesScreen";
import { ThemeContext } from "../contexts/ThemeContext";
import Ionicons from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

function MyTabs() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <Tab.Navigator
      screenOptions={{
        animation: "shift",
        headerStyle: {
          backgroundColor: theme.background,
          borderBottomColor: theme.secondary,
          borderBottomWidth: 1,
        },
        headerTintColor: theme.text,
        tabBarStyle: {
          backgroundColor: theme.background,
          borderTopColor: theme.secondary,
        },
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: "bold",
          color: theme.text,
        },
        tabBarActiveTintColor: theme.primary,
        tabBarInactiveTintColor: theme.secondary,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="heart" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;
