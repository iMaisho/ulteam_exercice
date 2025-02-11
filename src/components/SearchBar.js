import {
  View,
  TextInput,
  StyleSheet,
} from "react-native";
import { useContext } from "react";
import { SearchTextContext } from "../contexts/SeachTextContext";

function SearchBar() {
  const { searchText, setSearchText } = useContext(SearchTextContext);
  return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          value={searchText}
          placeholder="Rechercher"
          onChangeText={setSearchText}
        />
      </View>
  );
}

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#f0f0f0",
  },
  input: {
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
  },
});
