import { View, Text, StyleSheet } from "react-native";
import { useContext, useEffect } from "react";
import AddToFavorites from "./AddToFavorites";
import { ThemeContext } from "../contexts/ThemeContext";
import { SearchTextContext } from "../contexts/SeachTextContext";

function Item({ item }) {
  const { theme, setTheme } = useContext(ThemeContext);
  const { searchText, setSearchText } = useContext(SearchTextContext);

  function highlightText(text, searchText) {
    if (!searchText) return text;
    const regex = new RegExp(`(${searchText})`, "gi");
    const parts = text.split(regex);
    console.log(parts);

    return parts.map((part, index) =>
      part.toLowerCase() === searchText.toLowerCase() ? (
        <Text key={index} style={styles.highlight}>
          {part}
        </Text>
      ) : (
        <Text key={index}>{part}</Text>
      )
    );
  }

  const styles = StyleSheet.create({
    titleContainer: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme.itemBackground,
      padding: 30,
      borderTopEndRadius: 30,
      borderTopStartRadius: 30,
    },
    title: {
      flex: 1,
      fontSize: "20",
      color: theme.text,
      fontFamily: "Poppins",
      fontWeight: 800,
      paddingRight: 40,
    },

    body: {
      fontSize: "14",
      fontFamily: "Poppins",
      fontWeight: "medium",
      color: theme.text,
      justifyContent: "center",
      padding: 30,
      paddingBottom: 50,
      backgroundColor: theme.background,
      borderBottomEndRadius: 30,
      borderBottomStartRadius: 30,
    },

    highlight: {
      backgroundColor: theme.primary,
      color: theme.complementary,
    },
  });

  return (
    <View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>
          {highlightText(item.title, searchText)}
        </Text>
        <AddToFavorites item={item} />
      </View>
      <Text style={styles.body}>{highlightText(item.body, searchText)}</Text>
    </View>
  );
}

export default Item;
