import { View, Text, StyleSheet } from "react-native";
import { useContext } from "react";
import AddToFavorites from "./AddToFavorites";
import { ThemeContext } from "../contexts/ThemeContext";

function Item({ item }) {
  const { theme, setTheme } = useContext(ThemeContext);

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
  });

  return (
    <View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <AddToFavorites item={item} />
      </View>
      <Text style={styles.body}>{item.body}</Text>
    </View>
  );
}

export default Item;
