import { StyleSheet } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import MyTabs from "./src/screens/MyTabs";
import { Providers } from "./src/contexts/Providers";

function App() {
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
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
