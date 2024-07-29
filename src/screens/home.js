import { View, Text, Button, StyleSheet } from "react-native";

export default function HomeScreen({ navigation }) {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#fff",
    },

    text: {
      fontSize: 25,
      marginBottom: 20,
      fontWeight: "bold",
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.text}> Welcome Home!</Text>
      <Button
        title="Go to Profile"
        onPress={() => navigation.push("Profile")}
      />
    </View>
  );
}
