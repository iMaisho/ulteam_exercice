import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import MyTabs from "./src/screens/MyTabs";
import { Providers } from "./src/contexts/Providers";

export default function App() {
  return (
    <>
      <Providers>
        <NavigationContainer>
          <MyTabs />
        </NavigationContainer>
      </Providers>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
