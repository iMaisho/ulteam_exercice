import { View, Text, StyleSheet } from "react-native";
import AddToFavorites from "./AddToFavorites";

function Item({ item }) {
  console.log("Item reçu dans Item : ", item);
  return (
    <View>
      <AddToFavorites item={item} />
      <Text style={styles.title}>{item.title}</Text>
      <Text>{item.body}</Text>
    </View>
  );
}

export default Item;

const styles = StyleSheet.create({
  title: {
    flex: 1,
    fontSize: "20",
    color: "green",
    fontFamily: "Poppins",
    fontWeight: 800,
    paddingBottom: 12,
  },
  body: {
    fontSize: "12",
  },
});
