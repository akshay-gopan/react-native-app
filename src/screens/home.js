import { View, Text, Button, StyleSheet, TouchableOpacity  } from "react-native";

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

    button: {
      backgroundColor: "#009FBD",
      padding: 10,
      borderRadius: 5,
      marginBottom: 10,
      
    },
    btnText: {
      color: "#fff",
      textAlign: "center",
      fontSize: 15,
      fontWeight: "bold",
    },

  });

  return (
    <View style={styles.container}>
      <Text style={styles.text}> Welcome Home!</Text>
      <TouchableOpacity onPress={() => navigation.push("Profile")} style = {styles.button}>
            <Text style={styles.btnText}>GO TO PROFILE</Text>
        </TouchableOpacity>
    </View>
  );
}
