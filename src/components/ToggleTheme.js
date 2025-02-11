import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { TouchableOpacity, StyleSheet } from "react-native";
import themeDark from "../themes/themeDark";
import themeLight from "../themes/themeLight";
import Ionicons from "react-native-vector-icons/Ionicons";

function ToggleTheme() {
  const { theme, setTheme } = useContext(ThemeContext);
  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === themeLight ? themeDark : themeLight
    );
  };
  const styles = StyleSheet.create({
    button: {
      backgroundColor: theme.white,
      padding: 10,
      alignItems: "center",
      justifyContent: "center",
      width: 50,
      height: 50,
      borderWidth: 1,
      borderColor: "000",
      borderRadius: 50,
    },
  });

  return (
    <TouchableOpacity style={styles.button} onPress={toggleTheme}>
      <Ionicons
        name={theme === themeLight ? "moon" : "sunny"}
        size={24}
        color={theme.black}
      />
    </TouchableOpacity>
  );
}

export default ToggleTheme;
