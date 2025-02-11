import { View, TextInput, StyleSheet } from "react-native";
import { useContext } from "react";
import { SearchTextContext } from "../contexts/SeachTextContext";
import { ThemeContext } from "../contexts/ThemeContext";

function SearchBar() {
  const { searchText, setSearchText } = useContext(SearchTextContext);
  const { theme, setTheme } = useContext(ThemeContext);

  const styles = StyleSheet.create({
    container: {
      padding: 10,
      backgroundColor: theme.background,
      flex: 5,
    },
    input: {
      height: 40,
      borderColor: theme.secondary,
      borderWidth: 1,
      borderRadius: 5,
      paddingHorizontal: 10,
      backgroundColor: theme.background,
      color: theme.text,
    },
  });

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={searchText}
        placeholder="Rechercher"
        onChangeText={setSearchText}
        placeholderTextColor={theme.primary}
      />
    </View>
  );
}

export default SearchBar;
