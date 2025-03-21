import { View, Pressable, Text, Image, StyleSheet } from "react-native";

function MealItem({ title, imageURL }) {
  return (
    <View>
      <Pressable>
        <View>
          <Image style={styles.image} source={{ uri: imageURL }} />
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
  },
});

export default MealItem;
