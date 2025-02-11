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
      backgroundColor: theme.background,
      alignItems: "center",
      justifyContent: "center",
      borderWidth: 1,
      borderColor: theme.secondary,
      borderRadius: 100,
      height: 40,
      width: 40,
      margin: 10,
    },
  });

  return (
    <TouchableOpacity style={styles.button} onPress={toggleTheme}>
      <Ionicons
        name={theme === themeLight ? "moon" : "sunny"}
        size={24}
        color={theme.primary}
      />
    </TouchableOpacity>
  );
}

export default ToggleTheme;
